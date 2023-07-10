import PropTypes from 'prop-types';
import {
  StatisticUser,
  StatisticsUserTitle,
  StatisticsUserLists,
  StatisticsUserItem,
  StatisticsUser,
} from './statisticsList.styled';

export const StatisticsList = ({ items, title }) => {
  return (
    <StatisticUser>
      {title && <StatisticsUserTitle>{title}</StatisticsUserTitle>}
      <StatisticsUserLists>
        {items.map(({ label, percentage, id }) => (
          <StatisticsUserItem key={id} percentage={percentage}>
            <StatisticsUser>{label}</StatisticsUser>
            <span>{percentage}%</span>
          </StatisticsUserItem>
        ))}
      </StatisticsUserLists>
    </StatisticUser>
  );
};

StatisticsList.protoType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  title: PropTypes.string,
};
