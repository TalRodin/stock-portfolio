import React from 'react'

class Form extends React.Component{
    render(){
        console.log(this)
        return(
            <form onSubmit={this.props.getPrice}>
                <input type="text" name="symbol" placeholder='Symbol...'/>
                <button>Get price</button>
            </form>
        )
    }
}
export default Form