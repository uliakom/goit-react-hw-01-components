import Profile from './Profile';
import user from './Profile/user.json'
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
      </Container>
  );
};
