export default function PopupZoom(props) {
    return (
<div className ={`popup popup_zoom  ${props.card.isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container-zoom">
          <button type="button" className="popup__exit popup__exit-zoom" onClick={props.onClose}></button>
          <img className="popup__photo-zoom" src={props.card.src} alt={props.card.alt}/>
          <h2 className="popup__title-zoom">{props.card.title}</h2>
        </div>
</div>
)}