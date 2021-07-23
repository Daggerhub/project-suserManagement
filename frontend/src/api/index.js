import axios from 'axios';

const url = 'http://localhost:5000/api/v1/user';

export const fetchUsers = () => axios.get(url);
export const fetchUser = (id) => axios.get(`${url}/${id}`);
export const createUser = (newUser) => axios.post(url, newUser);
export const updateUser = (id, updatedUser) => axios.put(`${url}/${id}`, updatedUser);
export const deleteUser = (id) => axios.delete(`${url}/${id}`);