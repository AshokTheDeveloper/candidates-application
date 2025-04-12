import React, { useEffect, useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { FiFilter } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Form from "../Form/Form";
import "./Dashboard.css";

const Dashboard = () => {
  const [candidates, setCandidates] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [genderFilter, setGenderFilter] = useState("");
  const [experienceFilter, setExperienceFilter] = useState("");
  const [skillFilter, setSkillFilter] = useState("");

  useEffect(() => {
    fetchCandidates();
  }, [search, currentPage, genderFilter, experienceFilter, skillFilter]);

  const fetchCandidates = async () => {
    try {
      const experience = `${experienceFilter}`;
      const apiUrl = `http://localhost:3000/candidates?search=${search}&gender=${genderFilter}&skill=${skillFilter}&experience=${experienceFilter}&page=${currentPage}&limit=10`;

      const options = {
        method: "GET",
      };
      const response = await fetch(apiUrl, options);
      const data = await response.json();
      if (response.ok) {
        setCandidates(data.candidates);
        setCurrentPage(data.currentPage);
        setTotalPages(data.totalPages);
      }
    } catch (error) {
      console.log("Error fetching candidates:", error);
    }
  };

  const handlePaginationPreviousClick = () => {
    if (currentPage <= 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage((prevState) => prevState - 1);
    }
  };

  const handlePaginationNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevState) => prevState + 1);
    }
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleSubmit = async (formData) => {
    console.log("Form Data:", formData);
    const apiUrl = "http://localhost:3000/candidates";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch(apiUrl, options);
      const data = await response.json();
      if (response.ok) {
        setCandidates((prev) => [...prev, data.candidate]);
        setShowForm(false);
        fetchCandidates();
      }
    } catch (error) {
      console.log("Error creating candidate:", error);
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-top-section">
        <h1>Candidates</h1>
        <button onClick={handleShowForm}>Add</button>
      </div>
      <div className="dashboard-filter-section">
        <TfiMenuAlt className="menu-icon" />
        <div className="dashboard-filter">
          <div className="dashboard-search-container">
            <IoSearchSharp className="search-icon" />
            <input
              type="text"
              placeholder="Search by Candidate, Email, Phone."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="filter-icon-container">
            <FiFilter
              className="filter-icon"
              onClick={() => setShowFilter(!showFilter)}
            />

            {showFilter && (
              <div className="filter-dropdown">
                <p>Filter</p>
                <div className="filter-options">
                  <select
                    value={genderFilter}
                    onChange={(e) => setGenderFilter(e.target.value)}
                  >
                    <option disabled value="">
                      Filter by Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  <select
                    value={experienceFilter}
                    onChange={(e) => setExperienceFilter(e.target.value)}
                  >
                    <option disabled value="">
                      Filter by Experience
                    </option>
                    <option value="1 Year">1 Year</option>
                    <option value="2 Years">2 Years</option>
                    <option value="3 Years">3 Years</option>
                    <option value="4 Years">4 Years</option>
                    <option value="5 Years">5 Years</option>
                  </select>
                  <select
                    value={skillFilter}
                    onChange={(e) => setSkillFilter(e.target.value)}
                  >
                    <option disabled value="">
                      Filter by Skill
                    </option>
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="React">React</option>
                    <option value="Node.js">Node.js</option>
                    <option value="SQL">SQL</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="candidates-table">
        <div className="candidate-table-header">
          <p>Candidate name</p>
          <p>Phone</p>
          <p>Email</p>
          <p>Gender</p>
          <p>Experience</p>
          <p>Skills</p>
        </div>
        <div className="dashboard-candidates-list">
          {candidates.map((candidate) => (
            <div key={candidate._id} className="candidate-card">
              <p>{candidate.name}</p>
              <p>{candidate.phone}</p>
              <p>{candidate.email}</p>
              <p>{candidate.gender}</p>
              <p>{candidate.experience}</p>
              <p>{candidate.skills.join(", ")}...</p>
            </div>
          ))}
        </div>
      </div>
      <div className="dashboard-pagination">
        <button onClick={handlePaginationPreviousClick}>
          <GrFormPrevious className="pagination-icon" />
        </button>
        <p>
          {currentPage} / {totalPages}
        </p>
        <button onClick={handlePaginationNextClick}>
          <GrFormNext className="pagination-icon" />
        </button>
      </div>
      {showForm && <Form close={handleCloseForm} submit={handleSubmit} />}
    </div>
  );
};

export default Dashboard;
