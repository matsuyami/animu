import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Search } from '@components/search/Search'

import styles from '@styles/Home.module.css'
import { TopContent } from '@components/topContent/TopContent'

const queryClient = new QueryClient()

export default function Home() {

  return (
    <QueryClientProvider client={queryClient}>
      <main className={styles.home}>
        <div className={styles.home__hero}>
          <div className={styles.home__header}>
            Welcome to animu
          </div>
          <div className={styles.home__explore}>
            Explore thousands of anime and manga
          </div>
          <Search />
        </div>
        <div className={styles.home__wave}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.home__waveFill}></path>
          </svg>
        </div>
        <TopContent />
      </main >
    </QueryClientProvider>
  )
}
