import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  width: 900px;
`;

export const TableHead = styled.thead`
  width: 100%;
  tr {
    width: 100%;
  }

  th {
    padding: 15px;
    border: 1px solid #ffffff;
    text-align: center;
    color: #ffffff;
    font-family: Quicksand;
    font-weight: 500;
    font-size: 24px;
    background-color: #4ddbd7;
    box-shadow: 28px -2px 91px 26px rgba(23, 23, 23, 0.3) inset;
    -webkit-box-shadow: 28px -2px 91px 26px rgba(23, 23, 23, 0.3) inset;
    -moz-box-shadow: 28px -2px 91px 26px rgba(23, 23, 23, 0.3) inset;
  }
`;

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
