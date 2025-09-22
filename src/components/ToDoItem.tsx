import { useState } from 'react';
import { type ToDo } from '../types';

interface ToDoItemProps {
  todo: ToDo;
  onUpdate: (updatedToDo: ToDo) => void;
  onDelete: (id: number) => void;
}

const ToDoItem = ({ todo, onUpdate, onDelete }: ToDoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedDescription, setEditedDescription] = useState(todo.description);

  const handleToggleComplete = () => {
    onUpdate({ ...todo, completed: !todo.completed });
  };

  const handleEdit = () => {
    if (isEditing) {
      if (editedTitle.trim()) {
        onUpdate({ ...todo, title: editedTitle, description: editedDescription });
        setIsEditing(false);
      }
    } else {
      setIsEditing(true);
    }
  };

  return (
    <li className={todo.completed ? 'completed' : ''}>
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggleComplete}
        />
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
          </>
        ) : (
          <>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
          </>
        )}
      </div>
      <div className="button-container">
        <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </li>
  );
};

export default ToDoItem;