import React from 'react';
import { Box, Typography } from '@mui/material';
import './LowBanner.css';

const LowBanner = () => {
  return (
    <Box className="footer" component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        요리보고 조리보고
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        component="p"
      >
        맛있는 음식을 만들어 보아요
      </Typography>
    </Box>
  );
};

export default LowBanner;
