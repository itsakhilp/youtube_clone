import { Box, CardContent, Typography, CardMedia } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { demoProfilePicture } from "../utils/constants";
import { Link } from "react-router-dom";

const ChannelCard = ({ channelDetail, marginTop }) => (
  <Box
    sx={{
      boxShadow: "none",
      borderRadius: "20px",
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width:{xs:'356px',md:'320px'},
      height: '326px',
      margin: 'auto',
      marginTop,
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          color: "#000",
        }}
      >
        <CardMedia
          image={
            channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture
          }
          alt={channelDetail?.snippet?.title}
          sx={{width:'180px',height:'180px',borderRadius:'50%',mb:2,border:'1px solid #e3e3e3'}}
        />
        <Typography variant="h6">
        {channelDetail?.snippet?.title}
        <CheckCircleIcon sx={{fontSize:'16px', color:'gray', ml:'5px'}}/>
        </Typography>

        <Typography>
          {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()}Subscribers
        </Typography>
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
