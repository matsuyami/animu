import axios from 'axios'
import { BASE_URL } from './config'

export const getTopCharacters = async () => {
  const response = await axios.get(`${BASE_URL}/top/characters`)
  const { data } = response.data
  return data
}
