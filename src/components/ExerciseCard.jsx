import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

// Exercise Card Component: Represents an individual exercise card
const ExerciseCard = ({ exercise }) => (
  // Link to the exercise detail page based on exercise ID
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    {/* Exercise GIF */}
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    {/* Stack for buttons and exercise name */}
    <Stack direction="row">
      {/* Button for exercise body part */}
      <Button sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.bodyPart}
      </Button>
      {/* Button for exercise target */}
      <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.target}
      </Button>
    </Stack>
    {/* Exercise name */}
    <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
