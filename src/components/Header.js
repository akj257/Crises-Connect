// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LoginIcon from '@mui/icons-material/Login';
import Logo from '../assets/logo.jpg'; // Example logo path

const Header = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#0D47A1', boxShadow: 'none' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {/* Logo and Title */}
                <Box display="flex" alignItems="center">
                    <img src={Logo} alt="Logo" style={{ width: 40, borderRadius:50, marginRight: 10 }} />
                    <Typography variant="h6" sx={{ flexGrow: 1, color: '#FFFFFF', fontWeight: 'bold' }}>
                        Disaster Reporting Tool
                    </Typography>
                </Box>

                {/* Navigation Buttons */}
                <Box>
                    <Button color="inherit" component={Link} to="/" startIcon={<HomeIcon />} sx={{ color: '#FFFFFF', mx: 1 }}>
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/report" startIcon={<ReportProblemIcon />} sx={{ color: '#FFFFFF', mx: 1 }}>
                        Report Incident
                    </Button>
                    <Button color="inherit" component={Link} to="/dashboard" startIcon={<DashboardIcon />} sx={{ color: '#FFFFFF', mx: 1 }}>
                        Dashboard
                    </Button>
                    <Button color="inherit" component={Link} to="/auth" startIcon={<LoginIcon />} sx={{ color: '#FFFFFF', mx: 1 }}>
                        Login / Signup
                    </Button>
                </Box>

                {/* Mobile Menu Icon */}
                <IconButton edge="end" color="inherit" sx={{ display: { xs: 'block', md: 'none' } }}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
