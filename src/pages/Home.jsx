import React from 'react'
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
const Home = () => {

  const user= JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();  

  const handleLogout=async() =>{
    await signOut(auth);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate("/login");
  }
  return (
    <div>
      <h1>Welcome now get out lol</h1>
      <h2>{user && user.email}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home;