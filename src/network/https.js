import axios from 'axios';
const URL = process.env.REACT_APP_URL || '';

async function ajax({ method = 'GET', url, data }) {
  let result, contentType;
  if (data.Photo) {
    contentType = 'multipart/form-data';
  } else {
    contentType = 'application/json';
  }
  const axiosInstance = axios.create({
    baseURL: URL,
    // timeout: 5000, // Set a timeout if needed
    headers: {
      'Content-Type': contentType,
    },
  });

  await axiosInstance({
    url,
    method,
    data,
  })
    .then((response) => {
      const { data } = response;
      result = data;
    })
    .catch((err) => {
      console.log('response error', err);
    });
  return result;
}

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
