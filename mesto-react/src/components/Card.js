export default function Card(card){
    function handleClick(){
        card.CardClick(card);
    }
return(
    <div className="card">
        <img src={card.link}  alt={card.name} onClick={handleClick} className="card__image"/>
        <div className ="card__info">
          <h2 className ="card__title">{card.name}</h2>
          <div>
          <button type="button" className="card__like"/>
          <p className="card__like-counter">{card.likes.length}</p>
          </div>
        </div>
      </div>
);
}