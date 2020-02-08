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
    <Typography.Title level={2}>About this submission</Typography.Title>
    <p>
      Tests run and pass locally. Ideally they should run on the CI but that is
      out of scope for this little project.
    </p>
    <p>
      Not all routes are covered by tests but 100% code coverage was not the
      goal
    </p>
    <p>
      Ant Design none ES bundle was used to make this look good <b>fast</b> but
      I would normally consider the package weight to be an issue in a real life
      project
    </p>
    <p>
      Ant Design doesn't look like Cosuno nor does it use similar patterns to
      the Cosuno stack. A better starter design wise might have been{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://atlaskit.atlassian.com/"
      >
        AtlasKit
      </a>{" "}
      by Atlassian which looks more like Cosuno from the start
    </p>
  </div>
);

export default HomePage;
