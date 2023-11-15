// Signup.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper, Link } from '@mui/material';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if fields are filled
    if (!email || !password || !confirmPassword) {
      setError('Please enter the required fields.');
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      // Create a new user with Firebase Authentication
      await auth.createUserWithEmailAndPassword(email, password);

      // Reset error state
      setError('');

      // Redirect to Login page after successful signup
      navigate('/login');
    } catch (err) {
      // Handle error during user registration
      setError(err.message);
    }
  };

  return (
    <Container maxWidth="sm" style={{ backgroundColor: '#2196f3', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper elevation={3} style={{ padding: 20, width: '100%', maxWidth: 400 }}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h4" gutterBottom>
            Sign Up
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
          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <Typography color="error" style={{ marginTop: 10 }}>{error}</Typography>}
          <Button type="submit" variant="contained" color="primary">
            Sign Up
          </Button>
        </form>
        <Typography style={{ marginTop: 10 }}>
          Already have an account? <Link href="/login">Login</Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Signup;
