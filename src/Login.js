// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Paper, Link } from '@mui/material';
import { auth } from './firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter the required fields.');
      return;
    }

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setError('');

      // Redirect to Home page after successful login
      navigate('/home'); // Replace history.push with navigate
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container maxWidth="sm" style={{ backgroundColor: '#2196f3', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper elevation={3} style={{ padding: 20, width: '100%', maxWidth: 400 }}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <Typography color="error" style={{ marginTop: 10 }}>{error}</Typography>}
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </form>
        <Typography style={{ marginTop: 10 }}>
          Don't have an account? <Link href="/signup">Sign Up</Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Login;
