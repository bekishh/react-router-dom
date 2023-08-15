import React from 'react'
import { useNavigate } from 'react-router';
import { styled } from 'styled-components';

export const Button = () => {
    const navigate = useNavigate()

    const goBackHandler = () => {
        navigate(-1)
    }
  return (
    <StyledButton onClick={goBackHandler}>Go Back</StyledButton>
  )
}

const StyledButton = styled("button")`
  background-color: #0f7e72;
  color: white;
  font-size: 15px;
  font-weight: 550;
  border: none;
  border-radius: 25px;
  margin-right: 80rem;
  margin-top: 15px;
  width: 6rem;
  height: 2.5rem;
`;
