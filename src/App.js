import { useState, useEffect } from 'react';
import {v4 as uuidV4 } from 'uuid';
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {
  const [mostrarForm, updateMostrarForm] = useState(false); //Mostrar o Ocultar el Formulario
  const [colaboradores, actualizarColaboradores] = useState(() => {
    const colaboradoresGuardados = localStorage.getItem('colaboradores');
    return colaboradoresGuardados ? JSON.parse(colaboradoresGuardados) : [{
      id: uuidV4(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true,
    },
    {
      id: uuidV4(),
      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav: false,
    },
    {
      id: uuidV4(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false,
    },
    {
      id: uuidV4(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false,
    },
    {
      id: uuidV4(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false,
    }];
  });

  const [equipos, actualizarEquipos] = useState(() => {
  const equiposGuardados = localStorage.getItem('equipos');
  return equiposGuardados ? JSON.parse(equiposGuardados) : [
    {
      id: uuidV4(),
      titulo :'Programación',
      colorPrimario: '#57c278',
      colorSecundario: '#d9f7e9'
    },
    {
      id: uuidV4(),
      titulo : 'Front End',
      colorPrimario : '#82cffa',
      colorSecundario : '#e8f8ff'
    },
    {
      id: uuidV4(),
      titulo : 'Data Science',
      colorPrimario : '#a6d157',
      colorSecundario : '#f0f8e2'
    },
    {
      id: uuidV4(),
      titulo : 'Devops',
      colorPrimario : '#e06b69',
      colorSecundario : '#fde7e8'
    },
    {
      titulo : 'UX y Diseño',
      colorPrimario : '#db6ebf',
      colorSecundario : '#fae9f5'
    },
    {
      id: uuidV4(),
      titulo : 'Móvil',
      colorPrimario : '#ffba05',
      colorSecundario : '#fff5d9'
    },
    {
      id: uuidV4(),
      titulo : 'Innovación y Gestión',
      colorPrimario : '#ff8a29',
      colorSecundario : '#ffeedf'
    }
  ];
});

  const cambiarMostrar = () =>{
    updateMostrarForm(!mostrarForm);
  }

  //Registrar Colaborador
  const registrarColaborador = (colaborador) =>{
    console.log('Nuevo Colaborador', colaborador);
    //Spread operator (operador de propagación) (...) se utiliza para descomponer y combinar elementos, lo que facilita la manipulación de arrays y objetos en JavaScript.
    actualizarColaboradores([...colaboradores,colaborador]);
  }

  //Agrega un efecto useEffect en el componente App para guardar los colaboradores en el localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem('colaboradores', JSON.stringify(colaboradores));
  }, [colaboradores]);

  useEffect(() => {
    localStorage.setItem('equipos', JSON.stringify(equipos));
  }, [equipos]);


  //Eliminar colaborador
  const eliminarColaborador = (id) =>{
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    actualizarColaboradores(nuevosColaboradores);
  }

  //Actualizar color de equipo
  const actualizarColor = (color,id) =>{
    const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorPrimario = color;
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados);
  }

  //Crear Equipo
  const crearEquipo = (nuevoEquipo) =>{
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuidV4()}])
  }

  // Favorito
  const like = (id) =>{
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav; // false a true
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados);
  }


  // Ternario -> condicion ? seMuestra : noSeMuestra
  // Cortocircuito --> condicion && seMuestra
  return (
    <div>
      <Header />
      {/* { mostrarForm ? <Formulario /> : <></>} */}
      { mostrarForm && <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)} 
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
        /> }

      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map( (equipo) => <Equipo datos={equipo} key={equipo.titulo} colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador} actualizarColor={actualizarColor} like={like} />
        )
      }

      <Footer />
    </div>
  );
}

export default App;
