import React from 'react';
import { Link } from 'react-router-dom';
import './box-feature.scss';
const BoxFeature = (props) => {
    const { listNav, image, newMain, newSub, listRelate } = props;

    return (
        <div className="box-feature">
            <ul className="box-feature__nav">
                {listNav.map((item, index) => (
                    <li key={index} className="box-feature__nav__item">
                        <Link to={item.path}>{item.display}</Link>
                    </li>
                ))}
            </ul>

            <div className="box-feature__content">
                <Link to={'/detail'} className="box-feature__content__left">
                    <div className="box-feature__content__left__image">
                        <img src={image} alt="" />
                    </div>
                    <div className="box-feature__content__left__info">
                        <h4 className="title">{newMain.title}</h4>

                        <p className="desc">{newMain.decs}</p>
                    </div>
                </Link>
                <Link to={'/detail'} className="box-feature__content__right">
                    <h4 className="title">{newSub.title}</h4>
                    <p className="desc">{newSub.decs}</p>
                </Link>
            </div>
            <ul className="box-feature__news">
                {listRelate.map((item, index) => (
                    <li key={index} className="box-feature__news__item">
                        <Link to={item.path}>{item.display}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BoxFeature;
