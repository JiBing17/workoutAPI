// Import necessary components and dependencies from React and React Router
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

// Import external styles
import './App.css';

// Import pages and components
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// App Component
const App = () => (
  // A container with specified width and responsive width for larger screens
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    {/* Render the Navbar component */}
    <Navbar />
    {/* Define routes for different pages */}
    <Routes>
      <Route path="/" element={<Home />} /> {/* Render Home component for root URL */}
      <Route path="/exercise/:id" element={<ExerciseDetail />} /> {/* Render ExerciseDetail component for exercise details */}
    </Routes>
    {/* Render the Footer component */}
    <Footer />
  </Box>
);

// Export the App component as the default export
export default App;
