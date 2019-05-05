import React from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';

export class App extends React.Component {
    constructor(){
        super()
        console.log('constructor');
        this.state = {
            coins: [],
            searchfield: ''
        };
    }
componentDidMount(){
    console.log('mount');
    fetch('http://localhost:3100/coins/list').then(res => 
        res.json()
    ).then(cs =>  
        this.setState( {coins : cs})    );
    console.log(this.state.coins);
}

    onSearchChange = (event) => {
        console.log(event.target.value);
        this.setState({ searchfield : event.target.value });       
    }

    render(){
        console.log('render');
        const filteredCoins = this.state.coins.filter(coin => {
            return coin.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });
    return (
        <div><h1>Crypto Coins</h1>
            <Searchbox searchChange={this.onSearchChange}></Searchbox>
            <hr></hr>
            <CardList coins={filteredCoins}></CardList>
        </div>
    )
}
}
export default App; 