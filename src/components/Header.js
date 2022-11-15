import Button from "./Button";

export default function Header(props) {
  return (
        <header className='header'>
            <h1>Mon Todo App</h1>
            <Button onClick={props.onToggleShowAdd} text={props.showAddTodo ? 'Fermer' : 'Ouvrir'} color={props.showAddTodo ? 'red' : 'green'} />
        </header>
    );
}
