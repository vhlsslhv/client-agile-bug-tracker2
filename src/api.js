import axios from "axios";
const baseURL = `${process.env.REACT_APP_SERVER_HOSTNAME}/api`
//const baseURL = "http://localhost:5000/api";

//http://localhost:5000/api/

/* PROJECT ROUTES */
export const getAllProjects = () => {
  return axios.get(`${baseURL}/projects`);
};
export const getAllIssues = () => {
  return axios.get(`${baseURL}/issues`);
};

export const getAllBoards = () => {
  return axios.get(`${baseURL}/boards`);
};

export const addProject = (project) => {
  return axios.post(`${baseURL}/projects`, project, { withCredentials: true });
};
export const getIssue = (issueId) => {
  return axios.get(`${baseURL}/issues/${issueId}`);
};

export const getProject = (projectId) => {
  return axios.get(`${baseURL}/projects/${projectId}`);
};

export const deleteProject = (projectId) => {
  return axios.delete(`${baseURL}/projects/${projectId}`);
};

export const updateProject = (updatedProject) => {
  return axios.put(`${baseURL}/projects/${updatedProject.id}`, updatedProject);
};

export const uploadFile = (uploadData) => {
  return axios.post(`${baseURL}/upload`, uploadData);
};

/* AUTHENTICATION API ROUTES */
export const signup = (user) => {
  return axios.post("http://localhost:5000/api/signup", user);
};

export const login = (user) => {
  return axios.post(`${baseURL}/login`, user, { withCredentials: true });
};

export const loggedIn = () => {
  return axios.get(`${baseURL}/loggedin`, { withCredentials: true });
};

export const logout = () => {
  return axios.post(`${baseURL}/logout`, null, { withCredentials: true });
};