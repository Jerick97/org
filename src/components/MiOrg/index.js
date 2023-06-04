import React from 'react';
//import { useState } from 'react';
import '../../assets/css/MiOrg.css';

const MiOrg = (props) => {
    //Estado - hooks
    //useState
    //useState()
    // const [nombreVariable, funcionActualiza] = useState(valorInicial)

    /*const [mostrar, mostrarUpdate] = useState(true);

    const manejarClick = () =>{
        console.log('Mostrar/Ocultar elemento');
        mostrarUpdate(!mostrar);
    }*/

    return (
        <section className='orgSection'>
            <h3 className='title'>Mi organización</h3>
            <img src='/img/add.png' alt='add' onClick={props.cambiarMostrar} title='Mostrar / Ocultar Formulario'/>
        </section>
    );
};

export default MiOrg;