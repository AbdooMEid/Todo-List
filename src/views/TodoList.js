import React, {useState}from 'react'
import TodoForm from '../components/todos/TodoForm'
import Todos from '../components/todos/Todos'



const TodoList = () => {
    // const intilalStat = [
    //     {id:1 , title:'شراء سيارة' , done:false},
    //     {id:2 , title:'كتابة كود' , done:true},
    //     {id:3 , title:'مزاكرة كورس الرياكت' , done:false},
    //     {id:4 , title:'تكملة مشروع المتجار' , done:true},
    // ]
    const intilalStat = localStorage.getItem('todos') ?JSON.parse(localStorage.getItem('todos')) : []

    const [todoState , setTodoState] = useState(intilalStat)
    const [mode , setMode] = useState('add')
    const [activeMode , setActiveMode] = useState({})
    const setLocal = (todoState)=>{
        localStorage.setItem('todos',JSON.stringify(todoState))
    }
    const changeTodo =(id)=>{
        const curTodo = [...todoState];
        const newTodo = curTodo.map((el)=>{
            if(el.id === id)
            {
                el.done = !el.done
                return el;
            }
            return el;
        })
        setLocal(newTodo)
        setTodoState(newTodo);
    }
    const deleteTodo =(id)=>{
        const curTodo = [...todoState];
        const newTodo = curTodo.filter((el)=>el.id !== id)
        setLocal(newTodo)
        setTodoState(newTodo);
    }
    const addNewTodo = (title)=>{
        if(mode !== 'edit'){
            const newTodo = {
                id: Date.now(),
                title : title , 
                done: false
            }
            const newTodos = [...todoState , newTodo];
            setTodoState(newTodos)
        }else{
            const curTodos = [...todoState]
            const newTodos = curTodos.map((el)=>{
                if(el.id === activeMode.id)
                {
                    el.title = title;
                    return el;
                }
                return el;
            });
            setLocal(newTodos)
            setTodoState(newTodos)
            setActiveMode({})
            setMode('add')
        }
        
    }
    const showeComplite = ()=>{
        if(mode === 'notDone')
        {
            setMode('add')
        }else{
            setMode('notDone')
        }
    }
    let curentTodos = [...todoState]
    if(mode === 'notDone')
    {
        curentTodos = curentTodos.filter((todo)=> !todo.done)
    }
    const editMode = (todo)=>{
        setMode('edit')
        setActiveMode(todo)
    }
    return (
        <main>
        <div className='container'>
            <div className='todos'>
                
                <TodoForm todoState ={mode !== 'edit' ? curentTodos : [activeMode]} addNewTodo={addNewTodo} showeComplite={showeComplite} mode={mode}/>
                <Todos todoState ={mode !== 'edit' ? curentTodos : [activeMode]} changeTodo={changeTodo} deleteTodo={deleteTodo} editMode={editMode} />
            </div>
        </div>
        </main>
    )
}

export default TodoList
