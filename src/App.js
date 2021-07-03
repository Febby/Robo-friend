import React, { Component } from 'react';
import CardList from './CardList'
import Scroll from './Scroll'
import SearchBox from './SearchBox';


// const state = {
//     robots: robots,
//     searchfield: ''
// }

class App extends Component {
    constructor(){
        super()
        this.state ={
            robots: [],
        searchfield: ''
        }
        console.log('constructor')
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
           return response.json();
        })
        .then(users =>{
            this.setState({ robots: users });
        })
        
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value })
        // const filteredRobots = this.state.robots.filter(robots =>{
        //     return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        // })
        //console.log(filteredRobots);
    }
    render(){
        const filteredRobots = this.state.robots.filter(robots =>{
                return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            })
        if (this.state.robots.length === 0) {
             return (
                 <div className='tc'>
                     <h1 className='f1'>Loading..</h1>
                 </div>
             )
        } else {
            return(
                <div className="tc">
                    <h1 className="f2">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            )
        }
        
    }
}

export default App;