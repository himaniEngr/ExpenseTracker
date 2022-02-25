import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 22px;
  font-size: 18px;
  width: 100%;
  gap: 10px;
  font-weight: bold;
  & input {
    padding: 10px 12px;
    border-radius: 12px;
    background: #e6e8e9;
    border: 1px solid #e6e8e9;
    outline: none;
  }
`;
const Cell = styled.div`
  display: flex;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 2px;
  align-items: center;
  font-weight: normal;
  justify-content: space-between;
  width: 75%;
  border-right: 4px solid
    ${(props) => {
      return props.type === "INCOME" ? "green" : "red";
    }};
`;
/*
border-right: 4px solid
    ${(props) => {
      return props.type === "INCOME" ? "green" : "red";
    }};
 return props.isExpense ? "green" : "red";
*/
const TransactionCell = (props) => {
  return (
    <Cell type={props.payload.type}>
      <span>{props.payload.desc}</span>
      <span>${props.payload.amount}</span>
    </Cell>
  );
};
const TransactionComponent = (props) => {
  return (
    <Container>
      Transactions
      <input placeholder="search" />
      {props.transactions.length
        ? props.transactions.map((payload) => {
            return <TransactionCell payload={payload} />;
          })
        : ""}
    </Container>
  );
};
export default TransactionComponent;
