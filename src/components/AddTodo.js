
import {useState} from 'react';

export default function AddTodo(props) {

  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    props.addTodo(
      { text, day, reminder }
      // { text:text, day:day, reminder:reminder }
    );

    // Je réinitialise les champs après ajout
    setReminder(false);
    setText('');
    setDay('');
  }

  return (

    <form className='add-form' onSubmit={handleSubmit}>

      <div className='form-control'>
        <label>Todo</label>
        <input type='text' value={text} onChange={ (e) => setText(e.target.value) } placeholder='Ajouter un Todo'/>
      </div>

      <div className='form-control'>
        <label>Jour & Heure</label>
        <input type='text' value={day} onChange={ (e) => setDay(e.target.value) } placeholder='Jour & Heure'/>
      </div>

      <div className='form-control form-control-check'>
        <label>Ajouter un rappel</label>
        <input type='checkbox' checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} placeholder='Jour & Heure'/>
      </div>

      <input type='submit' className='btn btn-block' value='Enregistrer' />

    </form>

  );
}
