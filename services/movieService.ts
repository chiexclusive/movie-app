import { Movie, MovieResult } from "../utils/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/**
 * @name userApi
 */
export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
  tagTypes: ["User"],
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    getMovies: builder.query<
      MovieResult,
      {
        search?: string;
        type: string;
      }
    >({
      query: ({ search, type }) =>
        `?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&s=${type}&search=${
          search || ""
        }`,
    }),
  }),
});

/**
 * Hooks export
 */
export const { useGetMoviesQuery } = movieApi;
