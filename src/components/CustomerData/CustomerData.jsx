import axios from 'axios';
import React, { useEffect, useState } from 'react';



function CustomerData({getPizza}) {


let [pizzaToAdd, setPizzaToAdd] = useState({
    customer_name: '',
    street_address: '',
    city: '',
    zip: '',
    total: 0 ,
    type: '',
    pizzas: [{
        id: '',
        quantity: ''
    },{
        id: '',
        quantity: ''
    }]
  })

const handleNameChange = () => {
    setPizzaToAdd({
        ...pizzaToAdd,
        customer_name: event.target.value,
    });
}

const handleStreetAdress = () => {
    setPizzaToAdd({
        ...pizzaToAdd,
        street_address: event.target.value,
    });
}

const handleCity = () => {
    setPizzaToAdd({
        ...pizzaToAdd,
        city: event.target.value,
    });
}


const handleZip = () => {
    setPizzaToAdd({
        ...pizzaToAdd,
        zip: event.target.value,
    });
}



    axios.post('/orders',pizzaToAdd)
    .then(response => {
        getPizza();

    })

const addPizza = (event) => {
    event.preventDefault();
}


    return(

<>
<form onSubmit={(event) => addPizza(event)} >
        <input 
        onChange={(event) => handleNameChange(event.target.value)}
        type="text" 
        placeholder='Name'
        />

<input 
        onChange={(event) => handleStreetAdress(event.target.value)}
        type="text" 
        placeholder='Street Adress'
        />

<input 
        onChange={(event) => handleCity(event.target.value)}
        type="text" 
        placeholder='City'
        />

<input 
        onChange={(event) => handleZip(event.target.value)}
        type="text" 
        placeholder='Zip'
        />
<button type='submit'>Submit</button>

</form>


</>


    )
    
    
}


export default CustomerData;