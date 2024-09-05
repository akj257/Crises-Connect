// src/components/ReportForm.js
import React, { useState } from "react";
import {
    Container,
    TextField,
    MenuItem,
    Button,
    Typography,
    Grid,
    FormControl,
    InputLabel,
    Select,
    FormHelperText,
    InputAdornment,
    IconButton,
    Box,
} from "@mui/material";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { styled } from "@mui/material/styles";

const Input = styled("input")({
    display: "none",
});

const incidentTypes = [
    { value: "flood", label: "Flood" },
    { value: "earthquake", label: "Earthquake" },
    { value: "road_blockage", label: "Road Blockage" },
];

const severityLevels = [
    { value: "low", label: "Low" },
    { value: "medium", label: "Medium" },
    { value: "high", label: "High" },
    { value: "critical", label: "Critical" },
];

const ReportForm = () => {
    const [incidentType, setIncidentType] = useState("");
    const [severityLevel, setSeverityLevel] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Add logic to submit form data to backend or handle form submission
        console.log({
            location,
            incidentType,
            severityLevel,
            description,
            file,
        });
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: "2rem", padding: "2rem", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
            <Typography variant="h4" gutterBottom align="center">
                Report an Incident
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    {/* Location Input */}
                    <Grid item xs={12}>
                        <TextField
                            label="Location"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LocationOnIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>

                    {/* Incident Type Selection */}
                    <Grid item xs={12}>
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Type of Incident</InputLabel>
                            <Select
                                value={incidentType}
                                onChange={(e) => setIncidentType(e.target.value)}
                                label="Type of Incident"
                            >
                                {incidentTypes.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                            <FormHelperText>Select the type of incident</FormHelperText>
                        </FormControl>
                    </Grid>

                    {/* Severity Level Selection */}
                    <Grid item xs={12}>
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Severity Level</InputLabel>
                            <Select
                                value={severityLevel}
                                onChange={(e) => setSeverityLevel(e.target.value)}
                                label="Severity Level"
                            >
                                {severityLevels.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                            <FormHelperText>Select the severity level of the incident</FormHelperText>
                        </FormControl>
                    </Grid>

                    {/* Additional Information (Description) */}
                    <Grid item xs={12}>
                        <TextField
                            label="Additional Information"
                            variant="outlined"
                            multiline
                            rows={4}
                            fullWidth
                            margin="normal"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Describe the situation in detail..."
                        />
                    </Grid>

                    {/* Media Upload */}
                    <Grid item xs={12}>
                        <label htmlFor="file-upload">
                            <Input
                                accept="image/*,video/*"
                                id="file-upload"
                                type="file"
                                onChange={handleFileChange}
                            />
                            <Button
                                variant="contained"
                                component="span"
                                startIcon={<UploadFileIcon />}
                                fullWidth
                            >
                                {file ? file.name : "Upload Media"}
                            </Button>
                        </label>
                    </Grid>

                    {/* Submit Button */}
                    <Grid item xs={12}>
                        <Box textAlign="center">
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                type="submit"
                                style={{ marginTop: "1rem", width: "50%" }}
                            >
                                Submit Report
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default ReportForm;
