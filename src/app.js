import React from 'react';
import { render } from 'react-dom';

import Forum from './components/forum';

class App extends React.Component {

  render() {
    return (
      <Forum />
    );
  }
}

render(
  <App />,
  document.getElementById('app')
);
