// src/components/AuthForm.js
import React, { useState } from "react";
import {
    Container,
    TextField,
    Button,
    Typography,
    Grid,
    IconButton,
    InputAdornment,
    Box,
    Link,
} from "@mui/material";
import { Visibility, VisibilityOff, Facebook, Google } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const AuthForm = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const toggleAuthMode = () => {
        setIsSignup((prev) => !prev);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Add login or signup functionality here
        console.log(formData);
    };

    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    boxShadow: 3,
                    padding: 4,
                    borderRadius: 2,
                    backgroundColor: "#fff",
                }}
            >
                <Typography component="h1" variant="h5">
                    {isSignup ? "Sign Up" : "Log In"}
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {/* Email Field */}
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Grid>
                        {/* Password Field */}
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                id="password"
                                autoComplete="current-password"
                                value={formData.password}
                                onChange={handleChange}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setShowPassword(!showPassword)}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        {/* Confirm Password Field (Only for Signup) */}
                        {isSignup && (
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    type={showPassword ? "text" : "password"}
                                    id="confirm-password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                            </Grid>
                        )}
                        {/* Submit Button */}
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                {isSignup ? "Sign Up" : "Log In"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                {/* Social Media Login */}
                <Typography variant="subtitle1" align="center" sx={{ mt: 2 }}>
                    Or {isSignup ? "sign up" : "log in"} with
                </Typography>
                <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
                    <IconButton color="primary">
                        <Google />
                    </IconButton>
                    <IconButton color="primary">
                        <Facebook />
                    </IconButton>
                </Box>
                {/* Toggle between Login and Signup */}
                <Grid container justifyContent="flex-end" sx={{ mt: 3 }}>
                    <Grid item>
                        <Link variant="body2" onClick={toggleAuthMode} style={{ cursor: "pointer" }}>
                            {isSignup
                                ? "Already have an account? Log In"
                                : "Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default AuthForm;
