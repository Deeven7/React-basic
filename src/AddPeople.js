import React, {Component} from 'react';


class AddPeople extends Component {
    state = {
        name: null,
        age: null,
        pokemon: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addPeople(this.state)  
    }
    render(){
        return(
         <div>
             <form onSubmit ={this.handleSubmit}>
                 <label htmlFor="name">Name:</label>
                 <input type="text" id = "name" onChange= {this.handleChange}/>
                 <label htmlFor="age">Age:</label>
                 <input type="number" id = "age" onChange= {this.handleChange}/>
                 <label htmlFor="pokemon">pokemon:</label>
                 <input type="text" id = "pokemon" onChange= {this.handleChange}/>
                 <button type= "submit" onChange = {this.handleSubmit} >Submit</button>
             </form>
         </div>
        )
    }
}

export default AddPeople;