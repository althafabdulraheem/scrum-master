import {useEffect} from 'react'
import styled from 'styled-components'
import moment from 'moment';
import useListActions from '../hooks/ListFunction';

const ListWrapper=styled.div`
    margin-top: 47px;
    display: flex;
    justify-content: center;
`;

const ListContainer=styled.div`
width: 877px;
height: 149px;
background-color: #151414;
border-radius: 47px;
border: ${props=>props.status==='true'?'1px dashed green':'1px dashed red'};
position:relative;

`;
const Task=styled.p`color: #ededf1;
text-align: justify;
font-weight: 700;
letter-spacing: 1px;
overflow: hidden;
margin: 31px;`;


const TaskWraper=styled.div`
display: flex;
align-items: center;
justify-content: center;
height:9px;
margin:10px;
`;

const DateWrapper=styled.div`
    display:flex;
    justify-content:space-between;
`;

const Date=styled.p`
color: #514e4e;
float: right;
padding: 13px;
font-weight: bolder;
`
const Project=styled(Date)`
    color:#6a6921;;
`;


function displayMenu(e)
{
  
    e.preventDefault();
    if(e.target.closest('.sc-gJhJTp'))
    {
        e.target.closest('.sc-gJhJTp').querySelector('ul').classList.remove('d-none')

    }
  
}

function closeMenu(e)
{
    if(e.target.closest('.sc-gJhJTp'))
    {
    e.target.closest('.sc-gJhJTp').querySelector('ul').classList.add('d-none')

    }
}



export default function List({task,date,status,id}) {
    const {updateTask,deleteTask}=useListActions();
    useEffect(() => {
        let wrapper=document.querySelectorAll('.sc-gJhJTp')
        wrapper.forEach((value)=>{
            value.addEventListener('contextmenu',displayMenu)
           
        })

        wrapper.forEach((value)=>{
            value.addEventListener('click',closeMenu)
           
        })

        
    }, []);
    // let text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pulvinar justo id felis tempus, at commodo magna venenatis. In vitae augue sed metus finibus consectetur. Nunc quis risus quam. Donec bibendum mi et condimentum convallis. Nulla quam metus, ultrices id nibh et, viverra euismod enim. Vivamus porta viverra luctus. Mauris volutpat aliquam lacus, sed interdum lacus sodales et. Phasellus mi sapien, viverra nec volutpat ut, faucibus aliquam orci.';
  return (
    <ListWrapper>
        <ListContainer status={status.toString()}>
            <DateWrapper>
                <Project>Getskills Online</Project>
                <Date>{moment(date).fromNow()}</Date>

            </DateWrapper>
            <TaskWraper>    
                <Task>{task.length > 300?
                <>
                    {task?.substring(0,300)}<span style={{color:"#2d2d80",textDecoration:'underline',cursor:'pointer'}}>read more...</span>
                </>
                :task}
                </Task>
            </TaskWraper>
            <ul className="context-menu d-none">
                <li onClick={()=>{updateTask(id)}}>Done</li>
                <li onClick={()=>{deleteTask(id)}}>Delete</li>
            </ul>
        </ListContainer>
    </ListWrapper>  
  )
                
}
