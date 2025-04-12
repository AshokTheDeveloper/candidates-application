# Candidate Management Web Application

A modern web application for displaying, searching, filtering, and managing candidates' data. Built using full-stack technologies, this app allows recruiters or HR personnel to efficiently manage candidate information with ease.

## Features

### Table View for Candidates
- Displays a list of candidates in a clean and responsive table layout.
- Columns include:
  - **Name**: Full name of the candidate
  - **Phone**: Contact number
  - **Email**: Email address
  - **Gender**: Male, Female, or Other
  - **Experience**: 1 Year, 2 Years, 3 Years, etc.
  - **Skills**: Lists technologies/skills (e.g., JavaScript, Python)

### Add Candidate
- An "Add Candidate" button allows users to add new candidate information.
- Form inputs:
  - Name (Text)
  - Phone (Number)
  - Email (Email)
  - Gender (Dropdown)
  - Experience (Dropdown)
  - Skills (Multi-select)
- On submission, the candidate is added to the backend and reflected in the table.

### Search Functionality
- Real-time search bar to filter candidates by:
  - Name
  - Phone
  - Email

### Pagination
- Displays a limited number of candidates per page (default: 10).
- Navigation using **Next** and **Previous** buttons.

### Filter Options
- Filters can be applied using a filter icon/dropdown:
  - By Gender (Male, Female, Other)
  - By Experience (1 Year, 2 Years, etc.)
  - By Skill

## Tech Stack

- **Frontend**: React.js, HTML, CSS, Bootstrap or TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB / PostgreSQL / MySQL
- **State Management**: React useState/useEffect or Redux (optional)
- **Form Handling**: Formik or React Hook Form (optional)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/candidate-management-app.git
   cd candidate-management-app

## install dependencies
```bash
npm install
```
###  Start development server
```bash
npm run dev
```
### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```


# Candidate Management App – Backend

This is the **backend** of the Candidate Management Web Application built using **Node.js**, **Express.js**, and **MongoDB** (with Mongoose). It provides RESTful APIs to create, read, search, filter, and paginate candidate data.

---

## Features

-  **Add Candidate**: Accepts data via POST request and stores it in MongoDB.
-  **Get All Candidates**: Fetches all candidates with optional pagination.
-  **Search Functionality**: Supports querying by name, phone, or email.
-  **Filter Candidates**: Filters candidates by gender, experience, and skills.
-  **Pagination Support**: Handles large datasets with paginated responses.
-  **CORS Enabled**: Allows frontend to connect to the backend securely.
-  **Environment Configuration**: Uses `.env` for database connection string and other secrets.

---

## Tech Stack

| Category      | Tech                            |
|---------------|----------------------------------|
| Runtime       | Node.js                          |
| Framework     | Express 5                        |
| Database      | MongoDB (Mongoose ODM)           |
| Environment   | dotenv                           |
| Dev Tools     | nodemon                          |
| Middleware    | CORS                             |

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/candidates-backend.git
cd candidates-backend
```

### Install dependencies
```bash
npm install
```

### Configure environment variables
- Create a .env file in the root and add:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string

```

### Start development server
```bash
npm start
```


### Sample Database Dump

```json
[
    {
      "name": "Ashok Kumar",
      "phone": "9876543210",
      "email": "ashok@example.com",
      "gender": "Male",
      "experience": "2 Years",
      "skills": ["JavaScript", "React", "Node.js"]
    },
    {
      "name": "Priya Sharma",
      "phone": "9123456780",
      "email": "priya.sharma@example.com",
      "gender": "Female",
      "experience": "3 Years",
      "skills": ["Python", "Django", "PostgreSQL"]
    },
    {
      "name": "Rahul Verma",
      "phone": "9988776655",
      "email": "rahul.verma@example.com",
      "gender": "Male",
      "experience": "1 Year",
      "skills": ["HTML", "CSS", "Bootstrap"]
    },
    {
      "name": "Sneha Reddy",
      "phone": "9012345678",
      "email": "sneha.reddy@example.com",
      "gender": "Female",
      "experience": "4 Years",
      "skills": ["MongoDB", "Express", "React", "Node.js"]
    },
    {
      "name": "Arjun Das",
      "phone": "9090909090",
      "email": "arjun.das@example.com",
      "gender": "Other",
      "experience": "5 Years",
      "skills": ["Java", "Spring Boot", "MySQL"]
    },
    {
      "name": "Meena Joseph",
      "phone": "9867452301",
      "email": "meena.joseph@example.com",
      "gender": "Female",
      "experience": "2 Years",
      "skills": ["Angular", "TypeScript", "SCSS"]
    },
    {
      "name": "Vikram Singh",
      "phone": "9765432109",
      "email": "vikram.singh@example.com",
      "gender": "Male",
      "experience": "3 Years",
      "skills": ["Node.js", "Express", "MongoDB"]
    },
    {
      "name": "Divya Balan",
      "phone": "9112233445",
      "email": "divya.balan@example.com",
      "gender": "Female",
      "experience": "1 Year",
      "skills": ["React", "Tailwind CSS", "Axios"]
    },
    {
      "name": "Anuj Mehta",
      "phone": "9321341234",
      "email": "anuj.mehta@example.com",
      "gender": "Male",
      "experience": "4 Years",
      "skills": ["Flask", "Python", "SQLAlchemy"]
    },
    {
      "name": "Fatima Khan",
      "phone": "9456781234",
      "email": "fatima.khan@example.com",
      "gender": "Female",
      "experience": "2 Years",
      "skills": ["Vue.js", "Pinia", "Firebase"]
    },
    {
      "name": "Rajeev Nair",
      "phone": "9871001234",
      "email": "rajeev.nair@example.com",
      "gender": "Male",
      "experience": "5 Years",
      "skills": ["DevOps", "Docker", "Kubernetes"]
    },
    {
      "name": "Ayesha Syed",
      "phone": "9087654321",
      "email": "ayesha.syed@example.com",
      "gender": "Female",
      "experience": "3 Years",
      "skills": ["Next.js", "React", "Prisma"]
    },
    {
      "name": "Siddharth Jain",
      "phone": "9845123789",
      "email": "siddharth.jain@example.com",
      "gender": "Male",
      "experience": "2 Years",
      "skills": ["Go", "Fiber", "MongoDB"]
    },
    {
      "name": "Lalitha Devi",
      "phone": "9753100245",
      "email": "lalitha.devi@example.com",
      "gender": "Female",
      "experience": "1 Year",
      "skills": ["JavaScript", "Bootstrap", "JQuery"]
    },
    {
      "name": "Kiran Yadav",
      "phone": "9356123456",
      "email": "kiran.yadav@example.com",
      "gender": "Other",
      "experience": "4 Years",
      "skills": ["Python", "FastAPI", "Redis"]
    },
    {
      "name": "Anjali Rao",
      "phone": "9871112233",
      "email": "anjali.rao@example.com",
      "gender": "Female",
      "experience": "3 Years",
      "skills": ["React Native", "Expo", "Firebase"]
    },
    {
      "name": "Neeraj Patil",
      "phone": "9001122334",
      "email": "neeraj.patil@example.com",
      "gender": "Male",
      "experience": "2 Years",
      "skills": ["C#", ".NET", "MSSQL"]
    },
    {
      "name": "Sara Iqbal",
      "phone": "9888997766",
      "email": "sara.iqbal@example.com",
      "gender": "Female",
      "experience": "5 Years",
      "skills": ["UI/UX", "Figma", "Adobe XD"]
    },
    {
      "name": "Harish Babu",
      "phone": "9867501234",
      "email": "harish.babu@example.com",
      "gender": "Male",
      "experience": "1 Year",
      "skills": ["Python", "Pandas", "NumPy"]
    },
    {
      "name": "Jaya Menon",
      "phone": "9800123456",
      "email": "jaya.menon@example.com",
      "gender": "Female",
      "experience": "4 Years",
      "skills": ["JavaScript", "React", "GraphQL"]
    },

    {
        "name": "Rohit Shetty",
        "phone": "9812345678",
        "email": "rohit.shetty@example.com",
        "gender": "Male",
        "experience": "2 Years",
        "skills": ["JavaScript", "Node.js", "MongoDB"]
      },
      {
        "name": "Keerthi Ramesh",
        "phone": "9876567890",
        "email": "keerthi.ramesh@example.com",
        "gender": "Female",
        "experience": "3 Years",
        "skills": ["Java", "Spring Boot", "MySQL"]
      },
      {
        "name": "Aman Gupta",
        "phone": "9990011223",
        "email": "aman.gupta@example.com",
        "gender": "Male",
        "experience": "1 Year",
        "skills": ["HTML", "CSS", "JavaScript"]
      },
      {
        "name": "Shruti Nair",
        "phone": "9888888888",
        "email": "shruti.nair@example.com",
        "gender": "Female",
        "experience": "4 Years",
        "skills": ["Angular", "TypeScript", "RxJS"]
      },
      {
        "name": "Kunal Joshi",
        "phone": "9777711111",
        "email": "kunal.joshi@example.com",
        "gender": "Male",
        "experience": "5 Years",
        "skills": ["Python", "Flask", "PostgreSQL"]
      },
      {
        "name": "Tanvi Deshmukh",
        "phone": "9666666666",
        "email": "tanvi.deshmukh@example.com",
        "gender": "Female",
        "experience": "2 Years",
        "skills": ["Vue.js", "JavaScript", "Tailwind CSS"]
      },
      {
        "name": "Sameer Khan",
        "phone": "9555555555",
        "email": "sameer.khan@example.com",
        "gender": "Male",
        "experience": "3 Years",
        "skills": ["React", "Redux", "Axios"]
      },
      {
        "name": "Rekha Iyer",
        "phone": "9444444444",
        "email": "rekha.iyer@example.com",
        "gender": "Female",
        "experience": "4 Years",
        "skills": ["Python", "Django", "Celery"]
      },
      {
        "name": "Vikas Soni",
        "phone": "9333333333",
        "email": "vikas.soni@example.com",
        "gender": "Male",
        "experience": "2 Years",
        "skills": ["Node.js", "Express", "JWT"]
      },
      {
        "name": "Bhavya Shah",
        "phone": "9222222222",
        "email": "bhavya.shah@example.com",
        "gender": "Female",
        "experience": "1 Year",
        "skills": ["HTML", "CSS", "React"]
      }
  ]
  
  
```