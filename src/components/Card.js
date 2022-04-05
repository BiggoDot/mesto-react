import React from 'react';

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <li className="photo__item">
            <button type="button" className="photo__delete"></button>
            <img className="photo__mesto" alt={props.card.name} src={props.card.link} onClick={handleClick}/>
            <div className="photo__container">
                <h2 className="photo__description">{props.card.name}</h2>
                <div className="photo__like-container">
                    <button type="button" className="photo__like"></button>
                    <div className="photo__like-count">{props.card.likes.length}</div>
                </div>
            </div>
        </li>
    );
};

export default Card;