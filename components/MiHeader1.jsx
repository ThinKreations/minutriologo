import Link from 'next/link'
import logo from "../src/logo.png"
import styles from "../styles/Home.module.css"
import Router, { useRouter } from 'next/router'

export default function MiHeader2(){
    return(
        <>
            <header className={styles.Header_1}>
                <div className={styles.logoCont_1}>
                    {/*
                    <Link href={'/'} style={{textDecoration:'none', color: 'var(--dark-blue)'}}>
                        <h2>MiNutriologo</h2>
                    </Link>
                    */}
                </div>
                <nav className={styles.headerBtnNav}>
                    <button onClick={()=>{Router.push('/session/login')}} className={styles.btn_LinkHeader}>
                        <b>MiNutriólogo</b>
                    </button>
                    <button onClick={()=>{Router.push('/session/login')}} className={styles.btn_LinkHeader}>
                        Ayuda
                    </button>
                    <button onClick={()=>{Router.push('/session/login')}} className={styles.btn_LinkHeader}>
                        Acceder
                    </button>
                </nav>
            </header>
        </>
    )
}