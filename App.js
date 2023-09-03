
import './App.css';
import React,{useEffect, useState} from 'react';

function App() {
 const [height,setHeight]=useState(null);
 const [weight,setWeight]=useState(null);
 const [bmi,setBmi]=useState('');
 const [massage,setMassage]=useState('');

//  logic bmi

const cal= () =>{


  if(weight===0 || height===0){
    alert("Enter valid weight and height ");
  }
  else{
  let bmi=weight/height/ height*10000
  setBmi(bmi.toFixed(1));
  
  if(bmi<18){
    setMassage("you are underweight");
  }
  else if(bmi>=18 && bmi<=25){
    setMassage("you are healthy");
  }
  else {
    setMassage("you are overweight ");
  }
  }


}


const handleSubmit =(e) =>{
  e.preventDefault();
  cal();

}

useEffect(  () =>{

cal();

},[height,weight,cal])



  return (
   
    <div className="app">

     <h1>Bmi Calculator</h1>
      <form onSubmit={handleSubmit}>
      <div className="lab1">
      <lable>Height in(cm) : </lable>
      <input type="number" value={height} onChange={(e)=>setHeight(e.target.value) } ></input>
      
      </div>

      <div className="lab1">
      <lable>weight  in(kg) : </lable>
      <input type="number" value={weight} onChange={(event)=>setWeight(event.target.value) }></input>
         </div>
      <div className="center">
      <button className="btn" type='submit'>Calculate</button>
      </div>


      <div className='massage'>
        <h3>Your Bmi is :{bmi}</h3>

        <p>{massage}</p>
      </div>

      </form>


    </div>

  );
}

export default App;
