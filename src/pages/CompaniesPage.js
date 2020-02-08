import { Avatar, Card, Input, List } from "antd";
import React, { useState } from "react";
import { COMPANIES_ENDPOINT } from "../constants";
import { useFetch } from "../hooks/useFetch";

const CompaniesPage = () => {
  const [filterText, setFilterText] = useState("");

  const { data, error, isLoading } = useFetch(COMPANIES_ENDPOINT);

  if (error) {
    return <div>An error has occurred</div>;
  }

  if (!data || isLoading) {
    return <div>Loading</div>;
  }

  const filteredItems = data.filter(
    item =>
      item.description.toLocaleLowerCase().includes(filterText) ||
      item.name.toLocaleLowerCase().includes(filterText)
  );

  const itemsToDisplay = filterText ? filteredItems : data;

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
