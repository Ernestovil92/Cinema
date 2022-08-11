import React,{Fragment} from 'react';
const ElTelefonoNegro = () => {
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
              <h5 className="card-title">El teléfono negro</h5>
              <p className="card-text">DIRECCIÓN: Scott Derrickson.
ACTORES: Ethan Hawke, Mason Thames.
ACTORES SECUNDARIOS: Jeremy Davies.
GUION: Scott Derrickson.
FOTOGRAFIA: Brett Jutkiewicz.
GENERO: Terror.
ORIGEN: Estados Unidos.
DURACION: 102 Minutos
CALIFICACION: Apta mayores de 13 años
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
Finney Shaw, un niño de 13 años tímido e inteligente es secuestrado por un sádico asesino serial (Ethan Hawke)
que lo encierra en un sótano donde por más que grite nadie podrá escucharlo. Cuando un teléfono negro
desconectado en la pared comienza a sonar, Finney descubre que puede escuchar las voces de las víctimas
anteriores del asesino.
</p>
</div>
    </>

  )
}
export default ElTelefonoNegro
