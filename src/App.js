import React, { useState } from 'react';
import './App.css';

const App = () => {

    const [showOptions, setShowOptions] = useState(true);
  
  const clickHandler = (event) => {
      let command = event.target.getAttribute("data-icon");
      document.execCommand(command, false, null);
  }

  const toggleAlignmentHandler = (event) => {
      const alignment_options = document.querySelector(".alignment_options");
      setShowOptions(!showOptions);
      if(showOptions) {
          alignment_options.classList.remove("hide");
          setTimeout(()=> {
            alignment_options.classList.add("show");
          },200);
      } else {
          alignment_options.classList.remove("show");
          setTimeout(()=> {
            alignment_options.classList.add("hide");
          },200)
      }
        
  }

  const toggleFontSizeHandler = () => {

  }


  return <React.Fragment>
              <header className="header">Rich Text Editor</header>
              <div className="editor-container">
                    <div className="richTextOptions">
                        <i className='fas fa-bold' data-icon="bold" onClick={clickHandler} onMouseDown={(e) => e.preventDefault()}></i> 
                        <i className='fas fa-italic' data-icon="italic" onClick={clickHandler} onMouseDown={(e) => e.preventDefault()}></i>  
                        <div className="alignment" onClick={toggleAlignmentHandler} onMouseDown={(e) => e.preventDefault()}>  
                            <i className="fas fa-align-justify"></i>
                            <div className="alignment_options hide">
                                <i className="fas fa-align-left" data-icon="justifyLeft" onClick={clickHandler} onMouseDown={(e) => e.preventDefault()}></i>
                                <i className="fas fa-align-justify" data-icon="justifyFull" onClick={clickHandler} onMouseDown={(e) => e.preventDefault()}></i>
                                <i className="fas fa-align-right" data-icon="justifyRight" onClick={clickHandler} onMouseDown={(e) => e.preventDefault()}></i>
                            </div>
                        </div>
                    </div>
                    <div className="editor" contentEditable={true}></div>
              </div>
          </React.Fragment>

}

export default App;