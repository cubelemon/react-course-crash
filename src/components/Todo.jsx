import './Todo.css'



/* function Todo(props){} 

this is when you wanna use other properties, by accessing it like {props.title }
*/
function Todo({title, paragraph, onTodoDelete}) {


    return (
        <div className='todo'>
        <h2> {title} </h2> 
        <p>{paragraph}</p>
        <button onClick={onTodoDelete}>Delete</button>
        {/* DO NOT USE () WHEN CALLING A FUNCTION */}

        {/* if you need to, use onClick{() => deleteTodo(1)}
        the arrow makes it so it does not execute immediately  
        */}
      </div>
    )
}

export default Todo