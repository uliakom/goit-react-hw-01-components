import PropTypes from 'prop-types';
import {
  Container,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from './StatsInfo.styled';

const StatsInfo = ({ stats: { followers, views, likes } }) => {
  return (
    <Container>
      <StatsItem>
        <StatsLabel>Followers</StatsLabel>
        <StatsQuantity>{followers}</StatsQuantity>
      </StatsItem>
      <StatsItem>
        <StatsLabel>Views</StatsLabel>
        <StatsQuantity>{views}</StatsQuantity>
      </StatsItem>
      <StatsItem>
        <StatsLabel>Likes</StatsLabel>
        <StatsQuantity>{likes}</StatsQuantity>
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
