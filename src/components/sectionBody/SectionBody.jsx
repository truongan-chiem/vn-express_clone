import React from 'react';
import BoxFeature from '../box-feature/BoxFeature';
import NewCard from '../newCard/NewCard';
import './sectionbody.scss';
import { listBoxFeature, listNewCard } from '../../asset/dataSectionBody';

const SectionBody = () => {
    return (
        <div className="section-body">
            <div className="section-body__left">
                {listNewCard.map((item, index) => (
                    <NewCard
                        key={index}
                        title={item.title}
                        description={item.desc}
                        image={item.image}
                    />
                ))}
            </div>
            <div className="section-body__right">
                {listBoxFeature.map((item, index) => (
                    <BoxFeature
                        key={index}
                        listNav={item.listNav}
                        image={item.image}
                        newMain={item.newMain}
                        newSub={item.newSub}
                        listRelate={item.listRelate}
                    />
                ))}
            </div>
        </div>
    );
};

export default SectionBody;
