import {useRef} from "react";
 const Funnew = () =>
 {

    const firstVal = useRef();
    const SecondNumtVal = useRef();
   function submitHandler(){
        //after some condition  you can call here another function
    
        var addition = parseInt(firstVal.current.value) + parseInt(SecondNumtVal.current.value)
        console.log("My Addition button is clickable",addition)
    
        }
    function Test12(p1,p2)
    {
        var add =  parseInt(p1) + parseInt(p2)
        console.log(add)

    }
    return(


        <div>


        <h1>Calculator</h1>
        <input 
        ref={firstVal}
        type="number"
        id="message"
        name="message" />
<br></br>
<br></br>
      
<input
        ref={SecondNumtVal}
        type="number"
        id="message"
        name="message"
      />


        <br></br>
<br></br>

<button  onClick={submitHandler}>Addition</button>


  </div>
    )


    



    
 };

 export default Funnew;