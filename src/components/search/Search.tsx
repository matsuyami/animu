import SearchIcon from '@assets/icons/icoSearch.svg'

import styles from './styles.module.css'


export const Search = () => {
  return (
    <form className={styles.search}>
      <div className={styles.search__inputGroup}>
        <picture className={styles.search__picture}>
          <SearchIcon className={styles.search__icon} alt='search-icon' />
        </picture>
        <input className={styles.search__input} type='text' placeholder='Explore anime...' />
        <button className={styles.search__button} type='submit'>
          Search
        </button>
      </div>
    </form>
  )
}
