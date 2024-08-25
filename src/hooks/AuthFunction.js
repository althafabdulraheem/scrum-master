import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../Constand';
import { toast } from "react-toastify";

const useAuthHook=()=>{
   const navigate=useNavigate();
   const Login=async(email,password)=>{
        try{
            const response=await axios.post(`${API_URL}auth/login`,{email:email,password:password});
            if(response.status ===200)
            {
               if(response?.data?.status)
               {
                  let token=response.data.token;
                 if(token)
                 {
                     localStorage.setItem('token',token);
                     navigate('/');
                 }
               }
            }

        }
        catch(error)
        {
            console.log(error);
            toast.error(error?.response?.data?.message);
        }
   }

   const checkToken=()=>{
      let token=localStorage.getItem('token')
      if(token)
      {
         navigate('/')
      }
      else{
         navigate('/');
      }
   }

   return {Login,checkToken}
}

export default useAuthHook;