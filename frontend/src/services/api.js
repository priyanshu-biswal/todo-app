import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks';

export const fetchTasksAPI = async (searchQuery = '') => {
  const response = await axios.get(`${API_URL}?search=${searchQuery}`);
  return response.data;
};

export const createTaskAPI = async (taskData) => {
  const response = await axios.post(API_URL, taskData);
  return response.data;
};

export const updateTaskAPI = async (id, updatedData) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedData);
  return response.data;
};

export const deleteTaskAPI = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};