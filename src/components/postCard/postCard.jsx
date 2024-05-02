import React from "react";
import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/19086280/pexels-photo-19086280/free-photo-of-tower-of-st-stephens-cathedral-in-vienna.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>05.02.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <Link href={"/blog/post"} className={styles.link}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
