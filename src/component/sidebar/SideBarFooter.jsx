import { Box } from "@mui/system";
import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CopyrightIcon from "@mui/icons-material/Copyright";
function SideBarFooter() {
  return (
    <Box>
      <Link>
        <Typography variant="body2" className="footerTypography">
          Why Hire me?
        </Typography>
      </Link>
      <Box className="footerCopyright">
        <CopyrightIcon  sx={{fontSize:15 ,marginRight:1}}/>
        <Typography variant="caption">Rakotoarison Landry Brigea</Typography>
      </Box>
    </Box>
  );
}

export default SideBarFooter;
