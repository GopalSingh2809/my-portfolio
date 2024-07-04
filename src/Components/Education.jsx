import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ margin: "20px" }}>Education</h1>
      <div
        style={{
          height: "180px",
          width: "500px",
        }}
      >
        <h2>Class 10</h2>
        <h4>CBSE(Central Borad of Secondary Education)</h4>
        <p>
          <li>Scored 80% in Final Exam.</li>
          <li>Completed in 2019</li>
        </p>
      </div>
      <div
        style={{
          height: "180px",
          width: "500px",
        }}>
        <h2>Class 12</h2>
        <h4>CBSE(Central Borad of Secondary Education)</h4>
        <p>
          <li>Scored 80% in Final Exam.</li>
          <li>Completed in 2019</li>
        </p>
      </div>
      <div
        style={{
          height: "230px",
          width: "500px",
        }}
      >
        <h2>Graduation</h2>
        <h4>GGSIPU(Guru Gobind Singh Indraprastha University)</h4>
        <p>
          Institute of Innovation in Technology and Management Janakpuri,New Delhi BCA(bachelors of
          computer applications)
        </p>
      </div>
    </section>
  );
};

export default Education;
