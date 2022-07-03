import PropTypes from 'prop-types';
import {
  FriendsList,
  FriendsItem,
  FriendsStatus,
  FriendsImage,
  FriendsName,
} from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendsItem key={id}>
            <FriendsStatus>{isOnline ? '🟢' : '🔴'}</FriendsStatus>
            <FriendsImage
              src={avatar}
              alt="User avatar"
              width="48"
            ></FriendsImage>
            <FriendsName>{name}</FriendsName>
          </FriendsItem>
        );
      })}
    </FriendsList>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
