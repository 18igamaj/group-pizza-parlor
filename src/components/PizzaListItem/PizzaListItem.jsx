import {useDispatch} from 'react-redux'

function PizzaListItem({slice, getPizza}){


    const dispatch = useDispatch()


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