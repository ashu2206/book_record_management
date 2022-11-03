const express = require("express");

const app = express();

const PORT = 8081;

app.use(express.json);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is up and running",
  });
});
// app.get("*", (req, res) => {
//     res.status(200).json({
//       message: "this route is does not exist",
//     });
//   });
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
