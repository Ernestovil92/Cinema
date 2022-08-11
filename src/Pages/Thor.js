import React,{Fragment} from 'react';
const Thor = () => {
  return(
    <>
    <ul className="nav nav-tabs d-flex justify-content-end">
           <li className="nav-item">
             <a className="nav-link active" aria-current="page" href="#">En Cartelera</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="#">Proximamente</a>
           </li>
         </ul>
    <div className="d-flex justify-content-start">
      <div className="card mb-3" style={{maxWidth: '540px'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="http://www.cines.com.py/images/dinamico/peliculas/2746/afiche/images-11-mediano.jpeg?1657807200" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Thor: amor y trueno (3D)</h5>
              <p className="card-text">DIRECCIÓN: Taika Waititi.
ACTORES: Chris Hemsworth, Natalie Portman, Tessa Thompson, Christian Bale.
ACTORES SECUNDARIOS: Karen Gillan, Chris Pratt, Russell Crowe, Jaimie Alexander, Sean Gunn.
CAMEOS: Melissa McCarthy, Sam Neill, Matt Damon.
FOTOGRAFIA: Barry Baz Idoine.
MÚSICA: Michael Giacchino.
GENERO: Comic , Aventuras , Acción .
ORIGEN: Estados Unidos.
DURACION: 133
CALIFICACION: PM13
DISTRIBUIDORA: Filmagic
 </p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
      </div>




<div className="w-75">
<h4>SINOPSIS:</h4>
<p>
Regresa el Dios del Trueno, después de los eventos de Ragnarok y Avengers: End Game, Thor se embarca en un
viaje de autoexploración en el cual se cruzará con los Guardianes de la Galaxia, se enfrentará a un nuevo
villano y presenciará el surgimiento de la nueva Thor.
</p>
</div>
    </>
  )
}
export default Thor
