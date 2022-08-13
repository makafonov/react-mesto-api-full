import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card';

export default function Main({
  onEditProfile,
  onEditAvatar,
  onAddPlace,
  onCardClick,
  onCardLike,
  onCardDelete,
  cards,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const cardsElements = cards.map((card) => (
    <Card
      key={card._id}
      card={card}
      onCardClick={onCardClick}
      onCardLike={onCardLike}
      onCardDelete={onCardDelete}
    />
  ));

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__avatar"
          onClick={onEditAvatar}
          style={{
            backgroundImage: `url(${currentUser ? currentUser.avatar : '#'})`,
          }}
        ></div>
        <div className="profile__info">
          <h1 className="profile__title">
            {currentUser ? currentUser.name : ''}
          </h1>
          <button
            className="button button_type_edit"
            type="button"
            aria-label="Редактировать"
            onClick={onEditProfile}
          ></button>
          <p className="profile__description">
            {currentUser ? currentUser.about : ''}
          </p>
        </div>
        <button
          className="button button_type_add"
          type="button"
          aria-label="Добавить"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="page__gallery" aria-label="Галлерея">
        <ul className="gallery">{cardsElements}</ul>
      </section>
    </main>
  );
}
