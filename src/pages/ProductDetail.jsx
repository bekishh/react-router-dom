import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { DUMMY_PRODUCTS } from "./Products";
import { styled } from "styled-components";
import { Button } from "../components/Button";

export const ProductDetail = () => {
  const params = useParams();

  const productId = params.productId;

  const currentProduct = DUMMY_PRODUCTS.find(
    (product) => product.id === productId
  );

  if (!currentProduct) {
    return <Navigate to={"/products"} replace />;
  }

  return (
    <DetailContainer>
      <Image src={currentProduct.image} alt={currentProduct.title} />
      <DescriptionContainer>
        <Button/>
        <h1>{currentProduct.title}</h1>
        <p><strong>Price:</strong> ${currentProduct.price}</p>
        <p>{currentProduct.description}</p>
      </DescriptionContainer>
    </DetailContainer>
  );
};

const DetailContainer = styled("div")`
display: flex;
    width: 90%;
    height: 600px;
    background-color: white;
`

const Image = styled("img")`
    width: 480px;
    height: 90%;
    margin-top: 30px;
`

const DescriptionContainer = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-top: 15px;
`