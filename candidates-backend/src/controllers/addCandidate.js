const Candidate = require("../models/candidateModel");

const addCandidate = async (req, res) => {
  try {
    const { name, phone, email, gender, experience, skills } = req.body;
    // Validate the input data
    if (!name || !phone || !email || !gender || !experience || !skills) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // check if the candidate already exists
    const candidate = await Candidate.findOne({ name });
    if (candidate) {
      return res.status(400).json({ message: "Candidate already exists" });
    }

    // create a new candidate
    const dbCandidate = await Candidate.create({
      name,
      phone,
      email,
      gender,
      experience,
      skills,
    });

    // send the response
    res.status(201).json({
      message: "Candidate added successfully",
      candidate: dbCandidate,
    });
  } catch (error) {
    console.log("Error in add candidate: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = addCandidate;
