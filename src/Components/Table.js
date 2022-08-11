import React, { Fragment, useState, useEffect } from 'react';
import Row from './Row.js';
const Datos = [
  {id:1, nombre:"Ernesto", correo:"ernesto@gmail.com"},
  {id:2, nombre:"Jose", correo:"jose@gmail.com"},
  {id:3, nombre:"Manuel", correo:"manuel@gmail.com"},
  {id:4, nombre:"Lujan", correo:"lujan@gmail.com"},
  {id:5, nombre:"Maria", correo:"maria@gmail.com"},
];

const Table = () => {

let Headers = ["#","Nombre","Correo","Editar"];
const [ Dato, setDato ] = useState([]);
useEffect(() => {
  setDato(Datos);
},[])
  return(
    <Fragment>
    <div className="ml-4">
    <table className="table table-striped" >
    <thead>
    <tr className="bg-warning">
    {
      Headers.map((head, index)=>(
        <th key={index}>{head}</th>
      ))
    }
    </tr>
    </thead>
    <tbody>
    {
      Dato.map((datos, index) => (
        <Row datos={datos} key={index}/>
      ))
    }
    </tbody>
    </table>
    </div>
    </Fragment>
  )
}
export default Table
