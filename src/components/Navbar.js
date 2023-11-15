// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div className="container-fluid nav-bg ">
//         <div className="row">
//             <div className="col-10 mx-auto">

//             </div>
//         </div>
//         <nav class="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <NavLink className="navbar-brand" to="/home">
//             NewApp
//           </NavLink>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <NavLink className="nav-link active" aria-current="page" to="/home">
//                   Home
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/aboutus">
//                   About US
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/services">
//                 Services
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/contactus">
//                   Contact Us
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { NavLink } from 'react-router-dom';

const pages = ['Home', 'Services', 'Contact', 'About'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);



  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    event.preventDefault();
  };

  
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);

  };
  

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

  return (
    <Box >
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><NavLink  style={{textDecoration: 'none', color: 'black'}} to={`${page}`}>{page}</NavLink></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 3, color: 'white', display: 'block', '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Change the background color on hover
                  }, }}
              >
                <NavLink style={{textDecoration: 'none', color: 'white'}} to={`${page}`}>{page}</NavLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </Box>
  );
}
export default Navbar;
