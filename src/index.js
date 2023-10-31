import React from 'react';
import ReactDOM from 'react-dom/client';
 
import App from './App';
import Context from './store/Context'
import {FirebaseContext} from './store/Context'
import firebase from './firebase/config';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseContext.Provider value={{firebase}}>
    <Context>
        <App />
    </Context>
     
  </FirebaseContext.Provider>
    
  
);


