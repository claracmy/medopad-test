import React from 'react';
import styled from 'styled-components';

const PostImage = styled.img`
  width: 18%;
  display: inline-block;
  margin-right: 2%;
  float: left;
`;

const PostText = styled.div`
  width: 80%;
  display: inline-block;
  float: left;
`;

const PostTitle = styled.h3`
  margin: 0;
`;

const Paragraph = styled.p`
  color: ${props => props.mainParagraph? '#404040': '#DCDCDC'};
  font-size: 0.9em;
`;

class PostContent extends React.Component {
  render() {
    const {title, content, duration, avatar_url} = this.props.post;
    return(
      <div>
        <PostImage src={avatar_url} />
        <PostText>
          <PostTitle>{title}</PostTitle>
          <Paragraph mainParagraph>{content}</Paragraph>
          <Paragraph><i className="far fa-clock"></i> {duration}</Paragraph>
        </PostText>
      </div>
    );
  }
}

export default PostContent;
