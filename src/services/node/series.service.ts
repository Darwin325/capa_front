import { axiosInstance as axios } from "@/config/axios"

export const getSeries = async ({ search = "" }: { search?: string }) => {
  try {
    const response = await axios.get(`/series?search=${search}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
