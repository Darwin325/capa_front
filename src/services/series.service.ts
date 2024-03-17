import { axiosInstance as axios } from "@/config/axios"

export const getSeries = async () => {
  try {
    const response = await axios.get("/series")
    return response.data
  } catch (error) {
    console.error(error)
  }
}
