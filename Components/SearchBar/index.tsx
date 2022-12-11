/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import styles from "./index.module.scss";

/**
 * @name SearchBar
 * @component
 * @param {object} props
 * @param {function} props.onChange
 * @returns {JSX.Element} SearchBar
 */
const SearchBar: FC<{ onChange: (arg: string) => void }> = ({ onChange }) => {
  return (
    <div className={`${styles.search} w-full relative`}>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
