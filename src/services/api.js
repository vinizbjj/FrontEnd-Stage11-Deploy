import axios from "axios";

export const api = axios.create({
    baseURL: 'https://stage11rocketnote-api.herokuapp.com'
})