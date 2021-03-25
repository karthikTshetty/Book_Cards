import React from 'react';
import Header from './Header'
import BookIcon from '@material-ui/icons/Book';
import './App.css';
import Books from './Books';
// import Searcharea from './Searcharea';


function App() {
  return (
    <>
    <div className="App">
     <Header/>
     <BookIcon/>
     <Books/>
     {/* <Searcharea/> */}
     
    </div>
    <div className="listt">
      <ul><li>manju</li><li>kiran</li></ul>
    </div>
    </>
  );
}

export default App;
