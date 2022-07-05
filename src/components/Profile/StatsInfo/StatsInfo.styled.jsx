import styled from '@emotion/styled';

export const Container = styled.ul`
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
