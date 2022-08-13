import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from './AuthForm';

export default function Register({ onSignUp }) {
  function handleSubmit(email, password) {
    onSignUp(email, password);
  }

  return (
    <AuthForm
      name="register"
      title="Регистрация"
      submitCaption="Зарегистрироваться"
      handleSubmit={handleSubmit}
    >
      <Link to="/sign-in" className="auth__link">
        Уже зарегистрированы? Войти
      </Link>
    </AuthForm>
  );
}
