import express from "express";

const app = express();
const port = 5000 || process.env.PORT;

app.listen(port, () => {
  console.log(`listening to the port: ${port}`);
});
