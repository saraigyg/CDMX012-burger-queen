import React, {useState} from "react";
import firebaseApp from "../firebase/credentials";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore"

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

function Login () {
    const [isRegistered, setIsRegistered] = useState(false);

    async function userSignUp(email, password, role) {
      const userInfo = await createUserWithEmailAndPassword(
          auth, 
          email, 
          password
          ).then((firebaseUser) => {
            return firebaseUser;
          });
          //console.log(userInfo.user.uid);
          const docuRef = doc(firestore, `Profile/${userInfo.user.uid}` );
          setDoc(docuRef, {email:email, role:role });
          };
         

    function submitHandler(e) {
        e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const role = e.target.elements.role.value;


       // console.log('submit', email, password, role);
    if (isRegistered) {
        //user has to register
        userSignUp(email, password, role);
    } else {
        //login 
        signInWithEmailAndPassword(auth, email, password);
    }};

    return (
        <div>
            <h1>{isRegistered ? "Sign Up here" : "Login" }</h1>
        <form onSubmit={submitHandler}>
            <label>
                E-mail:
                <input type={'email'} id='email'></input>
            </label>
            <label>
                Password:
                <input type={'password'} id='password'></input>
            </label>
            <label>
                Role:
                <select id='role'>
                    <option value={'admin'}>Admin</option>
                    <option value={'waiter'}>Waiter</option>
                </select>
            </label>
            <input type={'submit'} value={ isRegistered ? 'Sign Up' : 'Login'}/>
        </form>
        <button onClick={() => setIsRegistered(!isRegistered)}>
            {isRegistered ? "Already registered" : "Sign up"}
        </button>
        </div>
    )
}

export default Login;