const express = require('express');
const PORT = 8000;

const runServer = () => {
    const app = express();
    app.use(express.json());
    app.get('/ping', (req, res) => res.json({ pong: true }));
    app.listen(PORT, err =>
      err
        ? console.error(err)
        : console.info(`Server has been started on ${PORT} port`),
    );
  };
  
  module.exports = runServer;