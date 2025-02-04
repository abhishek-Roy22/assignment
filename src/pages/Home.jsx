import { Link } from 'react-router-dom';
import Counter from '../components/Counter';
import UserForm from '../components/UserForm';
import RichTextEditor from '../components/ReachTextEditor';
import { useAuth } from '../context/AuthContext';
import { Container, Button, Typography, Box } from '@mui/material';

const Home = () => {
  const { user, login, logout } = useAuth();

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Home Page
      </Typography>

      {/* Authentication Section */}
      <Box mb={4}>
        {user ? (
          <Box>
            <Typography>Welcome, {user.displayName}!</Typography>
            <Button
              variant="contained"
              color="error"
              onClick={logout}
              sx={{ mt: 2 }}
            >
              Logout
            </Button>
          </Box>
        ) : (
          <Button variant="contained" color="primary" onClick={login}>
            Sign in with Google
          </Button>
        )}
      </Box>

      {/* Counter Component */}
      <Box mb={6}>
        <Counter />
      </Box>

      {/* User Form Component */}
      <Box mb={6}>
        <UserForm />
      </Box>

      {/* Rich Text Editor Component */}
      <Box mb={6}>
        <Typography variant="h6" gutterBottom>
          Rich Text Editor
        </Typography>
        <RichTextEditor />
      </Box>

      {/* Navigation Links */}
      <Box mt={4}>
        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
          <Button variant="outlined" color="primary">
            Go to Dashboard
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Home;
