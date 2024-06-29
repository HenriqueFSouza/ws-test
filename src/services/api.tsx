import axios from "axios";

export const api = axios.create({
  baseURL: 'https://wswork.com.br/cars.json'
})