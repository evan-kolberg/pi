const express = require("express");
const app = express();
const port = 8080

app.use(express.static(`${__dirname}/public`));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`, (err) => {
    if (err) {
      console.log(err);
      res.end(err.message);
    }
  });  
});

app.listen(port, () => {
  console.log("Server is running on port", port);
});
