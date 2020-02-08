import Avatar from "antd/es/avatar";
import Card from "antd/es/card";
import Input from "antd/es/input";
import List from "antd/es/list";
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
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 4,
          xxl: 4
        }}
        dataSource={itemsToDisplay}
        renderItem={(item, index) => (
          <List.Item>
            <Card
              style={{ height: 600 }}
              cover={
                <img alt={item.name} src={`${item.logo}?image=${index}`} />
              }
            >
              <Card.Meta
                avatar={<Avatar src={item.logo} />}
                title={item.name}
                description={item.description}
              />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default CompaniesPage;
