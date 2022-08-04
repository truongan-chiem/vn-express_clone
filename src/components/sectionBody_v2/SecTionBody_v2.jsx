import React, { useEffect, useState, memo } from 'react';
import CardThoiSu from './CardThoiSu';
import { listDataThoiSu } from '../../asset/dataSectionBody';
import PropTypes from 'prop-types';
import './sectionBody_v2.scss';
import CardRelate from './CardRelate';
const SecTionBody_v2 = (props) => {
    const [dataCardRelate, setDataCardRelate] = useState([]);

    useEffect(() => {
        setDataCardRelate(props.dataCardRelate);
    }, [props]);
    return (
        <div className="v2-container">
            <div className="v2-container__left">
                {listDataThoiSu.map((item, index) => (
                    <div className="wrap" key={index}>
                        <CardThoiSu
                            title={item.title}
                            desc={item.desc}
                            image={item.image}
                            path={item.path}
                        />
                    </div>
                ))}
            </div>
            <div className="v2-container__right">
                {dataCardRelate !== undefined &&
                    dataCardRelate.map((item, index) => (
                        <CardRelate
                            key={index}
                            title={item.title}
                            image={item.image}
                            subtitle1={item.subtitle1}
                            subtitle2={item.subtitle2}
                            subtitle3={item.subtitle3}
                        />
                    ))}
            </div>
        </div>
    );
};
SecTionBody_v2.propTypes = {
    dataCardRelate: PropTypes.object.isRequired,
};
export default memo(SecTionBody_v2);
