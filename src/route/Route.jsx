import { Box } from '@mui/material';
import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import SideBar from '../component/sidebar/SideBar';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import LastProject from '../pages/LatestProject/LastProject';
import Skills from '../pages/Skills/Skills';
import Contact from '../pages/Contact/Contact';

const Layout =() =>{
    return(
        <Box sx={{display:'flex'}}>
            <SideBar/>
            <Outlet/>
        </Box>
    )
}
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",  
            element: <Home />,
          },
          {
            path: "/About",
            element: <About/>,
          },
          {
            path: "/project",
            element: <LastProject/>,
          },
          {
            path: "/skills",
            element: <Skills/>,
          },
          {
            path: "/contact",
            element: <Contact/>,
          }
        ],
      },
])
function Route() {
  return (
    <Box>
        <RouterProvider router={router} />
    </Box>
  )
}

export default Route