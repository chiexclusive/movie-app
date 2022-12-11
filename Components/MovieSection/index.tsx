/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetMoviesQuery } from "../../services/movieService";
import { capitalize } from "lodash";
import { useAppSelector } from "../../redux/hooks";
import Loader from "../Loader";

/**
 * @name MovieSection
 * @component
 * @param {string} type - type
 * @returns {JSX.Element} MovieSection
 */
const MovieSection: FC<{
  type: string;
  search: string;
}> = ({ type, search }) => {
  const { isFetching, data } = useGetMoviesQuery({ type, search });
  return (
    <div className={`${styles.category} w-full relative`}>
      <div className={styles.category__header}>{capitalize(type)}</div>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {isFetching ? (
          <div className="flex">
            <Loader className={`${styles.product} ${styles.loader} mx-2`} />
            <Loader className={`${styles.product} ${styles.loader} mx-2`} />
            <Loader className={`${styles.product} ${styles.loader} mx-2`} />
            <Loader className={`${styles.product} ${styles.loader} mx-2`} />
            <Loader className={`${styles.product} ${styles.loader} mx-2`} />
            <Loader className={`${styles.product} ${styles.loader} mx-2`} />
          </div>
        ) : (
          data &&
          data.Search &&
          data.Search.map((item) => (
            <SwiperSlide key={item.imdbID} className={styles.product}>
              <Image src={item?.Poster as string} fill alt="" />
              <div
                className={`${styles.product__name} cursor-pointer absolute top-0 left-0 w-full h-full text-center text-white flex items-center justify-center`}
              >
                {item?.Title}
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
};

export default MovieSection;
