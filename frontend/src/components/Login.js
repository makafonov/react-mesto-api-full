import React from 'react';
import AuthForm from './AuthForm';

export default function Login({ onSignIn }) {
  function handleSubmit(email, password) {
    if (!email || !password) {
      return;
    }
    onSignIn(email, password);
  }

  return (
    <AuthForm
      name="login"
      title="Вход"
      submitCaption="Войти"
      handleSubmit={handleSubmit}
    />
  );
}
