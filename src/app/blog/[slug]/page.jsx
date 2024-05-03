import React, { Suspense } from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import { getPost } from "@/lib/data";

//FETCH DATA WITH API

// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   } else {
//     return res.json();
//   }
// };

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  //FETCH DATA WITH API
  // const post = await getData(slug);

  //FETCH WITHOUT API
  const post = await getPost(slug);
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
        <h1 className={styles.title}>{post?.title}</h1>
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
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>05.02.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post?.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
