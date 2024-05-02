import React from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
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
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src={
              "https://images.pexels.com/photos/19086280/pexels-photo-19086280/free-photo-of-tower-of-st-stephens-cathedral-in-vienna.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            alt=""
            className={styles.avatar}
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Name Name</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>05.02.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
