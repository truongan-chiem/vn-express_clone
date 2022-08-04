import React from 'react';
import { Link } from 'react-router-dom';
const CardThoiSu = (props) => {
    const { title, desc, image, path } = props;
    return (
        <div className="Card-thoisu">
            <div className="Card-thoisu__info">
                <h3 className="Card-thoisu__info__title">
                    <Link to={path}>{title}</Link>
                </h3>
                <p className="Card-thoisu__info__desc">
                    <Link to={path}>{desc} </Link>
                </p>
            </div>
            <Link to={path} className="Card-thoisu__image">
                <img src={image} alt="" />
            </Link>
        </div>
    );
};

export default CardThoiSu;
