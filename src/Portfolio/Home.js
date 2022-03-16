import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Container id="Home">
      <Wrapper>
        <TextHolder>
          <h1>Web Development</h1>
          <span>Responsive . Interactive . Dynamic.</span>
          <div>I build amazing user experience for your business</div>
        </TextHolder>
        <ImageHolder>
          <img src="./Image/show5.png" />
        </ImageHolder>
      </Wrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  height: 500px;
  background: #ececec;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

const TextHolder = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 40px;

  h1 {
    font-size: 4vw;
    font-weight: normal;
    color: #005494;
  }
  span {
    font-size: 2vw;
    font-weight: normal;
  }
  div {
    font-size: 1.5vw;
    font-weight: normal;
    font-family: arial;
  }
  @media screen and (max-width: 345px) {
    display: none;
  }
`;

const ImageHolder = styled.div`
  display: flex;
  img {
    margin-top: 50px;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
