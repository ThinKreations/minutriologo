import { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MiHead from "@/components/MiHead";
import MiHeader1 from "@/components/MiHeader1";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function SignUp() {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  return (
    <>
      <MiHead title="MiNutriologo" />
      <MiHeader1/>
      <div className={styles.container} >
        <div className={styles.container3}>
          <center>
            <h1>MiNutriologo</h1>
            <p style={{ fontSize: "25px" }}>Inicia Sesión</p>
            <form className={styles.form_Login}>
              <div className={styles.toHover_Login}>
                <label className={`${styles.label_Login} ${correo !== "" ? styles.label_Login_filled : ""}`}>
                  Correo
                </label>
                <input className={styles.input_Login} type='email' value={correo} onChange={(e) => setCorreo(e.target.value)}/>
              </div>
              <div className={styles.toHover_Login}>
                <label className={`${styles.label_Login} ${contrasena !== "" ? styles.label_Login_filled : ""}`}>
                  Contraseña
                </label>
                <input type="password" className={styles.input_Login} value={contrasena} onChange={(e) => setContrasena(e.target.value)}/>
              </div>
              <div>
                <button className={styles.btn_LogIndex} type='submit'> 
                  <span className={styles.btn_LogIndex_spanL}>{`>`}</span>
                  <b className={styles.btn_LogIndex_spanC}>{`Inicia Sesión`}</b>
                  <span className={styles.btn_LogIndex_spanR}>{`<`}</span>
                </button>
              </div>
              <p style={{color:'rgb(55,55,55)'}}>{`¿Eres nutriólogo? `}<Link href={'signup'} style={{marginTop:'25px', textDecoration:'none', color:'var(--dark-blue)'}}>{`Registrate aquí`}</Link></p>
            </form>
          </center>
        </div>
      </div>
    </>
  );
}
