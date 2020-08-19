import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario'
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
function App () {

   let citasIniciales = JSON.parse(localStorage.getItem('citas'));
      if(!citasIniciales){
         citasIniciales=[];
      }
   


   let [citas, guardarCitas] = useState([citasIniciales]);

      useEffect( () =>{
            if(citasIniciales){
               localStorage.setItem('citas', JSON.stringify(citas))
            } else{
               localStorage.setItem('citas', JSON.stringify());
            }

      }, );

   //funcion q agarre las citas actuales y agregue la nueva
   const crearCita = cita =>{
      guardarCitas([
         ...citas, cita]);
   }
   //funcion q elimina las citas 
   const eliminarCita = id =>{
      const nuevasCitas = citas.filter(cita => cita.id !== id)
      guardarCitas(nuevasCitas)
   }

   // para que se cambie el titulo
      const titulo = citas.length === 0 ? 'No hay citas' : 'Administra las citas aqui';


    return ( 
       <Fragment>
       <h1 className="titulo">Administrador pacientes de veterinaria</h1>

       <div className="container">
          <div> 
             <div className="auto">
               <Formulario 
               crearCita={crearCita}
               />
             </div>
             <div className="w-100"></div>
             <div >
             <div className="auto">
               <h2 > {titulo}</h2>
               <div className="row">
               {citas.map(cita => (
                  <Card
                  key={cita.id}
                  cita={cita}
                  eliminarCita= {eliminarCita}
                  />
               ))}</div>
             </div>
             </div>
          </div>

       </div>
       </Fragment>
    );
}


export default App;
