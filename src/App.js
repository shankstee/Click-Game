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
      currentScore: 0,
      alreadyClicked: []

    }
  }

  

  handleImgClick = (id, clicked) => { 
    // When the image is clicked, take that image id and change the clicked boolean value to true
    
    // Take the current score and add one beofe setting a new
    const newArray = this.state.images.map(image => {
  
      return image
    });
    

    // If the image clicked is = false then add 1 to the state.current score and shuffle the images. 
    if (this.state.alreadyClicked.includes(id)) {
      alert("You already clicked that one, press OK to restart")
    } else {
      this.setState({
        currentScore: this.state.currentScore + 1,
        images: newArray,
        // take a copy arr and then create a new array with the addeed new ID
        alreadyClicked: [...this.state.alreadyClicked, id]
  
      });
    }

    console.log(this.state.alreadyClicked);

    
  }

  random = (arr)  => {
    return (arr.sort(function(a, b) {return 0.5 - Math.random()}));
  }


  render() {

    return (
      <div className="App">
      {/* Render the Navbar functional component and pass it the highscore/current score state as props */}
        <NavBar highScore = {this.state.highScore} currentScore = {this.state.currentScore} />
        {/* Create a new div for the img card to add flex CSS */}
        <div className="characterDiv">
        {/* Render each img from the images.json file in random order */}
        
        {this.random(this.state.images).map(image => (
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
