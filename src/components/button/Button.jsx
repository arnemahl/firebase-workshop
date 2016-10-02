import React from 'react';
import './Button.scss';

const Button = ({className, children, ...otherProps}) => (
    <button className={'our-fancy-button ' + (className || '')} {...otherProps}>
        {children}
    </button>
);

export default Button;
