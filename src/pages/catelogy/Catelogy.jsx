import React, { useEffect, useState } from 'react';
import { navMenu } from '../../asset/dataHeader';
import { useLocation, Link } from 'react-router-dom';
import Button from '../../components/button/Button';

import './catelogy.scss';
import SectionTop from '../../components/sectionTop/SectionTop';
import SecTionBodyv2 from '../../components/sectionBody_v2/SecTionBody_v2';
import SectionImage from '../../components/sectionImage/SectionImage.jsx';
import { listDataCardRelate } from '../../asset/dataSectionBody';

const Catelogy = () => {
    const { pathname } = useLocation();

    const [menu, setMenu] = useState([]);
    document.title = 'VN-Express - ' + menu.display;

    const [dataCard1, setDataCard1] = useState([]);
    const [dataCard2, setDataCard2] = useState([]);

    useEffect(() => {
        const nav = navMenu.filter((item) => item.path === pathname);
        setMenu(nav[0]);
        handleScrollUp();
    }, [pathname]);
    useEffect(() => {
        let dataCardRelate = listDataCardRelate.slice(0, 2);
        setDataCard1(dataCardRelate);
    }, []);

    useEffect(() => {
        let dataCardRelate = listDataCardRelate.slice(3, 5);
        setDataCard2(dataCardRelate);
    }, []);

    const handleScrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <div className="container">
            <div className="wrap">
                <div className="thoi-su__header">
                    <div className="thoi-su__header__above">
                        <h1 className="thoi-su__header__above__title">{menu.display}</h1>
                        <Button type="outline" logo={<i className="bx bxs-calendar"></i>}>
                            Xem theo ngày
                        </Button>
                    </div>
                    {menu.children && (
                        <ul className="thoi-su__header__nav">
                            {menu.children.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.path}>{item.display}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <div className="wrap">
                <SectionTop />
            </div>

            <div className="wrap">
                <SecTionBodyv2 dataCardRelate={dataCard1} />
            </div>
            <div className="wrap">
                <SectionImage />
            </div>
            <div className="wrap">
                <SecTionBodyv2 dataCardRelate={dataCard2} />
            </div>
            <Button
                onClick={handleScrollUp}
                className="btn_scrollUp"
                logo={<i className="bx bx-up-arrow-alt"></i>}
            ></Button>
        </div>
    );
};

export default Catelogy;
