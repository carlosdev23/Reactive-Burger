import axios from 'axios';

const instance = axios.create({
    baseURL: "https://reactive-burger.firebaseio.com/"
});

export default instance;