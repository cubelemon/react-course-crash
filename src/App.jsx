import Todo from './components/Todo'
import Title from './components/Title'
import Modal from './components/Modal'
import './App.css';

function App() {
  return (
    <div>
      <Title />
      <div className='todo__wrapper'>
      <Todo />
      <Todo />
      <Todo />
      <Modal />
      </div>
    </div>
  );
}

export default App;
