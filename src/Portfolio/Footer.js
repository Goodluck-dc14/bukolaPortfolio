import React from "react";
import { icons } from "react-icons";
import { Fragment } from "react-is";
import styled from "styled-components";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";

let date = new Date().getFullYear();
console.log(date);

const Footer = () => {
  return (
    <Fragment>
      <BottomTab>
        <Tab>
          <span>
            copyright @ {date} ALL rights reserved {""}
          </span>
          <SocialLinks>
            <a
              href="https://www.facebook.com/groups/brighterdayscodelab/"
              target="_blank"
            >
              <FaFacebookSquare />
            </a>
            <a href="http://www.instagram.com/peter_oti_code/" target="_blank">
              <FaInstagram />
            </a>
            <a
              href="https://studio.youtube.com/channel/UCjHVNjp4cfxBfKRbbtUUYAg/videos"
              target="_blank"
            >
              <FaYoutube />
            </a>
          </SocialLinks>
        </Tab>
      </BottomTab>
    </Fragment>
  );
};

export default Footer;

const BottomTab = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  background-color: #1d1e33;
  justify-content: center;
  align-items: center;
  color: white;
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  a {
    color: white;
    padding: 0.6em 1em;
    transition: transform 0.5s;
    will-change: transfrom;
    &: hover {
      background-color: white;
      transform: rotate(12deg);
      color: #005494;
    }
  }
`;

const Tab = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    padding: 1em 0;
  }
`;
