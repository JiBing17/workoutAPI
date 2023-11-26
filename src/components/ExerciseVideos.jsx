import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

// Exercise Videos Component: Renders exercise-related videos
const ExerciseVideos = ({ exerciseVideos, name }) => {
  // If no exercise videos are available, show a loader
  if (!exerciseVideos.length) return <Loader />;

  return (
    // Container for exercise videos
    <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px">
      {/* Title: Display the exercise name and indicate it's for exercise videos */}
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      {/* Stack to display exercise videos */}
      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
        {/* Iterate through related exercise videos (first 3) */}
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          // Link to YouTube video
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            {/* Thumbnail */}
            <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              {/* Video title */}
              <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
                {item.video.title}
              </Typography>
              {/* Channel name */}
              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
