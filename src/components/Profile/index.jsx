import PropTypes from 'prop-types';
import { ProfileContainer } from './Profile.styled';

import UserInfo from './UserInfo';
import StatsInfo from './StatsInfo';

const Profile = ({ user }) => {
  return (
    <ProfileContainer>
      <UserInfo user={user} />
      <StatsInfo user={user} />
    </ProfileContainer>
  );
};

export default Profile;

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};
