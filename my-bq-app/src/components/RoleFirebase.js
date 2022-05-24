import React, {useState} from 'react';
import Home from '../pages/Home.jsx';
import Login from '../pages/Login.jsx';
import MediaCard from './MediaCard.js';
import firebaseApp from '../firebase/credentials.js'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';


const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

export default function RoleFirabase () {
   
    const [user, setUser] = useState(null);

  async function getRole(uid) {
    const docuRef = doc(firestore, `Profile/${uid}`);
    const docuEncrypted = await getDoc(docuRef);
    const finalInfo = docuEncrypted.data().role;
    return finalInfo;
  }

  function setUserWithRole(firebaseUser) {
    getRole(firebaseUser.uid).then((role) => {
      const userData = {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        role:role,
      };
      setUser(userData);
     // console.log("Final userData", userData);
    });
  }

  onAuthStateChanged(auth, (firebaseUser) => {
    if(firebaseUser) {
      if(!user) {
        setUserWithRole(firebaseUser);
      }
    }
    else {
      setUser(null);
    }
  });
  return <>  <MediaCard></MediaCard>
  {user ? <Home user={user}/> : <Login /> } </>
}