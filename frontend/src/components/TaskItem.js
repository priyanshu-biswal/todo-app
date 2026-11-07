import React from 'react';

const TaskItem = ({ task, onUpdateStatus, onDeleteTask }) => {
  return (
    <div className={`task-card ${task.status === 'completed' ? 'completed' : ''}`}>
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <div className="task-actions">
        <select
          value={task.status}
          onChange={(e) => onUpdateStatus(task._id, e.target.value)}
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button className="delete-btn" onClick={() => onDeleteTask(task._id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;