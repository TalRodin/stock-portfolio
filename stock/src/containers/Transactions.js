import React from 'react'
import Form from '../components/getStock/Form'
import Prices from '../components/getStock/Prices'

import AddSymbol from './AddSymbol'

// const Transactions = () =>{
//     return <div>
//         Transactions
//     </div>
// }
// export default Transactions 

const API_KEY='FBEEVNPWBGZJJW72'

class Transactions extends React.Component{
    state={
        symbol: undefined,
        price: undefined,
        volume: undefined,
        error: undefined
    }
    getPrice = async (e) => {
        e.preventDefault()
        const symbol = e.target.elements.symbol.value
        const api_call = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`)
        const data = await api_call.json()
        if (symbol){
            console.log(data['Time Series (Daily)'][Object.keys(data['Time Series (Daily)'])[0]]['4. close'])
            this.setState({
                symbol: data['Meta Data']['2. Symbol'],
                price: data['Time Series (Daily)'][Object.keys(data['Time Series (Daily)'])[0]]['4. close'],
                volume: data['Time Series (Daily)'][Object.keys(data['Time Series (Daily)'])[0]]['5. volume'],
                error: ""
            })
        }else{
            this.setState({
                symbol: undefined,
                price: undefined,
                volume: undefined,
                error: "Please enter the symbol"
            })
            
        }
        
    }

    render(){
        
        return(
            <div>
            <Form getPrice={this.getPrice}/>
            <Prices 
            symbol={this.state.symbol}
            price={this.state.price}
            volume={this.state.volume}
            error={this.state.error}
            />
            <div>
                <AddSymbol  />
            </div>
            </div>
        )
    }
}
export default Transactions