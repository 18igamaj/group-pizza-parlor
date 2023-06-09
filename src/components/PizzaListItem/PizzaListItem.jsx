import {useDispatch} from 'react-redux'

function PizzaListItem({slice, getPizza}){

// we can dispatch the cart action
    const dispatch = useDispatch()
    const addPizzaToCart =() =>{
        
    }

//this is where we render our pizzas to dom
    return(
        <div>
            <img src={slice.image_path} />

        <b>{slice.name} </b> 
        <p>{slice.description}</p>
        <p>{slice.price}</p>
        </div>
    )

}

export default PizzaListItem