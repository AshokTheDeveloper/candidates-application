const express = require("express");
const router = express.Router();

const getCandidates = require("../controllers/getCandidates");
const addCandidate = require("../controllers/addCandidate");

router.get("/", getCandidates);
router.post("/", addCandidate);

module.exports = router;
