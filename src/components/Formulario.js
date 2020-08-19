import React, {Fragment, useState} from 'react';
import uuid from 'uuid/v4';


const Formulario = ({crearCita}) => {
    const [cita, actualizarCita] =useState({
        mascota: '',
        propietario: '',
        fecha:'',
        hora:'',
        sintomas:''
    });

    const[error, actualizarError] =useState(false)

    const actualizarState= e =>{
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }
    const{mascota, propietario, fecha, hora, sintomas} = cita;

    const submitCita = e =>{
        e.preventDefault();

        if(mascota.trim()=== '' || propietario.trim()=== '' || fecha.trim()=== ''|| hora.trim()=== ''
        || sintomas.trim()=== ''){
            actualizarError(true)
            return;
        }

        actualizarError(false);

        //creo la cita
        crearCita(cita);

        //asigno un id porq cuando quiera eliminar una card va a eliminar todas sino
        cita.id=uuid()
        


        actualizarCita({
         mascota: '',
        propietario: '',
        fecha:'',
        hora:'',
        sintomas:''
        })



    }
    return(
        <Fragment>
            
            <div className="container">
                <div className="card text-center">
                    <div className="card-header tittle font-weight-bold">Llenar el formulario para crear una cita</div>
                
            
            {error ? <p className="alerta-error"><div className="alert alert-danger" role="alert"> Todos los campos son obligatorios</div></p> :null}
                 <div className="card-body color">
                   <form onSubmit={submitCita} >

                 
                    <div className="form-group row">
                        <label className="col-6" >Nombre de mascota: </label>
                         <input 
                        type="text" 
                        name="mascota" 
                        className="form-control col-6" 
                        placeholder="Nombre de Mascota" 
                        onChange={actualizarState} 
                        value={mascota}
                          /> 

                    </div>
                   
               
                 <div className="form-group row">
                        <label className="col-6">Nombre de dueño: </label>
                        <input 
                        type="text"  
                        name="propietario" 
                        className="form-control col-6" 
                        placeholder="Nombre de dueño"
                         onChange={actualizarState} 
                         value={propietario}
                          />
                    </div>
                <div className="form-group row">
                     <label className="col-6">Fecha:</label>
                     <input
                      type="date" 
                      name="fecha"
                       className="form-control col-6" 
                       onChange={actualizarState}
                       value={fecha}
                        />
                    </div>                    
                    <div className="form-group row">
                        <label className="col-6">Hora:</label>
                        <input 
                        type="time" 
                        name="hora"
                        className="form-control col-6" 
                        onChange={actualizarState} 
                        value={hora}
                          />
                    </div>
                
                <div className="row">
                       <label className="col-6">Sintomas: </label>
                        <textarea 
                        className="form-control col-6"
                        name="sintomas" 
                        placeholder="describir sintomas"
                        onChange={actualizarState}
                        value={sintomas}
                          ></textarea>
                    </div>
                    <div className="card-footer " >
                <button type="submit" className="btn btn-primary">Agregar nueva cita</button></div>
        
            </form>
            
            </div>
            </div>
           </div>
        </Fragment>
    );
} 

export  default Formulario