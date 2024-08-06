import Todo from './components/Todo'
import Title from './components/Title'
import Modal from './components/Modal'
import './App.css';
import React, { useState } from 'react';
import Counter from './components/Counter'

function App() {
  const [showModal, setShowModal] = useState(false);

  return<Counter />

  return (
    <div>
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value) 
        }}/>
        <button onClick={() => setShowModal(true)}>Add To Do</button>
      </div>
      <div className='todo__wrapper'>
      <Todo title="Finish FrontEnd Simplified"
            paragraph="Code along with Frontend Simplified step by step."/>
      {/* must use {} if you're passing in any type od datat except for a string */}
      <Todo title="Finish Interview Section"
            paragraph="Finish every interview questions in the next 6 weeks"/>
      <Todo title="Land a 100K Job"
            paragraph="Apply to 100 Jobs"/>
      </div>
      {showModal ? <Modal title="Confirm Delete?"/> : null}
      {/* {isModalOpen && <Modal title="Confirm Delete?"/> } */}
      
    </div>
  );
}

export default App;
