import React, { useContext, useEffect } from 'react'
import NewTodo from './NewTodo'
import Todo from './Todo'
import { useState } from 'react'
import './Todo.css'


export default function Todos() {
// const {to,update} = useContext(New);
// useEffect(() => {
//  update()
// }, [])
const [Todos, setTodos] = useState(
  localStorage.getItem("Todos")?
  JSON.parse(localStorage.getItem("Todos")):[]
)


const addNewTodo=(TodoValue)=>{
  if(TodoValue){
    const todoarray=[...Todos];
    todoarray.push({
      id: new Date().getTime(),
      value: TodoValue,
      isdone: false
    })
    updatestate(todoarray);
  }

}

const updatestate=(todos)=>{
  setTodos(todos);
  localStorage.setItem("Todos",JSON.stringify(todos));
}

const ondelete=(todoid)=>{
  const todoarray2=Todos
  let todoarray=todoarray2.filter(item=>item.id!==todoid);
  updatestate(todoarray);
}
const handeldone=(todoid)=>{
  const todoarray=[...Todos];
  todoarray.map(item=>{
    if(item.id===todoid){
      item.isdone=!item.isdone
    }
    return item;
  }
    )
    updatestate(todoarray)
}
const handeledit=(todo,todoid)=>{
  const todoarray=[...Todos];
  todoarray.map(item=>{
    if(item.id===todoid){
      item.value=todo
    }
    return item
  })
  updatestate(todoarray)
}

  return (
    // <div className="box">
<div className='container my-3'>
    <div className="box2">
      <div className="title"> 
    <h1 >Todo List</h1>
   
    
      </div>
       {
        Todos.length===0? "there are no todos":
        Todos.map((item,index) => {
          return <Todo key={index}
          todo={item}
          delete={ondelete}
          handeldone={handeldone}
          handeledit={handeledit}
          index={index+1}
          /> 
        })
       }
        
      <NewTodo addtodo={addNewTodo}/>
    </div>
    </div>
       
    // </div>
    

  )


}
