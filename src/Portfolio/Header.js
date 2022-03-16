import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HiMenuAlt2 } from "react-icons/hi";
import Sidebar from "./Sidebar";
import { animateScroll as scroll, Link } from "react-scroll";

const Header = ({ clr, good }) => {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const windowScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (windowScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Container
      style={{
        backgroundColor: clr,
        borderBottom: good,
      }}
    >
      <Logo
        onClick={() => {
          scroll.scrollToTop();
        }}
      >
        Bukky
      </Logo>
      <Wrapper>
        <Link
          offset={-80}
          activeClass="active"
          to="Home"
          smooth={true}
          duration={1000}
        >
          <span>Home</span>
        </Link>
        <Link
          offset={-80}
          activeClass="active"
          to="About"
          smooth={true}
          duration={1000}
        >
          <span>About</span>
        </Link>
        <Link
          offset={-80}
          activeClass="active"
          to="Projects"
          smooth={true}
          duration={1000}
        >
          <span>Projects</span>
        </Link>
        <Link
          offset={-80}
          activeClass="active"
          to="Contact"
          smooth={true}
          duration={1000}
        >
          <span>Contact</span>
        </Link>
      </Wrapper>
      <ProgressBar>
        <ProgressStyle style={{ width: `${scrollTop}%` }}></ProgressStyle>
      </ProgressBar>
      <Holder>
        <Menu
          onClick={() => {
            document.getElementById("nav").style.width = "200px";
          }}
        ></Menu>
      </Holder>
      <Sidebar myId="nav" />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 85px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  position: fixed;
  z-index: 1000;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: gray;

  @media screen and (max-width: 768px) {
    display: none;
  }

  span {
    margin-right: 60px;
    font-size: 17x;
    cursor: pointer;
    transition: all 350ms;
    font-weight: 400;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  opacity: 0.4;
`;

const ProgressStyle = styled.div`
  transition: 0.2em;
  will-change: width;
  padding: 0.05em 0;
  background-color: #245d8d;
`;

const Logo = styled.div`
  height: 50px;
  width: 100px;
  color: #005494;
  font-weight: bold;
  font-size: 20px;
  object-fit: contain;
  margin: 0 35px;
`;

const Menu = styled(HiMenuAlt2)`
  cursor: pointer;
  font-size: 40px;
  margin-right: 30px;
  transform: scale(1);
  transition: all 350ms;
  font-size: 30px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Holder = styled.div`
  @media screen and (min-width: 770px) {
    display: none;
  }
`;
