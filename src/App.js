import React, { Component } from "react";
import Cards from "./components/Cards/cards";
import NavBar from "./components/Nav/navBar";
import images from "./images.json";
import "./App.css"

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      images,
      highScore: 0,
      currentScore: 0
    }
  }

  handleItemClick(id) {
    console.log(id);
  }

  // Function to shuffle an array
  shuffle(arr) {
    var i,
        j,
        temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;    
};

  render() {
    return (
      <div className="App">
      {/* Render the Navbar functional component and pass it the highscore/current score state as props */}
        <NavBar highScore = {this.state.highScore} currentScore = {this.state.currentScore} />
        {/* Create a new div for the img card to add flex CSS */}
        <div className="characterDiv">
        {/* Render each img from the images.json file in random order */}
        {this.state.images.map(image => (
          <Cards  
          key={image.id}
          id={image.id}
          image={image.img}
          handleClick = {this.handleItemClick}
          
          />
        ))}
        </div>
      </div>
    );
  }
}

export default App;
