import axios from 'axios';
import React, { useEffect, useState } from 'react';



function CustomerData() {


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



    axios.post('/orders')
    .then(response => {
        getPizza();

    })


    return(

<>
<form >
        <input 
        onChange={handleNameChange}
        type="text" 
        placeholder='Name'
        />

<input 
        onChange={handleNameChange}
        type="text" 
        placeholder='Name'
        />








</form>


</>


    )
    
    
}


export default CustomerData;