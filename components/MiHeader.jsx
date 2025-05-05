import Link from 'next/link'
import logo from "../src/logo.png"
import styles from "../styles/Home.module.css"
import Router, { useRouter } from 'next/router'

export default function MiHeader(){
    return(
        <>
            <header className={styles.Header}>
                <div>Logo</div>
                <nav className={styles.headerBtnNav}>
                        <Link href={'/'} className={styles.headerLink}>Inicio</Link>
                        <Link href={'acceder'} className={styles.headerLink}>Acceder</Link>
                </nav>
            </header>
        </>
    )
}