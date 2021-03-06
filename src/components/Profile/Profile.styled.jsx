import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  margin-bottom: 40px;
  width: 300px;
  border-radius: 20%;
  box-shadow: 9px 11px 22px 0px rgba(23, 23, 23, 0.43);
  -webkit-box-shadow: 9px 11px 22px 0px rgba(23, 23, 23, 0.43);
  -moz-box-shadow: 9px 11px 22px 0px rgba(23, 23, 23, 0.43);
  &:hover,
  &:focus {
    transform: scale(1.1);
    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
  }
`;

export const StatsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  background-color: #dadfe8;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 3);
  flex-direction: column;
  align-items: center;
  padding: 10px 0px;
  outline: 1px solid #bdbdbd;
`;

export const StatsLabel = styled.span`
  color: #5e6163;
  font-family: Quicksand;
  font-weight: 500;
  font-size: 18px;
`;

export const StatsQuantity = styled.span`
  font-family: Quicksand;
  font-weight: 700;
  font-size: 18px;
`;
