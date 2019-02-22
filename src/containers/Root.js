import React from 'react';
import { hot } from 'react-hot-loader/root';
import { setConfig } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import 'purecss/build/pure.css';

import { NavBar, ToggleLazyImage, Home, TestComponent } from '../components';

const Root = () => (
  <article className="root">
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/demo1" component={ToggleLazyImage} />
      <Route path="/demo2" component={TestComponent} />
      <Route path="/demo3" component={null} />
      <Route path="/demo4" component={null} />
    </Switch>
  </article>
);

setConfig({
  ignoreSFC: true,
  pureRender: true
});

export default hot(Root);
