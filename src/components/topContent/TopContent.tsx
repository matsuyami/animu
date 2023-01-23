import { useQuery } from '@tanstack/react-query'

import { getTopAnime } from "@api/getTopAnime"
import { getTopManga } from '@api/getTopManga'
import { getTopCharacters } from '@api/getTopCharacters'

import { Row } from '@components/row/Row'

export const TopContent = () => {
  const topAnime = useQuery(['top-anime'], getTopAnime)
  const topManga = useQuery(['top-manga'], getTopManga)
  const topCharacters = useQuery(['top-characters'], getTopCharacters)

  return (
    <>
      {!topAnime.isLoading && <Row items={topAnime.data} />}
      {!topManga.isLoading && <Row items={topManga.data} />}
      {!topCharacters.isLoading && <Row items={topCharacters.data} />}
    </>
  )
}
