import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Spinner = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mt: 10 }}>
          <CircularProgress color='secondary'/>
        </Box>
    )
}

export default Spinner;