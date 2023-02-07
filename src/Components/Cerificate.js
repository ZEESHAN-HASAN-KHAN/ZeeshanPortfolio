import React from "react";
import { Container } from "@nextui-org/react";
import { Image, Grid, Text } from "@nextui-org/react";
import C1 from "../Certificate/H1.png";
import C2 from "../Certificate/H2.png";
import C3 from "../Certificate/U1.jpg";
import C4 from "../Certificate/U2.jpg";
import C5 from "../Certificate/J1.jpg";
function Cerificate() {
  return (
    <Container
      css={{
        d: "flex",
        fd: "column",
        ai: "center",
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
        Certificates
      </Text>
      <Grid.Container
        gap={1}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Image
          css={{
            marginTop: "10px",
          }}
          width={550}
          height={350}
          src={C1}
          alt="Default Image"
          objectFit="contain"
        />
        <Image
          css={{
            marginTop: "10px",
          }}
          width={550}
          height={350}
          src={C2}
          alt="Default Image"
          objectFit="contain"
        />
        <Image
          css={{
            marginTop: "10px",
          }}
          width={550}
          height={350}
          src={C3}
          alt="Default Image"
          objectFit="contain"
        />
        <Image
          css={{
            marginTop: "10px",
          }}
          width={550}
          height={350}
          src={C4}
          alt="Default Image"
          objectFit="contain"
        />
        <Image
          css={{
            marginTop: "10px",
          }}
          width={550}
          height={350}
          src={C5}
          alt="Default Image"
          objectFit="contain"
        />
      </Grid.Container>
    </Container>
  );
}

export default Cerificate;
