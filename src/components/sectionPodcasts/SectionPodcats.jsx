import React from 'react';
import { Link } from 'react-router-dom';
import { listDataPostCast } from '../../asset/dataSectionBody';

import './sectionPodcasts.scss';
const SectionPodcasts = () => {
    return (
        <div className="section-podcasts">
            <h3 className="section-podcasts__header">
                <Link to={'/podcasts'}>PodCasts</Link>
            </h3>
            <div className="section-podcasts__content">
                {listDataPostCast.map((item, index) => (
                    <Link key={index} to={item.path} className="section-podcasts__content__item">
                        <div className="section-podcasts__content__item__left">
                            <h3 className="section-podcasts__content__item__left__title">
                                {item.title}
                            </h3>
                            <p className="section-podcasts__content__item__left__desc">
                                {item.desc}
                            </p>
                        </div>
                        <div className="section-podcasts__content__item__right">
                            <img src={item.image} alt="" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SectionPodcasts;
