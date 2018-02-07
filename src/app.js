import React from 'react';
import { render } from 'react-dom';
import { injectGlobal } from 'styled-components';
import Forum from './components/forum';


// Global style
injectGlobal`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }
`;


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
