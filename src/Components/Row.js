import React, { Fragment } from 'react';
const Row = ({datos}) => {

  return(
    <Fragment>
    <tr>
    <td>{datos.id}</td>
    <td>{datos.nombre}</td>
    <td>{datos.correo}</td>
    <td>
    <button className="mr-4 bg-primary border"><i className='bx bxs-edit-alt'></i></button>
    <button className="ml-4 bg-danger border"><i className='bx bxs-trash '></i></button>
    </td>
    </tr>
    </Fragment>
  )
}
export default Row
