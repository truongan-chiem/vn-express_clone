import React from 'react';
import { Link } from 'react-router-dom';
const CardRelate = (props) => {
    const { title, subtitle1, subtitle2, subtitle3, image } = props;
    return (
        <div className="card-relate">
            <h3 className="card-relate__title">
                <Link to={'/detail'}>{title}</Link>
            </h3>
            <img src={image} alt="" />
            <h4 className="card-relate__subtitle1">
                <Link to={'/detail'}>{subtitle1}</Link>
            </h4>
            <p className="card-relate__subtitle2">
                <Link to={'/detail'}>{subtitle2}</Link>
            </p>
            <p className="card-relate__subtitle2">
                <Link to={'/detail'}>{subtitle3}</Link>
            </p>
        </div>
    );
};

export default CardRelate;
