const express = require('express');
const mongoose = require('mongoose');
const { errors, Joi, celebrate } = require('celebrate');

const { PORT, DATABASE_URL } = require('./src/config');
const userController = require('./src/controllers/user');
const auth = require('./src/middlewares/auth');
const cors = require('./src/middlewares/cors');
const { requestLogger, errorLogger } = require('./src/middlewares/logger');
const { routes } = require('./src/routes');
const { handleError } = require('./src/errors');
const { validateUrl } = require('./src/validators');

const app = express();

app.use(express.json());
app.use(requestLogger);
app.use(cors);

app.post(
  '/signin',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }),
  }),
  userController.login,
);
app.post(
  '/signup',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      name: Joi.string().min(2).max(30),
      about: Joi.string().min(2).max(30),
      avatar: Joi.string().custom(validateUrl),
    }),
  }),
  userController.createUser,
);

app.use(auth);

app.use(routes);
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
