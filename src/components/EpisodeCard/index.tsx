import { memo } from 'react';

import { Card } from 'react-bootstrap';

import { EpisodeType } from 'types/EpisodeType';

interface IEpisodeTypeProps {
  episode: EpisodeType;
}

const EpisodeCard: React.FC<IEpisodeTypeProps> = ({ episode }) => {
  return (
    <div key={episode.id} className="p-4">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{episode.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {episode.air_date}
          </Card.Subtitle>
          <Card.Text>{episode.episode}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default memo(EpisodeCard);
