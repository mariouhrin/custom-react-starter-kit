import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import Root from './containers/Root';

import './styles/main.scss';

ReactDOM.render(<Root />, document.getElementById('app'));

export default hot(module)(Root);
