import {FaTimes} from 'react-icons/fa';

export default function Todo(props) {

    function handleClick(id) {
        props.onDelete(id);
    }

  return (
        // <div className='task reminder'>
        <div onDoubleClick={ () => props.onDblClick(props.todo.id) } className={ `task ${props.todo.reminder ? 'reminder' : ''}  ` }>
            <h3>{props.todo.text} <FaTimes onClick={() => handleClick(props.todo.id)} style={ {color:'red'} } /> </h3>
            <p>{props.todo.day}</p>
        </div>
    );
}