import React, {useState} from 'react';
import Campo from '../Campo'; //por defecto leera el index, es otra forma
import ListaOpciones from '../ListaOpciones';
import Button from '../Button';
import '../../assets/css/Formulario.css';

const Formulario = (props) => {
    const [nombre, actualizarNombre] = useState('');
    const [puesto, actualizarPuesto] = useState('');
    const [foto, actualizarFoto] = useState('');
    const [equipo, actualizarEquipo] = useState('');
    const [titulo, actualizarTitulo] = useState('');
    const [color, actualizarColor] = useState('');
    const {registrarColaborador, crearEquipo} = props;

    const manejarEnvio = (event) =>{
        event.preventDefault();
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }

        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEquipo = (event) =>{
        event.preventDefault();
        crearEquipo({titulo, colorPrimario:color});
    }

    return (
        <section className='formulario'>
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador</h2>
                <Campo titulo='Nombre' placeholder='Ingresar nombre' required={true} valor={nombre} actualizarValor={actualizarNombre}/>
                <Campo titulo='Puesto' placeholder='Ingresar puesto'required valor={puesto} actualizarValor={actualizarPuesto}/>
                <Campo titulo='Foto' placeholder='Ingresar enlace de foto' required valor={foto} actualizarValor={actualizarFoto}/> {/* si deseas no sea requerido solo no escribas required */}
                <ListaOpciones titulo='Equipos' valor={equipo} actualizarEquipo={actualizarEquipo} equipos={props.equipos} />
                <Button>Crear</Button>
            </form>
            <form onSubmit={manejarNuevoEquipo}>
                <h2>Rellena el formulario para crear el equipo</h2>
                <Campo titulo='Titulo' placeholder='Ingresar titulo' required valor={titulo} actualizarValor={actualizarTitulo}/>
                <Campo type='color' titulo='Color' placeholder='Ingresar el color en Hexadecimal'required valor={color} actualizarValor={actualizarColor}/>
                <Button>Registrar Equipo</Button>
            </form>
        </section>
    );
};

export default Formulario;