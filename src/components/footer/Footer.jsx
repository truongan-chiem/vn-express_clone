import React from 'react';
import { Link } from 'react-router-dom';
import { navMenu } from '../../asset/dataHeader';
import logo from '../../asset/logo.svg';
import Button from '../button/Button';

import './footer.scss';

const Footer = () => {
    return (
        <div className="container">
            <div className="footer">
                <div className="wrap">
                    <div className="footer__nav">
                        <ul className="footer__nav__menu bold">
                            <li>
                                <Link to={'/'}>Trang chủ</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Video</Link>
                            </li>
                            <li>
                                <Link to={'/'}>PodCast</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Ảnh</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Infographics</Link>
                            </li>
                        </ul>
                        <ul className="footer__nav__menu">
                            {navMenu.slice(0, 5).map((item, index) => (
                                <li key={index}>
                                    <Link to={item.path}>{item.display}</Link>
                                </li>
                            ))}
                        </ul>
                        <ul className="footer__nav__menu">
                            {navMenu.slice(5, 10).map((item, index) => (
                                <li key={index}>
                                    <Link to={item.path}>{item.display}</Link>
                                </li>
                            ))}
                        </ul>
                        <ul className="footer__nav__menu">
                            {navMenu.slice(10, 15).map((item, index) => (
                                <li key={index}>
                                    <Link to={item.path}>{item.display}</Link>
                                </li>
                            ))}
                        </ul>
                        <ul className="footer__nav__menu contact_pay">
                            <li>
                                <Link to={'/detail'}>Rao vặt</Link>
                            </li>
                            <li>
                                <Link to={'/detail'}>StartUp</Link>
                            </li>
                            <li>
                                <Link to={'/detail'}>Mua Ảnh VNExpress</Link>
                            </li>
                            <li>
                                <Link to={'/detail'}>VHome</Link>
                            </li>
                            <li>
                                <Link to={'/detail'}>eBox</Link>
                            </li>
                            <li>
                                <Link to={'/detail'}>eWork</Link>
                            </li>
                        </ul>
                        <div className="wrap-contact">
                            <div className="wrap-contact__download">
                                <h4 className="wrap-contact__download__title">Tải ứng dụng</h4>
                                <div className="wrap-contact__download__btn">
                                    <Button logo={<i className="bx bx-polygon"></i>}>
                                        VnExpress
                                    </Button>
                                    <Button logo={<i className="bx bxs-droplet-half"></i>}>
                                        International
                                    </Button>
                                </div>
                            </div>
                            <div className="wrap-contact__download">
                                <h4 className="wrap-contact__download__title">Liên hệ </h4>
                                <div className="wrap-contact__download__btn-contact">
                                    <Button
                                        type={'outline'}
                                        logo={<i className="bx bxs-envelope"></i>}
                                    >
                                        Tòa soạn
                                    </Button>
                                    <Button
                                        type={'outline'}
                                        logo={<i className="bx bxs-plane-alt"></i>}
                                    >
                                        Quảng cáo
                                    </Button>
                                    <Button
                                        type={'outline'}
                                        logo={<i className="bx bxs-doughnut-chart"></i>}
                                    >
                                        Hợp tác bản quyền
                                    </Button>
                                </div>
                            </div>
                            <div className="wrap-contact__download">
                                <h4 className="wrap-contact__download__title">Đường dây nóng</h4>
                                <div className="wrap-contact__download__phone">
                                    <div className="wrap-contact__download__phone__item">
                                        <h4>082.525.2525</h4>
                                        <span>(Hà nội)</span>
                                    </div>
                                    <div className="wrap-contact__download__phone__item">
                                        <h4>082.525.2525</h4>
                                        <span>(Hồ Chí Minh)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__social">
                    <Link to={'/'} className="footer__social__left">
                        <span> Báo điện từ</span>
                        <img src={logo} alt="" />
                    </Link>
                    <div className="footer__social__right">
                        <span>RSS</span>
                        <span className="footer__social__right__follow">
                            Theo dõi VnExpress trên
                        </span>
                        <i className="bx bxl-facebook-circle"></i>
                        <i className="bx bxl-twitter"></i>
                        <i className="bx bxl-youtube"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
