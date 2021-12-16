import React , {useState} from 'react'
import FeatherIcon from 'feather-icons-react';

const TodoForm = (props) => {
    const [newTitleState , setNewTitle] = useState('')
    const [newRender , setNewRender] = useState(false)
    if(props.mode === 'edit' && !newRender){
        setNewTitle(props.todoState[0].title)
        setNewRender(true)
    }
    const newTitle = (event)=>{
        setNewTitle(event.target.value)
    }
    const addNewTodo =()=>{
        let nTitle = newTitleState;
        setNewTitle("")
        setNewRender(false)
        return props.addNewTodo(nTitle)

    }
    let btnString = 'إضافة'
    if(props.mode === 'edit')
    {
        btnString = 'تعديل'
    } 
    return (
        <div className=' todos-form '>
            <div className='todos-form_icon' onClick={props.showeComplite}>
                <FeatherIcon icon='circle' />
            </div>
            <div className='todos-form_form'>
                <input value={newTitleState} className='todo-input' type='text' placeholder='إضافة مهمة جديدة......' onChange={newTitle}/>
            </div>
            <div className='todos-form_submit'>
                <button className='btn ' onClick={addNewTodo} disabled ={newTitleState.trim() ? false : true}>{btnString}</button>
            </div>
        </div>
    )
}

export default TodoForm
