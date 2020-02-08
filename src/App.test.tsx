import { fireEvent } from "@testing-library/react";
import React from "react";
import App from "./App";
import { renderWithRouter } from "./testUtils";

test("full app rendering/navigating", () => {
  const { container, getAllByText } = renderWithRouter(<App />);

  // we should start on the homepage
  // normally not the best testing practice to use the query selector but in this case we do care that the page has an h1
  expect(container.querySelector("h1").textContent).toBe("Hello from South Africa 👋");

  fireEvent.click(getAllByText(/companies/i)[0]);
  expect(container.querySelector("h1").textContent).toBe("Companies");
});
