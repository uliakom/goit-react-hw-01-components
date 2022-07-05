import PropTypes from 'prop-types';

import {
  Container,
  UserImage,
  UserName,
  UserTag,
  UserLocation,
} from './UserInfo.styled';

const UserInfo = ({ username, tag, location, avatar }) => {
  return (
    <Container>
      <UserImage src={avatar} alt="User avatar" />
      <UserName>{username}</UserName>
      <UserTag>@{tag}</UserTag>
      <UserLocation>{location}</UserLocation>
    </Container>
  );
};

export default UserInfo;

UserInfo.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};
