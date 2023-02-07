import React from "react";
import { Card, Container } from "@nextui-org/react";
import { Text } from "@nextui-org/react";
import TypeWriterEffect from "react-typewriter-effect";
import { SocialIcon } from "react-social-icons";
export const About = () => {
  return (
    <>
      <Container
        css={{
          mt: "px",
          d: "flex",
          fd: "row",
          ai: "center",
          jc: "space-around",
        }}
      >
        <Text
          h1
          size={50}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
          }}
          weight="bold"
        >
          Hi There,
          <br></br>
          I'm Zeeshan Hasan Khan
          <h2>
            I Am Into
            <TypeWriterEffect
              textStyle={{
                fontFamily: "Red Hat Display",
                fontWeight: 500,
                // fontSize: "1.5em",
              }}
              startDelay={500}
              cursorColor="#3F3D56"
              multiText={[
                "Frontend Development",
                "Backend Development",
                "Web Designing",
                "Web Development",
                "Android Development",
                "Programming",
              ]}
              multiTextDelay={200}
              typeSpeed={90}
              multiTextLoop={true}
            />
          </h2>
          <SocialIcon
            url="https://github.com/ZEESHAN-HASAN-KHAN"
            fgColor="white"
            style={{
              marginRight: "9px",
            }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/zeeshan-hasan-khan-226ab3192/"
            fgColor="white"
            style={{ marginRight: "9px" }}
          />
          <SocialIcon
            url="https://www.facebook.com/profile.php?id=100090251464082"
            fgColor="white"
            style={{ marginRight: "9px" }}
          />
          <SocialIcon
            url="https://www.instagram.com/iam_zhk/"
            fgColor="white"
            style={{ marginRight: "9px" }}
          />
          <SocialIcon
            url="https://twitter.com/Zeeshan00459422"
            fgColor="white"
            style={{ marginRight: "9px" }}
          />
        </Text>
        <Card css={{ p: "$6", mw: "400px", mt: "10px", bc: "Black" }}>
          <Card.Image
            alt="nextui logo"
            src="https://user-images.githubusercontent.com/63050133/156676671-d5b2e362-97d4-4404-9447-dd71ddfea82f.gif"
            width="100%"
          />
        </Card>
      </Container>
    </>
  );
};
