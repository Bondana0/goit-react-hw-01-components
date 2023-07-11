import PropTypes from 'prop-types';
import {
  FriendItem,
  FriendOnline,
  FriendAvatarText,
  FriendAvatar,
} from './friendItem.styled';

export const FriendItems = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <FriendOnline isOnline={isOnline}></FriendOnline>
      <FriendAvatar src={avatar} alt={name} width="50px" />
      <FriendAvatarText>{name}</FriendAvatarText>
    </FriendItem>
  );
};

FriendItems.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
