import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MiHead from "@/components/MiHead";
import MiHeader1 from "@/components/MiHeader1";
import Link from "next/link";
import Router, { useRouter } from 'next/router'
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <MiHead title='MiNutriologo'/>
      <MiHeader1/>
      <div className={styles.container}>
        <div className={styles.container1}>
          <div className={styles.container2}>
            <center>
              <p style={{fontSize:'30px'}}>{`¡Bienvenido a`} <b>{`MiNutriologo!`}</b></p>
              <p>Accede y conecta con los mejores nutriólogos.</p>
              <button className={styles.btn_LogIndex} onClick={()=>{Router.push('/session/login')}}> 
                <span className={styles.btn_LogIndex_spanL}>{`>`}</span>
                <b className={styles.btn_LogIndex_spanC}>{`Inicia Sesión`}</b>
                <span className={styles.btn_LogIndex_spanR}>{`<`}</span>
              </button>
              <br/>
              <p>{`O explora los nutriólogos `}<Link href={'/'} style={{marginTop:'25px', textDecoration:'none', color: 'white', textShadow:'0px 0px 3px rgb(200,200,200)'}}>{`aquí`}</Link></p>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}
