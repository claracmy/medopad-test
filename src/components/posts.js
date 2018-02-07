import React from 'react';
import content from '../../content.json';
import PostContent from './postContent';
import Poster from './poster';
import styled from 'styled-components';

const PostWrapper = styled.div`
  border: 1px solid gainsboro;
  border-radius: 5px;
  margin-bottom: 15px;
  box-shadow: 1px 5px 3px #f0f0f0;
  padding: 1%;
  overflow: auto;
  &:nth-child(odd) {
    background-color: #f0f0f0;
  };
`;

const PostContentWrapper = styled.div`
  width: 77%;
  float: left;
  border-right: 2px solid #f0f0f0;
  min-height: 250px;
  padding: 1%;
`;
const PosterWrapper = styled.div`
  width: 20%;
  float: left;
  text-align: center;
`;

class Posts extends React.Component {
  state = {
    content
  };

  render () {
    return(
      <div>
        {this.state.content.map((post, i) => {
          return(
            <PostWrapper key={i}>
              <PostContentWrapper>
                <PostContent post={post} />
              </PostContentWrapper>
              <PosterWrapper>
                <Poster post={post}/>
              </PosterWrapper>
            </PostWrapper>
          );
        })
        }
      </div>
    );
  }
}

export default Posts;
