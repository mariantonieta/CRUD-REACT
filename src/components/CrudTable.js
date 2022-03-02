import React from 'react'
import CrudTableRow from './CrudTableRow'
 
const CrudTable = ({data, setDataToEdit, deleteData}) => {
  return (
    <div className='table'>
        
        <h4>Data Table</h4>
        
        <table>
        <thead>
        
        <tr>
        <th>Name</th>
        <th>Zodiac sign</th>
        <th>Actions</th>

        </tr>

        </thead>
        <tbody> {data.length > 0 ? (
              (data.map(el => (
              <CrudTableRow key={el.id} 
              el={el} 
              setDataToEdit={setDataToEdit} 
              deleteData={deleteData} /> 
              ))
              )):(
                <tr>
          <td codSpan="3">Sin datos</td>
          </tr>
          )}
        </tbody>
        </table>





    </div>
    
  )
}

export default CrudTable