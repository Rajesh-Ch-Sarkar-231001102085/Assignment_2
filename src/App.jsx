import React, { useState } from "react";
import "./App.css";

// ================= HEADER =================
function Header({ title, subtitle }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">🎓</div>

        <div>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </header>
  );
}

// ================= STUDENT CARD =================
function StudentCard({
  name,
  rollNumber,
  department,
  semester,
  cgpa,
  photo,
}) {
  return (
    <div className="student-card">

      <div className="student-image">
        <img src={photo} alt={name} />
      </div>

      <div className="student-info">

        <h2>{name}</h2>

        <p className="roll-number">
          Roll No: {rollNumber}
        </p>

        <div className="details">

          <div className="detail-box">
            <span>Department</span>
            <strong>{department}</strong>
          </div>

          <div className="detail-box">
            <span>Semester</span>
            <strong>{semester}</strong>
          </div>

          <div className="detail-box cgpa-box">
            <span>CGPA</span>
            <strong>{cgpa}</strong>
          </div>

        </div>

      </div>

    </div>
  );
}

// ================= STUDENT LIST =================
function StudentList({ students, sortOrder }) {
  const sortedStudents = [...students].sort((a, b) => {
    if (sortOrder === "high") {
      return b.cgpa - a.cgpa;
    }

    if (sortOrder === "low") {
      return a.cgpa - b.cgpa;
    }

    return 0;
  });

  return (
    <div className="student-grid">
      {sortedStudents.map((student) => (
        <StudentCard
          key={student.rollNumber}
          name={student.name}
          rollNumber={student.rollNumber}
          department={student.department}
          semester={student.semester}
          cgpa={student.cgpa}
          photo={student.photo}
        />
      ))}
    </div>
  );
}

// ================= FOOTER =================
function Footer({ text }) {
  return (
    <footer className="footer">
      <p>{text}</p>
    </footer>
  );
}

// ================= APP =================
function App() {
  const [sortOrder, setSortOrder] = useState("none");

  const students = [
    {
      name: "Rajesh Ch. Sarkar",
      rollNumber: "BCA001",
      department: "Computer Applications",
      semester: "4th Year",
      cgpa: 8.72,
      photo:
        "https://i.pravatar.cc/300?img=12",
    },

    {
      name: "Rahul Sharma",
      rollNumber: "BCA002",
      department: "Computer Applications",
      semester: "4th Year",
      cgpa: 9.15,
      photo:
        "https://i.pravatar.cc/300?img=11",
    },

    {
      name: "Ananya Das",
      rollNumber: "BCA003",
      department: "Computer Applications",
      semester: "4th Year",
      cgpa: 8.95,
      photo:
        "https://i.pravatar.cc/300?img=47",
    },

    {
      name: "Arjun Roy",
      rollNumber: "BCA004",
      department: "Computer Applications",
      semester: "3rd Year",
      cgpa: 7.86,
      photo:
        "https://i.pravatar.cc/300?img=13",
    },

    {
      name: "Priya Singh",
      rollNumber: "BCA005",
      department: "Computer Applications",
      semester: "3rd Year",
      cgpa: 9.42,
      photo:
        "https://i.pravatar.cc/300?img=44",
    },

    {
      name: "Soham Ghosh",
      rollNumber: "BCA006",
      department: "Computer Applications",
      semester: "2nd Year",
      cgpa: 8.31,
      photo:
        "https://i.pravatar.cc/300?img=14",
    },
  ];

  return (
    <div className="app">

      <Header
        title="Student Information Portal"
        subtitle="Student Information Management using React Props"
      />

      <main className="main-container">

        {/* Page heading */}
        <section className="page-heading">

          <div>
            <p className="small-title">
              STUDENT DIRECTORY
            </p>

            <h2>
              Student Information
            </h2>

            <p className="description">
              View student details including department,
              semester and academic performance.
            </p>
          </div>

          {/* Sorting */}
          <div className="sort-container">

            <label htmlFor="sort">
              Sort by CGPA
            </label>

            <select
              id="sort"
              value={sortOrder}
              onChange={(e) =>
                setSortOrder(e.target.value)
              }
            >
              <option value="none">
                Default Order
              </option>

              <option value="high">
                Highest to Lowest
              </option>

              <option value="low">
                Lowest to Highest
              </option>
            </select>

          </div>

        </section>

        {/* Student list */}
        <StudentList
          students={students}
          sortOrder={sortOrder}
        />

      </main>

      <Footer
        text="© 2026 Student Information Portal • Built with React Props"
      />

    </div>
  );
}

export default App;