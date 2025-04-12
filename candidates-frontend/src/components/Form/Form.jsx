import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import "./Form.css";

const Form = ({ close, submit }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState([]);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSkills((prev) => [...prev, value]);
    } else {
      setSkills((prev) => prev.filter((skill) => skill !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !name ||
      !phone ||
      !email ||
      !gender ||
      !experience ||
      skills.length === 0
    ) {
      return;
    }
    const newCandidate = {
      name,
      phone,
      email,
      gender,
      experience,
      skills,
    };

    submit(newCandidate);

    close();
  };

  return (
    <div className="create-candidate-model">
      <div className="create-candidate-model-body">
        <p className="form-heading">Create Candidate</p>
        <button className="close-button" onClick={close}>
          <IoMdClose />
        </button>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Candidate name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option disabled value="">
              Select Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          >
            <option disabled value="">
              Select Experience
            </option>
            <option value="1 Year">1 Year</option>
            <option value="2 Years">2 Years</option>
            <option value="3 Years">3 Years</option>
            <option value="4 Years">4 Years</option>
            <option value="5 Years">5 Years</option>
          </select>
          <div className="skills-section">
            <label>Skills</label>
            <div className="skills-container">
              <label>
                <input
                  type="checkbox"
                  value="HTML"
                  onChange={handleCheckboxChange}
                />
                HTML
              </label>
              <label>
                <input
                  type="checkbox"
                  value="JavaScript"
                  onChange={handleCheckboxChange}
                />
                JavaScript
              </label>
              <label>
                <input
                  type="checkbox"
                  value="React"
                  onChange={handleCheckboxChange}
                />
                React
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Node.js"
                  onChange={handleCheckboxChange}
                />
                Node.js
              </label>
              <label>
                <input
                  type="checkbox"
                  value="SQL"
                  onChange={handleCheckboxChange}
                />
                SQL
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Other"
                  onChange={handleCheckboxChange}
                />
                Other
              </label>
            </div>
          </div>
          <input type="submit" value="Add Candidate" />
        </form>
      </div>
    </div>
  );
};

export default Form;
