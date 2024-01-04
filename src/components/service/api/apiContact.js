import axios from 'axios';
//enf
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/contacts';

export const getContactsApi = async () => (await axios.get('/contacts')).data;

export const deleteContactsApi = async id =>
  (await axios.delete(`/contacts/${id}`)).data;

export const addContactsApi = async ({ name, number }) =>
  (await axios.post('/contacts', { name, number })).data;

// export const EditContactsApi = async id => await axios.put(`contacts/${id}`);
