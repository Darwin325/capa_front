import { axiosInstance as axios } from "@/config/axios"

export const getSeries = async ({ search = "" }: { search?: string }) => {
  try {
    const response = await axios.get(`/series?search=${search}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const createSerie = async (serie: {
  title: string
  channel: string
  gender: string
  week_day: string
  show_time: string
}) => {
  try {
    const response = await axios.post("/series", serie)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
