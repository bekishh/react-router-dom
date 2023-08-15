import React from "react";
import { styled } from "styled-components";
import { Button } from "../components/Button";

export const MyOrder = () => {
  return (
    <>
      <OrderContainer>
        <h3 style={{ padding: "20px" }}>My Order page</h3>
      </OrderContainer>
      <Button />
    </>
  );
};

const OrderContainer = styled("div")`
  width: 90%;
  height: 120px;
  margin-top: 2rem;
  background-color: white;
`;
