import React from 'react';
import { Link } from 'react-router-dom';
const BoxCategogy = (props) => {
    const { listNav, listAds, mainNew, subNew1, subNew2 } = props;
    return (
        <div className="box-categogy">
            <ul className="box-categogy__nav">
                {listNav.map((item, index) => (
                    <li key={index} className="box-categogy__nav__item">
                        <Link to={item.path}>{item.display}</Link>
                    </li>
                ))}
            </ul>
            <div className="box-categogy__content">
                <div className="box-categogy__content__news">
                    <div className="box-categogy__content__news__main">
                        <Link to={'detail'}>
                            <img src={mainNew.image} alt="" />
                        </Link>
                        <h2>
                            <Link to={'/detail'}>{mainNew.title}</Link>
                        </h2>
                        <p>
                            <Link to={'/detail'}>{mainNew.desc}</Link>
                        </p>
                    </div>
                    <div className="box-categogy__content__news__sub">
                        <div className="box-categogy__content__news__sub__item">
                            <Link to={'/detail'}>
                                <img src={subNew1.image} alt="" />
                            </Link>
                            <h4>
                                <Link to={'/detail'}>{subNew1.title}</Link>
                            </h4>
                        </div>
                        <div className="box-categogy__content__news__sub__item">
                            <Link to={'/detail'}>
                                <img src={subNew2.image} alt="" />
                            </Link>
                            <h4>
                                <Link to={'/detail'}>{subNew2.title}</Link>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="box-categogy__content__ads">
                    {listAds.map((item, index) => (
                        <div className="box-categogy__content__ads__item" key={index}>
                            <h3>{item.title}</h3>
                            <img src={item.image} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BoxCategogy;
