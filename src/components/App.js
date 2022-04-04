import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import React from "react";
import ImagePopup from "./ImagePopup";

function App(props) {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(false);

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function handleEditProfileClick () {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick () {
        setIsAddPlacePopupOpen(true);
    }

    function handleEditAvatarClick () {
        setIsEditAvatarPopupOpen(true);
    }
    function closeAllPopups(){
        setIsEditAvatarPopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setSelectedCard(false);
    }

  return (
      <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
        <Footer />
          <PopupWithForm title={'Редактировать профиль'} onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} name={'profile'} buttonText={'Сохранить'}>
          <input type="text" placeholder="Имя" className="popup__input popup__input_for_name" id="name" name="name"
                 minLength="2" maxLength="40" required />
          <span className="popup__input-error name-error"></span>
          <input type="text" placeholder="Описание" className="popup__input popup__input_for_description"
                 id="description"
                 name="description" minLength="2" maxLength="200" required />
          <span className="popup__input-error description-error"></span>
          </PopupWithForm>
          <PopupWithForm title={'Новое место'} onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} name={'photo'} buttonText={'Создать'}>
              <input type="text" placeholder="Название" className="popup__input popup__input_for_place" id="place"
                     name="photoplace" minLength="2" maxLength="30" required />
              <span className="popup__input-error place-error"></span>
              <input type="url" placeholder="Ссылка на картинку"
                     className="popup__input popup__input_for_link" id="link" name="photolink" required />
              <span className="popup__input-error link-error"></span>
          </PopupWithForm>
          <PopupWithForm title={'Вы уверены?'} name={'delete'} buttonText={'Да'}/>
          <PopupWithForm title={'Обновить аватар'} onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} name={'avatar'} buttonText={'Сохранить'}>
              <input type="url" placeholder="Ссылка на картинку"
                     className="popup__input popup__input_for_avatar" id="avatar" name="avatar-link" required />
              <span className="popup__input-error avatar-error"></span>
          </PopupWithForm>
          <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      </div>
  );
}

export default App;
