import PropTypes from 'prop-types';

import {
  Container,
  UserImage,
  UserName,
  UserTag,
  UserLocation,
} from './UserInfo.styled';

const UserInfo = ({ user }) => {
  return (
    <Container>
      <UserImage src={user.avatar} alt="User avatar" />
      <UserName>{user.username}</UserName>
      <UserTag>@{user.tag}</UserTag>
      <UserLocation>{user.location}</UserLocation>
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
