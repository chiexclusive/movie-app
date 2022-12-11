/**
 * @type Movie
 */
export type Movie = {
  Title: string;
  Year: number;
  imdbID: string;
  Type: string;
  Poster: string;
};

/**
 * @type MovieResult
 */
export type MovieResult = {
  Search: Movie[]
};

