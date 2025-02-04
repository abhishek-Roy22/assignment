import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../slice/CounterSlice.js';
import { Button, Box, Typography } from '@mui/material';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Box textAlign="center" p={3} border="1px solid #ddd" borderRadius={2}>
      <Typography variant="h5">Counter: {count}</Typography>
      <Box mt={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(increment())}
          sx={{ mr: 1 }}
        >
          Increment
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(decrement())}
          sx={{ mr: 1 }}
        >
          Decrement
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => dispatch(reset())}
        >
          Reset
        </Button>
      </Box>
    </Box>
  );
};

export default Counter;
