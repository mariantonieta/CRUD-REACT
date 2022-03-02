import React from 'react'

const CrudTableRow = ({el, setDataToEdit, deleteData}) => {
let {name, constellation, id} = el;
  return (
    <tr className='tableDatos'>
    <td>{name}</td>
    <td>{constellation}</td>
    <td>
        <button onClick={() => setDataToEdit(el)} className='btnEdit'>Edit</button>
        <button onClick={()=> deleteData(id) } className='btnDelete'>Delete</button>
    
    </td>

    </tr>
    
  )
}

export default CrudTableRow