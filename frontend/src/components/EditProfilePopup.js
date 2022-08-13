import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

export default function EditProfilePopup(props) {
  const { isOpen, onClose } = props;
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const stateUpdaterMap = {
    name: setName,
    description: setDescription,
  };

  function handleChange(event) {
    stateUpdaterMap[event.target.name](event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    props.onUpdateUser({
      name,
      description,
    });
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_property_name"
        value={name ?? ''}
        onChange={handleChange}
        name="name"
        type="text"
        placeholder="Имя"
        required
        minLength="2"
        maxLength="40"
      />
      <span className="popup__error name-input-error"></span>

      <input
        className="popup__input popup__input_property_description"
        value={description ?? ''}
        onChange={handleChange}
        name="description"
        type="text"
        placeholder="О себе"
        required
        minLength="2"
        maxLength="200"
      />
      <span className="popup__error description-input-error"></span>
    </PopupWithForm>
  );
}
