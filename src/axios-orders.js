import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-reactjs-4ea9d.firebaseio.com/'
});
export default instance;
