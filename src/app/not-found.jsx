import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <h2>Not Found</h2>
      <p>Sorry, the page does not exist.</p>
      <Link href={"/"}>Return Home</Link>
    </>
  );
};

export default NotFound;
