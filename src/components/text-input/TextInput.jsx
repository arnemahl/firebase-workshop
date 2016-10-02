import React from 'react';
import './TextInput.scss';

const TextInput = ({className, ...otherProps}) => (
    <input className={'our-fancy-input ' + (className || '')} type="text" {...otherProps} />
);

export default TextInput;
