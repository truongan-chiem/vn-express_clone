import React from 'react';
import { listDataCategory } from '../../asset/dataSectionBody';
import BoxCategogy from './BoxCategogy';

import './sectionCategory.scss';

const SectionCategory = () => {
    return (
        <div className="section-categogy">
            {listDataCategory.map((item, index) => (
                <div className="wrap">
                    <BoxCategogy
                        key={index}
                        listNav={item.listNav}
                        mainNew={item.mainNew}
                        subNew1={item.subNew1}
                        subNew2={item.subNew2}
                        listAds={item.listAds}
                    />
                </div>
            ))}
        </div>
    );
};

export default SectionCategory;
