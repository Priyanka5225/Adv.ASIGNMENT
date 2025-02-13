import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.text}>
        <h1 className={styles.text1}>Grab your favourite fruits today!</h1>
        <br>
        </br>
        <p className={styles.text2}>
                Fresh fruits, healthy life - your daily boost in every bite!
        </p>
        <a href="/fruit">
          <button className={styles.button}>Start Buying</button>
        </a>
      </div>
    </div>
  );
}
