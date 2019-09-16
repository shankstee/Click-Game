import React from 'react';


// Each character needs to be loaded onto the page in random order.


const  Cards = (props) =>
  ( <>
        <img onClick = {() => props.handleClick(props.id, props.clicked)} className="imgCard" src={props.image} alt=""/>
    </>
    );

export default Cards;
