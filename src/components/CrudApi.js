import React, { useState, useEffect } from 'react';
import { helpHttp } from './helpers/helpHttp'
import Loader from './Loader';
import Message from './Message';
import CrudForm from './CrudForm';

import CrudTable from './CrudTable';

const CrudApi = () => {
    const [db, setDb] = useState(null);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    let api = helpHttp();
    let url= "http://localhost:5000/people"
    useEffect(() => {
      setLoading(true);
      helpHttp()
      .get(url).then((res) =>{
      
        if(!res.err){

          setDb(res);
          setError(null)
        }else{
          setDb(null)
          setError(res)

        }
        setLoading(false)
      })
    
      
    }, [url]);

    const createData = (data)=>{
data.id =  Date.now();
let options = {body:data, headers: {"content-type":"application/json"},}
api.post(url, options).then((res)=>{
  console.log(res);
  if(!res.err){
    setDb([...db, res]);
  }else{
    setError(res)  
  }
});
      setDb([...db, data])


    }
    const updateData = (data) => {
      let endpoint = `${url}/${data.id}`;
      //console.log(endpoint);
  
      let options = {
        body: data,
        headers: { "content-type": "application/json" },
      };
  
      api.put(endpoint, options).then((res) => {
        //console.log(res);
        if (!res.err) {
          let newData = db.map((el) => (el.id === data.id ? data : el));
          setDb(newData);
        } else {
          setError(res);
        }
      });
    };
    
    const deleteData = (id) => {
      let isDelete = window.confirm(
        `¿Estás seguro de eliminar el registro con el id '${id}'?`
      );
  
      if (isDelete) {
        let endpoint = `${url}/${id}`;
        let options = {
          headers: { "content-type": "application/json" },
        };
  
        api.del(endpoint, options).then((res) => {
          //console.log(res);
          if (!res.err) {
            let newData = db.filter((el) => el.id !== id);
            setDb(newData);
          } else {
            setError(res);
          }
        });
      } else {
        return;
      }
    };
    return (
    <div className='crudWrapper'>
     <h2>People</h2>
     <CrudForm
      createData={createData}
      updateData={updateData}
       dataToEdit={dataToEdit}
      setDataToEdit={setDataToEdit} />
      {loading && <Loader/>}
      {error && <Message msg={`Error ${error.status}: ${error.statusText}`}   />}
      {db && <CrudTable 
     data={db}
     setDataToEdit={setDataToEdit}
     deleteData={deleteData}
      />}
   

     

 
     <table></table>
    </div>
  )
}
export default CrudApi;