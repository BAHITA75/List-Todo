import Todo from "./Todo";

export default function Todos(props) {
  return (
    <>
      {
        props.listTodos.map(
          todo => <Todo onDblClick={props.onDblClick} onDelete={props.onDelete} key={todo.id} todo={todo} />
        )
      }
    </>
  );
}
