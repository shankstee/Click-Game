import React from "react";

const NavBar = (props) =>
      (<>
        <nav className="navbar">
          <a className="navbar-brand" href="/">
            <h1>Zombie Memory</h1>
          </a>
          <div id="scores">
            <p><span className="scoreText">Score: </span> {props.currentScore}</p>
            <p><span className="scoreText">Top Score: </span> {props.highScore}</p>
          </div>
        </nav>
      </>)
    
  


export default NavBar;
