import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

// Exercises Component: Displays paginated exercise cards based on body part
const Exercises = ({ exercises, setExercises, bodyPart }) => {
  // Current page number state
  const [currentPage, setCurrentPage] = useState(1);

  // Maximum exercises per page state
  const [exercisesPerPage, setExercisesPerPage] = useState(9);

  // Calculate indexes for pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  // Extract the exercises to display on the current page
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  // Pagination event handler
  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' }); // Scroll to top when pagination changes
  };

  // Fetch exercises based on body part selected (runs when bodyPart changes)
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      // Fetch all exercises or exercises for a specific body part
      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }
      
      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      {/* Title: "Showing Results" */}
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      {/* Display exercise cards */}
      <Stack direction="row" sx={{ gap: { lg: "110px", xs: "50px" } }} flexWrap="wrap" justifyContent="center">
        {/* Iterate through current exercises and create Exercise Card Component for each */}
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      {/* Pagination: Display if more than 9 exercises */}
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
}

export default Exercises;
