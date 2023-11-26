import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

// Similar Exercises Component: Displays similar exercises based on target muscle and equipment
const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>

    {/* Similar Muscle Exercises Display */}
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>
    {/* Display similar exercises for the target muscle */}
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {/* Display HorizontalScrollbar if exercises for the target muscle are available, otherwise display Loader */}
      {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader/>}
    </Stack>

    {/* Similar Equipment Exercises Display */}
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
    </Typography>
    {/* Display similar exercises for the equipment */}
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {/* Display HorizontalScrollbar if exercises for the equipment are available, otherwise display Loader */}
      {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader/>}
    </Stack>
  </Box>
);

export default SimilarExercises;
