import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

// Creating a root to render the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component within BrowserRouter to enable routing
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

