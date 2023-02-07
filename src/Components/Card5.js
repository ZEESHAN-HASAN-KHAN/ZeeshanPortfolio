import { Card, Col, Row, Text } from "@nextui-org/react";
import { SocialIcon } from "react-social-icons";
export const Card5 = () => (
  <Card css={{ w: "600px", h: "300px", mb: "30px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col
        css={{
          opacity: "0.8",
          bgColor: "#F0F8FF",
          width: "fit-content",
        }}
      >
        <Text
          h4
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
          }}
          weight="medium"
        >
          React | Firebase | Styled Components
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="./DisneyPlusClone1.png"
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text
            h4
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold"
          >
            Disney Plus Clone App
          </Text>
        </Col>
        <Col>
          <Row justify="flex-end">
            <SocialIcon
              url="https://github.com/ZEESHAN-HASAN-KHAN/disneyplusclone"
              fgColor="white"
              style={{
                marginRight: "9px",
              }}
            />
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);
