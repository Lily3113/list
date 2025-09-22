// src/App.tsx
import { useEffect, useState } from 'react';
import { type ToDo } from './types';
import { fetchToDos, addToDo, updateToDo, deleteToDo } from './api/mockApi';
import ToDoList from './components/ToDoList';
import AddToDoForm from './components/AddToDoForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getToDos = async () => {
      try {
        const fetchedToDos = await fetchToDos();
        setTodos(fetchedToDos);
      } catch {
        setError('Failed to fetch To-Dos. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    getToDos();
  }, []);

  const handleAdd = async (newToDo: Omit<ToDo, 'id'>) => {
    setLoading(true);
    setError(null);
    try {
      const addedToDo = await addToDo(newToDo);
      setTodos(prevTodos => [...prevTodos, addedToDo]);
    } catch {
      setError('Failed to add To-Do.');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (updatedToDo: ToDo) => {
    setLoading(true);
    setError(null);
    try {
      await updateToDo(updatedToDo);
      setTodos(prevTodos => prevTodos.map(todo => (todo.id === updatedToDo.id ? updatedToDo : todo)));
    } catch {
      setError('Failed to update To-Do.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    setLoading(true);
    setError(null);
    try {
      await deleteToDo(id);
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    } catch {
      setError('Failed to delete To-Do.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <AddToDoForm onAdd={handleAdd} />
      {loading && <div className="loading-spinner">Loading...</div>}
      {error && <div className="error-message">{error}</div>}
      {!loading && !error && (
        <ToDoList
          todos={todos}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default App;