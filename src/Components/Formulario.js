import React, {Fragment, useState} from 'react';
import uuid from 'uuid/v4';

const Formulario = ({createAppoint}) => {
     
        //crear state de citas

        const [appid , modApooid] =useState({
         pet:'',
         owner:'',
         date:'',
         time:'',
         description:''
        });

        const[error, addError] = useState(false)




        //funcion que se ejecuta cada que el usuario escribe en el imput
        
        const modState = e =>{
        modApooid({
            ...appid,
            [e.target.name]: e.target.value
        })

        }
        //extraer los valores 

        const {pet,owner, date, time, description } = appid;

        //cuando el usuario hace submit
        const submitAppid = e =>{
        e.preventDefault();

         //validar formulario
        if (pet.trim()=== '' || owner.trim()=== '' ||
           date.trim()=== ''|| time.trim()=== ''||description.trim()=== '' ) {

            addError(true);
        return;
            
        }
        //Eliminar el mensaje previo
        addError(false);

         // Asignar un ID
         appid.id = uuid();
         
         

         // Crear la cita to

         createAppoint(appid);



         // Reiniciar el formulario
         modApooid({
            pet:'',
            owner:'',
            date:'',
            time:'',
            description:''
         })


        }



    return(
       <Fragment>
         <h2>Create Appointment</h2>

         {error ? <p className="alerta-error">Todos los campos son obligatorios </p> : null}

         <form
         onSubmit={submitAppid}
         >
           <label>Pet Name</label>
             <input
                 type="text"
                 name ="pet"
                 className="u-full-width"
                 placeholder="Pet Name"
                 onChange={modState}
                 value={pet}
             />
             <label>Pet Owner</label>
             <input
                 type="text"
                 name ="owner"
                 className="u-full-width"
                 placeholder=" Pet Owner"
                 onChange={modState}
                 value={owner}
             />
              <label>Date</label>
             <input
                 type="Date"
                 name ="date"
                 className="u-full-width"
                 onChange={modState}
                 value={date}
              
             />
              <label>Hour</label>
             <input
                 type="time"
                 name ="time"
                 className="u-full-width"
                 onChange={modState}
                 value={time}
                
             />
              <label>Description</label>
             <textarea className="u-full-width"
             name ="description"
             onChange={modState}
             value={description}
        
             ></textarea>
             

             <button
             type="submit"
             className="u-full-width button-primary"
             
             >Add Appointment</button>
            
         </form>

       </Fragment>
    );
}
 
export default Formulario;