import styled from "styled-components";

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

const OverviewComponent = (props) => {
  return (
    <Container>
      <BalanceBox>
        Balance: $10000
        <AddTransaction>ADD</AddTransaction>
      </BalanceBox>
    </Container>
  );
};
export default OverviewComponent;
