import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useSelector } from 'react-redux';
import './App.css';
import {
  HomePage,
  LoginPage,
  Navbar,
  ProfilePage,
  SignUpPage,
} from './components';

function App() {
  const { isLogged } = useSelector((state) => state.auth);

  useEffect(() => {
    const themeMode = localStorage.getItem('theme');
    if (themeMode === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, []);



  return (
    <Router>
      {isLogged && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
