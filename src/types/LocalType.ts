export type LocalType = {
  dimension: string;
  type: string;
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
      type: string;
      dimension: string;
      residents: string[];
      url: string;
      created: string;
    },
  ];
};
