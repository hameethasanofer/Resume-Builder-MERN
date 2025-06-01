import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import EditIcon from '@mui/icons-material/Edit';
import logo from "../assets/profile.png";
import { logoutUser } from "../redux/userSlice";
import { clearEducation } from "../redux/educationSlice";
import { clearProjects } from "../redux/projectSlice";
import { clearExperience } from "../redux/experienceSlice";
import { clearExtraDetails } from "../redux/extraDetailsSlice";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Navbar.css';
import { clearProfile } from "../redux/profileSlice";

const Navbar = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [sectionsAnchorEl, setSectionsAnchorEl] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSectionsClick = (event) => {
    setSectionsAnchorEl(event.currentTarget);
  };

  const handleProfileClick = () => {
    navigate('/user-profile');
  };

  const handleContactUsClick = () => {
    navigate('/contact-us');
  };

  const handleTemplateClick = () => {
    navigate('/templates');
  };

  const handleClose = () => {
    setSectionsAnchorEl(null);
    setIsDrawerOpen(false);
  };

  const handleLogout = async () => {
    toast.success("Logout Successful!", {
      position: "top-left",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    dispatch(logoutUser());
    dispatch(clearProfile());
    dispatch(clearEducation());
    dispatch(clearProjects());
    dispatch(clearExperience());
    dispatch(clearExtraDetails());
  };

  return (
    <>
      <nav className="nav-container">
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#fff7e2", // Light orange
            color: "#000",
            boxShadow: "none",
            minHeight: "80px", // Increased height
            justifyContent: "center"
          }}
        >
          <Toolbar sx={{ minHeight: "80px" }}>
            {/* Menu Icon for Drawer */}
            <div className="menu-icon">
              <IconButton
                edge="start"
                sx={{ color: "#000" }}
                aria-label="menu"
                onClick={() => setIsDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            </div>

            {/* Drawer */}
            
            <Drawer
              anchor="left"
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
              PaperProps={{
                sx: { backgroundColor: "#ffab40", color: "#000" }
              }}
            >
              {currentUser !== null ? (
                <List>
                  <ListItem button component={Link} to="/" onClick={handleClose}>
                    <ListItemIcon sx={{ color: "#ff8c00" }}><HomeIcon /></ListItemIcon> {/* Changed to #ff8c00 */}
                    <ListItemText primary="Home" primaryTypographyProps={{ sx: { color: "#000" } }} />
                  </ListItem>
                  <ListItem button component={Link} to="/profile" onClick={handleClose}>
                    <ListItemIcon sx={{ color: "#ff8c00" }}><EditIcon /></ListItemIcon> {/* Changed to #ff8c00 */}
                    <ListItemText primary="Edit Resume" primaryTypographyProps={{ sx: { color: "#000" } }} />
                  </ListItem>
                </List>
              ) : (
                <div className="drawer-div p-4">
                  <h3 className="text-[#ff8c00] font-bold">Login Please!</h3>
                </div>
              )}
            </Drawer>


            {/* Logo and Title */}
            <img className="logo" src={logo} alt="resume" width={"40px"} height={"40px"} />
            <Typography
              className="logo-text"
              variant="h5"
              component="div"
              sx={{
                flexGrow: 1,
                marginLeft: "2px",
                fontWeight: "600",
                color: "#000"
              }}
            >
              <Link to={'/'} className="resume-builder-link" style={{ color: "#000", textDecoration: "none" }}>RESUME BUILDER</Link>
            </Typography>

            {/* Right Side of Navbar */}
            {currentUser ? (
              <>
                {/* Sections Dropdown */}
                <Button sx={{ color: "#000", fontWeight: 600 }} onClick={handleSectionsClick}>
                  Sections
                </Button>
                <Menu
                  anchorEl={sectionsAnchorEl}
                  open={Boolean(sectionsAnchorEl)}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  PaperProps={{
                    sx: { backgroundColor: "#ffccbc", color: "#ff8c00" }
                  }}
                >
                  <MenuItem onClick={() => { navigate('/profile'); handleClose(); }} sx={{ color: "#000" }}>Profile</MenuItem>
                  <MenuItem onClick={() => { navigate('/education'); handleClose(); }} sx={{ color: "#000" }}>Education</MenuItem>
                  <MenuItem onClick={() => { navigate('/projects'); handleClose(); }} sx={{ color: "#000" }}>Projects</MenuItem>
                  <MenuItem onClick={() => { navigate('/experience'); handleClose(); }} sx={{ color: "#000" }}>Experience</MenuItem>
                  <MenuItem onClick={() => { navigate('/extraDetails'); handleClose(); }} sx={{ color: "#000" }}>Extra Details</MenuItem>
                </Menu>

                {/* Direct Buttons in Navbar */}
                <Button sx={{ color: "#000", fontWeight: 600 }} onClick={handleTemplateClick}>Templates</Button>
                <Button sx={{ color: "#000", fontWeight: 600 }} onClick={handleContactUsClick}>Contact Us</Button>
                <Button
                  sx={{
                    color: "#fff",
                    fontWeight: 600,
                    backgroundColor: "#FF6F00", // Orange background
                    borderRadius: "6px",
                    ml: 1,
                    "&:hover": { backgroundColor: "#FFA500" }
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>

                {/* Avatar */}
                <div className="avatar-container">
                  <Avatar
                    src={currentUser?.avatar}
                    alt="user"
                    className="avatar"
                    onClick={handleProfileClick}
                    sx={{
                      cursor: "pointer",
                      ml: 2,
                      bgcolor: "#fff"
                    }}
                  />
                </div>
              </>
            ) : (
              <Link to={'/sign-in'} className="login-link">
                <Button sx={{ color: "#000", fontWeight: 600 }}>Login</Button>
              </Link>
            )}
          </Toolbar>
        </AppBar>
      </nav>
      {/* Footer */}
      {/* <footer className="w-full bg-[#ffab40] text-black py-2 fixed bottom-0 left-0 z-50">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
    <div className="text-center md:text-left text-xs font-semibold">
      © {new Date().getFullYear()} Resume Builder. All rights reserved.
    </div>
    <div className="flex space-x-4 mt-2 md:mt-0 text-xs">
      <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
      <Link to="/terms" className="hover:underline">Terms of Service</Link>
      <Link to="/contact-us" className="hover:underline">Contact</Link>
    </div>
  </div>
</footer> */}
    </>
  );
};

export default Navbar;