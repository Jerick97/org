import React from 'react';
import '../../assets/css/ListaOpciones.css';
const ListaOpciones = (props) => {
    /* Metodo map -> arreglo.map( (equipo, index) => {
        return <option></option>
    })*/

    const manejarCambio = (event)=>{
        props.actualizarEquipo(event.target.value);
    }

    return (
        <div className='lista-opciones'>
            <label>{props.titulo}</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value='' disabled defaultValue='' hidden>Seleccionar Equipo</option>
                { props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>) }
            </select>
        </div>
    );
};

export default ListaOpciones;