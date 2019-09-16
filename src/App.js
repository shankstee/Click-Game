import React, { Component } from "react";
import Cards from "./components/Cards/cards";
import NavBar from "./components/Nav/navBar";
import images from "./images.json";
import "./App.css"

class App extends Component {

    state = {
      images,
      highScore: 0,
      currentScore: 0,
      alreadyClicked: []

    }

  

  handleImgClick = async (id, clicked) => { 
   
    // When the image is clicked, take that image id and change the clicked boolean value to true
    
    // Take the current score and add one before setting a new
    const newArray = this.state.images.map(image => {
      return image
    });
    

    // If the image clicked is = false then add 1 to the state.current score and shuffle the images. 
    if (this.state.alreadyClicked.includes(id)) {
      alert("You already clicked that one! Press OK to restart game")
       this.setState({
        currentScore: 0,
        alreadyClicked: []
      }) 
    } else {
       await this.setState({
        currentScore: this.state.currentScore + 1,
        // take a copy arr and then create a new array with the addeed new ID
        alreadyClicked: [...this.state.alreadyClicked, id]
      });

      if (this.state.currentScore > this.state.highScore) {
        this.setState({
          highScore: this.state.currentScore
        })
        
      }
    }
    

    console.log(this.state.alreadyClicked);

    
  }

  random = (arr)  => {
    return (arr.sort(function(a, b) {return 0.5 - Math.random()}));
  }


  render() {

    return (
      <div className="App">
      {/* Render the Navbar functional component and pass it the high score/current score state as props */}
        <NavBar highScore = {this.state.highScore} currentScore = {this.state.currentScore} />
        <p id="instructions"> Click a character card to earn points, click the same card twice and you lose.</p>
        {/* Create a new div for the img card to add flex CSS */}
        <div className="characterDiv" id="mainContainer">
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
