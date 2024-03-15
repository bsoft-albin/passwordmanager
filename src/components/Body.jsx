import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


export default function Body() {

    return (
        <div className='w-full flex items-center justify-center' >
            <Box sx={{ flexGrow: 1}} width='40rem' >
                <div className='flex items-center justify-center'>
                    <h2>Password Store</h2>
                </div>
                <form className='frm-bg'>
                    <div className='flex items-center justify-center'>
                        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={4}>
                            <Box gridColumn="span 6">
                                <TextField label="Username" variant="standard" />
                            </Box>
                            <Box gridColumn="span 6">
                                <TextField label="Email" variant="standard" />
                            </Box>
                            <Box gridColumn="span 6">
                                <TextField label="Password" type='password' variant="standard" />
                            </Box>
                            <Box gridColumn="span 6">
                                <TextField label="Confirm Password" type='password' variant="standard" />
                            </Box>
                
                        </Box>
                        
                    </div>
                    <div className='flex justify-center items-center mt-4'>
                        <Button style={{width : '10rem', marginRight : '1rem', marginBottom : '1rem'}} variant="contained" color="success">
                            Save Password 
                        </Button>
                        <Button style={{width : '10rem', marginLeft : '1rem', marginBottom : '1rem'}} variant="contained" color="error">
                            Cancel
                        </Button>
                    </div>
                </form>
            </Box>
        </div>
    );
  }







  


 


