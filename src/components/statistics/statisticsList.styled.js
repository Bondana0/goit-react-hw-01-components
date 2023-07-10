import styled from 'styled-components';;

export const StatisticUser = styled.section`
  width: 400px;
  margin: 0 auto;
  margin-top: 50px;
  box-shadow: -4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;
export const StatisticsUserTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
  background-color: #ffffffbd;
  padding: 10px 0 10px 0;
`;
export const StatisticsUserLists = styled.ul`
  display: flex;
  justify-content: center;
  border-radius: 0 0 10px 10px;
`;
export const StatisticsUserItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 20%;
  text-align: center;
  height: 50px;
  padding-top: 5px;
  :nth-of-type(1) {
    background-color: #ff0000ab;
  }

  :nth-of-type(2) {
    background-color: #0000ffa1;
  }

  :nth-of-type(3) {
    background-color: #008000ba;
  }

  :nth-of-type(4) {
    background-color: #ffa500ad;
  }

  :nth-of-type(5) {
    background-color: #800080bd;
  }
`;

export const StatisticsUser = styled.span`
font-weight: 700;
`
