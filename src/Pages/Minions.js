import React,{Fragment} from 'react';
const Minions = () => {
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
              <h5 className="card-title">Minions: Nace un villano (3D)</h5>
              <p className="card-text">
DIRECCIÓN: Kyle Balda, Brad Ableson, Jonathan del Val.
VOCES ORIGINALES: Steve Carell, Pierre Coffin, Taraji P. Henson, Jean-Claude Van Damme, Michelle Yeoh, Danny Trejo, Julie Andrews, Russell Brand, Alan Arkin.
GUION: Matthew Fogel.
MÚSICA: Heitor Pereira.
GENERO: Infantil , Familiar , Comedia , Animación .
ORIGEN: Estados Unidos.
DURACION: 90 Minutos
CALIFICACION: ATP
DISTRIBUIDORA: Filmagic</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
      </div>




<div className="w-75">
<h4>SINOPSIS:</h4>
<p>
Regresan los minions en una nueva aventura en la cual se encuentran con un joven Gru de tan solo 12 años cuyo
 único anhelo en la vida es convertirse en el villano más grande del mundo.
</p>
</div>
    </>

  )
}
export default Minions
