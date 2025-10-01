import React, { Component } from "react";

export default class Dogs extends Component{
    state = {
        dogs: [
            {name: "Fickó", age: 3, isGirl: false}
        ]
    }

    render(){
        return(
            <div>
                {this.state.dogs.map((dog, idx) => <p key = {idx}>
                    <strong>Name: </strong>{dog.name}<br/>
                    <strong>Age: </strong>{dog.age}<br/>
                    <strong>isGirl: </strong>{dog.isGirl ? "yes" : "no"}<br/>
                </p>)}
            </div>
        )
    }
}