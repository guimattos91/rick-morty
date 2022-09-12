import { memo } from 'react';

type CharactersType = {
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
      status: string;
      species: string;
      type: string;
      gender: string;
      origin: {
        name: string;
        url: string;
      };
      location: {
        name: string;
        url: string;
      };
      image: string;
      episode: string[];
      url: string;
      created: string;
    },
  ];
};

const Location: React.FC<CharactersType> = () => {
  return <h1>Location</h1>;
};

export default memo(Location);
