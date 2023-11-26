import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

// Function for scrolling left
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    // Left arrow icon for scrolling left
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

// Function for scrolling right
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    // Right arrow icon for scrolling right
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

// Horizontal Scrollbar Component: Displays a horizontal scrollbar for body parts or exercise cards
const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {/* Iterate through each bodyPart or exercise */}
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        {/* If bodyParts are true, display BodyPart Component; otherwise, display ExerciseCard Component */}
        {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} />}
      </Box>
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;
