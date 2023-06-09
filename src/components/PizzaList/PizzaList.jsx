import {useSelector} from 'react-redux'
import PizzaListItem  from '../PizzaListItem/PizzaListItem'
function PizzaList({getPizza}) {

    const pizza = useSelector(store => store.pizza)

    return(
        <div>
            
                {pizza.map((slice,i) => {
                    return <PizzaListItem getPizza={getPizza} key={i} slice={slice} />
                })}
        
        </div>

    )
}

export default PizzaList 