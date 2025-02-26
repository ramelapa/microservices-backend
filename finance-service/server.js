require("./$node_modules/dotenv/lib/main.js").config();
const express = require("./$node_modules/express/index.js");
const mongoose = require("./config/db.js");
const cors = require("./$node_modules/cors/lib/index.js");

const app = express();
app.use(express.json());
app.use(cors());

// Import Routes
const transactionsRoute = require("./routes/transactions.js");
app.use("/api/transactions", transactionsRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`✅ Finance Service running on port ${PORT}`));
