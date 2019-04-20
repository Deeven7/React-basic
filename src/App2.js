import React, { Component } from 'react';


class App2 extends Component {
  render() {
      const {persons, deletePeople} = this.props;
      const personList = persons.map(person => {
          if(person.age > 20){
          return (
          <div className="pokem" key = {person.id}>
          <div>Name: {person.name}</div>
          <div>age: {person.age}</div>
          <div>pokemon: {person.pokemon}</div>
          <button onClick = {() => {deletePeople(person.id)}}>Delete person</button>
          </div>
          )
          }else{
              return null
          }
        })
    return (
     <div className= "person-List">
         {personList}
     </div>
    );
  }
}

export default App2;