import { type ToDo } from '../types';
import ToDoItem from './ToDoItem';

interface ToDoListProps {
  todos: ToDo[];
  onUpdate: (updatedToDo: ToDo) => void;
  onDelete: (id: number) => void;
}

const ToDoList = ({ todos, onUpdate, onDelete }: ToDoListProps) => {
  return (
    <ul>
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default ToDoList;