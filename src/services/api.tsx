import axios from "axios";

export const api = axios.create({
  baseURL: 'https://wswork.com.br',
  headers: {
    accept: 'application/json',
    'content-Type': 'application/json',
  }
})