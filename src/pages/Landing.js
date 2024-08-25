import React,{useContext,useEffect,useState} from 'react'
import {Form,List} from '../components';
import {Task} from '../TaskContext';
import axios from 'axios';
import {API_URL} from '../Constand';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Grid } from 'react-loader-spinner'
import useAuthHook from '../hooks/AuthFunction';
const Landing=()=>{

    const {checkToken}=useAuthHook()
    const[loader,setLoader]=useState(true)
    const {data}=useContext(Task)
    const {dispatch}=useContext(Task);
    useEffect(()=>{
        checkToken()  //cheking token exists or not

        async function fetch()
        {
        try{
            const {data}=await axios.get(API_URL+'scrum/tasks/')
            if(data.status)
            {
                dispatch({type:'setData',data:data})
                setLoader(false)
            }
            else{
                toast.error(data.message);
                console.log(data.message)
            }
        }
        catch(error)
        {

            console.log(error);
            toast.error('something went wrong');
        }
    }
        fetch();
        
       
    },[dispatch,checkToken])
    
   
   
    return(<>

           {loader?<div className="loader-wrapper"><Grid visible={true} height="80"  width="80"  color="#001aff"  ariaLabel="grid-loading"  radius="12.5"  wrapperStyle={{}}  wrapperClass="grid-wrapper"  /></div>:
            <>
            <h1 align="center">Scrum Master</h1>
            <Form/>    
            {data?.length > 0&& data.map((value,index)=>(<List key={index} task={value.task} status={value.status} date={value.createdAt} id={value._id} />))}
            
            </>}
            
    </>)
}

export default Landing;