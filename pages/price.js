import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function auction() {
    return(
        <input onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')"></input>
    )
}