import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

// Exercises Component 
const Exercises = ({ exercises, setExercises, bodyPart }) => {
  // current page number
  const [currentPage, setCurrentPage] = useState(1);

  // max exercises per page
  const [exercisesPerPage, setExercisesPerPage] = useState(9);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  // current 9 exercises
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  // runs once when mounted, then runs when bodypart var is changed (displays exercises with targeted bodypart)
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

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
    <Box id = "exercises"
      sx = {{mt: {lg: "110px"}}}
      mt = "50px"
      p = "20px">
        <Typography variant = "h3" mb = "46px">
          Showing Results
        </Typography>
        <Stack direction= "row" sx = {{ gap: {lg: "110px", xs: "50px"}}}
          flexWrap = "wrap" justifyContent= "center">
            {/* Iterates through current exercises and creates Exercise Card Component for each */}
          {currentExercises.map((exercise, index)=> {
            return (
              <ExerciseCard key = {index} exercise = {exercise}/>
            )
          })}
        </Stack>
        <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
          {/* if more than 9 exercises, render Pagination Component */}
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
  )
}

export default Exercises