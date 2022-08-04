import React from 'react';
import './button.scss';
const Button = (props) => {
    const defaultFn = () => {
        console.log('defaull OnClick Button');
    };
    const { className, type, children, logo, onClick = defaultFn } = props;
    return (
        <button className={`btn btn-${type} ${className}`} onClick={onClick}>
            {logo ? <span className="btn__logo">{logo}</span> : <span></span>}
            <span className="btn__title">{children}</span>
        </button>
    );
};

export default Button;
