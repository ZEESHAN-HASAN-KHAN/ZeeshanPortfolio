import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineCorporateFare } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { Text } from "@nextui-org/react";

export default function Experience() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {" "}
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        Experience
      </Text>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "linear-gradient(45deg,#e975a8, #726cf8)",
            color: "#fff",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  linear-gradient(45deg,#e975a8, #726cf8)",
          }}
          date="01/2022 - present"
          iconStyle={{
            background: "linear-gradient(45deg,#e975a8, #726cf8)",
            color: "#fff",
          }}
          icon={<MdOutlineCorporateFare />}
        >
          <h3 className="vertical-timeline-element-title">
            Upcoming Software Developer @CGI
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Banglore,Karnataka
          </h4>
          <p>Software Developer </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "linear-gradient(45deg,#e975a8, #726cf8)",
            color: "#fff",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  linear-gradient(45deg,#e975a8, #726cf8)",
          }}
          date="2021-2022"
          iconStyle={{
            background: "linear-gradient(45deg,#e975a8, #726cf8)",
            color: "#fff",
          }}
          icon={<MdOutlineCorporateFare />}
        >
          <h3 className="vertical-timeline-element-title">
            High Radius Corporation
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bhubaneswar,India
          </h4>
          <p>Software Developer Intern</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "linear-gradient(45deg,#e975a8, #726cf8)",
            color: "#fff",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  linear-gradient(45deg,#e975a8, #726cf8)",
          }}
          date="2019 - 2023"
          iconStyle={{
            background: "linear-gradient(45deg,#e975a8, #726cf8)",
            color: "#fff",
          }}
          icon={<FaUniversity />}
        >
          <h3 className="vertical-timeline-element-title">
            Kalinga Institute Of Industrial Technology University
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bhubaneswar, Odissa
          </h4>
          <p>B.Tech:- Information Technology</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "linear-gradient(45deg,#e975a8, #726cf8)",
            color: "#fff",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  linear-gradient(45deg,#e975a8, #726cf8)",
          }}
          date="2017 - 2018"
          iconStyle={{
            background: "linear-gradient(45deg,#e975a8, #726cf8)",
            color: "#fff",
          }}
          icon={<FaSchool></FaSchool>}
        >
          <h3 className="vertical-timeline-element-title">
            Oxford Public School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Ranchi, Jharkhand
          </h4>
          <p>Intermediate</p>
          <p>PCM</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
