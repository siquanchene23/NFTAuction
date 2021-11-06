import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function auction() {
  return (
    <div className="flex justify-center">
      <div className="px-4" style={{ maxWidth: '1600px' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {
              <div className="border shadow rounded-xl overflow-hidden">
                <img src="lotus.png" />
                <div className="p-4">
                  <p style={{ height: '64px' }} className="text-2xl font-semibold"></p>
                  <div style={{ height: '70px', overflow: 'hidden' }}>
                    <p className="text-gray-400"></p>
                  </div>
                </div>
                <a
            href="/price"
            className={styles.card}
          >
            Auction
          </a>          
              </div>
          }
        </div>
      </div>
    </div>
  )
}
