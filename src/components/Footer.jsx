import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/joy/styles';
import { applySolidInversion } from '@mui/joy/colorInversion';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';

const StyledBox = styled('div')(
  ({ theme }) => ({
    alignItems: 'center',
    background: `linear-gradient(45deg, ${theme.vars.palette.neutral[800]}, ${theme.vars.palette.neutral[600]})`,
  }),
  applySolidInversion('neutral'),
);

function Stat({ description, value }) {
  return (
    <Box sx={{ borderLeft: 3, borderColor: 'divider' }}>
      <Typography level="h3" component="div">
        {value}
      </Typography>
      <Typography level="title-sm" textColor="text.secondary">
        {description}
      </Typography>
    </Box>
  );
}

Stat.propTypes = {
  description: PropTypes.node,
  value: PropTypes.node,
};

export default function Footer(){

    return(
        <>
          <StyledBox className='fixed bottom-0 w-full'>
                  <div className='flex justify-center items-center'>
                      <p className='mt-4 text-white'>@CopyRights Owned By Albin Anthony</p>
                  </div>
          </StyledBox>  
        </>
    )
}



