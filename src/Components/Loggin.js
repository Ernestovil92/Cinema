import React, {Fragment} from 'react';

const Loggin = () => {
  return(
    <>

<div className="d-flex p-4 border-top" style={{background:'#774360'}}>

<div className="p-2 flex-grow-1">
    <h1 className="text-white">Iniciar Sesion</h1>
    <form>
         <div className="mb-3">
           <label htmlFor="exampleInputEmail1" className="form-label text-white">Correo Electronico</label>
           <input type="email" className="form-control w-75" id="exampleInputEmail1" aria-describedby="emailHelp" />
           <div id="emailHelp" className="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
         </div>
         <div className="mb-3">
           <label htmlFor="exampleInputPassword1" className="form-label text-white">Contraseña</label>
           <input type="password" className="form-control w-75" id="exampleInputPassword1" />
         </div>
         <div className="mb-3 form-check">
           <input type="checkbox" className="form-check-input" id="exampleCheck1" />
           <label className="form-check-label text-white" htmlFor="exampleCheck1">Check me out</label>
         </div>
         <button type="submit" className="btn btn-success">Ingresar</button>
       </form>
</div>

<div>
<img  className="rounded" src="https://talently.tech/blog/wp-content/uploads/2021/03/marca-personal-para-ingenieros-de-software-1024x768.jpg" width={500} height={400} />
</div>



</div>




    </>
  )
}
export default Loggin
