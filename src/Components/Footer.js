import React from "react";
import { Container, Text } from "@nextui-org/react";
import { AiOutlineLinkedin } from "react-icons/ai";
import {
  AiFillGithub,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <Container
      css={{
        mt: "20px",
        height: "20vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Container
        css={{
          d: "flex",
          ai: "center",
          jc: "center",
        }}
      >
        <Text span>
          Thank you for visiting my personal portfolio website. Connect with me
          over socials. Keep Rising 🚀. Connect with me over live chat!
        </Text>
      </Container>
      <Text p>@Zeeshan | Portfolio</Text>
      <Link
        to={"https://www.facebook.com/profile.php?id=100090251464082"}
        style={{ color: "white", padding: "0", margin: "0" }}
      >
        <AiOutlineFacebook size="2.3rem" />
      </Link>
      <a
        href="https://twitter.com/Zeeshan00459422"
        style={{ color: "white", padding: "0", margin: "0" }}
      >
        <AiFillTwitterSquare size="2.3rem" />
      </a>
      <a
        href="https://www.instagram.com/iam_zhk/"
        style={{ color: "white", padding: "0", margin: "0" }}
      >
        <AiFillInstagram size="2.3rem" />
      </a>
      <a
        href="https://www.linkedin.com/in/zeeshan-hasan-khan-226ab3192/"
        style={{ color: "white", padding: "0", margin: "0" }}
      >
        <AiOutlineLinkedin size="2.3rem" />
      </a>
      <a
        href="https://github.com/ZEESHAN-HASAN-KHAN"
        style={{ color: "white", padding: "0", margin: "0" }}
      >
        <AiFillGithub size="2.3rem" />
      </a>
    </Container>
  );
}

export default Footer;
