import React from 'react'
import Todo from './Todo'
const Todos = (props) => {
    return (
        <div className='todos-list'>
            {props.todoState.map((todo)=>{
                return(
                    <Todo todo={todo} key={todo.id} changeTodo={props.changeTodo} deleteTodo={props.deleteTodo} editMode={props.editMode}/>
                )
            })}
            {props.todoState.length === 0 ? (
                <h3 className='no-todos '> لا يوجد مهام حاليا .....</h3>
            ) : null}
        </div>
    )
}

export default Todos
