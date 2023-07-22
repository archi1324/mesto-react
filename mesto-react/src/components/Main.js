import { useEffect, useState } from 'react';
import api from "../utils/Api";
import Card from "./Card";

export default function Main(props) {
    const [userName, setUserName] = useState();
    const [userDescription, setUserDescription] = useState();
    const [userAvatar, setUserAvatar] = useState();
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getUserInfo()
          .then(res => {
            setUserName(res.name)
            setUserDescription(res.about)
            setUserAvatar(res.avatar)
          })
          .catch(err => console.log(`Error: ${err}`));
      }, []);
    
      useEffect(() => {
        api.getInitialCards()
          .then(res => {
            {setCards(res)}
            })
          .catch(err => console.log(`Error: ${err}`))
      }, []);

    return (
        <main className="main">
        <section className="profile">
          <div className="profile__info">
            <div className="profile__avatar"> 
            <img src={userAvatar} alt="Фото профиля" className ="profile__avatar-icon"/>
            <button className="profile__avatar-button"></button>
            </div> 
            <h1  className="profile__name">{userName}</h1>
            <p className="profile__description">{userDescription}</p>
            <button className="profile__edit-button" type="button"></button>
          </div>
          <button className="profile__add-button" type="button"></button>
        </section>
        <section className="card">
          {cards.map((card) => (
            <Card key={card._id} {...card} onCardClick={props.onCardClick} />
          ))}         
        </section>
        </main>
    );
  }