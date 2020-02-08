import { fireEvent, render } from "@testing-library/react";
import React from "react";
import FrameworksPage from "./CompaniesPage";

test("filters the list of frameworks by keyword", async () => {
  const { queryAllByText, getAllByText, getByPlaceholderText, getByText } = render(
    <FrameworksPage />
  );

  const filterInput = getByPlaceholderText(/filter items/i);

  // search for react only get react
  fireEvent.change(filterInput, {
    target: { value: "react" }
  });

  const reactItems = getAllByText(/react/i);
  // Header and content should contain "react"
  expect(reactItems).toHaveLength(2);

  // search for angular only get angular
  fireEvent.change(filterInput, {
    target: { value: "angular" }
  });

  const angularItems = getAllByText(/angular/i);

  // Header and content should contain "angular"
  expect(angularItems).toHaveLength(2);

  // search for laravel and get empty state
  fireEvent.change(filterInput, {
    target: { value: "laravel" }
  });

  const laravelItems = queryAllByText(/laravel/i);

  // No content should show "laravel"
  expect(laravelItems).toHaveLength(0);

  // should find empty state text
  const emptyStateText = getByText(/no items to display/i)

  expect(emptyStateText).toBeTruthy();
});
