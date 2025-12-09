import { useEffect, useState } from 'react'
import './App.css'
import {TaskList} from './Components/TaskList/TaskList'
import type { Task, TaskStatus } from './types';



function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Task 1',
      description: 'Description for Task 1',
      status: 'pending',
      priority: 'medium',
      dueDate: '2025-12-10',
    },
    {
      id: '2',
      title: 'Task 2',
      description: 'Description for Task 2',
      status: 'in-progress',
      priority: 'high',
      dueDate: '2025-12-11',
    },
  ]);
 
  // handle status
  const handelStatus = (taskId:string, newStatus: TaskStatus)=>{
    setTasks((prevTask)=>
      prevTask.map(task =>
        task.id === taskId ? {...task , status: newStatus} : task
      )
    )
  }
// delete
const handleDelete = (taskId : string)=>{
  setTasks((prevTask)=>prevTask.filter(task => task.id !== taskId))
}
  return (
    <>
    <h3>IM here</h3>
     <div>
       <TaskList 
        tasks={tasks}
        onStatusChange={handelStatus}
        onDelete={handleDelete}
       />
     </div>
    </>
  )
}

export default App
