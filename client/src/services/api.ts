import axios from "axios";


export const api = axios.create({
  baseURL: 'https://ws-test-8ac7e2d8eb7a.herokuapp.com/'
})