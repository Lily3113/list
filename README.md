# React To-Do Application

This is a single-page To-Do application built with **React** and **TypeScript**. It demonstrates key front-end development concepts, including state management, component-based architecture, and asynchronous data handling with a mock API.

## Features

  * **Create To-Dos**: Add new tasks with a title and an optional description.
  * **Update To-Dos**: Edit existing tasks to change their title or description.
  * **Toggle Completion**: Mark tasks as complete or incomplete, with a visual strike-through effect.
  * **Delete To-Dos**: Remove tasks from the list.
  * **Mock API**: Simulates an asynchronous data persistence layer to show real-world loading, error, and data fetching states.
  * **Responsive Design**: The application is fully responsive and works seamlessly on various devices, from desktops to mobile phones.
  * **Loading & Error States**: Displays clear feedback to the user while data is loading or if an error occurs.

-----

## Technologies Used

  * **React**: A JavaScript library for building user interfaces.
  * **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
  * **HTML5**: Standard markup language for creating web pages.
  * **CSS3**: For styling and responsive design.

-----

## Project Structure

The project follows a standard React application structure:

```
/src
├── api/
│   └── mockApi.ts        # Mock API for data fetching
├── components/
│   ├── AddToDoForm.tsx   # Component for adding new tasks
│   ├── ToDoItem.tsx      # Component for an individual task item
│   └── ToDoList.tsx      # Component to render the list of tasks
├── App.css               # Global styles for the application
├── App.tsx               # Main application component
├── types.ts              # TypeScript interface for the To-Do model
└── main.tsx              # Entry point of the application
```

-----

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You need to have **Node.js** and **npm** (or yarn) installed on your computer.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```
2.  Navigate into the project directory:
    ```bash
    cd your-repo-name
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

To run the application in development mode, use the following command:

```bash
npm run dev
```

This will start the development server, and you can view the application in your browser at `http://localhost:5173` (or another port if specified).

-----
