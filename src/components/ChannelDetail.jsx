import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import ChannelCard from './ChannelCard';
import Videos from './Videos';


const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])


  const {id} = useParams();
  // console.log("--id",id)

  console.log("--channelDetail",channelDetail,videos)

  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=> setChannelDetail(data?.items[0]))
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=> setVideos(data?.items))
  }, [id])

  return (
   <Box style={{minHeight:"95vh"}}>
      <Box>
        <div
          style={{background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',height:'300px'}}
        ></div>
      </Box>
      <ChannelCard channelDetail={channelDetail} marginTop="-130px" />

      <Box  display='flex' p="2" >
        <Box sx={{mr:{sm:'100px'}}}/>
          <Videos videos={videos}/>
      </Box>
   </Box>
  )
}

export default ChannelDetail