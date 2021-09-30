import React from 'react';
import './App.css';

const App = () => {

  const clickHandler = (event) => {
    event.preventDefault();
    const elem = event.target.getAttribute("data-icon");
    console.log(elem);
    document.execCommand(elem);

  }


  return <React.Fragment>
              <header className="header">Rich Text Editor</header>
              <div className="editor-container">
              <div className="richTextOptions">
              <div className="icon" data-icon="bold" onClick={clickHandler} > <i className='fas fa-bold' data-icon="bold"></i></div>
              <div className="icon"> <i className='fas fa-italic'></i></div>
             
              </div>
              <div className="editor" contentEditable={true}></div>
              </div>
          </React.Fragment>

}

export default App;