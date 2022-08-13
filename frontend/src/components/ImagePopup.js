export default function ImagePopup(props) {
  const title = props.card ? props.card.name : '';
  const link = props.card ? props.card.link : '#';

  return (
    <div className={`popup popup_type_${props.name} ${props.card ? 'popup_opened' : ''}`}>
      <div className="preview">
        <button
          className="button button_type_close"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}
        ></button>
        <img className="preview__image" src={link} alt={title} />
        <h2 className="preview__title">{title}</h2>
      </div>
    </div>
  );
}
