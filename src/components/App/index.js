import React from 'react';

import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
import GithubCorner from '../github/Corner';
import FloatCart from '../FloatCart';
import SideRack from '../SideRack';

import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

import './style.scss';

const App = () => (
  <React.Fragment>

  <main>
    <nav>
      <SideRack />
    </nav>

    <header>
      <h1>Header Title</h1>
    </header>

    <section>
      <FloatCart />
    </section>

    <section>
        <Filter />
        <Shelf />
    </section>

  </main>
  </React.Fragment>
);

export default App;
