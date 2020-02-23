import React from 'react'
import Form from '../components/getStock/Form'
import Prices from '../components/getStock/Prices'
import {firestoreConnect} from 'react-redux-firebase'
import AddSymbol from './AddSymbol'
import {compose} from 'redux'
import {connect} from 'react-redux'
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
        // console.log(this.props)
        // let id = this.props.userId
        // console.log((this.props.symbols!==undefined)? this.props.symbols[id].todos.length : false)
        // let content
        // if(this.props.loading){
        //         content = <p>Loading...</p>
        //     }
        // else if(this.props.fetched && this.props.symbols.todos.length===0){
        //         content = <p>No bought stocks yet</p>
        //     }
        // else{
        //     content = `${this.props.symbols[id].todos.length}`
        //}
        if(!this.props.symbols){
            console.log('loading')
        }
        else if (!this.props.symbols[this.props.userId] && this.props.requested[`symbols/${this.props.userId}`]){
            console.log('you heve no stocks')
        }
        else{
            console.log('you have stocks')
        }
       

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
                {/* {content} */}
            </div>
            </div>
        )
    }
}

const mapStateToProps = ({firebase,firestore}) =>({
    userId: firebase.auth.uid,
    symbols: firestore.data.todos,
    requesting:  firestore.status.requesting,
    requested: firestore.status.requested
})
const mapDispatchToProps = {

}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect(props=>[`todos/${props.userId}`]),
    )(Transactions)