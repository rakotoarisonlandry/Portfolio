import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Logo from "../../../public/assets/img/Me.png";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { colors } from "@mui/material";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import { BiInfoSquare } from "react-icons/bi";
import { MdOutlinePermContactCalendar } from "react-icons/md"
import GradingIcon from "@mui/icons-material/Grading";
import SideBarFooter from "./SideBarFooter";
function SideBar() {
  return (
    <Box>
      <Container className="sideBarContainer">
        <Box component="section">
          <img
            src={Logo}
            alt="Logo"
            className="w-24 items-center justify-center mt-[25px] mb-[-34px] ml-[34px]"
          />
          <Box paddingTop="30px" fontSize="15px" margin="18px 16px 16px 2px">
            <Link to="/" className="sidebar-link-container">
              <Box
                display="flex"
                padding="2px"
                sx={{ color: "#9b46e4" }}
                className="sidebar-Link"
                fontWeight=""
                alignItems="center"
              >
                <IoMdHome sx={{ color: "#9b46e4" }} className="SideBar-icon" />
                Presentation
              </Box>
            </Link>
            <Link to="/about" className="sidebar-link-container">
              <Box display="flex" alignItems="center" className="sidebar-Link">
                <BiInfoSquare className="SideBar-icon" />
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
                <MdOutlinePermContactCalendar className="SideBar-icon" />
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
