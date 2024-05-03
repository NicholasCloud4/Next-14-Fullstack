"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const NavigationTestPage = () => {
  // Client Side Navigation
  const router = useRouter();
  const pathame = usePathname();
  const searchParams = useSearchParams();

  const q = searchParams.get("q");

  const handleClick = () => {
    console.log("clicked");
    router.push("/");
  };

  return (
    <div>
      <Link href={"/"} prefetch={false}>
        Click here
      </Link>
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  );
};

export default NavigationTestPage;
