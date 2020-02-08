import { Typography } from "antd";
import React from "react";

const HomePage = () => (
  <div style={{ padding: "20px 50px" }}>
    <Typography.Title level={1}>
      Hello from South Africa{" "}
      <span role="img" aria-label="wave">
        👋
      </span>
    </Typography.Title>
    <p>
      My name is <b>Jonathan Irwin</b>.{" "}
      <span role="img" aria-label="man">
        🙋
      </span>
    </p>
    <p>
      I'm the lead developer at a company called SovTech based in Johannesburg.{" "}
      <span role="img" aria-label="city">
        🏙
      </span>
    </p>
    <p>
      I am moving to Berlin in August 2020 and I think Cosuno looks really cool.{" "}
      <span role="img" aria-label="thumbs-up">
        👍
      </span>
    </p>
    <p>
      Check me out on{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://medium.com/@jonoirwin"
      >
        Medium
      </a>
      ,{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://stackoverflow.com/users/2804256/jonathan-irwin"
      >
        Stack overflow
      </a>
      ,{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/jonoirwinrsa/"
      >
        GitHub
      </a>
      ,{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://linkedin.com/in/jono-irwin/"
      >
        LinkedIn
      </a>{" "}
      and{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/jonoirwin"
      >
        Twitter.
      </a>
    </p>
    <hr />
  </div>
);

export default HomePage;
