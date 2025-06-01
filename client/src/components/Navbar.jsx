import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from "react-router-dom";
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
import { clearProfile } from "../redux/profileSlice";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Navbar.css';

const Navbar = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [sectionsAnchorEl, setSectionsAnchorEl] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const handleSectionsClick = (event) => {
    setSectionsAnchorEl(event.currentTarget);
    setActiveButton("sections");
  };

  const handleProfileClick = () => {
    navigate('/user-profile');
    setActiveButton("profile");
  };

  const handleContactUsClick = () => {
    navigate('/contact-us');
    setActiveButton("contact");
  };

  const handleTemplateClick = () => {
    navigate('/templates');
    setActiveButton("templates");
  };

  const handleClose = () => {
    setSectionsAnchorEl(null);
    setIsDrawerOpen(false);
  };

  const handleLogout = () => {
    toast.success("Logout Successful!", {
      position: "top-left",
      autoClose: 1500,
    });
    dispatch(logoutUser());
    dispatch(clearProfile());
    dispatch(clearEducation());
    dispatch(clearProjects());
    dispatch(clearExperience());
    dispatch(clearExtraDetails());
    setActiveButton("");
  };

  useEffect(() => {
    const sectionRoutes = ["/profile", "/education", "/projects", "/experience", "/extraDetails"];
    if (sectionRoutes.includes(location.pathname)) {
      setActiveButton("sections");
    } else if (location.pathname === "/templates") {
      setActiveButton("templates");
    } else if (location.pathname === "/contact-us") {
      setActiveButton("contact");
    } else {
      setActiveButton("");
    }
  }, [location.pathname]);

  return (
    <nav className="nav-container">
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fff7e2",
          color: "#000",
          boxShadow: "none",
          minHeight: "80px",
          justifyContent: "center"
        }}
      >
        <Toolbar sx={{ minHeight: "80px" }}>
          <div className="menu-icon">
            <IconButton
              edge="start"
              sx={{ color: "#ff8c00" }}
              aria-label="menu"
              onClick={() => setIsDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </div>

          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            PaperProps={{
              sx: { backgroundColor: "#ffab40", color: "#000" }
            }}
          >
            {currentUser ? (
              <List>
                <ListItem button component={Link} to="/" onClick={handleClose}>
                  <ListItemIcon sx={{ color: "#ff8c00" }}><HomeIcon /></ListItemIcon>
                  <ListItemText primary="Home" primaryTypographyProps={{ sx: { color: "#000" } }} />
                </ListItem>
                <ListItem button component={Link} to="/profile" onClick={handleClose}>
                  <ListItemIcon sx={{ color: "#ff8c00" }}><EditIcon /></ListItemIcon>
                  <ListItemText primary="Edit Resume" primaryTypographyProps={{ sx: { color: "#000" } }} />
                </ListItem>
              </List>
            ) : (
              <div className="drawer-div p-4">
                <h3 className="text-[#ff8c00] font-bold">Login Please!</h3>
              </div>
            )}
          </Drawer>

          <img className="logo" src={logo} alt="resume" width={"40px"} height={"40px"} />
          <Typography
            className="logo-text"
            variant="h5"
            sx={{ flexGrow: 1, marginLeft: "2px", fontWeight: "600" }}
          >
            <Link
              to="/"
              style={{
                color: activeButton === "" ? "#ff8c00" : "#000",
                textDecoration: "none"
              }}
            >
              RESUME BUILDER
            </Link>
          </Typography>

          {currentUser ? (
            <>
              <Button
                sx={{
                  color: activeButton === "sections" ? "#ff8c00" : "#000",
                  fontWeight: 600,
                  mx: 1,
                  borderRadius: "6px",
                  backgroundColor: "transparent"
                }}
                onClick={handleSectionsClick}
              >
                Sections
              </Button>

              <Menu
                anchorEl={sectionsAnchorEl}
                open={Boolean(sectionsAnchorEl)}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                PaperProps={{ sx: { backgroundColor: "#EAE0CB", color: "#000" } }}
              >
                <MenuItem onClick={() => { navigate('/profile'); handleClose(); }}>Profile</MenuItem>
                <MenuItem onClick={() => { navigate('/education'); handleClose(); }}>Education</MenuItem>
                <MenuItem onClick={() => { navigate('/projects'); handleClose(); }}>Projects</MenuItem>
                <MenuItem onClick={() => { navigate('/experience'); handleClose(); }}>Experience</MenuItem>
                <MenuItem onClick={() => { navigate('/extraDetails'); handleClose(); }}>Extra Details</MenuItem>
              </Menu>

              <Button
                sx={{
                  color: activeButton === "templates" ? "#ff8c00" : "#000",
                  fontWeight: 600,
                  mx: 1,
                  borderRadius: "6px",
                  backgroundColor: "transparent"
                }}
                onClick={handleTemplateClick}
              >
                Templates
              </Button>

              <Button
                sx={{
                  color: activeButton === "contact" ? "#ff8c00" : "#000",
                  fontWeight: 600,
                  mx: 1,
                  borderRadius: "6px",
                  backgroundColor: "transparent"
                }}
                onClick={handleContactUsClick}
              >
                Contact Us
              </Button>

              <Button
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  backgroundColor: "#ff8c00",
                  borderRadius: "6px",
                  ml: 1
                }}
                onClick={handleLogout}
              >
                Logout
              </Button>

              <Avatar
                src={currentUser?.avatar}
                alt="user"
                onClick={handleProfileClick}
                sx={{
                  cursor: "pointer",
                  ml: 2,
                  bgcolor: "#fff"
                }}
              />
            </>
          ) : (
            <Link to="/sign-in" className="login-link">
              <Button sx={{ color: "#000", fontWeight: 600 }}>Login</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default Navbar;
