import React from 'react';

import logo from './logo.svg';

import './App.css';

import {Component} from 'react';

import {CardList} from './components/card-list/Cardlist.components';

import {SearchBox} from  './components/search-box/search-box.component';

class App extends Component{
constructor(){
  super();

  this.state = {
    Monsters: [],
    searchField: ''
  };

  
}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then( response => response.json() )
  .then(users => this.setState({Monsters:users}) )
}
handleChange =(e) => {
  this.setState({searchField: e.target.value});
}
  render() {
    const { Monsters, searchField} = this.state;
    const filteredMonsters = Monsters.filter(Monsters =>
      Monsters.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return(
          <div className="App">
            <h1>Monsters Rolodex</h1>
          <SearchBox
          placeholder='search Monsters'
          handleChange={this.handleChange}
          />
        
            <header className="App-header">
      
              <img src={logo} className="App-logo" alt="logo" />
              <CardList Monsters={filteredMonsters}></CardList>
               
            </header>
            <h1>Monsters Rolodex</h1>
            <SearchBox
          placeholder='search Monsters'
          handleChange={this.handleChange}
          />
            <CardList Monsters={filteredMonsters } />
          </div>
        );
      } 
  }


export default App;
