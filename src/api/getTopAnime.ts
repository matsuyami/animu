import axios from 'axios'
import { BASE_URL } from './config'

export const getTopAnime = async () => {
  const response = await axios.get(`${BASE_URL}/top/anime`)
  const { data } = response.data
  return data
}
