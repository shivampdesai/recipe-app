import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      recipes: []
    };
  }

  getRecipes(){
    var newIngredient = document.getElementById('ing').value;
    console.log(newIngredient);

    var api_key = '4a4476650d4e1b3923fbd1ae5cbd3ec6';

    var base_url = 'https://www.food2fork.com/api/search?key=';

    base_url+=api_key;
    base_url+='&q=';
    base_url+=newIngredient;

    console.log(base_url);

    fetch(base_url)
     .then((response) => {
       return response.json();
     })
     .then((data) => {
       this.setState({
         recipes: data.recipes
       });

       console.log(data);
     })
  }

  render() {
    return (
      <div className="App">
        <h4> Enter an ingredient </h4>
          <div>
            <input type="text" name="ingredient" id="ing"/>
          </div>
          <div>
            <button onClick={() => this.getRecipes()}>Add Ingredient</button>
          </div>

          <div>
            {this.state.recipes.map(res => <div> <h2><a href={res.source_url}> {res.title} </a> </h2> <img src={res.image_url}/> </div>)}
          </div>
      </div>
    );
  }
}

export default App;
