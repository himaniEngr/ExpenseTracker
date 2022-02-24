import styled from "styled-components";
import OverviewComponent from "./OverviewComponent";
import TransactionComponent from "./TransactionComponent";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: montserrat;
  margin: 30px 0 10px;
  width: 360px;
`;
const HomeComponent = (props) => {
  const [transactions, updateTransaction] = useState([]);
  const addTransaction = (payload) => {
    const transactionArray = [...transactions, payload];
    updateTransaction(transactionArray);
  };
  return (
    <Container>
      <OverviewComponent addTransaction={addTransaction} />
      <TransactionComponent transactions={transactions} />
    </Container>
  );
};
export default HomeComponent;
