import {Link} from 'react-router-dom';
import {Typography, Card, CardContent, CardMedia} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import {demoThumbnailUrl,demoChannelUrl,demoVideoUrl,demoChannelTitle,demoVideoTitle,demoProfilePicture} from '../utils/constants'

const VideoCard = ({video : {id: {videoId},snippet}}) => {
    // console.log("---videoSnip-",videoId,snippet);
  return (
    <Card sx={{width:{md:'280px', xs:'95%', boxShadow:'none',boxRadius:'0'}}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia
                image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title}
                sx={{width: 358, height: 180}}
            />
        </Link>
        <CardContent
        style={{height:'80px', backgroundColor: '#1e1e1e'}}
        >
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant='subtitle1' fontWeight='bold' color='#fff'
                >{snippet.title.slice(0,60) || demoVideoTitle.slice(0,60)}</Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelTitle}>
                <Typography variant='subtitle2' fontWeight='bold' color='gray'
                >{snippet.channelTitle || demoChannelTitle}
                <CheckCircleIcon sx={{fontSize:'12px', color:'gray', ml:'5px'}}/>
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard