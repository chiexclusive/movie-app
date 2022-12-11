import { createEntityAdapter } from "@reduxjs/toolkit";
import { Movie } from "../utils/types";

/**
 * @adapter
 * @name userAdapter
 */
export const movieAdapter = createEntityAdapter({
  selectId: (model: any) => model.imdbID,
  sortComparer: (a: Movie, b: Movie) =>
    (b.Year as unknown as string).localeCompare(a.Year as unknown as string),
});
