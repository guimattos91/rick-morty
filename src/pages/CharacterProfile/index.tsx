import { memo, useCallback, useEffect, useState } from 'react';

import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { CharactersType } from 'types/CharacterType';

const CharacterProfile: React.FC = () => {
  const [character, setCharacters] = useState<CharactersType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const fetchCharacter = useCallback(async () => {
    setIsLoading(true);

    const { results, info } = await fetch(
      `https://rickandmortyapi.com/api/characters/${id}`,
    ).then((r) => r.json());

    setIsLoading(false);
    setCharacters(results);
  }, [id]);

  useEffect(() => {
    fetchCharacter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <h1>{character?.name ?? 'Loading...'}</h1>
      <Row className="row-cols-4 justify-content-center">
        {isLoading && (
          <div className="text-center">
            <Spinner animation="border" variant="success" />
          </div>
        )}
        {!isLoading && character && (
          <div>
            <img src={character.image} alt={character.name} />
          </div>
        )}
      </Row>
    </Container>
  );
};

export default memo(CharacterProfile);
