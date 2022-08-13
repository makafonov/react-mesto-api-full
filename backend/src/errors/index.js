const BadRequestError = require('./bad-request-err');
const ConflictError = require('./conflict-err');
const ForbiddenError = require('./forbidden-err');
const NotFoundError = require('./not-found-err');
const UnauthorizedError = require('./unauthorized-err');

const handleCardError = (err, next) => {
  if (err.name === 'DocumentNotFoundError') {
    next(new NotFoundError('Карточка не найдена'));
  } else if (err.name === 'ValidationError') {
    next(new BadRequestError(`Некорректные данные карточки: ${err.message}`));
  } else {
    next(err);
  }
};

const handleUserError = (err, next) => {
  if (err.name === 'MongoServerError' && err.code === 11000) {
    next(new ConflictError('Пользователь с указанным email уже существует'));
  } else if (err.name === 'DocumentNotFoundError') {
    next(new NotFoundError('Пользователь не найден'));
  } else if (err.name === 'ValidationError') {
    next(new BadRequestError(`Некорректные данные пользователя: ${err.message}`));
  } else {
    next(err);
  }
};

const handleError = (err, req, res, next) => {
  const { statusCode = 500, message } = err;

  res
    .status(statusCode)
    .send({
      message: statusCode === 500
        ? 'На сервере произошла ошибка'
        : message,
    });
};

module.exports = {
  BadRequestError,
  ForbiddenError,
  NotFoundError,
  UnauthorizedError,
  ConflictError,
  handleCardError,
  handleUserError,
  handleError,
};
