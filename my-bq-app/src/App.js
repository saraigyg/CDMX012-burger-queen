import React, {useState} from 'react';
import Home from './screens/Home';
import Login from './screens/Login';


function App() {
  const [user, setUser] = useState(null);
  return <>  {user ? <Home /> : <Login /> } </>
};

export default App;
