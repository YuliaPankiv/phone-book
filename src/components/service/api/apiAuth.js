import axios from 'axios';
//enf
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const registerApi = async credentials =>
  await axios.post('/users/signup', credentials);

export const logInsApi = async credentials =>
  await axios.post('/users/login', credentials);

export const logOutApi = async () => await axios.post('/users/logout');

export const refreshUserApi = async () => await axios.get('/users/current');
// export const EditContactsApi = async id => await axios.put(`contacts/${id}`);
