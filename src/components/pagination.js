import React from 'react';
import styled from 'styled-components';

const PaginationWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const ListItem = styled.li`
  list-style: none;
  display: inline-block;
  font-size: 0.8em;
  padding: 10px 15px;
  border: none;
  border-radius: 20px;
  font-weight: bold;
  &:hover, &:active {
    cursor: pointer;
    color: white;
    background-color: red;

  }
`;

class Pagination extends React.Component {
  render() {
    return(
      <PaginationWrapper>
        <ListItem>Previous</ListItem>
        <ListItem>1</ListItem>
        <ListItem>2</ListItem>
        <ListItem>3</ListItem>
        <ListItem>4</ListItem>
        <ListItem>5</ListItem>
        <ListItem>6</ListItem>
        <ListItem>7</ListItem>
        <ListItem>8</ListItem>
        <ListItem>Next</ListItem>
      </PaginationWrapper>
    );
  }
}

export default Pagination;
