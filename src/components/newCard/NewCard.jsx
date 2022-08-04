import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './newCard.scss';
const NewCard = ({ title, description, image }) => {
    return (
        <div className="new-card">
            <Link to={'/detail'}>
                <h4 className="new-card__title">{title}</h4>
            </Link>
            <div className="new-card__content">
                <Link to={'/detail'} className="new-card__content__img">
                    <img src={image} alt="" />
                </Link>
                <Link to={'/detail'} className="new-card__content__description">
                    <p>{description}</p>
                </Link>
            </div>
        </div>
    );
};

NewCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
};
export default NewCard;
