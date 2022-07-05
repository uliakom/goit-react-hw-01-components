import styled from '@emotion/styled';

export const TableBody = styled.tbody`
  width: 100%;
  tr:nth-child(2n) {
    background: rgb(34, 193, 195);
    background: linear-gradient(
      0deg,
      rgba(34, 193, 195, 0.2861519607843137) 15%,
      rgba(255, 255, 255, 0.5270483193277311) 100%
    );
  }

  td {
    padding: 15px;
    text-align: center;
    font-family: Quicksand;
    font-weight: 300;
    font-size: 16px;
  }
`;
