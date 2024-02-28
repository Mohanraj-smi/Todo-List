import { useState } from 'react';
import './App.css';
import check from './Assests/check.svg';
import trash from './Assests/trash.svg';

function App() {
  //set Task state
  const[Task,setTask]=useState("");
  const[NewTask,setNewTask]=useState([]);


  //Input value Function
  const HandleChange=(event)=>{
    setTask(event.target.value);
    
    
  }

  // ADD Tasks
const HandleADD=()=>{
  if(Task.trim() !==""){
    setNewTask([...NewTask,Task]);
    setTask("");
    console.log(Task);
  }
}

//Delete Tasks
const HandleDelete=(index)=>{
  const update=[...NewTask];
  update.splice(index,1);
  setNewTask(update);
}


  return (
    <div className="App">     
     <div className='todo-list'>
     <h2 id='head'>TODO-LIST !</h2>
      <input type='text' placeholder='Enter the Task' value={Task} onChange={HandleChange}/>
      <button onClick={HandleADD}>ADD</button>
      <div className='todo-body'>
          <ul>  
          {NewTask.map((task,index)=>{
           return (
            <li key={index}>{task} 
            <img src={check} alt='check' className='check-icon' />
            <img src={trash} onClick={()=>HandleDelete(index)} alt='' className='trash-icon' />
            </li>
           )
          })}
        </ul>            
      </div>
     </div>
    </div>
  );
}

export default App;
