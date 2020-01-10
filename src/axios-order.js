import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-react-4b25a.firebaseio.com/'
})

export default instance;