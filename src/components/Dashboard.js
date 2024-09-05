// src/pages/Dashboard.js
import React from "react";
import {
    Box,
    Grid,
    Paper,
    Typography,
    Card,
    CardContent,
    CardHeader,
} from "@mui/material";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
    // Example data for charts
    const barChartData = {
        labels: ["Fire", "Flood", "Earthquake", "Tornado", "Other"],
        datasets: [
            {
                label: "Incidents by Type",
                data: [35, 50, 20, 10, 15],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#4BC0C0",
                    "#9966FF",
                ],
            },
        ],
    };

    const lineChartData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
            {
                label: "Incident Reports Over Time",
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: "#42A5F5",
            },
        ],
    };

    const pieChartData = {
        labels: ["Low", "Medium", "High"],
        datasets: [
            {
                data: [200, 300, 100],
                backgroundColor: ["#FF6384", "#FFCE56", "#36A2EB"],
            },
        ],
    };

    return (
        <Box sx={{ p: 4 }}>
            {/* Title */}
            <Typography variant="h4" gutterBottom>
                Emergency Response Dashboard
            </Typography>

            {/* Dashboard Content */}
            <Grid container spacing={3}>
                {/* Overview Cards */}
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardHeader title="Total Incidents Reported" />
                        <CardContent>
                            <Typography variant="h3" align="center">250</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardHeader title="Resolved Incidents" />
                        <CardContent>
                            <Typography variant="h3" align="center">180</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardHeader title="High Severity Incidents" />
                        <CardContent>
                            <Typography variant="h3" align="center">70</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Charts */}
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            Incident Distribution by Type
                        </Typography>
                        <Bar data={barChartData} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            Incident Severity Levels
                        </Typography>
                        <Pie data={pieChartData} />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            Incident Reports Over Time
                        </Typography>
                        <Line data={lineChartData} />
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
