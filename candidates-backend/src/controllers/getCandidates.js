const Candidate = require("../models/candidateModel");

const getCandidates = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const search = req.query.search || "";
    const gender = req.query.gender;
    const experience = req.query.experience;
    const skill = req.query.skill;

    const query = {};

    // Add search if provided
    if (search) {
      const searchRegex = new RegExp(search, "i");
      query.$or = [
        { name: searchRegex },
        { phone: searchRegex },
        { email: searchRegex },
      ];
    }

    // Add gender filter if provided
    if (gender) {
      query.gender = gender;
    }

    // Add experience filter if provided
    if (experience) {
      query.experience = experience;
    }

    // Add skills filter if provided
    if (skill) {
      query.skills = { $in: skill };
    }

    const candidates = await Candidate.find(query).skip(skip).limit(limit);
    const total = await Candidate.countDocuments(query);
    const totalPages = Math.ceil(total / limit);

    res.status(200).json({
      candidates,
      currentPage: page,
      totalPages,
      totalCandidates: total,
    });
  } catch (error) {
    console.error("Error in getCandidates:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getCandidates;
