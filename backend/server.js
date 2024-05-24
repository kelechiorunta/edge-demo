// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const writeToEdgeConfig = require('./api/writetoEdgeConfig')

const app = express();
app.use(bodyParser.json());

app.use('/api', writeToEdgeConfig);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
