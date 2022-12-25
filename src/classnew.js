import React, { Component } from "react";
import {useState} from 'react';

 class Classnew extends React. Component
 {

    
    constructor(props) {
        super(props);

        this.state = {
            name: props.value
          };
    
          this.updateInput = this.updateInput.bind(this);


    }

    componentDidMount()
    {
        this.addtion(23,34)
    }

addtion(p1,p2) {
      
    var test = p1 + p1

    console.log("My Addition",test)
    }

    updateInput(event){
        this.setState({name : event.target.value})
        }
    submitHandler(){
        //after some condition  you can call here another function
    
        console.log("My Addition button is clickable",this.name)
    
        }
    render(){

        return(


            <div>


                  <h1>Calculator</h1>
                  <input id="icon_prefix" type="text" class="validate" />
<br></br>
<br></br>
                
                  <input
                    className="form-control name"
                   
                    type="text"
                    value={this.state.value}
                    onChange={(event) => {this.setState({ value: event.target.value })}}
                />

                  <br></br>
<br></br>
<button  onClick={this.submitHandler}>Addition</button>


            </div>
        )


    }
 };
 export default Classnew