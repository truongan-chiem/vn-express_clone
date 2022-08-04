import React from 'react';
import { listDataBoxCate } from '../../asset/dataSectionBody';
import BoxCate from './BoxCate';
import './sectionBoxCates.scss';
const SectionBoxCates = () => {
    return (
        <div className="section-boxcates">
            {listDataBoxCate.map((item, index) => (
                <BoxCate
                    key={index}
                    listNav={item.listNav}
                    image={item.image}
                    mainNew={item.mainNew}
                    subNew={item.subNew}
                />
            ))}
        </div>
    );
};

export default SectionBoxCates;
