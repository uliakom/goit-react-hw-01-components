import PropTypes from 'prop-types';
import {
    ProfileContainer,
    UserContainer,
    UserImage,
    UserName,
    UserTag,
    UserLocation,
    StatsContainer,
    StatsItem,
    StatsLabel,
    StatsQuantity
} from './Profile.styled';


const Profile = ({username,tag,location,avatar,stats}) => {
    return (
         <ProfileContainer >
  <UserContainer>
    <UserImage
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <UserName>{username}</UserName>
    <UserTag>@{tag}</UserTag>
    <UserLocation>{location}</UserLocation>
  </UserContainer>

  <StatsContainer>
    <StatsItem>
      <StatsLabel>Followers</StatsLabel>
      <StatsQuantity>{stats.followers}</StatsQuantity>
    </StatsItem>
    <StatsItem>
      <StatsLabel>Views</StatsLabel>
     <StatsQuantity>{stats.views}</StatsQuantity>
    </StatsItem>
    <StatsItem>
      <StatsLabel>Likes</StatsLabel>
      <StatsQuantity>{stats.likes}</StatsQuantity>
    </StatsItem>
  </StatsContainer>
</ProfileContainer>
     );
};


export default Profile;

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    })
};