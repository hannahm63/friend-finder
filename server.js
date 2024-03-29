const express = require("express");
const htmlRoutes = require("./app/routing/htmlRoutes");
const apiRoutes = require("./app/routing/apiRoutes");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, function () {
    console.log(`Server listening on http://localhost:${PORT}/survey`);
})