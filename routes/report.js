const express = require('express');
const router = express.Router();
const authenticateToken = require("../middlewares/auth");

const { getReports,getReport,createReport,updateReport,deleteReport } = require ("../controller/reportController");

router.get("/reports",authenticateToken,getReports);
router.get("/report/:id",authenticateToken ,getReport);
router.post("/report",authenticateToken, createReport);
router.put("/report/:id",authenticateToken, updateReport);
router.delete("/report/:id",authenticateToken, deleteReport);

module.exports = router;