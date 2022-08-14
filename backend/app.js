const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');

const { PORT, DATABASE_URL } = require('./src/config');
const cors = require('./src/middlewares/cors');
const { requestLogger, errorLogger } = require('./src/middlewares/logger');
const { router } = require('./src/routes');
const { handleError } = require('./src/errors');

const app = express();

app.use(express.json());
app.use(requestLogger);
app.use(cors);
app.use(router);
app.use(errorLogger);
app.use(errors());
app.use(handleError);

const main = () => {
  mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
  });

  app.listen(PORT);
};

main();
