const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;

app.use(cors());

app.listen(port, () => console.log(`Server running on port ${port}`));

app.get("/api/companies", (req, res) => {
  let data = require("./companies.json");
  res.send(JSON.stringify(data));
});
