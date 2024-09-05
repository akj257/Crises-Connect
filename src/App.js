import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ReportsPage from './pages/ReportsPage';
import Dashboard from './components/Dashboard';
import AuthForm from './components/AuthForm';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/report" element={<ReportsPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth" element={<AuthForm />} />
      </Routes>
    </Router>
  );
};

export default App;