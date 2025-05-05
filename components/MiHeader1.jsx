import Link from 'next/link'
import logo from "../src/logo.png"
import styles from "../styles/Home.module.css"
import Router, { useRouter } from 'next/router'

export default function MiHeader1(){
    return(
        <>
            <header className={styles.Header_1}>
                <div className={styles.logoCont_1}>
                    <Link href={'/'} style={{textDecoration:'none', color: 'rgb(240,240,240)'}}>
                        <h2>MiNutriologo</h2>
                    </Link>
                </div>
                <nav className={styles.headerBtnNav}>
                    <button onClick={()=>{Router.push('/')}} className={styles.btn_LinkHeader}>
                        Acceder
                    </button>
                </nav>
            </header>
        </>
    )
}