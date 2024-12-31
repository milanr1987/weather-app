import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { logout } from '../redux/authSlice';
import { ThemeToggle } from './';

export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="navbar text-white py-4 px-6 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-xl font-semibold hover:underline">
          Home
        </Link>
        <Link to="/profile" className="text-xl font-semibold hover:underline">
          Profile
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <span className="cursor-pointer" onClick={handleLogout}>
          Logout
        </span>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </nav>
  );
};
