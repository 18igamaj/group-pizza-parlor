

function AdminTableItem({item}) {


    return(
        <>
        <h2>Admin Orders</h2>
       <table>
        
             <thead>
                <tr>
                    <th>Name</th>
                    <th>Time order placed</th>
                </tr>
            
            </thead>
            <tbody>
    {/* map[ over orders here */}
        <tr>
             <td>{item.name}</td>
             <td>{item.time}</td>
        </tr>
    
    
        <tr>
            
        </tr>
    
    <th>type</th>
        <tr>
            <td>{item.type}</td>
        </tr>
     

    <th>cost</th>
        <tr>
         <td>{item.total}</td>
        </tr>
    
            </tbody>
        
       
       </table>
       </>
    )
}

export default AdminTableItem