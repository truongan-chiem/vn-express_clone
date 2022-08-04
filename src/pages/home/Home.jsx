import React, { useEffect } from 'react';
import SectionBody from '../../components/sectionBody/SectionBody';
import SectionTop from '../../components/sectionTop/SectionTop';
import SectionPodcasts from '../../components/sectionPodcasts/SectionPodcats';
import SectionBoxCates from '../../components/sectionBoxCates/SectionBoxCates';
import SectionCategory from '../../components/sectionCategory/SectionCategory';

import './home.scss';
import Button from '../../components/button/Button';
const Home = () => {
    document.title = 'VN-Express - Trang chủ ';
    const handleScrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    useEffect(() => {
        handleScrollUp();
    }, []);
    return (
        <div className="home">
            <div className="container">
                <div className="wrap">
                    <SectionTop />
                </div>
                <div className="wrap">
                    <SectionBody />
                </div>
                <div className="wrap">
                    <SectionPodcasts />
                </div>
                <div className="wrap">
                    <SectionBoxCates />
                </div>

                <SectionCategory />
            </div>
            <Button
                onClick={handleScrollUp}
                className="btn_scrollUp"
                logo={<i className="bx bx-up-arrow-alt"></i>}
            ></Button>
        </div>
    );
};

export default Home;
