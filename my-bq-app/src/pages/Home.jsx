import React from "react";
import firebaseApp from "../firebase/credentials";
import { getAuth, signOut } from "firebase/auth";
import AdminView from '../components/AdminView.js';
import WaiterView from '../components/WaiterView.js';

const auth = getAuth(firebaseApp); 

function Home (user) {
    return (
        <div>
            Home
            <button onClick={() => signOut(auth)}>Log Out</button>
            {user.user.role === 'admin' ? <AdminView /> : <WaiterView />}
        </div>
    )
}

export default Home;