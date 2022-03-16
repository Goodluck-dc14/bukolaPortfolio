import React from "react";
import styled from "styled-components";
import { MdCancel } from "react-icons/md";
import { animateScroll as scroll, Link } from "react-scroll";

const Sidebar = ({ myId }) => {
  return (
    <Container id={myId}>
      {" "}
      <Icons>
        {" "}
        <MdCancel
          onClick={() => {
            document.getElementById(myId).style.width = "0";
          }}
        />
      </Icons>
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
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  height: 200vh;
  width: 0;
  position: fixed;
  right: 0;
  transition: 350ms;
  top: 0;
  box-shadow: 1px 2px 15px 1px rgba(0, 84, 148, 0.16);
  background: rgba(0, 84, 148, 0.95);
`;

const Wrapper = styled.div`
  color: white;
  height: 400px;
  width: 250px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 50px;
  padding: 30px;
  cursor: pointer;
  span {
  }
`;

const Icons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;

  cursor: pointer;
  font-size: 40px;
  position: absolute;
  top: 20px;
  right: 20px;
`;
