const express = require("express");
const app = express();
// This is your test secret API key.
const stripe = require("stripe")('sk_test_51NSqh2CExa2kOJRbVOwCviUkz6et0j2UslSsRWSrU7mQBHdlFybjQ2IzqXFGOGVgVdKKgZJKARtMgWqenkWv8BOC00fxt3bTXf');

app.use(express.static("public"));
app.use(express.json());

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 100,
    currency: "eur",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));