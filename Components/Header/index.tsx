import React, { FC } from "react";
import Image from "next/image";
import styles from "./index.module.scss";

/**
 * @name Header
 * @component
 * @returns {JSX.Element} Header
 */
const Header: FC = () => {
  return (
    <div className={`${styles.header} w-full flex items-center`}>
      <div
        className={`${styles.header__placeholder} flex items-center justify-center`}
      >
        <div className="relative">
          <Image src="/svg/MyTestApp.svg" fill alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
