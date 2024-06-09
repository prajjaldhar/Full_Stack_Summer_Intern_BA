const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const rootroute = require("./routes/rootroute");
const productroute = require("./routes/productroute");
const userroute = require("./routes/userroute");
const orderroute = require("./routes/orderroute");
const connectDB = require("./config/db");
const app = express();
//express jo hai na wo server handling kar sakti hai
//express ko server ke liye use karna hai
//express ki properties ko humne app mai transfer/ assign kar diya
//jisse hum http protocol ka use kar payenge jisme http methods ka access kar sakenge eg. get post put patch delete

dotenv.config();

connectDB();

const PORT = process.env.PORT || 8000 || 6000;

app.use("/", rootroute);
app.use("/products", productroute);
app.use("/users", userroute);
app.use("/orders", orderroute);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`.bgYellow.white);
});
