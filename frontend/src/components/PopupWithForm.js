export default function PopupWithForm(props) {
  const { title, name, children, isOpen, saveCaption, onClose, onSubmit } =
    props;

  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button
          className="button button_type_close"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={name} onSubmit={onSubmit}>
          {children}
          <button className="button button_type_save" type="submit">
            {saveCaption || 'Сохранить'}
          </button>
        </form>
      </div>
    </div>
  );
}
