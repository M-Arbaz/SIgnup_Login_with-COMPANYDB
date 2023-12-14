import React,{useEffect,useState} from "react"
import axios from "axios"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export default function Del(){
    const [data, update] = useState([]);
    const [state,setstate]=useState();
    useEffect(() => {
        axios.get("http://localhost:3001/read")
          .then((res) => update(res.data))
          .catch((err) => console.log(err));
      },[]);
      const token = localStorage.getItem("token")
      axios.post('http://localhost:3001/verified', {token}).then(res => {
          // console.log(res,res.data.result.is.email)
          const e=res.data.result.is.email
            setstate(e)
        })
        // console.log(arr.map(dta=>dta.id))
      const arr= data.filter(o => o.u_m === state)
      const all = arr.map(dta=>dta.id)
    const history = useHistory();
    const a=localStorage.getItem("token")
    if(!a){
       alert("you are not autherized with this page")
     history.push('/login');
     return;
    }
    const del = (e)=>{
        e.preventDefault();
        const id=e.target.elements.id.value;

        const del_id ={
            id:id
         }
         const find_id = all.findIndex(a=>a===id)
         console.log(find_id)
        //     console.log(del_id);
        if(find_id===-1){
            alert("this id record doesnot belongs to you")
            return;
        }

            try{
                const res = axios.delete(`http://localhost:3001/delete${id}`,del_id)
                console.log(res)
                alert("Employee Deleted successful")
            }
            catch (error){
                console.log(error);
            }
            e.target.reset();
            history.push('/verified/read')
    }
    return(
    <>
    <div className="s_in"><div className="f_in">
    <p>Enter ID to delete user:</p>
    <form onSubmit={del} autoComplete="off">
        <input type='text' name="id" required/>
        <input type="submit"/>
    </form>
    </div></div>
    </>
    )
}