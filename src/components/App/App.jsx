import React from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PizzaList from '../PizzaList/PizzaList';
import AdminTable from '../AdminTable/AdminTable';
import Checkout from '../Checkout/Checkout'
import {HashRouter as Router, Route,Link} from 'react-router-dom'

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
      <Router>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>

        </header>
        <ul>
              <li>
                <Link to = '/'>Home</Link>

              </li>
              <li>
                <Link to = '/admin'>Admin</Link>
                
              </li>
              <li>
                <Link to = '/checkOut'>CheckOut</Link>
                
              </li>
            </ul>
          <div>
            
            <Route exact path ='/'>
             <PizzaList getPizza={getPizza} />
            </Route>
            <Route exact path ='/admin'>
            <AdminTable />
            </Route>
            <Route exact path ='/checkOut'>
            <Checkout/>
            </Route>
          </div>
          
        
      
      </Router>
      {/* <img src='images/pizza_photo.png' /> */}
     
  
    </div>
  );
}

export default App;
