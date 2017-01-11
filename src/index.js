import React from 'react';
import ReactDOM from 'react-dom';
import StatefulCount from './StatefulCount'

ReactDOM.render(
  <StatefulCount randomProp="randomPropText" />,
  document.getElementById('root')
);
