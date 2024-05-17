import {Stack} from '@mui/material';
import {Link} from 'react-router-dom';

import logo from '../assets/YouTube-logo.png'
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <>
      <Stack 
        direction="row"
        alignItems="center"
        p={3}
        sx={{position: 'sticky', background: '#fff', top:0, justifyContent: 'space-between'}}
        >
          <Link to="/" style={{display:'flex',alignItems:'center'}}>
            <img src={logo} alt="logo!" height={30}/> 
          </Link>
          <SearchBar/>
        </Stack>
    </>
  )
}

export default Navbar