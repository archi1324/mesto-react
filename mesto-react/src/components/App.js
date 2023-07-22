import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupZoom from './PopupZoom.js';
import PopupWithForm from './PopupWithForm.js';


export default function App() {
  // const [isEditProfilePopupOpen, setProfilePopupOpen] = React.useState(false);
  // const [isAddPlacePopupOpen, setPlacePopupOpen] = React.useState(false);
  // const [isEditAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false);
  // const [selectedCard, setSelectedCard] = React.useState(null);

  // function handleEditProfileClick() {

  //   setProfilePopupOpen(true);
  // }

  // function handleAddPlaceClick() {

  //   setPlacePopupOpen(true);
  // }

  // function handleEditAvatarClick() {

  //   setAvatarPopupOpen(true);
  // }
  
  // function closeAllPopups() {
  //   setProfilePopupOpen(false);
  //   setPlacePopupOpen(false);
  //   setAvatarPopupOpen(false);
  //   setSelectedCard(null);
  // }

  // function handleCardClick(card) {
  //   setSelectedCard(card);
  // }


  return (
    <div className="page">
        <Header />
        <Main
            // onEditAvatar={handleEditAvatarClick}
            // onEditProfile={handleEditProfileClick}
            // onAddPlace={handleAddPlaceClick}
            // onCardClick={handleCardClick}
        />
        <Footer />
        {/* <PopupWithForm 
            isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
            title={"Редактировать профиль"} buttonSave={"Сохранить"}
            name={"type_profile"} form={"form_profile"}>
            <input
                className="popup__input popup__input_type_name" required
                type="text" name="name" id="input-name"
                minLength="2" maxLength="40" placeholder="Имя пользователя"/>
            <span className="input-name-error popup__span"></span>
            <input
                className="popup__input popup__input_type_about" required
                type="text" name="about" id="input-about"
                minLength="2" maxLength="200" placeholder="Информация о пользователе"/>
            <span className="input-about-error popup__span"></span>
        </PopupWithForm>
        <PopupWithForm 
            isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}
            title={"Новое место"} buttonSave={"Создать"}
            name={"type_places"} form={"form_places"}>
            <input
                className="popup__input popup__input_type_place" required
                type="text" name="place" id="input-place"
                minLength="2" maxLength="30" placeholder="Название"/>
            <span className="input-place-error popup__span"></span>
            <input
                className="popup__input popup__input_type_src" required
                type="url" name="link" id="input-src"
                placeholder="Ссылка на картинку"/>
            <span className="input-src-error popup__span"></span>
        </PopupWithForm>
        <PopupWithForm 
            isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
            title={"Обновить аватар"} buttonSave={"Обновить"}
            name={"type_avatar"} form={"form_avatar"} container={"avatar"}>
            <input
                className="popup__input popup__input_type_avatar" required
                type="url" name="avatar" id="input-avatar"
                placeholder="Ссылка на картинку"/>
            <span className="input-avatar-error popup__span"></span>
        </PopupWithForm>
        <PopupZoom 
            isOpen={selectedCard} card={selectedCard} 
            onClose={closeAllPopups}/>
        <PopupWithForm 
            onClose={closeAllPopups}
            title={"Вы уверены?"} buttonSave={"Да!"}
            name={"type_delete"} container={"delete"}>
        </PopupWithForm> */}
    </div>
  );
}
