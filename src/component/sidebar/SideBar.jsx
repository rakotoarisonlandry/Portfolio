import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Logo from "../../../public/assets/img/Me.png";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { colors } from "@mui/material";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import InfoIcon from "@mui/icons-material/Info";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import GradingIcon from "@mui/icons-material/Grading";
import SideBarFooter from "./SideBarFooter";
function SideBar() {
  return (
    <Box>
      <Container className="sideBarContainer">
        <Box component="section">
          <img src={Logo} alt="Logo" className="sideBarImg" />
          <Box paddingTop="30px" fontSize="15px" margin="18px 16px 16px 2px">
            <Link to="/" className="sidebar-link-container">
              <Box
                display="flex"
                padding="2px"
                sx={{ color: "#4CFBF6" }}
                className="sidebar-Link"
                fontWeight=""
                alignItems="center"
              >
                <HomeIcon sx={{ color: "#4CFBF6" }} className="SideBar-icon" />
                Presentation
              </Box>
            </Link>
            <Link to="/about" className="sidebar-link-container">
              <Box display="flex" alignItems="center" className="sidebar-Link">
                <InfoIcon className="SideBar-icon" />
                About Me
              </Box>
            </Link>
            <Link to="/project" className="sidebar-link-container">
              <Box display="flex" alignItems="center" className="sidebar-Link">
                <DomainVerificationIcon className="SideBar-icon" />
                Last Project
              </Box>
            </Link>
            <Link to="/skills" className="sidebar-link-container">
              <Box display="flex" alignItems="center" className="sidebar-Link">
                <GradingIcon className="SideBar-icon" />
                Skills
              </Box>
            </Link>
            <Link to="/contact" className="sidebar-link-container">
              <Box display="flex" alignItems="center" className="sidebar-Link">
                <PermContactCalendarIcon className="SideBar-icon" />
                Contact
              </Box>
            </Link>
          </Box>
        </Box>
        <Box className="SideBarFooter">
          <SideBarFooter />
        </Box>
      </Container>
    </Box>
  );
}

export default SideBar;
