import '../styles/globals.css'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.role}>
      <nav className="border-b p-6">
        <a className={styles.head}>NFT Auction</a>
          <a
            href="/"
            className={styles.card}
          >
            Start
          </a>
          <a
            href="/auction"
            className={styles.card}
          >
            Auction
          </a>     
          <a
            href="/price"
            className={styles.card}
          >
            price
          </a>       
      </nav>
      <Component {...pageProps} />
    </div>
  )
}
export default MyApp
