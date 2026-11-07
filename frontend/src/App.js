import React, { useState, useEffect } from 'react';
import { fetchTasksAPI, createTaskAPI, updateTaskAPI, deleteTaskAPI } from './services/api';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loadTasks = async (query = '') => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchTasksAPI(query);
      setTasks(data);
    } catch (err) {
      setError('Failed to fetch tasks from backend server.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks(search);
  }, [search]);

  const handleAddTask = async (taskData) => {
    try {
      const newTask = await createTaskAPI(taskData);
      setTasks([newTask, ...tasks]);
    } catch (err) {
      setError('Could not create task.');
    }
  };

  const handleUpdateStatus = async (id, status) => {
    try {
      const updated = await updateTaskAPI(id, { status });
      setTasks(tasks.map((t) => (t._id === id ? updated : t)));
    } catch (err) {
      setError('Could not update status.');
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTaskAPI(id);
      setTasks(tasks.filter((t) => t._id !== id));
    } catch (err) {
      setError('Could not delete task.');
    }
  };

  return (
    <div className="app-container">
      <h1>To-Do List App</h1>

      {error && <div className="error-banner">{error}</div>}

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <TaskForm onAddTask={handleAddTask} />

      {loading ? (
        <p>Loading tasks...</p>
      ) : (
        <div className="task-list">
          {tasks.length === 0 ? (
            <p>No tasks found.</p>
          ) : (
            tasks.map((task) => (
              <TaskItem
                key={task._id}
                task={task}
                onUpdateStatus={handleUpdateStatus}
                onDeleteTask={handleDeleteTask}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default App;