import React from 'react';
const Card =({cita, eliminarCita})=>{
    return(
      <div class="col-lg-6 d-flex align-items-stretch">        
          <div class="card">
        <div className="cita">
            <div className="card-header">  
            
            <aside>
            <h3>Mascota: <span>{cita.mascota}</span></h3>
            <p>Dueño: {cita.propietario}</p>
            </aside>
            </div>
                 <div className="card-body">
                 <p>Fecha: <span>{cita.fecha}</span></p>
                 <p>Hora: <span>{cita.hora}</span></p>
                 <p>Sintomas: <span>{cita.sintomas}</span></p>
                  </div>
               <div className="card-footer text-muted">
               <button className="btn btn-danger" onClick={()=>eliminarCita(cita.id)}> Borrar &times;</button>
                </div>
     </div>
     </div>
     </div>
    );

}




export default Card;

  // <div clanssName="cita">
    //     <p>Mascota: <span>{cita.mascota}</span></p>
    //     <p>Mascota: <span>{cita.propietario}</span></p>
    //     <p>Mascota: <span>{cita.fecha}</span></p>
    //     <p>Mascota: <span>{cita.hora}</span></p>
    //     <p>Mascota: <span>{cita.sintomas}</span></p>
    //     <button className="button eliminar danger" onClick={()=>eliminarCita(cita.id)}>
    //         Borrar &times;
    //     </button>
    // </div>