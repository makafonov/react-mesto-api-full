require('dotenv').config();

const { PORT = 3000, SECRET_KEY = '5up3r-57r0ng-53cr37' } = process.env;

const DATABASE_URL = 'mongodb://localhost:27017/mestodb';
const SALT_LENGTH = 10;
const JWT_EXPIRES_IN = '7d';

const ALLOWED_CORS = [
  'https://onemore.nomoredomains.sbs',
  'http://onemore.nomoredomains.sbs',
  'http://localhost:3000',
];
const DEFAULT_ALLOWED_METHODS = ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'].join();

module.exports = {
  PORT,
  SECRET_KEY,
  DATABASE_URL,
  SALT_LENGTH,
  JWT_EXPIRES_IN,
  ALLOWED_CORS,
  DEFAULT_ALLOWED_METHODS,
};
