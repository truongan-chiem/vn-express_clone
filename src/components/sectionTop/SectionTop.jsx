import React from 'react';
import { Link } from 'react-router-dom';
import imgSection from '../../asset/image_section_new.jpg';
import ads from '../../asset/ads.jpg';
import './section.scss';
const SectionTop = () => {
    return (
        <div className="section">
            <div className="section__new">
                <div className="section__new__title">
                    <Link to={'/detail'} className="section__new__title__img">
                        <div>
                            <img src={imgSection} alt="" />
                        </div>
                    </Link>

                    <div className="section__new__title__info">
                        <Link to={'/detail'}>
                            <h3 className="section__new__title__info__title">
                                Trung quốc cảnh báo Mỹ 'trả giá' nếu bà Pelosi thăm Đài Loan
                            </h3>
                        </Link>
                        <p className="section__new__title__info__description">
                            Bộ Ngoại giao Trung Quốc tuyên bố kịch bản Chủ tịch Hạ viện Mỹ thăm Đài
                            Loan là "hành vi liều lĩnh, khiêu khích" và Washington sẽ phải trả giá.
                        </p>
                        <div className="section__new__title__info__below">
                            <p>1h trước</p>
                            <Link to={'/the-gioi'}>Thế giới</Link>
                        </div>
                    </div>
                </div>
                <div className="section__new__subtitle">
                    <div className="section__new__subtitle__left">
                        <Link to={'/detail'}>
                            <div className="section__new__subtitle__left__info">
                                <h4>Những 'dũng sĩ diệt giặc lửa' trong ký ức người ở lại </h4>
                                <p>
                                    Tin nhắn cuối cùng binh nhì Nguyễn Đình Phúc, 19 tuổi, gửi nhóm
                                    bạn học là tấm ảnh chụp khu phố mình vừa cứu khỏi đám cháy, dặn
                                    bạn nào ở gần cẩn thận lửa lan.
                                </p>
                            </div>
                        </Link>

                        <Link to={'/detail'}>
                            <div className="section__new__subtitle__left__info">
                                <h4>Những 'dũng sĩ diệt giặc lửa' trong ký ức người ở lại </h4>
                                <p>
                                    Tin nhắn cuối cùng binh nhì Nguyễn Đình Phúc, 19 tuổi, gửi nhóm
                                    bạn học là tấm ảnh chụp khu phố mình vừa cứu khỏi đám cháy, dặn
                                    bạn nào ở gần cẩn thận lửa lan.
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className="section__new__subtitle__right">
                        <div className="box-gocnhin">
                            <Link to={'/goc-nhin'}>Góc nhìn</Link>
                            <h4>Đòi quyển trượng giải trình </h4>
                            <p>
                                Trường Đại học Kinh tế sẽ giải trình gì về bộ trang phục tốt nghiệp
                                không vi phạm quy định nào của nhà nước?
                            </p>
                            <div className="box-gocnhin__author">
                                <div className="box-gocnhin__author__left">
                                    <p>Nguyễn Vắn Đáng</p>
                                    <div className="box-gocnhin__author__left__interactive">
                                        <i className="bx bxs-message"></i>
                                        <span>290</span>
                                    </div>
                                </div>
                                <div className="box-gocnhin__author__right">
                                    <img
                                        src="https://i1-vnexpress.vnecdn.net/2021/10/28/244860632102234525944363259062233360745566n2removebgpreview2png-1635438490.png?w=100&h=100&q=100&dpr=1&fit=crop&s=GXvc2SkQq9PVUE0snFbt_Q"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section__ads">
                <img src={ads} alt="" />
            </div>
        </div>
    );
};

export default SectionTop;
