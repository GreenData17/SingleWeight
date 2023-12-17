console.log("Server starting...");
const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;

app.use("/static", express.static(path.resolve(__dirname, "app", "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "app", "index.html"));
});

app.listen(PORT, () => console.log("Server started!"));