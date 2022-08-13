export default function InfoTooltip(props) {
  const { name, isOpen, onClose, isSuccessResponse } = props;
  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button
          className="button button_type_close"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
        <div
          className={`popup__status ${
            isSuccessResponse
              ? 'popup__status_type_success'
              : 'popup__status_type_reject'
          }`}
        ></div>
        <h2 className="popup__title popup__title_center">
          {isSuccessResponse
            ? 'Вы успешно зарегистрировались!'
            : 'Что-то пошло не так! Попробуйте ещё раз.'}
        </h2>
      </div>
    </div>
  );
}
