import React from 'react';
import Posts from './posts';
import styled from 'styled-components';
// import Pagination from './pagination';

const Wrapper = styled.div`
  padding: 2%;
`;

class Forum extends React.Component {
  render() {
    return (
      <Wrapper>
        <h1>MAQE Forums</h1>
        <h2>Subtitle</h2>
        <h3>Posts</h3>
        <Posts />
      </Wrapper>
    );
  }
}

export default Forum;
