import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { gapi } from "gapi-script";
import Logout from "./logout";
const ClientID =
  "303647766373-i6unql6vklssl3ikf2u24d01ur9uii0m.apps.googleusercontent.com";

const pages = ["Home", "Product", "Services", "Contact us", "Logout"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const Login = () => {
    window.location = "/login";
  };

  const home = () => {
    window.location = "/home";
  };

  const about = () => {
    window.location = "/about";
  };

  const addappointments = () => {
    window.location = "/addappointments";
  };
  const services = () => {
    window.location = "/services";
  };
  const doctors = () => {
    window.location = "/doctors";
  };
  const contactus = () => {
    window.location = "/contactus";
  };
  const appointments = () => {
    window.location = "/appointments";
  };

  const profile = () => {
    window.location = "/profile";
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // useEffect(() => {
  //   function logout() {
  //     // Check if the Google API client library is available
  //     if (typeof gapi !== "undefined" && gapi.auth2) {
  //       // Revoke Google OAuth access (if using the Google Sign-In API)
  //       const auth2 = gapi.auth2.getAuthInstance();
  //       if (auth2) {
  //         auth2.signOut().then(() => {
  //           auth2.disconnect();
  //           // Redirect to the home page after signing out
  //           window.location = "/";
  //         });
  //       }
  //     } else {
  //       // If the Google API client library is not available, simply redirect to the home page
  //       window.location = "/";
  //     }
  //   }

  //   // Call the logout function when the component mounts
  //   logout();
  // }, []);

  function logout() {
    // Check if the Google API client library is available
    if (typeof gapi !== "undefined" && gapi.auth2) {
      // Revoke Google OAuth access (if using the Google Sign-In API)
      const auth2 = gapi.auth2.getAuthInstance();
      if (auth2) {
        auth2.signOut().then(() => {
          auth2.disconnect();
          // Redirect to the home page after signing out
          window.location = "/";
        });
      }
    } else {
      // If the Google API client library is not available, simply redirect to the home page
      window.location = "/";
    }
  }
  return (
    <AppBar
      elevation={0}
      position="fixed"
      style={{
        backgroundColor: "white",
        fontFamily: "Poppins",
      }}
    >
      <Container maxWidth="xl" style={{ fontFamily: "Poppins" }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <a href="/home">
              <img src="./Logo.png" alt="logo"></img>
            </a>
          </Typography>

          <Box
            style={{ fontFamily: "Poppins", color: "#307172" }}
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "flex-end" },
            }}
            style={{ fontFamily: "Poppins" }}
          >
            <Button
              onClick={home}
              sx={{ my: 2, color: "#307172" }}
              style={{ marginRight: "10px" }}
            >
              Home
            </Button>
            <Button
              onClick={about}
              sx={{ my: 2, color: "#307172" }}
              style={{ marginRight: "10px" }}
            >
              About
            </Button>
            <Button
              onClick={services}
              sx={{ my: 2, color: "#307172" }}
              style={{ marginRight: "10px" }}
            >
              Services
            </Button>
            <Button
              onClick={doctors}
              sx={{ my: 2, color: "#307172" }}
              style={{ marginRight: "10px" }}
            >
              Doctors
            </Button>
            <Button
              onClick={contactus}
              sx={{ my: 2, color: "#307172" }}
              style={{ marginRight: "10px" }}
            >
              Contact Us
            </Button>
            <Button
              onClick={appointments}
              sx={{ my: 2, color: "#307172" }}
              style={{ marginRight: "10px" }}
            >
              Appointments
            </Button>

            <Button
              onClick={profile}
              sx={{ my: 2, color: "#307172" }}
              style={{ marginRight: "10px" }}
            >
              Profile
            </Button>

            <Button
              sx={{ my: 2, color: "#307172" }}
              style={{ marginRight: "10px" }}
            >
              <Logout />
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
