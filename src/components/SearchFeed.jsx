import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import LoadingBar from "react-top-loading-bar";

import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const [progress, setProgress] = useState(0);

  const { searchTerm } = useParams();

  // useEffect(() => {
  //   setProgress(30);

  //   fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
  //     setVideos(data.items)
  //   );
  // }, [searchTerm]);

  useEffect(() => {
    setProgress(40); // Start loading
    // Start loading

    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        setVideos(data.items);
        setProgress(100); // Complete loading
      })
      .catch(() => setProgress(0)); // Reset on error

  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        height= '4px'
      />
      <Typography
        variant="h6"
        mb={2} sx={{ color: 'white' }}
      >
        Search Results for <span style={{ color: 'red', textTransform: 'capitalize' }}>{searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
