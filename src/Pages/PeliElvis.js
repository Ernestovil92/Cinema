import React,{Fragment} from 'react';
import ReactPlayer from 'react-player';
const PeliElvis = () => {
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
              <h5 className="card-title">Elvis</h5>
              <p className="card-text">DIRECCIÓN: Baz Luhrmann.
ACTORES: Austin Butler, Olivia DeJonge, Tom Hanks.
ACTORES SECUNDARIOS: Maggie Gyllenhaal, Rufus Sewell.
GUION: Baz Luhrmann.
FOTOGRAFIA: Mandy Walker.
GENERO: Drama , Biográfica .
ORIGEN: Estados Unidos.
DURACION: 159 Minutos
CALIFICACION: Apta mayores de 13 años
DISTRIBUIDORA: Rola</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
      </div>

<ReactPlayer url='https://www.youtube.com/watch?v=ywXv9Uwv2sg&feature=emb_logo' controls/>


<div className="w-75">
<h4>SINOPSIS:</h4>
<p>
Sigue la vida y la música de Elvis Presley y su complicada relación con su enigmático agente,
el coronel Tom Parker (interpretado por Tom Hanks).
Desde el ascenso de Presley a la fama hasta su estrellato sin precedentes, en el contexto del
panorama cultural en los Estados Unidos. En el centro de ese viaje se encuentra una de las personas
más significativas e influyentes en la vida de Elvis, Priscilla Presley.
</p>
</div>
      </>
  )
}
export default PeliElvis
