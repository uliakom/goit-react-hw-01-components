import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import FriendList from 'components/FriendList';
import TransactionHistory from 'components/TransactionHistory';
import user from 'data/user.json';
import data from 'data/data.json';
import transactions from 'data/transactions.json';
import friends from 'data/friends.json';
import { Container, Title } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Title>Social media profile</Title>
      <Profile user={user} />
      <Title>Statistics</Title>
      <Statistics stats={data} />
      <Title>Friends List</Title>
      <FriendList friends={friends} />
      <Title>Transaction history</Title>
      <TransactionHistory items={transactions}></TransactionHistory>
    </Container>
  );
};
