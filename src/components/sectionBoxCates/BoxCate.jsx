import React from 'react';
import { Link } from 'react-router-dom';
const BoxCate = (props) => {
    const { listNav, image, mainNew, subNew } = props;
    return (
        <div className="box-cate">
            <ul className="box-cate__nav">
                {listNav.map((item, index) => (
                    <li className="box-cate__nav__item" key={index}>
                        <Link to={item.path}>{item.display}</Link>
                    </li>
                ))}
            </ul>
            <div className="box-cate__content">
                <div className="box-cate__content__mainBox">
                    <Link to={'/detail'} className="box-cate__content__mainBox__img">
                        <img src={image} alt="" />
                    </Link>
                    <Link to={mainNew.path} className="box-cate__content__mainBox__title">
                        <h4>{mainNew.title}</h4>
                    </Link>
                    <Link to={mainNew.path} className="box-cate__content__mainBox__desc">
                        <p>{mainNew.desc}</p>
                    </Link>
                </div>
                <div className="box-cate__content__subBox">
                    <Link to={subNew.path}>
                        <h4 className="box-cate__content__subBox__title">{subNew.title}</h4>
                    </Link>
                    <Link to={subNew.path}>
                        <p className="box-cate__content__subBox__desc">{subNew.desc}</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BoxCate;
