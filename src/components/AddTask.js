import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/actions'

const AddTask = () => {
  const dispatch = useDispatch()
  const [Kelma, setKelma] = useState("")
  return (
    <div>
      <input onChange={(e) => setKelma(e.target.value)} type="text" value={Kelma}/>
      <button onClick={() => dispatch(addTask({id:Date.now(),action:Kelma, isDone:false}))}>Add Task</button>
    </div>
  )
}

export default AddTask

