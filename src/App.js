import styled from "styled-components";
import HomeComponent from "./modules/home";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: montserrat;
  margin: 30px 0 10px;
`;
const Header = styled.span`
  color: black;
  font-size: 25px;
  font-weight: bold;
`;
const App = () => {
  return (
    <div className="App">
      <Container className="App-header">
        <Header>Expense Tracker</Header>
        <HomeComponent />
      </Container>
    </div>
  );
};

export default App;
