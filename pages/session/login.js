import { useState } from "react";
import styles from "@/styles/Home.module.css";
import MiHead from "@/components/MiHead";
import MiHeader2 from "@/components/MiHeader2";
import Link from "next/link";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import Swal from "sweetalert2";
import {schemaLogIn} from "@/schemas/logIn";

export default function LogIn() {
  const [id, setId] = useState("");
  const [contrasena, setContrasena] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schemaLogIn)
  })

  const onSubmit = (data) => {
    console.log('Sesión: ',data.id, data.password)
  }

  return (
    <>
      <MiHead title="MiNutriologo" />
      <MiHeader2/>
      <div className={styles.container} >
        <div className={styles.container3}>
          <center>
            <h1 style={{color:'var(--dark-blue)'}}>MiNutriologo</h1>
            <p style={{fontSize: "25px", color:'var(--dark-blue)'}}>Inicia Sesión</p>
            <form className={styles.form_Login} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.toHover_Login}>
                <label className={`${styles.label_Login} ${id !== "" ? styles.label_Login_filled : ""}`}>
                  <b>{`CURP o Cédula`}</b>
                </label>
                <input className={styles.input_Login} value={id} {...register('id')} onChange={(e) => setId(e.target.value)}/>
                <p className={styles.errors}>{errors.id?.message}­</p>
              </div>
              <div className={styles.toHover_Login}>
                <label className={`${styles.label_Login} ${contrasena !== "" ? styles.label_Login_filled : ""}`}>
                  <b>Contraseña</b>
                </label>
                <input type="password" className={styles.input_Login} value={contrasena} {...register('password')} onChange={(e) => setContrasena(e.target.value)}/>
                <p className={styles.errors}>{errors.password?.message}­</p>
              </div>
              <div>
                <button className={styles.btn_LogIndex} style={{border:'1px solid var(--dark-blue)'}} type='submit'> 
                  <span className={styles.btn_LogIndex_spanL}>{`>`}</span>
                  <b className={styles.btn_LogIndex_spanC}>{`Inicia Sesión`}</b>
                  <span className={styles.btn_LogIndex_spanR}>{`<`}</span>
                </button>
              </div>
              <p style={{color:'rgb(55,55,55)'}}>{`¿No tienes cuenta? `}<Link href={'signup'} style={{marginTop:'25px', textDecoration:'none', color:'var(--dark-blue)'}}>{`Registrate`}</Link></p>
            </form>
          </center>
        </div>
      </div>
    </>
  );
}
