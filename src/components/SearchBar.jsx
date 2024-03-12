import { useState } from "react"
import {useNavigate} from "react-router-dom"
// import {IconButton} from '@mui/icons-material'
import {Paper,IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <Paper
    component='form'
    onSubmit={()=>{}}
    sx={{
      borderRadius:20,
      border:'1px solid #e3e3e3',
      pl:2,
      boxShadow: 'none',
      mr: {sm:5}

    }}
    >
      <input
      className = "search-bar"
      placeholder= 'Search...'
      value=''
      onChange={()=>{}} 
      style={{ border:'none'}}
      />
      
      <IconButton>
        <SearchIcon/>
      </IconButton>
    </Paper>


  )
}

export default SearchBar