import React from 'react';
import '../../assets/css/Button.css';
const Button = (props) => {

    return (
        <button className='boton'>{props.children}</button>
    );
};

export default Button;