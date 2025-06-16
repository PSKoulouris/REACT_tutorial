import React from "react";
import { useState } from 'react';

function Score(){
    //definit des variables qui peuvent changer dans la page:
      const [count, setCount] = useState(0)
      //function au click:
      const handleClick = () =>{
        setCount(count + 1)
      }
      let classScore = "";
      if(count>10) {
        classScore = "green-text"
      } else if (count < 0) {
        classScore = "red-text"
      } else{
        classScore = ""
      }
    
      const downvoteClick = () =>{
        setCount(count -1)
      }
    return (
    <div>
         <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className = {classScore}>
        Score: {count}
      </p>

      {/* condition dans text pour returner une information <p>. {} pour initialiser une logique */}
      {(count>=20) && <p>Best Scores!!!</p>}

      {/*{(count>=20) ? <p>Best Scores!!!</p> : <p>Failing Score</p>}*/}


      <button onClick={ handleClick}>
        upvote
      </button>

      <button onClick={downvoteClick}>downVote</button>
    </div>
)}

export default Score