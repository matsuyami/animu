import axios from 'axios'
import { BASE_URL } from './config'

interface getAnime {
  mal_id: string
}

export const getAnime = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/anime/${id}`)
  const { data } = response.data
  return data
}
