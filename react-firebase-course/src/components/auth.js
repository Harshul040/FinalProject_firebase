import { auth } from "../config/firebase";
import {
createUserWithEmailAndPassword} from "firebase/auth";
import { useState } from "react";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      window.location.href = "http://localhost:3001/";

    } catch (err) {
      console.error(err);
    }
  };

  
  return (
   
    <div className="harshul">
      <div className="ha">
      <div id="logo"></div>
        <div className="ik">

          <h3 id="slogin">STUDENT LOGIN</h3>



      <input
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
        id="ok"/>
      
      <input
        placeholder="Password..."
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        id="ok"/>
    <div id="remforget">

      <div id="rem">
     <input type="checkbox"/> 
        <h4>Remember Me</h4>
        </div> 
        <a href="/password-reset" target="_main" id="me">Forget password ?</a>

        </div>
      <button onClick={signIn} id="click"> Sign In</button>
       <hr id="line"/>
       <h2 id="college">Indian Institute Of Technology, Kanpur</h2>
        </div>
      </div>
      </div>
    
  );
};