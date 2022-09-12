export type EpisodeType = {
  air_date: string | undefined;
  episode: string | undefined;
  name: string | undefined;
  id: number | null | undefined;
  pages: number;

  info: {
    count: number;
    pages: number;
    next: string;
    prev: null;
  };
  results: [
    {
      id: number;
      name: string;
      air_date: string;
      episode: string;
      characters: string[];
      gender: string;
      url: string;
      created: string;
    },
  ];
};
