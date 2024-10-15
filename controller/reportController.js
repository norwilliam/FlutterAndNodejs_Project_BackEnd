const Report = require('../models/report');
const express = require('express');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
// Get all reports
exports.getReports = async (req, res) => {
    try {
        const reports = await Report.find();
        res.status(200).json(reports);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a specific report by ID
exports.getReport = async (req, res) => {
    try {
        const { id } = req.params;
        const report = await Report.findById(id);
        if (!report) return res.status(404).json({ message: 'Report not found' });
        res.json(report);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new report
exports.createReport = async (req, res) => {
    const { title, details, location, status } = req.body;
    const report = new Report({ title, details, location, status });
    try {
        const newReport = await report.save();
        res.status(201).json(newReport);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a report by ID
exports.updateReport = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedReport = await Report.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedReport) return res.status(404).json({ message: 'Report not found' });
        res.status(200).json(updatedReport);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a report by ID
exports.deleteReport = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedReport = await Report.findByIdAndDelete(id);
        if (!deletedReport) return res.status(404).json({ message: 'Report not found' });
        res.status(200).json({ message: 'Report deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};