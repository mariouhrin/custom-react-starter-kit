import React, { Suspense, lazy, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { setConfig } from 'react-hot-loader';

import NavBar from '../components/NavBar';

import 'purecss/build/pure.css';

const Image = lazy(() => import('./../components/Image'));

const Root = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <article className="root">
      <NavBar />
      <button type="button" onClick={() => setToggle(!toggle)}>
        Show Image
      </button>
      <h1>This is React starter with 16.7 version, webpack 4+ and babel 7+</h1>
      {toggle && (
        <Suspense fallback={<div>loading...</div>}>
          <Image />
        </Suspense>
      )}
    </article>
  );
};

setConfig({
  ignoreSFC: true,
  pureRender: true
});

export default hot(Root);
