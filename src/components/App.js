import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup.js';
import PopupWithForm from './PopupWithForm.js';


export default function App() {
  const [profilePopupOpen, setProfilePopupOpen] = React.useState(false);
  const [addPopupOpen, setPlacePopupOpen] = React.useState(false);
  const [avatarPopupOpen, setAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleEditProfileClick = () => { setProfilePopupOpen(true) }
  const handleAddPlaceClick = () => { setPlacePopupOpen(true) }
  const handleEditAvatarClick = () => { setAvatarPopupOpen(true) }
  const handleCardClick = (card) => {
    setSelectedCard(card)}

    function closeAllPopups() {
      setProfilePopupOpen(false);
      setPlacePopupOpen(false);
      setAvatarPopupOpen(false);
      setSelectedCard(null);
    }
  return (
    <div className="page">
    <div className="page__container">
        <Header />
        <Main 
        editAvatar={handleEditAvatarClick}
        editProfile={handleEditProfileClick}
        addPlace={handleAddPlaceClick}
        cardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm 
            isOpen={profilePopupOpen} onClose={closeAllPopups}
            title={"Редактировать профиль"} buttonSave={"Сохранить"}
            name={"edit"} form={"form popup__form-edit"}>
            <input
                className="popup__input  popup__field" required
                type="text" name="name" id="name__input"
                minLength="2" maxLength="40" placeholder="Имя"/>
                <div className="popup__span-container">
                    <span id="name__input-error" className="popup__input-error"></span>
                </div>
            <input
                className="popup__input  popup__subtitle" required
                type="text" name="about" id="name__input_description"
                minLength="2" maxLength="200" placeholder="Профессия"/>
                <div className ="popup__span-container">
                  <span id="name__input_description-error" className="popup__input-error"></span>
                </div>  
        </PopupWithForm>
        <PopupWithForm 
            isOpen={addPopupOpen} onClose={closeAllPopups}
            title={"Новое место"} buttonSave={"Создать"}
            name={"add"} form={"form popup__form-add"}>
            <input
                className="popup__input popup__field popup__field-add" required
                type="text" name="place" id="name__input_card"
                minLength="2" maxLength="30" placeholder="Название"/>
                <div className="popup__span-container">
                  <span id="name__input_card-error" className="popup__input-error"></span>
                </div>
            <input
                className="popup__input popup__subtitle popup__subtitle-add" required
                type="url" name="link" id="name__input_url"
                placeholder="Ссылка"/>
                <div className="popup__span-container">
                  <span id="name__input_url-error" className="popup__input-error"></span>
                </div>
        </PopupWithForm>
        <PopupWithForm 
            isOpen={avatarPopupOpen} onClose={closeAllPopups}
            title={"Обновить аватар"} buttonSave={"Обновить"}
            name={"avatar"} form={"form popup__form-avatar"} container={"popup_avatar"}>
            <input
                className="popup__input popup__input-avatar" required
                type="url" name="avatar" id="avatar__input_url"
                placeholder="Ссылка на аватар"/>
                <div className="popup__span-container">
                  <span id="name__input_url-error" className="popup__input-error"></span>
                </div>
        </PopupWithForm>
        <ImagePopup 
            isOpen={selectedCard} 
            card={selectedCard} 
            onClose={closeAllPopups}
            />
    </div>
    </div>
  );
}
