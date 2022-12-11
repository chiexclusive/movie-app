/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import styles from "./index.module.scss";

/**
 * @name SearchBar
 * @component
 * @param {object} props - props
 * @param {Function} props.onChange - onChange callback
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
