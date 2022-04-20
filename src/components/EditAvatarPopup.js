import React from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
    const [avatar, setAvatar] = React.useState('')
    const avatarRef = React.useRef('');

    React.useEffect(() => {
        setAvatar('');
    }, [props.isOpen]);

    function handleAvatar(e) {
        setAvatar(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
    }

    return (
        <PopupWithForm title={'Обновить аватар'} onClose={props.onClose} isOpen={props.isOpen} onSubmit={handleSubmit}
                       name={'avatar'} buttonText={'Сохранить'}>
            <input type="url" placeholder="Ссылка на картинку" value={avatar} ref={avatarRef} onChange={handleAvatar}
                   className="popup__input popup__input_for_avatar" id="avatar" name="avatar-link" required/>
            <span className="popup__input-error avatar-error"></span>
        </PopupWithForm>
    );
};

export default EditAvatarPopup;