import React from 'react';
import '../../assets/css/Campo.css';
const Campo = (props) => {
    const placeholderModificado = `${props.placeholder}...`;
    const manejarCambio = (event) =>{
        props.actualizarValor(event.target.value);
    }
    //Destructuración
    const {type = 'text'} = props; //Podemos asignar un valor por defecto

    return (
        <div className={`campo campo-${type}`}>
            <label>{props.titulo}</label>
            <input type={type} 
                placeholder={placeholderModificado} 
                required={props.required} 
                value={props.valor}
                onChange={manejarCambio}
            />
        </div>
    );
};

export default Campo;