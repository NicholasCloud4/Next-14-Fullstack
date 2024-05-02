import Image from "next/image";
import React from "react";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/18404269/pexels-photo-18404269/free-photo-of-capsules-of-ferris-wheel.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default AboutPage;
