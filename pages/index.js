import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Script from 'next/script'
import Title from '../components/Title'
export default function Home() {
  return (
    <div className={styles.container}>

<script async strategy="beforeInteractive" type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script async strategy="beforeInteractive" noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
<Nav />
<Title />
    </div>
  )
}
