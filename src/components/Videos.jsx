import React from 'react'
import { Stack, Box} from '@mui/material'
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
import SkeletonCard from './SkeletonCard';

// import Skeleton from './Skeleton';

const Videos = ({videos,direction}) => {
  if(!videos?.length) return <SkeletonCard/>
    // console.log("-vvv",videos);
  return (
    <Stack direction={direction ||"row"} flexWrap="wrap" justifyContent="start"
    alignItems="start" gap={2} 
    >
      {videos.map((item,idx)=>(
        <Box key={idx}>
            {item.id.videoId && <VideoCard video={item}/>}
            {item.id.channelId && <ChannelCard channelDetail={item}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos

