import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';

import './header.scss';
import banner from '../../asset/banner.jpg';
import logo from '../../asset/logo.svg';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import { navMenu } from '../../asset/dataHeader';
import Form from '../form/Form';

const Header = () => {
    const date = new Date();
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    let day = date.getDay();
    const today = 'Thứ ' + day + ', ' + dd + '/' + mm + '/' + yyyy;

    const navRef = useRef(null);
    const actionRef = useRef(null);
    const refModal = useRef(null);
    const { pathname } = useLocation();

    const [shrink, setShrink] = useState(false);
    const [dataMenu, setDataMenu] = useState(navMenu);
    useEffect(() => {
        const shrinkHeader = () => {
            if (
                (document.body.scrollTop > 370 || document.documentElement.scrollTop > 370) &&
                window.innerWidth > 1024
            ) {
                navRef.current.classList.add('shrink');
                setShrink(true);
            } else {
                navRef.current.classList.remove('shrink');
                setShrink(false);
            }
        };
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    useEffect(() => {
        if (shrink) {
            setDataMenu(navMenu.slice(0, 14));
        } else {
            setDataMenu(navMenu);
        }
    }, [shrink]);

    useEffect(() => {
        const sizeWidth = () => {
            if (
                (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) &&
                window.innerWidth < 1024
            ) {
                actionRef.current.classList.add('shrink');
                console.log('width');
            } else {
                actionRef.current.classList.remove('shrink');
            }
        };
        window.addEventListener('scroll', sizeWidth);
        return () => {
            window.removeEventListener('resize', sizeWidth);
        };
    }, []);

    const handleModal = () => {
        refModal.current.classList.toggle('active');
    };

    return (
        <>
            <div className="header">
                <div className="header__banner">
                    <img src={banner} alt="" />
                </div>
                <div className="wrap" ref={actionRef}>
                    <div className="container">
                        <div className="header__action">
                            <div className="header__action__left">
                                <Link to={'/'}>
                                    <div className="logo">
                                        <img src={logo} alt="" />
                                    </div>
                                </Link>
                                <div className="header__action__left__time">
                                    <p>{today}</p>
                                </div>
                            </div>
                            <div className="header__action__right">
                                <div className="header__action__right__btn">
                                    <Button logo={<i className="bx bx-time"></i>}>Mới nhất</Button>
                                    <Button logo={<i className="bx bxl-medium"></i>}>
                                        International
                                    </Button>
                                </div>
                                <div className="header__action__right__search">
                                    <input type="text" placeholder="Tìm kiếm" required />
                                    <span>
                                        <i className="bx bx-search"></i>
                                    </span>
                                </div>
                                <div className="header__action__right__login">
                                    <Button
                                        onClick={handleModal}
                                        logo={<i className="bx bxs-user"></i>}
                                        type={'outline'}
                                    >
                                        Đăng nhập
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrap nav__container" ref={navRef}>
                    <ul className="header__nav ">
                        {shrink ? (
                            <li className="header__nav__item item-home-shrink">
                                <Link to={'/'}>
                                    <i className="bx bxs-home"></i>
                                    <span>Mới nhất</span>
                                </Link>
                            </li>
                        ) : (
                            <li className="header__nav__item item-home">
                                <Link to={'/'}>
                                    <i className="bx bxs-home"></i>
                                </Link>
                            </li>
                        )}
                        {dataMenu.map((item, index) => (
                            <div>
                                <Tippy
                                    delay={[100, 100]}
                                    interactive
                                    placement="bottom"
                                    offset={['', '13.5']}
                                    render={(attrs) => (
                                        <div className="list-item-tippy" tabIndex="-1" {...attrs}>
                                            {item.children ? (
                                                <ListItem items={item.children} />
                                            ) : (
                                                ''
                                            )}
                                        </div>
                                    )}
                                >
                                    <li
                                        className={`header__nav__item ${
                                            item.path === pathname ? 'active' : ''
                                        }`}
                                        key={index}
                                    >
                                        <Link to={item.path}>{item.display}</Link>
                                    </li>
                                </Tippy>
                            </div>
                        ))}
                        <li className="header__nav__item item-all">
                            Tất cả
                            <i className="bx bx-menu"></i>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="overlay" ref={refModal}>
                <div className="modal">
                    <button onClick={handleModal} className="close">
                        <i className="bx bx-x-circle"></i>
                    </button>
                    <Form />
                </div>
            </div>
        </>
    );
};

const ListItem = ({ items }) => {
    return (
        <>
            {items.map((item, index) => (
                <div key={index}>
                    <Link to={item.path}>{item.display}</Link>
                </div>
            ))}
        </>
    );
};

export default Header;
