import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MiHead from "@/components/MiHead";
import MiHeader1 from "@/components/MiHeader1";
import Link from "next/link";
import Router, { useRouter } from 'next/router'
const inter = Inter({ subsets: ["latin"] });

export default function _404() {
  return (
    <>
      <MiHead title='MiNutriologo'/>
      <MiHeader1/>
      <div className={styles.container}>
        <div className={styles.container1}>
          <div className={styles.container2}>
            <center>
              <p style={{fontSize:'30px'}}><b>{`404`}</b></p>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}
