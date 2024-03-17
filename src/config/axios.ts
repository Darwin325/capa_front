import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

export const axiosInstancePHP = axios.create({
  baseURL: import.meta.env.VITE_API_PHP_URL,
  headers: {
    "Content-Type": "application/json",
  },
})
