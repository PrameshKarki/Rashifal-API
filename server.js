// *Import require modules
const express = require("express");
require("dotenv").config();

const errorHandler = require("./middlewares/errorHandler");

// *Instantiate express app
const app = express();

app.use(express.json());

// *import routes
const routes = require("./routes/routes");

app.use("/api", routes);


// *Default error handling middleware
app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on ${process.env.PORT || 5000}`);
});
