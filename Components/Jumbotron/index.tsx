/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import styles from "./index.module.scss";

/**
 * @name Jumbotron
 * @component
 * @returns {JSX.Element} Jumbotron
 */
const Jumbotron: FC = () => {
  return (
    <div className={`${styles.jumbo} w-full relative`}>
      <div
        className={`${styles.imageContainer} flex justify-center items-center overflow-hidden`}
      >
        <img src="/images/main__board.png" alt="" />
      </div>
      <div
        className={`${styles.jumbo__text} absolute top-0 w-full h-full flex items-center text-white text-4xl`}
      >
        <h1>Watch something incredible</h1>
      </div>
    </div>
  );
};

export default Jumbotron;
