const Complaint = require("../models/Complaint");

// Create Complaint
const createComplaint = async (req, res) => {
  try {

    ;

    const complaint = await Complaint.create({
  complaintId: "CMP" + Math.floor(1000 + Math.random() * 9000),

  customerName: req.user.name,

  email: req.user.email,

  subject: req.body.subject,

  category: req.body.category,

  description: req.body.description,

  status: "Pending",

  createdBy: req.user._id,
});
    res.status(201).json({
      message: "Complaint created successfully",
      complaint,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// Get All Complaints
const getComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({
      createdBy: req.user._id,
    });

    res.status(200).json(complaints);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Complaint by ID
const getComplaintById = async (req, res) => {
  try {
    const complaint = await Complaint.findOne({
  complaintId: req.params.id,
});

    if (!complaint) {
      return res.status(404).json({
        message: "Complaint not found",
      });
    }

    res.status(200).json(complaint);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Complaint
const updateComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      message: "Complaint updated",
      complaint,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Complaint
const deleteComplaint = async (req, res) => {
  try {
    await Complaint.findByIdAndDelete(req.params.id);

    res.json({
      message: "Complaint deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createComplaint,
  getComplaints,
  getComplaintById,
  updateComplaint,
  deleteComplaint,
};