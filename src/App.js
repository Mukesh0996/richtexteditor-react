import React from 'react';
import './App.css';

const App = () => {

   
   
  const clickHandler = (event) => {
      let command = event.target.getAttribute("data-icon");
      let value = event.target.getAttribute("data-value")+ "px";
      console.log(command, value.toString());
      document.execCommand(command, false, value.toString());
  }

  const toggleHandler = (event) => {
      const options = document.getElementById(`${event.currentTarget.getAttribute("id")}_options`);     
      if(options.classList.contains("hide")) {
        options.classList.remove("hide");
          setTimeout(()=> {
            options.classList.add("show");
          },200);

      } else if(options.classList.contains("show")) {
        options.classList.remove("show");
          setTimeout(()=> {
            options.classList.add("hide");
          },200);
      }
  }

  const toggleFontSizeHandler = () => {

  }

  return <React.Fragment>
              <header className="header">Rich Text Editor</header>
              <div className="editor-container">
                    <div className="richTextOptions">
                        <i className='fas fa-bold' data-icon="bold" data-value="" onClick={clickHandler} onMouseDown={(e) => e.preventDefault()}></i> 
                        <i className='fas fa-italic' data-icon="italic" data-value="" onClick={clickHandler} onMouseDown={(e) => e.preventDefault()}></i>  
                        <div  id="alignment" className="alignment" onClick={toggleHandler} onMouseDown={(e) => e.preventDefault()}>  
                            <i className="fas fa-align-justify"></i>
                            <div id="alignment_options" className="alignment_options hide">
                                <i className="fas fa-align-left" data-value="" data-icon="justifyLeft" onClick={clickHandler} onMouseDown={(e) => e.preventDefault()}></i>
                                <i className="fas fa-align-justify" data-value="" data-icon="justifyFull" onClick={clickHandler} onMouseDown={(e) => e.preventDefault()}></i>
                                <i className="fas fa-align-right" data-value="" data-icon="justifyRight" onClick={clickHandler} onMouseDown={(e) => e.preventDefault()}></i>
                            </div>
                        </div>
                        <div  id="fontsize" className="fontsize" onClick={toggleHandler} onMouseDown={(e) => e.preventDefault()}>  
                            <i className="fas">10</i>
                            <div id="fontsize_options" className="fontsize_options hide">
                                <i  className="fas" data-icon="fontSize" data-value="1" onClick={clickHandler}>10</i>
                                <i className="fas" data-icon="fontSize" data-value="2" onClick={clickHandler}>11</i>
                                <i className="fas" data-icon="fontSize" data-value="3" onClick={clickHandler}>12</i>
                                <i className="fas" data-icon="fontSize" data-value="4" onClick={clickHandler}>13</i>
                                <i className="fas" data-icon="fontSize" data-value="5" onClick={clickHandler}>14</i>
                                <i className="fas" data-icon="fontSize" data-value="6" onClick={clickHandler}>15</i>
                                <i className="fas" data-icon="fontSize" data-value="7" onClick={clickHandler}>16</i>
                            </div>
                        </div>
                    </div>
                    <div className="editor" contentEditable={true}></div>
              </div>
          </React.Fragment>

}

export default App;