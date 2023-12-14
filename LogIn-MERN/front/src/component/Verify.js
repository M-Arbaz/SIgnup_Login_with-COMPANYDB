import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Submit from './Submit'
export default function Verify() {

  const history = useHistory();
  const [data, update] = useState([]);
   const [state,setstate]=useState();

  const token=localStorage.getItem("token");
  if (!token) {
    alert("you are not alowed to this page")
    history.push('/login')
  }
    axios.post('http://localhost:3001/verified', {token}).then(res => {
      const e=res.data.result.is.email;
  
        setstate(e)
    })
      .catch(error => {
        console.log(error)
      })
      useEffect(() => {
       axios.get("http://localhost:3001/super")
        .then((res) => update(res.data.persons))
        .catch((err) => console.log(err));
    }, [])
 
  for(let i= 0 ; i< data.length; i++){
    if (data[i].email===state){
      // console.log(data[i]._id)
      update(data[i]._id)
    }
  }


  return (
    <div className="fl">
  <p>Only autherized person can visit here </p>
  
  <Submit email={state} id={data} />
    </div>
  )
}
