import { Link } from 'react-router-dom';

export default function Header({ pathName, onSignOut, email }) {
  return (
    <header className="header page__header">
      <div className="logo" />
      <ul className="header__nav">
        {pathName === '/sign-up' && (
          <li>
            <Link to="/sign-in" className="header__link">
              Войти
            </Link>
          </li>
        )}
        {pathName === '/sign-in' && (
          <li>
            <Link to="/sign-up" className="header__link">
              Регистрация
            </Link>
          </li>
        )}
        {pathName === '/' && (
          <>
            <li className="header__link">{email}</li>
            <li>
              <button
                type="button"
                className="header__link header__link_dim"
                onClick={onSignOut}
              >
                Выйти
              </button>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}
