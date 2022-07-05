import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: #fafbfc;
`;

export const UserImage = styled.img`
  margin-bottom: 10px;
  width: 200px;
  height: 200px;
  border-radius: 70%;
`;

export const UserName = styled.p`
  margin-bottom: 10px;
  text-align: center;
  font-family: Quicksand;
  font-weight: 700;
  font-size: 24px;
`;

export const UserTag = styled.p`
  margin-bottom: 10px;
  text-align: center;
  color: #5e6163;
  font-family: Quicksand;
  font-weight: 500;
  font-size: 18px;
`;

export const UserLocation = styled.p`
  text-align: center;
  color: #5e6163;
  font-family: Quicksand;
  font-weight: 500;
  font-size: 18px;
`;
