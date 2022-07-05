import PropTypes from 'prop-types';
import {
  Container,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from './StatsInfo.styled';

const StatsInfo = ({ user }) => {
  return (
    <Container>
      <StatsItem>
        <StatsLabel>Followers</StatsLabel>
        <StatsQuantity>{user.stats.followers}</StatsQuantity>
      </StatsItem>
      <StatsItem>
        <StatsLabel>Views</StatsLabel>
        <StatsQuantity>{user.stats.views}</StatsQuantity>
      </StatsItem>
      <StatsItem>
        <StatsLabel>Likes</StatsLabel>
        <StatsQuantity>{user.stats.likes}</StatsQuantity>
      </StatsItem>
    </Container>
  );
};

export default StatsInfo;

StatsInfo.propTypes = {
  user: PropTypes.shape({
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
