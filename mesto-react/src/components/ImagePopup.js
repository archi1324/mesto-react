export default function ImagePopup(props) {
  console.log(props);
    return (
<div className = {`popup popup_zoom ${props.card ? 'popup_opened' : ''}`}>
        <div className="popup__container-zoom">
          <button type="button" className="popup__exit popup__exit-zoom" onClick={props.onClose}></button>
          <img className="popup__photo-zoom" src ={props.card?.link} alt ='фото карточки'/>
          <h2 className="popup__title-zoom">{props.name}</h2>
        </div>
</div>
)}