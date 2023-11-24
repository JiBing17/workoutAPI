import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // Wrapping App component with BrowserRouter in order to use Routes component
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

