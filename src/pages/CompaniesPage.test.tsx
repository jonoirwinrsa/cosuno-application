import { fireEvent, render } from "@testing-library/react";
import React from "react";
import FrameworksPage from "./CompaniesPage";

describe("Companies Page", () => {
  const setup = () => {
    const utils = render(<FrameworksPage />);
    return { ...utils };
  };

  test("filters the list of companies by 'berlin'", async () => {
    const { findByPlaceholderText, findAllByTestId } = setup();

    const filterInput = await findByPlaceholderText(/filter companies/i);

    // search for berlin and only get berlin
    fireEvent.change(filterInput, {
      target: { value: "berlin" }
    });

    const berlinItems = await findAllByTestId("company-card");
    // Header or content should contain "berlin" - there should be 2 companies
    expect(berlinItems).toHaveLength(2);
  });

  test("filters the list of companies by 'build'", async () => {
    const { findByPlaceholderText, findAllByTestId } = setup();

    const filterInput = await findByPlaceholderText(/filter companies/i);

    // search for build and only get build
    fireEvent.change(filterInput, {
      target: { value: "build" }
    });

    const buildItems = await findAllByTestId("company-card");

    // Header or content should contain "build" - there should be 2 companies
    expect(buildItems).toHaveLength(2);
  });

  test("filters the list of companies by 'plastering'", async () => {
    const { findByPlaceholderText, queryAllByTestId, findByText } = setup();
    const filterInput = await findByPlaceholderText(/filter companies/i);

    // search for plastering and get empty state
    fireEvent.change(filterInput, {
      target: { value: "plastering" }
    });

    const plasteringItems = await queryAllByTestId("company-card");

    // No content should show "plastering"
    expect(plasteringItems).toHaveLength(0);

    // should find empty state text
    const emptyStateText = await findByText(/no data/i);

    expect(emptyStateText).toBeTruthy();
  });
});
