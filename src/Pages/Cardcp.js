import React,{Fragment, useState} from 'react';


const Cardcp = () => {
  return(
    <>
    <div className="row row-cols-1 row-cols-md-3 g-4">
            <div style={{width: '300px'}} className="col">
              <div style={{height: '700px'}} className="card">
                <img src="https://i.pinimg.com/originals/56/4f/80/564f801ecde598aeb8bcdb558cbb88a3.jpg" style={{height: '300px'}} alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Ornstein y Smough </h5>
                  <p className="card-text">Ornstein presumiblemente se ganó su apodo durante la guerra contra los Dragones Antiguos. Viste una armadura dorada que recuerda a un león, y porta una poderosa lanza con la que se dice que partió una roca en dos. Smough, por su parte, fue el Verdugo de Anor Londo..</p>
                </div>
              </div>
            </div>
            <div style={{width: '300px'}} className="col">
              <div style={{height: '700px'}} className="card">
                <img src="https://i.pinimg.com/736x/ba/32/29/ba32299394bea35f40bb50888c7fc2c9--dark-souls-demons.jpg" style={{height: '300px'}} alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Demonio Aries</h5>
                  <p className="card-text">Son grandes humanoides con cuatro ojos rojos brillantes y un cráneo con cuernos por cabeza. Cada Demonio de Aries posee una cola de huesos y tienen expuestos los omóplatos y la espina dorsal. También llevan una falda irregular y blanden dos.</p>
                </div>
              </div>
            </div>
            <div className="col" style={{width: '300px'}} >
              <div style={{height: '700px'}} className="card">
                <img src="https://pm1.narvii.com/6353/05083cd95d4ce54b2b2381c60d5e053dab33df7c_hq.jpg" style={{height: '300px'}}  alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Sif</h5>
                  <p className="card-text">Sif era el compañero lobo de Sir Artorias, el Caminante del Abismo. El lobo acompañó a Artorias en su misión para salvar Oolacile de las fuerzas del Abismo. Sin embargo, Artorias y Sif fueron rebasados por las fuerzas de la oscuridad, y el caballero usó su escudo para erigir una barrera sobre Sif.</p>
                </div>
              </div>
            </div>
            <div className="col" style={{width: '300px'}} >
              <div style={{height: '700px'}} className="card">
                <img src="https://pbs.twimg.com/media/EK3OojCXUAEE98M.jpg" style={{height: '300px'}} alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Caballero Artorias</h5>
                  <p className="card-text">Artorias era un valiente caballero que no retrocedía ante la adversidad, y por ello, Gwyn le regaló un anillo perfecto para él: el Anillo del Lobo. Esta sortija permite aumentar el equilibrio en gran medida, una habilidad tremendamente útil para un espadachín que nunca se rendía.</p>
                </div>
              </div>
            </div>
          </div>


    </>
  )
}
export default Cardcp
