import React, { useState,useContext } from 'react';


import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/Context';

import {useHistory,Link} from 'react-router-dom'


export default function Signup() {
  const history = useHistory()
  const [username,setUsername] =  useState('')
  const [email,setEmail] =  useState('')
  const [number,setNumber] =  useState('')
  const [password,setPassword] =  useState('')
  const {firebase} = useContext(FirebaseContext)
  const [errors, setErrors] = useState({});

  const handleSubmit = (e)=>{
    e.preventDefault()
      console.log(firebase);
      firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
          result.user.updateProfile({displayName:username}).then(()=>{
            firebase.firestore().collection('users').add({
              id:result.user.uid,
              username:username,
              phone:number,
            }).then(()=>{
                  history.push('/login')
            })
          })
      }).catch((error)=>{
        alert(error.message)
      })

     
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
         

          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
         
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={number}
            onChange={(e)=>setNumber(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
