import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom';
import {Box} from '@mui/material'
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import VideoDetail from './components/VideoDetail';
import ChannelDetail from './components/ChannelDetail';
import SearchFeed from './components/SearchFeed';

const App = () => {
  return (
   <>
      <HashRouter>
        <Box sx={{backgroundColor: '#fff',padding:'40px'}}>
          <Navbar/>
          <Routes>
            <Route path='/' exact element={<Feed/>}/>
            <Route path='/video/:id' element={<VideoDetail/>}/>
            <Route path="/channel/:id" element={<ChannelDetail/>}/>
            <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
            {/* <img src="./assets/utube.png" alt="" /> */}
          </Routes>
        </Box>
      </HashRouter>
   </>
  )
}

export default App