export default function Card(props) {

  function handleClick() {
    props.cardClick(props);
  }

  return (
    <div className="card">
      <img src={props.link} alt={props.name} onClick={handleClick} className="card__image" />
      <div className="card__info">
        <h2 className="card__title">{props.name}</h2>
        <div>
          <button type="button" className="card__like" />
          <p className="card__like-counter">{props.likes.length}</p>
        </div>
      </div>
    </div>
  );
}