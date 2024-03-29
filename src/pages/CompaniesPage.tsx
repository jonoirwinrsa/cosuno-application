import { Card, Input, List, Typography } from "antd";
import React, { useState } from "react";
import { COMPANIES_ENDPOINT } from "../constants";
import { useFetch } from "../hooks/useFetch";

type Company = {
  name: string;
  city: string;
  logo: string;
  description: string;
};

const CompaniesPage: React.FC = () => {
  const [filterText, setFilterText] = useState("");

  return (
    <div style={{ padding: "20px 50px" }}>
      <h1>Companies</h1>
      <Input
        type="text"
        placeholder="Filter companies by name, description or city"
        value={filterText}
        onChange={e => setFilterText(e.target.value.toLocaleLowerCase())}
      />
      <hr />
      <CompaniesList filterText={filterText} />
    </div>
  );
};

const CompaniesList: React.FC<{ filterText: string }> = ({ filterText }) => {
  const { data, error, isLoading } = useFetch(COMPANIES_ENDPOINT);

  if (error) {
    return <div>An error has occurred</div>;
  }

  if (isLoading) {
    return <div>Loading</div>;
  }

  const filteredItems = data.filter(
    (item: Company) =>
      item.description.toLocaleLowerCase().includes(filterText) ||
      item.name.toLocaleLowerCase().includes(filterText) ||
      item.city.toLocaleLowerCase().includes(filterText)
  );

  const itemsToDisplay = filterText ? filteredItems : data;

  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3
      }}
      dataSource={itemsToDisplay}
      renderItem={({ name, city, logo, description }: Company) => (
        <List.Item data-testid="company-card">
          <Card
            style={{ minHeight: 520 }}
            cover={<img alt={name} src={logo} style={{ minHeight: 300 }} />}
          >
            <Card.Meta
              title={
                <>
                  <div data-testid="company-name">{name}</div>
                  <Typography.Text data-testid="company-city">
                    {city}
                  </Typography.Text>
                </>
              }
              description={description}
            />
          </Card>
        </List.Item>
      )}
    />
  );
};

export default CompaniesPage;
