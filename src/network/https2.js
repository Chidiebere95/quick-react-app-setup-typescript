import axios from 'axios';
const URL = process.env.REACT_APP_URL || '';

const ajax = async (params) => {
  const { method, url, data } = params;
  axios({
    method: method,
    url: `${URL}${url}`,
    data: data,
    headers: { 'Content-Type': 'multipart/form-data' },
  })
    .then(function (response) {
      //handle success
      console.log('response http file', response);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Send GET Requests
export const get = async (payload) => await ajax({ ...payload, method: 'GET' });

// Send POST Requests
export const post = async (payload) =>
  await ajax({ ...payload, method: 'POST' });

// Send Delete Requests
export const del = async (payload) =>
  await ajax({ ...payload, method: 'DELETE' });

// Send put Requests
export const put = async (payload) => await ajax({ ...payload, method: 'PUT' });
