import { NavLink, Route, Routes } from "react-router-dom";
import { styled } from "styled-components";
import "./App.css";
import { MyCard } from "./pages/MyCard";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";
import { MyOrder } from "./pages/MyOrder";

function App() {
  return (
    <>
      <HeaderContainer>
        <h1>iStore</h1>
        <StyledNav>
          <StyledNavLink to="/products">Products</StyledNavLink>
          <StyledNavLink to="/myCart">My Cart</StyledNavLink>
          <StyledNavLink to="/myOrder">My Orders</StyledNavLink>
        </StyledNav>
      </HeaderContainer>
      <MainContainer>
        <Routes>
          <Route path="/" element={<div></div>} />
          <Route path="/myCart" element={<MyCard />} />
          <Route path="/myOrder" element={<MyOrder />} />
          <Route path="/products" element={<Products />} />

          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </MainContainer>
    </>
  );
}

export default App;

const HeaderContainer = styled("header")`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 50rem;
  width: 100%;
  height: 90px;
  background-color: #2f80cf;
  & h1 {
    color: white;
    font-weight: 500;
  }
`;

const MainContainer = styled("main")`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const StyledNav = styled("nav")`
  display: flex;
  gap: 3rem;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  font-size: 1.6rem;
  font-weight: 500;
  text-decoration: none;
  &.active {
    color: #383030;
  }
`;
