import axios from 'axios';
import config from '../config';

/**
 * helper function which return axios client request
 */
export async function axiosHandler(method, url, data = undefined) {
  const _token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJ1c2VySWQiOiIxMjMifQ.2LImPu5TFtB3wpNaHVJ15ZlbXW03e8b_FCyuFmkhV-4';

  axios.defaults.baseURL = config.backedAPI;
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.common['Authorization'] = _token;

  try {
    const options = {
      method,
      url
    };
    if (data) {
      options.data = data;
    }
    const response = await axios(options);
    return response;
  } catch (e) {
    if (e.response) {
      throw new Error(e.response);
    } else {
      throw new Error(e);
    }
  }
}
