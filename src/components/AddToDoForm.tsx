import { useState, type FormEvent } from 'react';
import { type ToDo } from '../types';

interface AddToDoFormProps {
  onAdd: (newToDo: Omit<ToDo, 'id'>) => void;
}

const AddToDoForm = ({ onAdd }: AddToDoFormProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd({ title, description, completed: false });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="To-Do Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description (Optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add To-Do</button>
    </form>
  );
};

export default AddToDoForm;