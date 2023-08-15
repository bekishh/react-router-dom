import React from "react";
import { styled } from "styled-components";
import { Button } from "../components/Button";

export const MyCard = () => {
  return (
    <>
      <CardContainer>
        <h3 style={{ padding: "20px" }}>My Card page</h3>
      </CardContainer>
      <Button />
    </>
  );
};

const CardContainer = styled("div")`
  width: 90%;
  height: 120px;
  margin-top: 2rem;
  background-color: white;
`;
