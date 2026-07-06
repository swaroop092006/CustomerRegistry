const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const {
  createComplaint,
  getComplaints,
  getComplaintById,
  updateComplaint,
  deleteComplaint,
} = require("../controllers/complaintController");

router.post("/", protect, createComplaint);
router.get("/", protect, getComplaints);
router.get("/:id", protect, getComplaintById);
router.put("/:id", protect, updateComplaint);
router.delete("/:id", protect, deleteComplaint);

module.exports = router;