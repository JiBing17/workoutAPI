import React from 'react';
import { Stack } from '@mui/material';
import { InfinitySpin } from 'react-loader-spinner';

// Loader Component: Displays a loading spinner while content is loading
const Loader = () => (
  // Stack to center the loading spinner
  <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
    {/* Loading spinner */}
    <InfinitySpin color="grey" />
  </Stack>
);

export default Loader;
