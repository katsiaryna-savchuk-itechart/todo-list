const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");
const listRouter = require("./routes/list.routes");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "hello from the other side." });
});

app.use('/api/list', listRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
