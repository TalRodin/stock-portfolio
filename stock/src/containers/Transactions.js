import React from 'react'
import Form from '../components/getStock/Form'
import Prices from '../components/getStock/Prices'
// const Transactions = () =>{
//     return <div>
//         Transactions
//     </div>
// }
// export default Transactions 

const API_KEY='FBEEVNPWBGZJJW72'

class Transactions extends React.Component{
     
    getPrice = async (e) => {
        e.preventDefault()
        const symbol = e.target.elements.symbol.value
        const api_call = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`)
        const data = await api_call.json()
        console.log(data)
        console.log(e)
    }

    render(){
        
        return(
            <div>
            <Form getPrice={this.getPrice}/>
            <Prices />
            </div>
        )
    }
}
export default Transactions