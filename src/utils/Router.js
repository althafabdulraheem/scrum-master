import {Routes,Route} from 'react-router-dom';
import {Landing,Login} from '../pages';

const Router =()=>{
    return (
        <Routes>
          
            <Route path='/' element={<Landing/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            
        </Routes>
    )
}

export default Router;