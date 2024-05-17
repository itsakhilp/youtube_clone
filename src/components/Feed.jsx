import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";
import Videos from "./Videos";
import {fetchFromAPI} from "../utils/fetchFromAPI"

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("Latest");
  const [videos, setVideos] = useState(null)

  useEffect(() => {
    setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>setVideos(data.items))
      }, [selectedCategory]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory} 
          />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#000" }}
        >
          CopyRight 2024 Akhil
        </Typography>
        </Box>


        <Box p={2} sx={{overflowY : 'auto',height: '90vh', flex: 2}}>
        <Typography
          variant="h6"
          fontWeight="bold"
          mb={2} sx={{color: "#000"}}
        >
          {selectedCategory} <span style={{color:'red'}}>Videos</span>
        </Typography>
        
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
