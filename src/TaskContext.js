import {createContext,useReducer} from 'react';
import { TaskReducer } from './TaskReducer';

const Task=createContext();
const TaskContext=({children})=>{
const INITIAL_STATE=[];
// const localData=JSON.parse(localStorage.getItem('data'))
// const INITIAL_STATE=localData?localData:[];
const[state,dispatch]=useReducer(TaskReducer,INITIAL_STATE)
    return (<Task.Provider value={{data:state,dispatch:dispatch}}>
        {children}
    </Task.Provider>)

}


export default TaskContext;
export {Task};