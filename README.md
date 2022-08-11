/*
import React, { Fragment, useState, useEffect } from 'react';
import Row from './Row.js';
const Datos = [
  {id:1, nombre:"Ernesto", correo:"ernesto@gmail.com",ci:53124241},
  {id:2, nombre:"Jose", correo:"jose@gmail.com",ci:23124241},
  {id:3, nombre:"Manuel", correo:"manuel@gmail.com",ci:63124241},
  {id:4, nombre:"Lujan", correo:"lujan@gmail.com",ci:73124241},
  {id:5, nombre:"Maria", correo:"maria@gmail.com",ci:83124241},
];

const Table = () => {
let Headers = ["#","Nombre","Correo"];


const [ Dato, setDato ] = useState([]);

useEffect(() => {
  const fecthData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users/")
    .then(res => res.json())
    .then(data => setDato(data))
  }
fecthData()
},[])

  return(
    <Fragment>
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
      Dato.map((items, index) => (
        <tr key={index}>
        <td>{items.id}</td>
        <td>{items.name}</td>
        <td>{items.email}</td>
        </tr>
      ))
    }
    </tbody>
    </table>
    </Fragment>
  )
}
export default Table


*/
