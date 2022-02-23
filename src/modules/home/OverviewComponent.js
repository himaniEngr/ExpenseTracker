import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: montserrat;
  margin: 10px;
  width: 100%;
`;
const BalanceBox = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;
const AddTransaction = styled.button`
  background: black;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
`;
const AddTransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e8e9;
  gap: 10px;
  padding: 15px 20px;
  margin: 10px 20px;
`;
const AddTransactionView = () => {
  return (
    <AddTransactionContainer>
      <input placeholder="amount" />
      <input placeholder="description" />
    </AddTransactionContainer>
  );
};
const OverviewComponent = (props) => {
  const [isAddTxnVisible, toggleAddTxn] = useState(true);
  return (
    <Container>
      <BalanceBox>
        Balance: $10000
        <AddTransaction>{isAddTxnVisible ? "CANCEL" : "ADD"}</AddTransaction>
      </BalanceBox>
      {isAddTxnVisible && <AddTransactionView />}
    </Container>
  );
};
export default OverviewComponent;
