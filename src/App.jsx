import { useState, useEffect } from "react"
import './App.css'


// This practice with props just the beginning with building a function app
//  JavaScript function to calculate the number of separate words in a given text:


    function App(){
        const [text, setText] = useState("")
        const [timeRemaining, setTimeRemaining] = useState('5')

        function handleChange(e){
            const {value} = e.target
            setText(value)
        }

        function calculateWordCount(text){
            const wordsArr = text.trim().split(" ")
            const filteredWords = wordsArr.filter(word => word !== "")
            return filteredWords.length
        }
        
        useEffect(() => {
            if(timeRemaining > 0){

                setTimeout(() => {
                    setTimeRemaining(time => time -1)
                }, 1000)
                }
            },[timeRemaining])
            

      return (
          <div>
              <h1>How fast do you type?</h1>
              <textarea 
                onChange={handleChange}
                value={text}
              
              />
              <h4>Time remaining: {timeRemaining} </h4>
              {/* onClick is anonymous function */}
              <button onClick={() => console.log (calculateWordCount(text))}>Start</button>
              <h1>Word count: ???</h1>
          </div>
          
      )
  }


export default App
