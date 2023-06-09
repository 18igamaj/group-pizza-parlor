  import { useEffect } from "react"
import axios from 'axios'
import AdminTableItem from '../AdminTableItem/AdminTableItem'
import {useSelector} from 'react-redux'
import { useDispatch } from "react-redux"

  function AdminTable () {
     
    const orders = useSelector(store => store.orders)

    const dispatch = useDispatch()

    useEffect(() => {
        getOrdersToAdmin()
    },[])

    const getOrdersToAdmin = () => {
        axios.get ('/api/order')
        .then( response => {
            console.log( 'response data for order is', response.data)
            dispatch({type: 'SET_ADMIN_ORDER', payload: response.data})
        })
        .catch(err => {
            alert('Oh No! OUR ORDER GET', err)
        })
    }

    return(
        <div>
           
            {orders.map((item,i) => {
                return <AdminTableItem key={i} item={item} getOrdersToAdmin={getOrdersToAdmin} />
            })}
           
        </div>
    )

  }

  export default AdminTable