import React from "react";

const content = "The sky is blue. Birds sing. Flowers bloom. Life is good."

function App(){
  let [status , setstatus] = React.useState(false);
  let [wpm , setWpm] = React.useState(0);
  let contentSpans = content.split(" ").map((word , index)=> <span key={index} id={index}>{word} </span>);
  const startTime = new Date().getTime();
  // console.log(...contentSpans)
  function handleInput(e){
    console.clear();

    let inputValue = e.target.value.split(" ")
    console.log(inputValue)
    let lastIndexInputValue = inputValue[inputValue.length-1];
    let splittedContent = content.split(" ");
    let toCompareValue = contentSpans[inputValue.length-1].props.children[0];
    document.querySelectorAll('span').forEach((word , i)=>{
      // console.log("Entered In to Foreach loop")
      // console.log(word.getAttribute('id') , inputValue.length-1)
      if(word.getAttribute('id') == inputValue.length-1){
          word.style.color = 'white';
          word.style.fontSize = '35px';
          // console.log('Changed font size')
        }
        else{
          word.style.color = 'black';
          // word.style.scale = '1';
        word.style.fontSize = "30px";
      }
    })
    console.log(`Input Word: ${lastIndexInputValue}\nTo Compare: ${toCompareValue}`);
    console.log(`Input length: ${inputValue.length} Content Length: ${contentSpans.length}`)
    if(inputValue.length == contentSpans.length && lastIndexInputValue == toCompareValue)
    {
      // alert("Test end");
      const endTime = new Date().getTime();
      console.log("Test Ended")
      const totalTime = (endTime - startTime)/1000;
      const timeInMinutes = 1 / (1 / 60); // 1 minute
      const score = Math.round((inputValue.length / totalTime) * 60);
      console.log(wpm)
      setstatus(true)
      setWpm(score)
    }
    }

  
  return (
      <>
      {!status && <h1 className="heading">React Typing Speed Test</h1>}

      {status && <h1 className="score">Your Typing Speed is {wpm} WPM</h1>}

      {!status && <div className="feedback" style={{display:"flex" , justifyContent: 'space-evenly' , width:"90%"}}></div>}
        {!status && <div className="content">{contentSpans}</div>}
        {!status && <textarea name="" id="inputBox"  rows="5" onInput={handleInput} ></textarea>}
      </>
  )
}








export default App;