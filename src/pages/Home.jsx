// Import necessary components and dependencies from React and Material-UI
import React, { useState } from 'react';
import { Box } from '@mui/material';

// Import components used in the Home component
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

// Home Component
const Home = () => {
  // State variables for exercises and body part filtering
  const [exercises, setExercises] = useState([]); // State for exercises list
  const [bodyPart, setBodyPart] = useState('all'); // State for selected body part

  return (
    // Container to hold components on the Home page
    <Box>
      {/* Render HeroBanner component */}
      <HeroBanner />

      {/* Render SearchExercises component to search and filter exercises */}
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />

      {/* Render Exercises component to display filtered exercises */}
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  );
};

// Export the Home component as the default export
export default Home;
