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

  globalState = this.state;

  

  handleImgClick = (id, clicked) => {
    
    // When the image is clicked, take that image id and change the clicked boolean value to true
    
    // Take the current score and add one beofe setting a new
    var updateScore = this.state.currentScore + 1;
    // this.state.images.map(image => (
    //   if (image.id === id) {
    //     image.clicked = true;
    //   }
    // ))

    if (clicked === false) {
      this.setState({
        currentScore: updateScore,
        images: this.random()
  
      });
    }

    console.log(this.state.currentScore);

    
  }

  random = ()  => {
    return (this.state.images.sort(function(a, b) {return 0.5 - Math.random()}));
  }


  render() {

    var random = this.state.images.sort(function(a, b) {return 0.5 - Math.random()});
    return (
      <div className="App">
      {/* Render the Navbar functional component and pass it the highscore/current score state as props */}
        <NavBar highScore = {this.state.highScore} currentScore = {this.state.currentScore} />
        {/* Create a new div for the img card to add flex CSS */}
        <div className="characterDiv">
        {/* Render each img from the images.json file in random order */}
        
        {random.map(image => (
          <Cards  
          key={image.id}
          id={image.id}
          image={image.img}
          clicked={image.clicked}
          handleClick = {this.handleImgClick}
          
          />
        ))}
        </div>
      </div>
    );
  }
}

export default App;
