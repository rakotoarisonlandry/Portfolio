import { Box } from "@mui/material";
import React from "react";
import Front from "../../../public/assets/img/front.svg";
import Back from "../../../public/assets/img/Back.svg";
import design from "../../../public/assets/img/design.svg";
import Marquee from "react-fast-marquee";
function HomeComponent() {
  return (
    <Box className="fast-Container">
      <Marquee
        className="fast-marque"
        gradient={false}
        speed={60}
        pauseOnHover={true}
        pauseOnClick={true}
        delay={0}
        play={true}
        direction="left"
      >
        <span>
          <img src={Front} alt="" className="img-fast" />
        </span>
        <span>
          <img src={Back} alt="" className="img-fast" />
        </span>
        <span>
          <img src={design} alt="" className="img-fast" />
        </span>
        <span>
          <img src={Front} alt="" className="img-fast" />
        </span> 
        <span>
          <img src={Back} alt="" className="img-fast" />
        </span>
      </Marquee>
    </Box>
  );
}

export default HomeComponent;
