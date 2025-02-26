const express = require("../$node_modules/express/index.js");
const Transaction = require("../models/transaction.js");
const router = express.Router();

// GET all transactions
router.get("/", async (req, res) => {
  const transactions = await Transaction.find();
  res.json(transactions);
});

// POST new transaction
router.post("/", async (req, res) => {
  const transaction = new Transaction(req.body);
  await transaction.save();
  res.json(transaction);
}