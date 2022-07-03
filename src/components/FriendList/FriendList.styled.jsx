import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  margin-bottom: 30px;
  width: 400px;
  padding: 30px;
  background-color: #dadfe8;
  box-shadow: 9px 11px 22px 0px rgba(23, 23, 23, 0.43);
  -webkit-box-shadow: 9px 11px 22px 0px rgba(23, 23, 23, 0.43);
  -moz-box-shadow: 9px 11px 22px 0px rgba(23, 23, 23, 0.43);
`;

export const FriendsItem = styled.li`
  width: 350px;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  background-color: #fcfcfc;
  box-shadow: 10px 10px 5px -3px rgba(48, 48, 48, 0.69);
  -webkit-box-shadow: 10px 10px 5px -3px rgba(48, 48, 48, 0.69);
  -moz-box-shadow: 10px 10px 5px -3px rgba(48, 48, 48, 0.69);

  &:hover,
  &:focus {
    transform: scale(1.1);
    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
  }

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const FriendsStatus = styled.span`
  font-size: 20px;
  margin-right: 20px;
`;

export const FriendsImage = styled.img`
  margin-right: 10px;
  border-radius: 30%;
`;

export const FriendsName = styled.p`
  font-family: Quicksand;
  font-weight: 700;
  font-size: 24px;
`;
