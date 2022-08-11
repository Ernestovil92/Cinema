import React, {Fragment} from 'react';
const Cines = () => {

  return(
    <Fragment>
    <div className="d-flex justify-content-end">
    <ul className="nav nav-tabs ">
           <li className="nav-item">
             <a className="nav-link active" aria-current="page" href="#">En Cartelera</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="#">Proximamente</a>
           </li>
         </ul>
    </div>
    <div className="row row-cols-1 row-cols-md-2 g-4 " style={{maxWidth: '660px'}}>

        <div className="col">
          <div className="card">
          <a href="CineItauSol">
            <img src="http://www.cines.com.py/images/dinamico/cines/2/logo/itaudelsol-normal.jpg?1313593865" className="card-img-top" alt="..." />
            </a>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="http://www.cines.com.py/images/dinamico/cines/30/logo/cinemark_banner_chico-normal.jpg?1463590455" className="card-img-top" alt="..." />
          </div>
        </div>

            <div className="col">
              <div className="card">
                <img src="http://www.cines.com.py/images/dinamico/cines/33/logo/mariano_banner_chico-normal.jpg?1481817316" className="card-img-top" alt="..." />
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src="http://www.cines.com.py/images/dinamico/cines/35/logo/sanlo_banner_chico-normal.jpg?1544025176" className="card-img-top" alt="..." />
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src="http://www.cines.com.py/images/dinamico/cines/21/logo/real_chico_web-normal-normal.jpg?1608588082" className="card-img-top" alt="..." />
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src="http://www.cines.com.py/images/dinamico/cines/31/logo/cerro_alto_banner_chico-normal.jpg?1463768341" className="card-img-top" alt="..." />
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src="http://www.cines.com.py/images/dinamico/cines/22/logo/cineart_cde_chico-normal.jpg?1399491583" className="card-img-top" alt="..." />
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src="http://www.cines.com.py/images/dinamico/cines/39/logo/zone_ch-normal-normal.jpg?1614813188" className="card-img-top" alt="..." />
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src="http://www.cines.com.py/images/dinamico/cines/18/logo/hiper_banner_chico-normal.jpg?1463762548" className="card-img-top" alt="..." />
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src="http://www.cines.com.py/images/dinamico/cines/25/logo/pinedo_banner_chico-normal.jpg?1463763115" className="card-img-top" alt="..." />
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src="http://www.cines.com.py/images/dinamico/cines/10/logo/cines_del_mall-normal.jpg?1313593870" className="card-img-top" alt="..." />
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src="http://www.cines.com.py/images/dinamico/cines/1/logo/villamorra_banner_chico-normal.png?1505850344" className="card-img-top" alt="..." />
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src="http://www.cines.com.py/images/dinamico/cines/34/logo/fuente_banner_chico-normal.jpg?1499352789" className="card-img-top" alt="..." />
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src="http://www.cines.com.py/images/dinamico/cines/32/logo/oviedo_banner_chico-normal.jpg?1481817392" className="card-img-top" alt="..." />
              </div>
            </div>




            </div>

    </Fragment>
  )
}
export default Cines
