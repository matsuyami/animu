import axios from 'axios'
import { BASE_URL } from './config'

export const getAnimes = async () => {
  const response = await axios.get(`${BASE_URL}/anime`)
  const { data } = response.data
  return data
}
