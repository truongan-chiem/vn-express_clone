import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardRelate from '../../components/sectionBody_v2/CardRelate';
import { listDataCardRelate } from '../../asset/dataSectionBody';

import './detail.scss';
import Button from '../../components/button/Button';
import SecTionBodyv2 from '../../components/sectionBody_v2/SecTionBody_v2';
const Detail = () => {
    const dataCardRelate = listDataCardRelate.slice(0, 2);

    const [dataCard, setDataCard] = useState([]);

    useEffect(() => {
        setDataCard(listDataCardRelate.slice(2, 4));
        handleScrollUp();
    }, []);

    const handleScrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <>
            <div className="wrap-background">
                <div className="container">
                    <div className="detail">
                        <div className="detail__info">
                            <div className="detail__info__header">
                                <div className="detail__info__header__left">
                                    <span>
                                        <Link to={'/thoi-su'}>Thời sự</Link>
                                    </span>
                                    <i className="bx bx-chevron-right"></i>
                                    <span>Giao thông</span>
                                </div>
                                <div className="detail__info__header__right">
                                    <p className="detail__info__header__right__time">
                                        Thứ tư, 3/8/2022, 16:31 (GMT+7)
                                    </p>
                                </div>
                            </div>
                            <div className="detail__info__content">
                                <h1 className="detail__info__content__title">
                                    Các hãng bay Việt Nam được khuyến cáo tránh khu vực gần Đài Loan
                                </h1>
                                <p className="detail__info__content__desc">
                                    Chiều 3/8, ông Đinh Việt Thắng, Cục trưởng Hàng không Việt Nam,
                                    cho biết cơ quan này đã nhận được khuyến nghị tránh bay gần các
                                    khu vực đánh dấu gần đảo Đài Loan từ nhà chức trách Trung Quốc,
                                    thời gian áp dụng từ 11h trưa 4/8, kéo dài tới ngày 5/8
                                </p>
                                <p className="detail__info__content__desc">
                                    Cục đã thông báo tới các hãng bay Việt Nam nội dung trên, khuyến
                                    cáo điều chỉnh đường bay để tránh khu vực đánh dấu gần đảo Đài
                                    Loan. "Các hãng vẫn được khai thác bình thường, tự quyết định
                                    hoãn, hủy chuyến nếu có", ông Thắng nói.
                                </p>
                                <p className="detail__info__content__desc">
                                    Hiện các hãng bay Việt Nam vẫn đưa khách đi và đến một số thành
                                    phố thuộc đảo Đài Loan, chưa có thông báo hoãn, hủy chuyến.
                                </p>
                                <div className="detail__info__content__image">
                                    <img
                                        src="https://i1-vnexpress.vnecdn.net/2022/08/03/5563187178137267236a-DL-5423-1-6678-2461-1659516314.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=LZteHNmwKiiGt4J_yxtgGQ"
                                        alt=""
                                    />
                                    <p>
                                        Khu vực quân đội Trung Quốc dự kiến diễn tập bắn đạn thật
                                        quanh đảo Đài Loan (vùng gạch chéo màu đỏ). Ảnh: Xinhua
                                    </p>
                                </div>
                                <p className="detail__info__content__desc">
                                    Hãng thông tấn Xinhua ngày 2/8 thông báo Bộ Tư lệnh Chiến khu
                                    phía Đông của quân đội Trung Quốc sẽ tổ chức 6 cuộc diễn tập
                                    quân sự bắn đạn thật quanh đảo Đài Loan. Thông báo đưa ra lúc
                                    23h (22h giờ Hà Nôi), 16 phút sau khi chuyên cơ chở Chủ tịch Hạ
                                    viện Mỹ Nancy Pelosi hạ cánh xuống đảo Đài Loan.
                                </p>
                                <p className="detail__info__content__desc">
                                    6 cuộc diễn tập của quân đội Trung Quốc quanh đảo Đài Loan dự
                                    kiến diễn ra ngày 4-7/8.
                                </p>

                                <h2 className="detail__info__content__author">Đoàn Loan</h2>

                                <div className="detail__info__content__action">
                                    <div className="detail__info__content__action__left">
                                        <Button
                                            logo={<i className="bx bx-arrow-back"></i>}
                                        ></Button>
                                        <Button logo={<i className="bx bx-save"></i>}>Lưu</Button>
                                    </div>
                                    <div className="detail__info__content__action__right">
                                        <span>Chia sẻ</span>
                                        <i className="bx bxl-facebook-circle"></i>
                                        <i className="bx bxl-twitter"></i>
                                        <i className="bx bxs-envelope"></i>
                                        <i className="bx bx-link-alt"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="detail__ads">
                            {dataCardRelate.map((item, index) => (
                                <CardRelate
                                    key={index}
                                    title={item.title}
                                    subtitle1={item.subtitle1}
                                    subtitle2={item.subtitle2}
                                    subtitle3={item.subtitle3}
                                    image={item.image}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <SecTionBodyv2 dataCardRelate={dataCard} />
            </div>
            <Button
                onClick={handleScrollUp}
                className="btn_scrollUp"
                logo={<i className="bx bx-up-arrow-alt"></i>}
            ></Button>
        </>
    );
};

export default Detail;
