import { cleanup } from "@testing-library/react";
import React from "react";
import { renderWithRouter } from "../testUtils";
import Navigation from "./Navigation";

afterEach(cleanup);

// we are already testing navigation in App.test so let's just check this matches our snapshot
test("<Navigation /> should render correctly", () => {
  const { container } = renderWithRouter(<Navigation />);

  expect(container.firstChild).toMatchSnapshot();
});
