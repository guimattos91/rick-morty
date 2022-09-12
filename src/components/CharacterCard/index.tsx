import { memo } from 'react';

import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { CharactersType } from 'types/CharacterType';

interface ICharactersProps {
  character: CharactersType;
}

const CharacterCard: React.FC<ICharactersProps> = ({ character }) => {
  return (
    <div key={character.id} className="p-4">
      <Card style={{ width: '18rem' }}>
        <Link to={`/characters/${character.id}/${character.name}`}>
          <Card.Img variant="top" src={character.image} alt={character.name} />
          <Card.Body>
            <Card.Title>{character.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item className="d-flex">
              <p style={{ fontWeight: 'bold' }}>Species: </p> &nbsp;
              {character.species}
            </ListGroup.Item>
            <ListGroup.Item className="d-flex">
              <p style={{ fontWeight: 'bold' }}>Gender:</p> &nbsp;
              {character.gender}
            </ListGroup.Item>
            <ListGroup.Item className="d-flex">
              <p style={{ fontWeight: 'bold' }}>Status:</p> &nbsp;
              {character.status}
            </ListGroup.Item>
          </ListGroup>
        </Link>
      </Card>
    </div>
  );
};

export default memo(CharacterCard);
