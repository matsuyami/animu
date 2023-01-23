import styles from './styles.module.css'

interface JikanApiItem {
  title: string,
  mal_id: string,
  images: {
    jpg: {
      image_url: string,
    }
  }
}

interface Props {
  items: Array<JikanApiItem>
}

export const Row = ({ items }: Props) => {
  return (
    <div className={styles.row}>
      {
        items.map(item => (
          <>
            <div className={styles.row__header}>
              {item.title}
            </div>
            <div className={styles.row__images}>
              <div
                className={styles.row__item}
              >
                <img
                  src={item.images.jpg.image_url}
                  className={styles.row__image}
                />
                <div className={styles.row__overlay} />
              </div>
            </div>
          </>
        ))
      }
    </div>
  )
}
