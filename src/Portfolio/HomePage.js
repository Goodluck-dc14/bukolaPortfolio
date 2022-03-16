import React from "react";
import styled from "styled-components";

const HomePage = () => {
  return (
    <Container id="Home">
      <Left>
        <Wrapper>
          <h2>Hello, my name is</h2>
          <h1>Bukky Gbemi Peter</h1>
          <Title>
            <TitleWrapper>
              <TitleItem>Software engineer</TitleItem>
              <TitleItem>UI/UX designer</TitleItem>
              <TitleItem>Photographer</TitleItem>
              <TitleItem>Creative writer</TitleItem>
              <TitleItem>Content creator</TitleItem>
              <TitleItem>Product manager</TitleItem>
            </TitleWrapper>
          </Title>
          <Description>
            {" "}
            Bukola Gbemi is a tech enthusiast who has a vision to increase
            female participation in tech and help eradicate the menace of
            teenage pregnancies in young girls in her community.
          </Description>
          <Button>Hire Me</Button>
        </Wrapper>
      </Left>
      <Right>
        <Image>
          <BgImage></BgImage>
          <img src="./Image/bu.png" />
        </Image>
      </Right>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  display: flex;
  padding-top: 90px;
  height: 100%;
  min-height: 100vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  flex: 1;
  position: relative;
`;

const Wrapper = styled.div`
  padding: 50px;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    padding: 10px;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
  }
`;

const Title = styled.div`
  height: 50px;
  overflow: hidden;
`;

const TitleWrapper = styled.div`
  height: 100%;
  animation: move 10s ease-in-out infinite alternate;

  h2 {
    font-size: 30px;
    font-weight: 300;
  }
  h1 {
    font-size: 60px;
  }

  @keyframes move {
    25% {
      transform: translateY(-50px);
    }
    50% {
      transform: translateY(-100px);
    }
    75% {
      transform: translateY(-150px);
    }
    100% {
      transform: translateY(-200px);
    }
  }
`;

const TitleItem = styled.div`
  height: 50px;
  font-size: 30px;
  font-weight: bold;
  color: #005494;
  display: flex;
  align-items: center;
`;

const Description = styled.div`
  font-size: 15px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Image = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }
  @media screen and (max-width: 768px) {
    height: 300px;
  }
`;

const BgImage = styled.div`
  clip-path: polygon(100% 0%, 100% 46%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
  background-color: #005494;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #005494;
  width: 100px;
  border-radius: 5px;
  color: white;
  margin-top: 10px;
  padding: 15px 10px;
`;
