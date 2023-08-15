import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { Button } from "../components/Button";

export const DUMMY_PRODUCTS = [
  {
    title: "iPhone 14 Pro",
    price: 1320,
    id: "e1hskhdf",
    image:
      "https://avatars.mds.yandex.net/get-marketpic/7979846/picd03fffbd6ce5b4b827ceaabc27357a27/orig",
    description:
      "Dynamic Island, новый волшебный способ взаимодействия с  iPhone. Чип A16 Bionic - сверхбыстрый и сверхеффективный, обеспечивающий удивительное время автономной работы в течение всего дня. Основная камера 48 МП с усовершенствованным четырехпиксельным сенсором для увеличения разрешения до 4 раз Аварийный сигнал SOS через спутник и обнаружение столкновений - революционные функции, разработанные для спасения жизней.",
  },
  {
    title: "iPhone 13 Pro",
    price: 1120,
    id: "e2bsoesf",
    image:
      "https://cepmarketavm.com/cdn/shop/products/13--_1_360x.png?v=1641491182",
    description:
      "Самая большая модернизация системы камер Pro.A15 Bionic с 5-ядерным GPU - самый быстрый чип в смартфоне. 6,1-дюймовый дисплей Super Retina XDR с функцией ProMotion 120Гц. Дисплей Ceramic Shield прочнее, чем любое стекло смартфона",
  },
  {
    title: "iPhone 12 Pro",
    price: 650,
    id: "e3hfefds",
    image:
      "https://avatars.dzeninfra.ru/get-zen_doc/1337093/pub_6104074af732f72ee166218b_610408a6906df03da932ad96/scale_1200",
    description:
      "Сверхмощный чип A14 Bionic с 4-ядерным GPU. Усовершенствованная система с тремя камерами и записбю Dolby Vision HDR. 6,1-люймовый дисплей Super Retina XDR с True Tone. Дисплей Ceramic Shield прочнее, чем любое стекло смартфона",
  },
];

export const Products = () => {
  const navigate = useNavigate();

  const clickHandler = (phoneId) => {
    navigate(`/products/${phoneId}`, {
      replace: true,
    });
  };

  return (
    <>
      <MainContent>
        {DUMMY_PRODUCTS.map((phone) => {
          return (
            <PhoneBlock key={phone.id} onClick={() => clickHandler(phone.id)}>
              <Image src={phone.image} alt={phone.title} />
              <p>
                <h2>{phone.title}</h2>
                <h2>{`$${phone.price}`}</h2>
              </p>
            </PhoneBlock>
          );
        })}
        <Outlet />
      </MainContent>
      <div style={{marginRight: '3rem'}}>
              <Button/>
      </div>
    </>
  );
};

const MainContent = styled("main")`
  display: flex;
  gap: 13rem;
  justify-content: center;
  margin-top: 40px;
  width: 100%;
  height: 500px;
  display: flex;
  cursor: pointer;
`;

const PhoneBlock = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background-color: white;
  border-radius: 22px;
  width: 335px;
  height: 500px;
`;

const Image = styled("img")`
  width: 100%;
  height: 65%;
`;
