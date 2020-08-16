import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div className="container mx-auto ">
          <img className="mx-auto" src="/logo-rio.png" alt="PalpiteBox" />
        </div>
      </div>
      <div className="bg-gray-300 p-4 shadow-md text-center">
        <Link href="/about">
          <a className="px-4 hover:underline">About</a>
        </Link>
        <Link href="/contact">
          <a className="px-4 hover:underline">Contact</a>
        </Link>
        <Link href="/search">
          <a className="px-4 hover:underline">Search</a>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Header;
