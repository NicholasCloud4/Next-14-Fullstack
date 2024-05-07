import Image from "next/image";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>NEXT 14</h1>
        <p className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src={"/brands.png"} alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src={"/hero.gif"} alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
