import { memo, useCallback, useEffect, useState } from 'react';

import { Container, Row, Col, Spinner, Pagination } from 'react-bootstrap';

import CharacterCard from 'components/CharacterCard';
import Header from 'components/Header';

import { CharactersType } from 'types/CharacterType';

interface ICharactersType {
  name: string | undefined;
  image: string | undefined;
  id: number | null | undefined;
  character: CharactersType;
}

const Home: React.FC<ICharactersType> = () => {
  const [characters, setCharacters] = useState<ICharactersType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchCharacters = useCallback(async (page: number) => {
    const { results, info } = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`,
    ).then((r) => r.json());

    setIsLoading(false);
    setCharacters(results);
    setPageNumber(info.pages);
    setCurrentPage(page);
  }, []);

  useEffect(() => {
    fetchCharacters(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePageChange = useCallback(
    (page: number) => {
      fetchCharacters(page);
    },
    [fetchCharacters],
  );

  return (
    <>
      <div className="d-flex justify-content-center">
        <Header />
      </div>
      <Container>
        <Row className="m-4 row-cols-1  row-cols-md-2 row-cols-lg-4 justify-content-center fluid">
          {isLoading && (
            <div className="text-center">
              <Spinner animation="border" variant="success" />
            </div>
          )}
          {!isLoading &&
            characters.map((character) => (
              <Col key={character.id}>
                <CharacterCard character={character} />
              </Col>
            ))}
        </Row>
        {pageNumber > 1 && (
          <Pagination className="flex-wrap mb-5 justify-content-center">
            {Array(pageNumber)
              .fill(null)
              .map((_, index) => (
                <Pagination.Item
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  active={currentPage === index + 1}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
          </Pagination>
        )}
      </Container>
    </>
  );
};

export default memo(Home);
