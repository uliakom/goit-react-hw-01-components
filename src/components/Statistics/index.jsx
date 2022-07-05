import PropTypes from 'prop-types';
import {
  StatsContainer,
  Title,
  StatsList,
  StatsItem,
  StatsLabel,
  StatsPercentage,
} from './Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Statistics = ({ title = 'Upload stats', stats }) => {
  return (
    <StatsContainer>
      <Title>{title}</Title>
      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem key={id} color={getRandomHexColor()}>
            <StatsLabel>{label}</StatsLabel>
            <StatsPercentage>{percentage}%</StatsPercentage>
          </StatsItem>
        ))}
      </StatsList>
    </StatsContainer>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
