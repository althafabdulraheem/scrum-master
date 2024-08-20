import {useContext} from 'react'
import { API_URL } from '../Constand'
import axios from 'axios';
import { toast } from "react-toastify";
import {Task} from '../TaskContext';

const useListActions=()=>{
    const {dispatch}=useContext(Task);
    const deleteTask=async(id)=>{
        try{
            const response=await axios.delete(`${API_URL}scrum/tasks/${id}`);
            if(response?.status === 200)
            {
               
                await dispatch({type:'delete',data:id})
                toast.success('successfully deleted ');
                
            }
            else{
                toast.error(response?.data?.message)
            }
            
        }
        catch(error)
        {
            toast.error(error)
        }
    }
    
    const updateTask=async(id)=>{
        const response=await axios.put(`${API_URL}scrum/task/${id}`);
            if(response?.status === 200 && response.data?.status)
            {
                console.log(response);
                toast.success('successfully updated ');
                
            }
            else{
                toast.error(response?.data?.message)
            }
    }

    return {updateTask,deleteTask}
}


export default useListActions;