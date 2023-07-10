import styled from 'styled-components';;

export const TransactionUser = styled.table`
  border-collapse: collapse;
  width: 100%;
  background: white;
  padding: 20px 0 20px 0;
  box-shadow: -4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  border: 2px solid white;
`;
export const TransactionUserHead = styled.thead`
  background-color: #004aff3b;
  height: 50px;
`;
export const TransactionsUserTb = styled.tbody`
  text-align: center;
  height: 30px;
  background-color: #dddddd99;
  :nth-of-type(2n) {
    background-color: #88888870;
  }
  :hover {
    color: blue;
  }
`;
export const TransactionUserTd = styled.td`
  border: 2px solid white;
`;
