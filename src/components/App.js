import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup.js';
import PopupWithForm from './PopupWithForm.js';
import AddPlacePopup from './AddPlacePopup.js';
import AvatarPopup from './AvatarPopup.js';
import EditPopup from './EditPopup.js';
import {CurrentUserContexts} from '../contexts/CurrentUserContexts';
import api from '../utils/Api.js'

export default function App() {
  const [profilePopupOpen, setProfilePopupOpen] = React.useState(false);
  const [addPopupOpen, setPlacePopupOpen] = React.useState(false);
  const [avatarPopupOpen, setAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [card, setCard] = React.useState([]);

  const handleEditProfileClick = () => { setProfilePopupOpen(true) }
  const handleAddPlaceClick = () => { setPlacePopupOpen(true) }
  const handleEditAvatarClick = () => { setAvatarPopupOpen(true) }
  const handleCardClick = (card) => {
    setSelectedCard(card)}

    function closeAllPopups() {
      setProfilePopupOpen(false);
      setPlacePopupOpen(false);
      setAvatarPopupOpen(false);
      setSelectedCard(null);}

      React.useEffect(() => {
        api.getUserInfo()
          .then((data) => {setCurrentUser(data)})
          .catch((err) => {console.log(err)})
        }, [])
    
      React.useEffect(() => {
        api.getInitialCards()
          .then((data) => {setCard(data)})
          .catch((err) => {console.log(err)})
      }, []);
    
      function handleCardLike(card) {
        // проверяем есть ли лайк на карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        if (!isLiked) {
          api.likeCard(card._id, !isLiked)
            .then((newCard) => {
              setCard((state) => state.map((c) => (c._id === card._id ? newCard : c)));
            })
            .catch((err) => {console.log(err)});
        } else {
          api.deleteCardLike(card._id, !isLiked)
            .then((newCard) => {
              setCard((state) =>
                state.map((c) => (c._id === card._id ? newCard : c)));
            })
            .catch((err) => {console.log(err)});
        }
      }
      
      function handleCardDelete(card) {
        api.deleteCard(card._id)
          .then(() => {
            setCard(card.filter(c => c._id !== card._id))
          })
          .catch((err) => {console.log(err)})
      }

      function handleUpdateUser(data) {
        api.editUserInfo(data)
          .then((data) => {
            setCurrentUser(data);
            closeAllPopups()
          })
          .catch((err) => {console.error(err)})
      }
    
      function handleUpdateAvatar(data) {
        api.changeAvatar(data)
          .then((res) => {
            setCurrentUser(res);
            closeAllPopups()
          })
          .catch((err) => {console.error(err)})
      }
    
      function handleAddPlaceSubmit(data) {
        api.addNewCard(data)
          .then((newCard) => {
            setCard([newCard, ...card]);
            closeAllPopups()
          })
          .catch(err => {console.error(err)})
      }
    
  return (
    <CurrentUserContexts.Provider value={currentUser}>
    <div className="page">
      <div className="page__container">
        <Header />
        <Main 
        editAvatar={handleEditAvatarClick}
        editProfile={handleEditProfileClick}
        addPlace={handleAddPlaceClick}
        cardClick={handleCardClick}
        CardLike={handleCardLike} 
        CardDelete={handleCardDelete} 
        card={card}
        />
        <Footer />
        <AddPlacePopup isOpen={addPopupOpen} onClose={closeAllPopups} addPlace={handleAddPlaceSubmit}/>
        <EditPopup isOpen={profilePopupOpen} onClose={closeAllPopups} updateUser={handleUpdateUser}/>
        <AvatarPopup isOpen={avatarPopupOpen} onClose={closeAllPopups} updateAvatar={handleUpdateAvatar}/>
        <ImagePopup isOpen={selectedCard} card={selectedCard} onClose={closeAllPopups}/>
    </div>
  </div>
    </CurrentUserContexts.Provider>
);}