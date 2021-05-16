
import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './Components/Formulario';
import Appoint from './Components/Appoint';

function App() {

  // citas en local storage 

  let citasIniciales = JSON.parse(localStorage.getItem('appoint'));
  if (!citasIniciales){
    citasIniciales=[];
  }

  //Arreglo de citas to
const [appoint, keepAppoint] = useState(citasIniciales);

//useEffect para realizar ciertas operaciones cuando el state cambia
useEffect(()=>{

 if(citasIniciales){ 
   localStorage.setItem('appoint',JSON.stringify(appoint));
 }else{
   localStorage.setItem('appoint',JSON.stringify([]));
 }

}, [appoint, citasIniciales]);



// funcion que tome las citas actuales y agregue la nueva 
const createAppoint= appid=> {

  keepAppoint([
    ...appoint,
     appid
  ]);
}
//funcion que elimina una cita por su id 

const deleteAppoint = id =>{
 const newAppoint = appoint.filter(appid => appid.id !== id)
 keepAppoint(newAppoint);
}

//mensaje condicional 

const title = appoint.length === 0 ? 'No Appointments': 'Manage your Appointments';

  return (
  <Fragment>
<h1> Appointment Manager</h1>

<div className="container">
  <div className ="row">
   <div className= "one-half column">
      <Formulario
       createAppoint ={createAppoint}
      />
   </div>
   <div className ="one-half column">
      <h2>{title}</h2>
      {appoint.map(appid =>(
        <Appoint
        key={appid.id}
        appid={appid}
        deleteAppoint={deleteAppoint}

        />
      ))}
   </div>
  </div>
</div>

  </Fragment>
  )};

export default App;
