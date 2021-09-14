import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'firebase/firestore';
import 'firebase/auth';
import firebase from "firebase/compat";

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDOCn_WfoRDGdKzorNRKsURZs53oUnD170",
    authDomain: "kysapka-web-chat-react.firebaseapp.com",
    projectId: "kysapka-web-chat-react",
    storageBucket: "kysapka-web-chat-react.appspot.com",
    messagingSenderId: "432851087871",
    appId: "1:432851087871:web:f04b1d57b92b727765b7ca",
    measurementId: "G-93KZCW63MZ"
});

const Context = createContext({})

const auth = firebase.auth()
const firestore = firebase.firestore

ReactDOM.render(
  <Context.Provider value={{
      firebase,
      auth,
      firestore
  }}>
      <App />
  </Context.Provider>,
  document.getElementById('root')
);

