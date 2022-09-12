import { memo } from 'react';

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import CharacterProfile from 'pages/CharacterProfile';
import Episodes from 'pages/Episodes';
import Home from 'pages/Home';
// eslint-disable-next-line import/no-unresolved
import Local from 'pages/Local';
import NotFound from 'pages/NotFound';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/characters/:id/:name" element={<CharacterProfile />} />
        <Route path="/Episodes" element={<Episodes />} />
        <Route path="/Local" element={<Local />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  );
};

export default memo(Routes);
