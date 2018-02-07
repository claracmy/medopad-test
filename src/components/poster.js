import React from 'react';
import styled from 'styled-components';

const ProfileImage = styled.img`
  width: 100px;
  border-radius: 50px;
`;

const ProfileText = styled.p`
  font-size: 1em;
  color: ${props => props.accent? 'red': 'black'};
`;

class Poster extends React.Component {
  render() {
    const {name, role, avatar_url, place } = this.props.post;
    return(
      <div>
        <ProfileImage src={avatar_url} />
        <ProfileText accent>{name}</ProfileText>
        <ProfileText>{role}</ProfileText>
        <h5><i className="fas fa-map-marker-alt"></i> {place}</h5>
      </div>
    );
  }
}

export default Poster;
