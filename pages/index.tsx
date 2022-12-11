import { FC, useRef, useState } from "react";
import Header from "../components/Header";
import Jumbotron from "../components/Jumbotron";
import MovieSection from "../components/MovieSection";
import SearchBar from "../components/SearchBar";
import styles from "../styles/Home.module.scss";
import { debounce } from "lodash";

/**
 * @name Home
 * @component
 * @returns {JSX.Element} Home
 */
const Home: FC = () => {
  const [search, setSearch] = useState("");
  const setSearchState = useRef(
    debounce((value: string) => {
      console.log(value);
      setSearch(value);
    }, 300)
  ).current;
  return (
    <div>
      <Header />
      <main>
        <Jumbotron />
      </main>
      <section className={styles.section}>
        <SearchBar onChange={setSearchState} />
        <MovieSection type="movies" search={search} />
        <MovieSection type="series" search={search} />
        <MovieSection type="episode" search={search} />
      </section>
    </div>
  );
};

export default Home;
