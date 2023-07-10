import PropTypes from 'prop-types';
import { FriendItems } from '../friendListItem/friendListItem';
import { Friends } from './friendList.styled';

export const FriendList = ({ lists }) => {
  return (
    <Friends>
      {lists.map(({ id, avatar, name, isOnline }) => (
        <FriendItems key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </Friends>
  );
};

FriendList.protoType = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
