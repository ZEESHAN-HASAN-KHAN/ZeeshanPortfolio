import React from "react";
import { Container, Grid } from "@nextui-org/react";
import { Card5 } from "./Card5";
import { Card4 } from "./Card4";
import { Card3 } from "./Card3";
import { Text } from "@nextui-org/react";
export default function Projects() {
  return (
    <>
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
          Projects
        </Text>

        <Grid.Container
          gap={2}
          justify="center"
          css={{
            d: "flex",
            fd: "row",
            jc: "space-around",
          }}
        >
          <Card4 />
          <Card5 />
          <Card3 />
        </Grid.Container>
      </Container>
    </>
  );
}
