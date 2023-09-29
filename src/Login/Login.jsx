import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";
 
 const Login = () => {
    const auth = getAuth(app);
    const provider = new  GoogleAuthProvider();
    const providerGithub = new GithubAuthProvider()
    const providerTwitter = new TwitterAuthProvider()
    const [userName, setUserName]= useState('');
    const [userEmail, setUserEmail]= useState('')
    // const [user]= useState('')
    const handaleGoogleLogin =()=>{
        signInWithPopup(auth,provider)
        .then( result =>{
            const user = result.user.displayName
            const email = result.user.email
            setUserName(user);
            setUserEmail(email);

            console.log(result,user)
        })
        .catch( error =>{
            console.log('error', error.message)
        })
        
    }
    const handaleGithubLogin =() =>{
       signInWithPopup(auth,providerGithub)
       .then( result =>{
        const user = result.user.displayName
            const email = result.user.email
            setUserName(user);
            setUserEmail(email);

        console.log(user)
       })
       .catch(error =>{
        console.log(error.message)
       })
    }
    const handaleTwitterLogin = () => {
        signInWithPopup(auth,providerTwitter)
        .then(result =>{
            const user = result.user.displayName
            const email = result.user.email
            setUserName(user);
            setUserEmail(email);
        })
        .catch(error =>{
            console.log(error.message)
           })
    }



    return (
        <div className="flex gap-10 items-center justify-center mt-24">
          <button className="btn btn-primary" onClick={handaleGoogleLogin}>Google Login</button>  
          <button className="btn btn-primary" onClick={handaleGithubLogin}>github Login</button> 
          <button className="btn btn-primary" onClick={handaleTwitterLogin}>Twitter Login</button> 
          <p>{userName} </p> 
          <p>{userEmail} </p>
        </div>
        
    );
 };
 
 export default Login;