import { useState, useEffect } from "react";
import './App.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase";
import GoogleButton from "react-google-button";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState('')


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })

    return () => {
      unsubscribe();
    }
  },[])

  console.log("current user:", user )
  console.log("current user email:", user && user.email)

  async function handleSignUp(e) {
    e.preventDefault();
    // console.log("clicked on send otp button")
    // console.log(email, "email");
    // console.log(password, "password")

    try {
      const SignUpDetails = await createUserWithEmailAndPassword(auth, email, password)
      // console.log(SignUpDetails,"signup details")
      console.log("sign up success")
    } catch (err) {
      console.log(err.message)
    }
  }

  async function login(e) {
    e.preventDefault()
    // console.log("login button clicked")
    // console.log("clicked on send otp button")
    // console.log(email, "email");
    // console.log(password, "password")
    try {
      // return await createUserWithEmailAndPassword(auth, email, password)
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      // console.log("user credentials:",userCredential)
      console.log("Login Success")

    } catch (err) {
      console.log(err.message)
    }

  }

  async function handleLogout(){
 
    try{
       return await signOut(auth)
       console.log("logout success")
    }catch(err){
      console.log(err.message)
    }

  }

  async function googleAuth(){

    const authProvider = new GoogleAuthProvider();



    try{
      
      return await signInWithPopup(auth,authProvider)
      console.log("google sign in success")
    }catch(err){
      console.log(err.message)
    }
  }


  return (
    <div className="App">


      <form onSubmit={handleSignUp}>


        <input type="email" placeholder="enter email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="enter phone number" onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" value="signup" />

      </form>

      <form onSubmit={login}>


        <input type="email" placeholder="enter email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="enter phone number" onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" value="Login" />

      </form>

      <GoogleButton onClick={googleAuth} />

      <button onClick={handleLogout} >LogOut</button>

    </div>
  );
}

export default App;
