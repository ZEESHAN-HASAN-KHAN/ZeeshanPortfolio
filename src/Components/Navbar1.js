import React from "react";
import { Navbar, Link, Text } from "@nextui-org/react";
import { AcmeLogo } from "../AcmeLogo";
import { useTheme as useNextTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";
function Navbar1() {
  const { setTheme } = useNextTheme();

  return (
    <>
      <Navbar variant="sticky" activeColor="secondary">
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" />

          <AcmeLogo />
          <Text b color="" hideIn="xs">
            Zeeshan
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          hideIn="xs"
          variant="underline"
          activeColor="secondary"
        >
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
          <Navbar.Link href="/projects">Projects</Navbar.Link>
          <Navbar.Link href="/skills">Skills</Navbar.Link>
          <Navbar.Link href="/experience">Experience</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Switch
            checked={true}
            size="xl"
            iconOff={<SunIcon filled />}
            iconOn={<MoonIcon filled />}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          />
        </Navbar.Content>
        <Navbar.Collapse>
          <Navbar.CollapseItem>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="/"
            >
              Home
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="/about"
            >
              About
            </Link>
          </Navbar.CollapseItem>

          <Navbar.CollapseItem>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="/projects"
            >
              Projects
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="/skills"
            >
              Skills
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="/Certificate"
            >
              Cerificate
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="/experience"
            >
              Experience
            </Link>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navbar1;
