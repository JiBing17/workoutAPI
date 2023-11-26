import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

// Footer Component: Renders the footer section of the website
const Footer = () => {
  return (
    // Footer container with background color
    <Box mt="80px" bgcolor="#fff3f4">
      {/* Stack for logo and copyright information */}
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        {/* Logo */}
        <img src={Logo} alt="logo" width="200px" height="40px" />
        {/* Copyright information */}
        <Typography variant='h5' pb="40px" mt="20px">
          Copyright © | 2022 | Golds Gym. All Rights Reserved.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
