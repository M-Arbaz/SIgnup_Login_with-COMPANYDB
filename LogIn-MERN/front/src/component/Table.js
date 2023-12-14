import React,{useState,useEffect} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
export default function Table(props){
    const history= useHistory();
    const [data, update] = useState([]);
    const [state,setstate]=useState()

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

    const a=localStorage.getItem("token")
    if(!a){
       alert("you are not autherized with this page")
     history.push('/login');
     return;
    }
    return (
        <>
        <div className="m_t">

            <table >
                <thead>
                    <tr className="tr">
                        <th>Admin Email</th>
                        <th>Admin ID</th>
                        <th>Employee ID/roll</th>
                        <th>Employee Name</th>
                        <th>Employee JD</th>
                        <th>Picture</th>
                    </tr>
                </thead>
                <tbody>
                    {arr.map(dta => (
                        <tr key={dta.id} >
                            <td>{dta.u_m}</td>
                            <td>{dta.a_id}</td>
                            <td>{dta.id}</td>
                            <td>{dta.name}</td>
                            <td>{dta.JD}</td>
                            <td>
                               <img src={dta.file} alt="img" /> </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </>
    )
}
