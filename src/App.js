import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// hooks
import { useState } from 'react';

function App() {

  // useState renvoit un array avec deux valeurs
  // dans listTodos je variabilise la première valeur du tableau renvoyé par le useState
  // listTodos est ma variable d'état
  // setListTodos je variabilise la deuxième valeur du tableau renvoyé par le useState
  // setListTodos permet de mettre à jour listTodos
  const [listTodos, setListTodos] = useState([
    {
      id: 1,
      text: 'Sortir les poubelles',
      day: '12 Sept 1991',
      reminder: true
    },
    {
      id: 2,
      text: 'Enmener le chien chez le véto',
      day: '23 Mars 2022',
      reminder: false
    },
    {
      id: 3,
      text: 'Apprendre React',
      day: '27 Sept 2022',
      reminder: false
    },
  ]);

  // Par défaut on montre le formulaire
  const [showAddTodo, setShowAddTodo] = useState(true);

  function handleAdd(todo) {
    console.log(todo);
    const id = Math.floor(Math.random() * 100000) + 1; // 1 et 100000
    const newTodo = { ...todo, id }; // j'ajoute l'id à mon todo
    setListTodos([...listTodos, newTodo]);
  }

  function handleDelete(id) {
    console.log(id);
    const listFiltered = listTodos.filter(
      todo => todo.id !== id
    );

    setListTodos(listFiltered);
  }

  function handleToggleReminder(id) {
    setListTodos(
      listTodos.map(
        todo => todo.id === id ? {...todo, reminder : !todo.reminder} : todo
      )
    );
  }

  return (
    <Router>
      <div className="container">

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header onToggleShowAdd={ () => setShowAddTodo(!showAddTodo) } showAddTodo={showAddTodo}/>

                {
                  showAddTodo && <AddTodo addTodo={handleAdd} />
                }

                <Todos onDblClick={handleToggleReminder} onDelete={handleDelete} listTodos={listTodos} />
                <Footer />
              </>
            }
          />

            {/* Définition de la route pour la page About */}
            <Route path='/about' element={<About />} />
          
        </Routes>
      </div>
  </Router>
  );
}

export default App;
