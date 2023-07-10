import PropTypes from 'prop-types';
import {
  ContainerProfile,
  ProfileUserImg,
  ProfileUserName,
  ProfileUserList,
  ProfileUserItem,
  ProfileUserText,
  ProfileUserSpan,
} from './profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ContainerProfile>
      <div>
        <ProfileUserImg src={avatar} alt={username} width="100px" />
        <ProfileUserName>{username}</ProfileUserName>
        <ProfileUserText>@{tag}</ProfileUserText>
        <ProfileUserText>{location}</ProfileUserText>
      </div>
      <ProfileUserList>
        <ProfileUserItem>
          <ProfileUserSpan>Followers</ProfileUserSpan>
          <span>{stats.followers}</span>
        </ProfileUserItem>
        <ProfileUserItem>
          <ProfileUserSpan>Views</ProfileUserSpan>
          <span>{stats.views}</span>
        </ProfileUserItem>
        <ProfileUserItem>
          <ProfileUserSpan>Likes</ProfileUserSpan>
          <span>{stats.likes}</span>
        </ProfileUserItem>
      </ProfileUserList>
    </ContainerProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
