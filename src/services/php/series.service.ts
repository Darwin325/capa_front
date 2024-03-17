import { axiosInstancePHP as axios } from "@/config/axios"

export const getNextSerie = async () => {
  try {
    const response = await axios.get("/next-serie")
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const suggestedSeries = async () => {
  try {
    const response = await axios.get("/suggested-series")
    return response.data
  } catch (error) {
    console.error(error)
  }
}
