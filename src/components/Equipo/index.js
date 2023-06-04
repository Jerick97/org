import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Colaborador from '../Colaborador';
import hexToRgba from 'hex-to-rgba';
import { ChromePicker } from 'react-color';
import { GiPalette } from 'react-icons/gi';
import '../../assets/css/Equipo.css';

const Equipo = (props) => {
    //Destructuracion
    const {titulo, colorPrimario, id} = props.datos;
    const {colaboradores, eliminarColaborador, actualizarColor, like } = props;
    const estiloFondo = {backgroundColor: hexToRgba(colorPrimario, 0.6)};
    const estiloTitulo = {borderBottomColor: colorPrimario};

    const [showPicker, setShowPicker] = useState(false);
    const colorPickerRef = useRef(null);

    const togglePicker = () => {
        setShowPicker(!showPicker);
    };
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (colorPickerRef.current && !colorPickerRef.current.contains(event.target)) {
                setShowPicker(false);
            }
        };
    
        const handleEscapeKey = (event) => {
            if (event.key === 'Escape') {
                setShowPicker(false);
            }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscapeKey);
    
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, []);

    return (<>{ colaboradores.length > 0 &&
        <section className='equipo' style={estiloFondo}>
            <div ref={colorPickerRef}>
                {!showPicker && (
                    <GiPalette className='input-color' onClick={togglePicker} />
                )}
                {showPicker && (
                    <ChromePicker
                        className='input-color'
                        color={hexToRgba(colorPrimario, 0.6)}
                        onChange={(color) => {
                            actualizarColor(color.hex, id);
                        }}
                    />
                )}
            </div>
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className='colaboradores'>
                {
                    colaboradores.map((colaborador, index) => <Colaborador 
                    datos={colaborador}  
                    key={index} 
                    colorPrimario={colorPrimario}
                    eliminarColaborador={eliminarColaborador} 
                    like={like}
                    />)
                }
            </div>
        </section>
    }</>
    );
};

export default Equipo;