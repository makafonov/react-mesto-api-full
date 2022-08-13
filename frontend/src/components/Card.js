import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Card(props) {
  const { card, onCardClick, onCardLike, onCardDelete } = props;
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((userId) => userId === currentUser._id);
  const cardLikeButtonClassName = `button button_type_like ${
    isLiked && 'button_type_like-active'
  }`;

  return (
    <li className="gallery__item">
      <img
        className="gallery__image"
        src={card.link}
        alt={card.name}
        onClick={() => onCardClick(card)}
      />
      <div className="gallery__caption">
        <h2 className="gallery__title">{card.name}</h2>
        <div className="gallery__like">
          <button
            className={cardLikeButtonClassName}
            onClick={() => onCardLike(card)}
            type="button"
            aria-label="Мне нравится"
          ></button>
          <p className="gallery__like-counter">{card.likes.length}</p>
        </div>
      </div>
      {isOwn && (
        <button
          className="button button_type_trash"
          onClick={() => onCardDelete(card)}
          type="button"
          aria-label="Удалить"
        ></button>
      )}
    </li>
  );
}
