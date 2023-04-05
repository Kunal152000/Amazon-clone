const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51MsivwSJOPEYFy3X24YSQYzolMwU4d0BV3ZY1w2oyguhVUxTzkyh8egn2GBfZmfvvtCK392PUZ5AV4ULxTVKeCVg00QmRBRpyL"
);

// API

// API config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (req, res) => {
  res.status(200).send("Hello all");
});
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  if (!total) {
    console.error("Missing required parameter: amount");
    res.status(400).send({ error: "Missing required parameter: amount" });
    return;
  }
  console.log("payment req received  for this amount", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // submits of the currency
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// example end point
// http://127.0.0.1:5001/clone-350f1/us-central1/api
