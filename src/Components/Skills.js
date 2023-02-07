import React, { useRef } from "react";
import { Container, Text, Card, Row } from "@nextui-org/react";
import java from "../Skills/java.png";
import html from "../Skills/html.png";
import css from "../Skills/css-3.png";
import js from "../Skills/js.png";
import react from "../Skills/React.png";
import node from "../Skills/node-js.png";
import cplus from "../Skills/c++.png";
import python from "../Skills/python.png";
import mongo from "../Skills/mongo1.png";
import angular from "../Skills/angular.png";
import firebase from "../Skills/firebase.png";
import heroku from "../Skills/heroku1.png";
import mysql from "../Skills/mysql.png";
import netlify from "../Skills/netlify.png";
import github from "../Skills/github1.png";

function Skills() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  return (
    <Container
      css={{
        d: "flex",
        fd: "column",
        ai: "center",
        jc: "center",
      }}
    >
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        Skills & Abilities
      </Text>
      <Card
        css={{
          backgroundColor: "#36454F",
          w: "90%",
        }}
      >
        <Row xs="true" css={{ height: "fit-content" }}>
          <Card
            isHoverable="true"
            css={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "10px",
              padding: "10px",
            }}
          >
            <img
              alt=""
              src={html}
              style={{
                maxWidth: `${windowSize.current[0] <= 400 ? "35px" : "100%"}`,
              }}
            />
            {windowSize.current[0] <= 400 ? <></> : <span>HTMl</span>}
          </Card>
          <Card
            isHoverable="true"
            css={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              margin: "10px",
              padding: "10px",
            }}
          >
            <img
              alt=""
              src={css}
              style={{
                maxWidth: `${windowSize.current[0] <= 400 ? "35px" : "100%"}`,
              }}
            />
            {windowSize.current[0] <= 400 ? <></> : <span>CSS</span>}
          </Card>
          <Card
            isHoverable="true"
            css={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "10px",
              padding: "10px",
            }}
          >
            <img
              alt=""
              src={js}
              style={{
                maxWidth: `${windowSize.current[0] <= 400 ? "35px" : "100%"}`,
              }}
            />
            {windowSize.current[0] <= 400 ? <></> : <span>JavaScript</span>}
          </Card>
          <Card
            isHoverable="true"
            css={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "10px",
              padding: "10px",
            }}
          >
            <img
              alt=""
              src={react}
              style={{
                maxWidth: `${windowSize.current[0] <= 400 ? "35px" : "100%"}`,
              }}
            />
            {windowSize.current[0] <= 400 ? <></> : <span>React</span>}
          </Card>
          <Card
            isHoverable="true"
            css={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "10px",
              padding: "10px",
            }}
          >
            <img
              alt=""
              src={node}
              style={{
                maxWidth: `${windowSize.current[0] <= 400 ? "35px" : "100%"}`,
              }}
            />
            {windowSize.current[0] <= 400 ? <></> : <span>Node</span>}
          </Card>
        </Row>
        {/* <Spacer y={1} /> */}
        <Row>
          <Card
            isHoverable="true"
            css={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "10px",
              padding: "10px",
            }}
          >
            <img
              alt=""
              src={cplus}
              style={{
                maxWidth: `${windowSize.current[0] <= 400 ? "35px" : "100%"}`,
              }}
            />
            {windowSize.current[0] <= 400 ? <></> : <span>C++</span>}
          </Card>
          <Card
            isHoverable="true"
            css={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "10px",
              padding: "10px",
            }}
          >
            <img
              alt=""
              src={java}
              style={{
                maxWidth: `${windowSize.current[0] <= 400 ? "35px" : "100%"}`,
              }}
            />
            {windowSize.current[0] <= 400 ? <></> : <span>Java</span>}
          </Card>
          <Card
            isHoverable="true"
            css={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "10px",
              padding: "10px",
            }}
          >
            <img
              alt=""
              src={python}
              style={{
                maxWidth: `${windowSize.current[0] <= 400 ? "35px" : "100%"}`,
              }}
            />
            {windowSize.current[0] <= 400 ? <></> : <span>Python</span>}
          </Card>
          <Card
            isHoverable="true"
            css={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "10px",
              padding: "10px",
            }}
          >
            <img
              alt=""
              src={mongo}
              style={{
                maxWidth: `${windowSize.current[0] <= 400 ? "35px" : "100%"}`,
              }}
            />
            {windowSize.current[0] <= 400 ? <></> : <span>Mongo</span>}
          </Card>
          <Card
            isHoverable="true"
            css={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "10px",
              padding: "10px",
            }}
          >
            <img
              alt=""
              src={angular}
              style={{
                maxWidth: `${windowSize.current[0] <= 400 ? "35px" : "100%"}`,
              }}
            />
            {windowSize.current[0] <= 400 ? <></> : <span>Angular</span>}
          </Card>
        </Row>
        <Row>
          <Card
            isHoverable="true"
            css={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "10px",
              padding: "10px",
            }}
          >
            <img
              alt=""
              src={firebase}
              style={{
                maxWidth: `${windowSize.current[0] <= 400 ? "35px" : "100%"}`,
              }}
            />
            {windowSize.current[0] <= 400 ? <></> : <span>Firebase</span>}
          </Card>
          <Card
            isHoverable="true"
            css={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "10px",
              padding: "10px",
            }}
          >
            <img
              alt=""
              src={heroku}
              style={{
                maxWidth: `${windowSize.current[0] <= 400 ? "35px" : "100%"}`,
              }}
            />
            {windowSize.current[0] <= 400 ? <></> : <span>Heroku</span>}
          </Card>
          <Card
            isHoverable="true"
            css={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "10px",
              padding: "10px",
            }}
          >
            <img
              alt=""
              src={mysql}
              style={{
                maxWidth: `${windowSize.current[0] <= 400 ? "35px" : "100%"}`,
              }}
            />
            {windowSize.current[0] <= 400 ? <></> : <span>MySql</span>}
          </Card>
          <Card
            isHoverable="true"
            css={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "10px",
              padding: "10px",
            }}
          >
            <img
              alt=""
              src={netlify}
              style={{
                maxWidth: `${windowSize.current[0] <= 400 ? "35px" : "100%"}`,
              }}
            />
            {windowSize.current[0] <= 400 ? <></> : <span>Netlify</span>}
          </Card>
          <Card
            isHoverable="true"
            css={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "10px",
              padding: "10px",
            }}
          >
            <img
              alt=""
              src={github}
              style={{
                maxWidth: `${windowSize.current[0] <= 400 ? "35px" : "100%"}`,
              }}
            />
            {windowSize.current[0] <= 400 ? <></> : <span>Github</span>}
          </Card>
        </Row>
      </Card>
    </Container>
  );
}

export default Skills;
