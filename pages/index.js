import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MiHead from "@/components/MiHead";
import MiHeader from "@/components/MiHeader";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <MiHead title='MiNutriologo'/>
      <MiHeader/>
      <div className={styles.container}>
        <center>
        <div className={styles.container1}>
          <div className={styles.container2}>
            <div className={styles.left}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a sollicitudin eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque maximus efficitur tortor, et interdum dui mattis non. Vestibulum faucibus pretium urna sed volutpat. Sed lobortis malesuada nisl. Donec volutpat mi tortor, sit amet ullamcorper lectus scelerisque id. Nunc tristique odio ut elit sagittis faucibus. In laoreet neque vel tellus ultrices aliquam. Phasellus sed lacus auctor, dapibus purus eu, pharetra lorem. Maecenas mi mauris, commodo eget fringilla at, cursus sed sapien.
            </div>
            <div className={styles.right}>
            Iniciar Sesión
            <form className={styles.logInForm}>
              <input placeholder="Correo"></input>
              <input placeholder="Contraseña"></input>
              <p>Si no tienes cuenta, haz clic <Link href={'/'}>aquí</Link></p>
            </form>
            </div>
          </div>
        </div>
        </center>
      </div>
    </>
  );
}
