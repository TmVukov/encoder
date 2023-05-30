const routes = require('./routes/routes');
const express = require('express');

const app = express();
const port = 5000;

app.use(express.json());

app.use(routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
