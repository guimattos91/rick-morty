import { memo } from 'react';

import { Card } from 'react-bootstrap';

import { LocalType } from 'types/LocalType';

interface ILocalTypeProps {
  local: LocalType;
}

const EpisodeCard: React.FC<ILocalTypeProps> = ({ local }) => {
  return (
    <div key={local.id} className="p-4">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{local.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {local.type}
          </Card.Subtitle>
          <Card.Text>{local.dimension}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default memo(EpisodeCard);
