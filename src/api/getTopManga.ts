import axios from 'axios'
import { BASE_URL } from './config'

export const getTopManga = async () => {
  const response = await axios.get(`${BASE_URL}/top/manga`)
  const { data } = response.data
  return data
}
