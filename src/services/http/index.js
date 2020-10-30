import axios from 'axios';

export const baseRequest = axios.create({
    baseURL: 'https://petros-petrosyan.github.io/'
});


export { getPostsRequest } from './posts';