import React from 'react';

const Appoint = ({appid, deleteAppoint}) =>(  
    <div className="cita">
        <p>Pet: <span>{appid.pet}</span> </p>
        <p>owner: <span>{appid.owner}</span> </p>
        <p>date: <span>{appid.date}</span> </p>
        <p>time: <span>{appid.time}</span> </p>
        <p>description: <span>{appid.description}</span> </p>
        <button className="button eliminar u-full-width" 
        onClick={()=> deleteAppoint (appid.id)}  >
        Delete &times;
        </button>
    </div>


);

 
export default Appoint;