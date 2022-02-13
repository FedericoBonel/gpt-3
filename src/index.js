import React from 'react';
// This Package allows us to hook the react app to the index.html
import ReactDOM from 'react-dom';
// This imports the app that will contain the code and logic of our website
import App from './App';
// Import the styling that we want (this allows us to use the variables declared in there everywhere in the code)
import './index.css';


// This loads/renders the app component that we imported up there 
// to the root div in index.html
ReactDOM.render(<App />, document.getElementById('root'));


