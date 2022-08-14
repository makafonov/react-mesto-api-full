const express = require('express');
const { Joi, celebrate } = require('celebrate');

const { router: userRoutes } = require('./user');
const { router: cardRoutes } = require('./card');
const NotFoundError = require('../errors/not-found-err');
const userController = require('../controllers/user');
const auth = require('../middlewares/auth');
const { validateUrl } = require('../validators');

const router = express.Router();

router.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

router.post(
  '/signin',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }),
  }),
  userController.login,
);
router.post(
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

router.use(auth);
router.use('/users', userRoutes);
router.use('/cards', cardRoutes);
router.use((req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = { router };
