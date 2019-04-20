import React, { Component } from 'react';
import App2 from './App2';
import AddPeople from './AddPeople';


class App extends Component {
  state = {
    person: [
      { name: 'Deeven', age: 22, pokemon: 'Giratina', id: 1},
      { name: 'Stephen', age: 24, pokemon: 'dragonite', id: 2},
      { name: 'Paul', age: 19, pokemon: 'Rayquaza', id: 3}
    ]
  }
  addPeople = (people) => {
   people.id = Math.random();
   let person = [...this.state.person, people];
   this.setState({
     person: person
   })
  }

  deletePeople = (id) => {
   let person = this.state.person.filter(people =>{
     return people.id !== id
   });
   this.setState({
     person:person
   })
  }
  render() {
    return (
      <div className="App">
        <h1>Welcome to my React Application</h1>
        <App2 deletePeople = {this.deletePeople} persons = {this.state.person} />
        <h2>Enter your name, age and pokemon </h2>
        <AddPeople addPeople = {this.addPeople} />

      </div>
    );
  }
}

export default App;
