import { type ToDo } from '../types';

let mockData: ToDo[] = [
  { id: 1, title: 'Learn React', description: 'Master React hooks and state management.', completed: false },
  { id: 2, title: 'Build a To-Do App', description: 'Complete the competency task.', completed: true },
  { id: 3, title: 'Write tests', description: 'Add unit and integration tests for the app.', completed: false },
];

const API_DELAY = 1000;

export const fetchToDos = (): Promise<ToDo[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, API_DELAY);
  });
};

export const addToDo = (newToDo: Omit<ToDo, 'id'>): Promise<ToDo> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const id = Math.max(...mockData.map(todo => todo.id)) + 1;
      const todo = { id, ...newToDo };
      mockData.push(todo);
      resolve(todo);
    }, API_DELAY);
  });
};

export const updateToDo = (updatedToDo: ToDo): Promise<ToDo> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = mockData.findIndex(todo => todo.id === updatedToDo.id);
      if (index > -1) {
        mockData[index] = updatedToDo;
        resolve(updatedToDo);
      } else {
        // Reject the promise if the item is not found, as it's a cleaner error handling pattern.
        reject(new Error("To-Do item not found."));
      }
    }, API_DELAY);
  });
};

export const deleteToDo = (id: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      mockData = mockData.filter(todo => todo.id !== id);
      resolve();
    }, API_DELAY);
  });
};