import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Submit(props) {
  const submit = async (e) => {
    e.preventDefault();
    const id = e.target.elements.id.value;
    const name = e.target.elements.name.value;
    const jd = e.target.elements.jd.value;
    const content = e.target.elements.content.files[0];
    const u_m= props.email;
    const a_id= props.id;
    const user = {
      u_m:u_m,
      a_id:a_id,
      id: id,
      name: name,
      JD: jd,
      content:content
    };
  
    try {
      const res = await axios.post(`http://localhost:3001/create`, user,{
        headers:{
          'Content-Type': 'multipart/form-data'
        }})
        if(res.data.warn==="same"){
          alert("Employee id or name cannot be same kindly change ths")
          return;
        }
      alert('Form submitted successfully');
    } catch (error){
      alert('Hey bro you got Error');
      console.log(error)
    }
    e.target.reset();
  };
  
  return (
    <>
            <div className="s_in">
            <div className="f_in">
            <p>Submit to backend:</p>
           
      <Link to={'/verified/update'} target="_blank">Update record</Link>
      <Link to={'/verified/delete'} target="_blank">delete record</Link>
       Email:{props.email}<br/> ID: {props.id}
      <form onSubmit={submit} autoComplete="off" encType="multipart/form-data" >
        <input type="text" name="id" placeholder="Enter Id here"/>
        <br/>
        <input type="text" name="name" placeholder="Enter Name here"/>
        <br/>
        <input type="text" name="jd" placeholder="Enter Job description" />
        <br/>
        <input type="file" name='content'/>
        <input type="submit"/>
        
      <Link to={'/verified/read'} target="_blank">View_Record</Link>
      </form>
  

            </div>
        </div>
        </>
  );
};
