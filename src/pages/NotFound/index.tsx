import { memo } from 'react';

import { Link } from 'react-router-dom';

import lostImage from 'assets/404rick.png';

const NotFound: React.FC = () => (
  <>
    <h1> You're lost in the multiverse</h1>
    <Link to="/">
      <img src={lostImage} alt="404" />
    </Link>
  </>
);

export default memo(NotFound);
