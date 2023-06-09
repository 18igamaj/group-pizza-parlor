import React from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PizzaList from '../PizzaList/PizzaList';

function App() {

  const dispatch = useDispatch()
  useEffect(()=>{
    getPizza()
  },[])
const getPizza = () => {
axios.get('/api/pizza') 
.then ( response => {
  console.log('response.data is ', response.data)
dispatch ({type: 'SET_PIZZA', payload: response.data})
})
.catch(error => {
  alert('There is a problem getting our pizzas :(')
})
}

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <PizzaList getPizza={getPizza} />
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  
    </div>
  );
}

export default App;
