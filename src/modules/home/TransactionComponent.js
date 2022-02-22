import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: montserrat;
  margin: 30px 0 10px;
`;
const TransactionComponent = (props) => {
  return <Container>Transaction Component</Container>;
};
export default TransactionComponent;
