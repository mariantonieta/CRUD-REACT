import React from 'react'
import { useState, useEffect } from 'react';

const initialForm ={
    name: "",
    constellation: "",
    id: null,
}

 const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {
const [form, setForm] = useState(initialForm);
useEffect(() => {
if(dataToEdit){ 
  setForm(dataToEdit) 
}else{
setForm(initialForm);

};
}, [dataToEdit]);
const handleChange = (e) => {
setForm({
  ...form, 
  [e.target.name]: e.target.value,
})
} 
const handleSubmit = (e)=> {
  e.preventDefault();
  if(!form.name || !form.constellation){
    alert("Datos incompletos");
    return; 
  }
  if(form.id === null){
    createData(form)

  }else{
    updateData(form)
  }
    handleReset();
}
const handleReset =(e) =>{
  setForm(initialForm);
  setDataToEdit(null)
}


  return (
    <div>
        <h3>{dataToEdit ? "Edit" : "Add"}</h3>
        <form onSubmit={handleSubmit}>
        <input className='inputText'
        type='text' 
        name='name'
         placeholder='Name'
          onChange={handleChange}
           value={form.name} />

        <input 
        className='inputText'
        type='text'
         name='constellation' 
         placeholder='Zodiac sign'
          onChange={handleChange}
          value={form.constellation} />

        <input className='inputBtn'
        type='submit' 
        value='Submit' />
        
        <input type='reset' className='inputBtn'
         value='Reset' 
         onClick={handleReset} />
        
        
        </form>
    </div>
  )
}
export default CrudForm