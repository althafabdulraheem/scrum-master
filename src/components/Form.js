import React,{useState,useContext} from 'react';
import './Form.css';
import {Task} from '../TaskContext';
import {API_URL} from '../Constand';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
const Form=()=>{
    const [task,setTask]=useState("");
    const {dispatch}=useContext(Task);
    const submit=async ()=>{

        if(task.length > 5)
        {   
            // let data={task:task,status:0,date:new Date().toISOString()}
            try{
            const {data}=await axios.post(API_URL+'scrum/tasks/',{task:task})
            
           
            if(data.status)
            {
                toast.success('successfully inserted');
                 dispatch({type:'create',data:data.data})
                    setTask("");
               
            }
            else{
                console.log(data.message);
                toast.error(data.message);
            }
           
           

            }
            catch(error)
            {
              
                toast.error(error?.response?.data?.message || 'something went wrong');
            }
            
        }
       
    }
    // useEffect(() => {
        
    //     console.log(state)
    // }, [state]);
 
    return(
        <div className="form-wrapper">
            <div className="form-container">
                <div className="input-field text-field">
                    <input type="text"  value={task} placeholder='enter task' onChange={(e)=>setTask(e.target.value)}/>
                </div>
                <div className="input-field">
                  <select name="" id="">
                    <option value="">-Select Project-</option>
                    <option value="ecard">Ecard</option>
                  </select>
                </div>
               <button className='btn-submit' onClick={submit}>save</button>
            </div>
        
        </div>

    )
}

export default Form;