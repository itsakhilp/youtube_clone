import React from 'react';
import { Stack, Box, Skeleton } from '@mui/material';

const SkeletonCard = () => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" alignItems="start" gap={1}>
      {[...Array(9)].map((_, idx) => (
        <Box key={idx} sx={{ width: 358, marginRight: 0.5, my: 5 }}>
          <Skeleton
            variant="rectangular"
            width={358}
            height={158}
            sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} // Darker background color
          />
          <Box sx={{ pt: 0.5 }}>
            <Skeleton
              sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} // Darker background color
            />
            <Skeleton
              width="60%"
              sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} // Darker background color
            />
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

export default SkeletonCard;
