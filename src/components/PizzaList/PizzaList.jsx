import {useSelector} from 'react-redux'
import PizzaListItem  from '../PizzaListItem/PizzaListItem'
function PizzaList({getPizza}) {

    const pizza = useSelector(store => store.pizza)
    //this will ensure our pizza components are useable in pizzaListItem so we can render them to dom there
    return(
        <div>
            <ul>
            {/* <p>{pizza}</p> */}
                {pizza.map((slice,i) => {
                    return <PizzaListItem getPizza={getPizza} key={i} slice={slice} />
                })}
        </ul>
        </div>

    )
}

export default PizzaList 