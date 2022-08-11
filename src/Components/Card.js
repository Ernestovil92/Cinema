import React,{Fragment} from 'react';
import { NavLink } from 'react-router-dom';
const Card = () => {
  return(
    <Fragment>

<div className="d-flex justify-content-end">
<ul className="nav nav-tabs ">
       <li className="nav-item">
         <a  className="nav-link active" aria-current="page" href="#">En Cartelera</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#">Proximamente</a>
       </li>
     </ul>
</div>

    <div className="card mb-4 bg-dark" style={{maxWidth: '660px'}}>
         <div className="row g-0">
           <div className="col-md-4">
             <img src="http://www.cines.com.py/images/dinamico/peliculas/2747/afiche/images-16-mediano.jpeg?1658242204" className="img-fluid rounded-start" alt="..." />
           </div>
           <div className="col-md-8">
             <div className="card-body">
               <h5 className="card-title text-white">El Perseguidor</h5>
               <p className="card-text text-white">Finney Shaw, un niño de 13 años tímido e inteligente es secuestrado por un sádico asesino serial (Ethan Hawke) que lo encierra en un sótano donde por más que grite nadie podrá escucharlo. Cuando un teléfono negro desconectado en la pared comienza a sonar, Finney descubre que puede escuchar las voce...</p>
               <p className="card-text "><small className="text-muted">Last updated 3 mins ago</small></p>
             </div>
           </div>
         </div>
       </div>


       <div className="row row-cols-1 row-cols-md-5 g-4">
              <div className="col">
                <div className="card bg-dark">
                  <img src="http://www.cines.com.py/images/dinamico/peliculas/2740/afiche/p__ster_natalie_portman_-_thor_amor_y_trueno-mediano.jpg?1653672512" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-white">Thor: amor y trueno (3D)</h5>
                    <p className="card-text text-white">Regresa el Dios del Trueno, después de los eventos de Ragnarok y Avengers: End Game, Thor se embarca en un viaje de autoexploración.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card bg-dark">
                  <img src="http://www.cines.com.py/images/dinamico/peliculas/2739/afiche/poster-03-mediano.jpg?1653670292" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-white">Minions: Nace un villano (3D)</h5>
                    <p className="card-text text-white">Regresan los minions en una nueva aventura en la cual se encuentran con un joven Gru de tan solo 12 años cuyo único anhelo en la vida.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card bg-dark">
                  <img src="http://www.cines.com.py/images/dinamico/peliculas/2735/afiche/p__ster_lightyear-1-mediano.jpg?1653668772" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-white">Lightyear (3D)</h5>
                    <p className="card-text text-white">Película sobre el joven piloto de pruebas Buzz Lightyear quién luego se convertiría en el popular juguete que todos los niños querrían tener en toy story.</p>
                  </div>
                </div>
              </div>

            </div>


    </Fragment>
  )
}
export default Card
