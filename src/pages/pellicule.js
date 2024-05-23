import React from 'react';
import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import FeatureProduct from "./featureProduct";
import NavBar from "../component/navbar";


const StyledRouterLink = styled(RouterLink)(({ theme }) => ({
  color: 'white',
  marginRight: '20px',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
  fontFamily: 'Grafton, sans-serif',
}));

const Pellicule = () => {
    return (
      <Box sx={{ flexGrow: 1 }}>
      <NavBar/>
        <h2 className="text-muted text-center mt-4 mb-3">New Arrival</h2>
        <div className="container pb-5 px-lg-5">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5">
            {Array.from({ length: 6 }, (_, i) => {
                return <FeatureProduct key={i} />;
            })}
            </div>
        </div>
        </Box>
  );
}

export default Pellicule;