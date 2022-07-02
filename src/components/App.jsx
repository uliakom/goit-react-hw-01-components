import Profile from './Profile';
import Statistics from './Statistics';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import { Container,Title } from './App.styled';


export const App = () => {
  return (
    <Container>
      <Title>Social media profile</Title>
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <Title>Statistics</Title>
      <Statistics stats={data} />
      <Title>Friends List</Title>
      </Container>
  );
};
