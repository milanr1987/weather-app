import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root')); // Using createRoot
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
