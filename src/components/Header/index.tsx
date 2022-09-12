import { memo } from 'react';

import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Logo from 'assets/Logo.png';

const Header: React.FC = () => {
  return (
    <div className="d-flex align-items-center justify-content center">
      <Row>
        <h1>
          <img src={Logo} alt="logo" height="150" width="auto" />
        </h1>
      </Row>
      <Row>
        <section className="d-flex">
          <nav className="d-flex align-items-center">
            <Link to="/" className="text-decoration-none px-3 text-reset">
              Characters
            </Link>
            <Link
              to="/Episodes"
              className="text-decoration-none px-3 text-reset"
            >
              Episodes
            </Link>
            <Link to="/Local" className="text-decoration-none px-3 text-reset">
              Localization
            </Link>
          </nav>
        </section>
      </Row>
    </div>
  );
};

export default memo(Header);
