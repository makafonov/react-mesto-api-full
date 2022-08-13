import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');
  React.useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen]);

  const stateUpdaterMap = {
    name: setName,
    link: setLink,
  };

  function handleChange(event) {
    stateUpdaterMap[event.target.name](event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    onAddPlace({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="add-card"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      saveCaption="Создать"
    >
      <input
        className="popup__input popup__input_property_name"
        name="name"
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Название"
        required
        minLength="2"
        maxLength="30"
      />
      <span className="popup__error name-input-error"></span>

      <input
        className="popup__input popup__input_property_link"
        name="link"
        type="url"
        value={link}
        onChange={handleChange}
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__error link-input-error"></span>
    </PopupWithForm>
  );
}
