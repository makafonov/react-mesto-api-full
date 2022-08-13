import React from 'react';

function AuthForm({
  name: formName,
  title,
  submitCaption,
  handleSubmit,
  children,
}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const stateUpdaterMap = {
    email: setEmail,
    password: setPassword,
  };

  function handleChange(event) {
    const { name, value } = event.target;
    stateUpdaterMap[name](value);
  }

  function baseHandleSubmit(event) {
    event.preventDefault();
    handleSubmit(email, password);
  }

  return (
    <form className="auth" name={formName} onSubmit={baseHandleSubmit}>
      <h1 className="title auth__title">{title}</h1>
      <input
        className="input auth__input"
        type="email"
        placeholder="Email"
        required
        name="email"
        value={email}
        onChange={handleChange}
      />
      <span className="popup__error email-input-error"></span>
      <input
        className="input auth__input"
        type="password"
        placeholder="Пароль"
        required
        name="password"
        value={password}
        onChange={handleChange}
      />
      <span className="popup__error password-input-error"></span>
      <button className="button button_type_save auth__submit" type="submit">
        {submitCaption}
      </button>
      {children}
    </form>
  );
}

export default AuthForm;
