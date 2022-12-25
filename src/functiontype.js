import { useRef } from "react";


const Functiontype = () =>
{

    const first = useRef();
     const second = useRef();
     const third = useRef();
    

function addtion(){

    //Simple function
}


function sumbit(){

    var sum = first.current.value + " " + second.current.value + " " + third.current.value

    console.log(" my enter value",sum)

    alert(sum)

}


function sum(p1,p2){

    //parameter function
}

function add(p1,p2){

    var add= p1+p2
    return add
}


    return(

        <div>
<h1> first name   </h1>
<input type= "text" id="first"  ref={first}></input><br></br><br></br>
  <input type="text" id="second" ref={second}></input><br></br> <br></br>
<input type="text" id="third" ref={third}></input><br></br>
  
        <button onClick={sumbit}>print</button>



  






        </div>
    
    )
    };



export default Functiontype;