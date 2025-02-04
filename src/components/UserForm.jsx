import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../slice/UserSlice';
import { v4 as uuidv4 } from 'uuid';
import { TextField, Button, Box, Typography, Container } from '@mui/material';

const UserForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    id: user.id || uuidv4(),
    name: user.name || '',
    address: user.address || '',
    email: user.email || '',
    phone: user.phone || '',
  });

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = 'You have unsaved changes!';
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(formData));
    alert('Data Saved!');
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ p: 3, boxShadow: 3, borderRadius: 2, backgroundColor: '#fff' }}
      >
        <Typography variant="h5" gutterBottom>
          User Information
        </Typography>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          margin="normal"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <TextField
          fullWidth
          label="Address"
          variant="outlined"
          margin="normal"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
          required
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <TextField
          fullWidth
          label="Phone"
          variant="outlined"
          margin="normal"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Save
        </Button>
      </Box>
    </Container>
  );
};

export default UserForm;
