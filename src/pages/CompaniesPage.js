import Input from "antd/es/input";
import React, { useState } from "react";
import items from "./companies.json";

const CompaniesPage = () => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = items.filter(
    item =>
      item.description.toLocaleLowerCase().includes(filterText) ||
      item.name.toLocaleLowerCase().includes(filterText)
  );

  const itemsToDisplay = filterText ? filteredItems : items;

  return (
    <div style={{ padding: "20px 50px" }}>
      <h1>Companies</h1>
      <Input
        type="text"
        placeholder="Filter companies by name or description"
        value={filterText}
        onChange={e => setFilterText(e.target.value.toLocaleLowerCase())}
      />
      <hr />
      {!filteredItems.length && (
        <div>There are no items to display adjust your filter criteria</div>
      )}
      {itemsToDisplay.map(item => (
        <div key={item.name}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CompaniesPage;
