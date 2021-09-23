import axios from 'axios';

const api = axios.create({
    baseURL:'https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/'
})


export default api;