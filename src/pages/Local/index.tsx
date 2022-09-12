import { memo, useCallback, useEffect, useState } from 'react';

import { Container, Row, Col, Spinner, Pagination } from 'react-bootstrap';

import Header from 'components/Header';
import LocalCard from 'components/LocalCard';

import { LocalType } from 'types/LocalType';

interface ILocalTypeProps {
  name: string | undefined;
  image: string | undefined;
  id: number | null | undefined;
  local: LocalType;
}

const Local: React.FC<ILocalTypeProps> = () => {
  const [locals, setLocals] = useState<ILocalTypeProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchCharacters = useCallback(async (page: number) => {
    const { results, info } = await fetch(
      `https://rickandmortyapi.com/api/location?page=${page}`,
    ).then((r) => r.json());

    setIsLoading(false);
    setLocals(results);
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
        <Row className="row-cols-4 justify-content-center">
          {isLoading && (
            <div className="text-center">
              <Spinner animation="border" variant="success" />
            </div>
          )}
          {!isLoading &&
            locals.map((local) => (
              <Col key={local.id}>
                <LocalCard local={local} />
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

export default memo(Local);
