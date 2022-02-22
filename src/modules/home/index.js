import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: montserrat;
  margin: 30px 0 10px;
`;
const HomeComponent = (props) => {
  return <Container>Home Component</Container>;
};
export default HomeComponent;
