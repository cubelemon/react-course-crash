import Todo from './components/Todo'
import Title from './components/Title'
import Modal from './components/Modal'
import './App.css';
import React, { useState, useEffect } from 'react';
import Counter from './components/Counter'

function App() {
  const [showModal, setShowModal] = useState(false);

  function onTodoDelete() {
    console.log('onTodoDelete()');
    setShowModal(true)
  }

  function modalConfirm() {
    setShowModal(false)
  }

  function modalCancel() {
    setShowModal(false)
  }

useEffect(() => {
  console.log('ONLY on mount'
  )
}, [])

useEffect(() => {
  console.log('EVERY render'
  )
},)

  useEffect(()=>{
    console.log(`on mount AND on showModal ${showModal} change`)
  }, [showModal])

  // return<Counter />

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
      <Todo onTodoDelete={onTodoDelete} title="Finish FrontEnd Simplified"
            paragraph="Code along with Frontend Simplified step by step."/>
      {/* must use {} if you're passing in any type od datat except for a string */}
      <Todo onTodoDelete={onTodoDelete} title="Finish Interview Section"
            paragraph="Finish every interview questions in the next 6 weeks"/>
      <Todo onTodoDelete={onTodoDelete} title="Land a 100K Job"
            paragraph="Apply to 100 Jobs"/>
      </div>
      {showModal ? <Modal modalCancel={modalCancel} modalConfirm={modalConfirm} title="Confirm Delete?"/> : null}
      {/* {isModalOpen && <Modal title="Confirm Delete?"/> } */}
      
    </div>
  );
}

export default App;
