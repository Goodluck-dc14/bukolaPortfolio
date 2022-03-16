import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container id="About">
      <NameHolder>
        <h1>ABOUT ME</h1>
      </NameHolder>
      <Wrapper>
        <Left>
          <Card></Card>
          <ImgCard>
            <img src="./Image/bukk.jpg" />
          </ImgCard>
        </Left>
        <Right>
          <Bio>
            <h1>My Bio</h1>
          </Bio>
          <span>
            {" "}
            Bukola Gbemi is a tech enthusiast who has a vision to increase
            female participation in tech and help eradicate the menace of
            teenage pregnancies in young girls in her community. She is a
            transformational leader who believes positive and impactful
            development can be achieved when people and organisations live not
            just for themselves.but through a life of service.
          </span>
          <br />
          <span>
            {" "}
            She is the Co-founder CodeLab and team leads of SheCodes; A
            community based software development training program for
            underserved youths and girls in ajegunle community, lagos. She has a
            BA in international studies and diplomacy.
          </span>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default About;

const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  padding-top: 50px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    height: 70%;
    min-height: 90%;
  }
`;

const Bio = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 768px) {
    width: unset;
  }
`;

const NameHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0px 20px;
    margin: unset;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    align-items: center;
  }

  span {
    font-weight: 300;
    font-size: small;
    max-width: 600px;
  }
`;

const Card = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;
  background-color: #ececec;
  width: 60%;
  border-radius: 10px;
  height: 70vh;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ImgCard = styled.div`
  width: 60%;
  height: 70vh;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: 50%;
    width: 50%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
