import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Update(){
   const [data, update] = useState([]);
   const [state,setstate]=useState();
   useEffect(() => {
       axios.get("http://localhost:3001/read")
         .then((res) => update(res.data))
         .catch((err) => console.log(err));
     }, []);
     const token = localStorage.getItem("token")
     axios.post('http://localhost:3001/verified', {token}).then(res => {
        
         const e=res.data.result.is.email
           setstate(e)
       })
  
     const arr= data.filter(o => o.u_m === state)
     const all = arr.map(dta=>dta.id)
   const history = useHistory()
   const update1= async (e)=>{
      e.preventDefault();
       const id = e.target.elements.id.value;
       const name = e.target.elements.name.value;
       const jd = e.target.elements.jd.value;
     
       const upd ={
          id:id,
          name:name,
          JD:jd
  
       }
       const find_id = all.findIndex(a=>a===id)
        console.log(find_id)
       if(find_id===-1){
           alert("this id record doesnot belongs to you")
           return;
       }
       try{
          const res = await axios.put(`http://localhost:3001/update${id}`, upd)
  
          alert("Data updated succesful.")
       }
       catch (error){
          alert("can't update data at this moment")
          console.log(error)
       }
       e.target.reset();
  }
   const a=localStorage.getItem("token")
   if(!a){
      alert("you are not autherized with this page")
    history.push('/login');
    return;
   }
    return(
        <>       
        <div className="s_in">
        <div className="f_in">
        <p>Update data on base of id:</p>
        <form onSubmit={update1} autoComplete="off">
           
          <input type='text' name='id'  placeholder="Enter id here" required/>
          <br/>
          <input type='text' name='name' placeholder="Enter name here" required/>
          <br/>
          <input type='text' name='jd' placeholder="Enter job description here" required/>
          <br/>
          {/* it will be done soon */}
          {/* <input type='file' name='content'/> */}
          
        <input type='submit'/>
        </form>
        </div></div>
        </>
    )
}
