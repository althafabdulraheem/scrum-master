export  const TaskReducer=(state,action)=>{
    let data;
    switch(action.type)
    {
        case "setData":
            // console.log(action.data.data)
           return action.data.data
            
        case "create":
           data=[...state,action.data] 
        //   localStorage.setItem('data',JSON.stringify(data))
          return data;
        
        case "update":
            console.log('update')
            break;
        case "delete":
           
            return state.filter((value)=>value._id !== action.data)

        default:
            console.log('default')
            return state;
    }
      

}

