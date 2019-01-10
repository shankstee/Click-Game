import React from "react";

const NavBar = (props) =>
      (<div className="App">
        <nav class="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""/>Clicky Game
          </a>
          <ul class="nav navbar-nav navbar-right">
            <li>Score: {props.highScore}</li>
            <li>Top Score: {props.currentScore}</li>
          </ul>
        </nav>
      </div>)
    
  


export default NavBar;
