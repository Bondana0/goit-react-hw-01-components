import styled from 'styled-components';;

export const FriendItem = styled.li`
  display: flex;
  flex-direction: row;
  height: 70px;
  align-items: center;
  box-shadow: -4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  background-color: #ffffffbd;
  border-radius: 20px;
`;
export const FriendOnline = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 15px;
  margin-left: 15px;
  background-color: ${({ isOnline }) => {
    if (isOnline) {
      return 'green';
    }
    return 'red';
  }};
`;
export const FriendAvatarText = styled.p`
  margin-left: 30px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.75;
`;
export const FriendAvatar = styled.img`
:hover {
  transform: scale(1.2);
}
`
