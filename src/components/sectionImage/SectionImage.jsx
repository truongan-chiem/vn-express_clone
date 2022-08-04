import React from 'react';
import { Link } from 'react-router-dom';
import './sectionImage.scss';
const SectionImage = () => {
    return (
        <div className="section-image">
            <h3 className="section-image__title">
                <Link to={'/detail'}>Ảnh</Link>
            </h3>
            <div className="section-image__content">
                <img
                    src="https://i1-vnexpress.vnecdn.net/2022/08/01/anh-6_1659333258-1659333991-1659339683.jpg?w=900&h=540&q=100&dpr=1&fit=crop&s=-qk4BVV2T1mifHxu1iGnNA"
                    alt=""
                />
                <div className="section-image__content__info">
                    <div className="section-image__content__info__item">
                        <h4 className="section-image__content__info__item__title">
                            Hội thi sâm Ngọc Linh
                        </h4>
                        <p className="section-image__content__info__item__desc">
                            Chọn những cây sâm Ngọc Linh ưng ý, người dân huyện Nam Trà My mang tới
                            hội thi nhằm tìm ra cây to khỏe, có giá trị nhất.
                        </p>
                        <div className="section-image__content__info__item__action">
                            <Link to={'/thoi-su'}>Thời sự</Link>
                            <i className="bx bxs-message"></i>
                        </div>
                    </div>
                    <div className="section-image__content__info__item">
                        <h4 className="section-image__content__info__item__title">
                            Hội thi sâm Ngọc Linh
                        </h4>
                        <p className="section-image__content__info__item__desc">
                            Chọn những cây sâm Ngọc Linh ưng ý, người dân huyện Nam Trà My mang tới
                            hội thi nhằm tìm ra cây to khỏe, có giá trị nhất.
                        </p>
                        <div className="section-image__content__info__item__action">
                            <Link to={'/thoi-su'}>Thời sự</Link>
                            <i className="bx bxs-message"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionImage;
