import React from "react";
import styled from "styled-components";

const Projects = () => {
  return (
    <Container id="Projects">
      <NameHolder>
        <h1> My Projects </h1>
      </NameHolder>

      <Project>
        <ImageCont>
          <img src="/Image/buk.png" />
          <ImageOverlay>
            <Title>Bukola</Title>
            <Description>Bukola Gbemi is a tech enthusiast.</Description>
          </ImageOverlay>
        </ImageCont>
        <ImageCont>
          <img src="/Image/code.jpg" />
          <ImageOverlay>
            <Title>CodeLab</Title>
            <Description>She is the Co-founder CodeLab.</Description>
          </ImageOverlay>
        </ImageCont>
        <ImageCont>
          <img src="/Image/codel.jpg" />
          <ImageOverlay>
            <Title>CodeLab</Title>
            <Description>She is the Co-founder CodeLab.</Description>
          </ImageOverlay>
        </ImageCont>
        <ImageCont>
          <img src="/Image/pre.jpg" />
          <ImageOverlay>
            <Title>CodeLab</Title>
            <Description>She is the Co-founder CodeLab.</Description>
          </ImageOverlay>
        </ImageCont>
        <ImageCont>
          <img src="/Image/she.jpg" />
          <ImageOverlay>
            <Title>SheCodes</Title>
            <Description>
              She is the Co-founder CodeLab and team leads of SheCodes
            </Description>
          </ImageOverlay>
        </ImageCont>
        <ImageCont>
          <img src="/Image/she.jpg" />
          <ImageOverlay>
            <Title>TechWomen</Title>
            <Description>
              She is the Co-founder CodeLab and team leads of SheCodes
            </Description>
          </ImageOverlay>
        </ImageCont>
      </Project>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const NameHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
`;

const Project = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const ImageCont = styled.div`
  position: relative;
  width: 400px;
  margin: 20px;

  img {
    display: block;
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    width: 80%;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  color: #ffffff;
  font-family: "Quicksand", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.25s;
  cursor: pointer;

  > * {
    transform: translateY(20px);
    transition: transform 0.25s;
  }

  &:hover {
    opacity: 1;
    transform: translateY(0);
  }
  &:hover > * {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Title = styled.div`
  font-size: 2em;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 1.25em;
  margin-top: 0.25em;
`;
