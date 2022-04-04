import React from 'react';
import {api} from '../utils/api.js'
import Card from "./Card.js";


function Main (props) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState()
    const [userAvatar, setUserAvatar] = React.useState()
    const [cards, setCards] = React.useState([])

    React.useEffect(() => {
        api.getProfile()
            .then((res) =>{
                setUserName(res.name)
                setUserAvatar(res.avatar)
                setUserDescription(res.about)
                })
            .catch((err) => console.log(err))
    })

    React.useEffect(() => {
        api.getInitialCards()
            .then ((res) => {
               setCards(res)
            })
            .catch((err) => console.log(err))
    }, [])

    return ( <main className="main">

        <section className="profile">

            <div className="profile__container">
                <button className="profile__avatar-button" aria-label="редактировать аватар" type="button" onClick={props.onEditAvatar}>
                    <img alt="аватар" className="profile__avatar" src={userAvatar} />
                </button>
                <div className="profile__info-edit">
                    <div className="profile__info">
                        <h1 className="profile__name">{userName}</h1>
                        <p className="profile__description">{userDescription}</p>
                    </div>
                    <button className="profile__edit" aria-label="редактировать профиль" type="button" onClick={props.onEditProfile}></button>
                </div>
            </div>

            <button aria-label="Добавить фото" type="button" className="profile__photo-button" onClick={props.onAddPlace}></button>
        </section>

        <section className="photo">
            <ul className="photo__grid">
                {cards.map((card) => (
                    <Card key={card._id} card={card} onCardClick={props.onCardClick} />
                ))}
            </ul>
        </section>
    </main>)
}

export default Main;