// Import React
import * as React from "react";

const data = {
  computerScienceMajor: {
    name: "Computer Science (Major)",
    requirements: [
      {
        name: "Major Requirement",
        courses: [
          {
            courseNumber: "CMPSC 100",
            courseName: "Computational Expression",
            distributionRequirements: ["ME", "SP"],
            prerequisites: ["Knowledge of elementary algebra"],
            unlocks: ["CMPSC 101", "CMPSC 102", "CMPSC 300"],
            courseDescription:
              "An introduction to the principles of computer science with an emphasis on creative expression through the medium of a programming language. Participating in hands-on activities that often require teamwork, students learn the computational structures needed to solve problems and produce computational artifacts which address these problems in real-world contexts. Students also learn how to organize and document a program's source code so that it effectively communicates with the intended users and maintainers. Additionally, the introduction includes an overview of the discipline of computer science and computational thinking. During a weekly laboratory session students use industry-grade technology to complete projects, reporting on their results through both written documents and oral presentations. Students are invited to use their own departmentally approved laptop in this course; a limited number of laptops are available for use during class and lab sessions.",
            cslevel: "foundation",
            topics: [
              "Object-oriented programming (OOP)",
              "Teamwork",
              "Version control systems",
              "Integrated development environments (IDE)",
              "Iteration",
              "Python programming",
              "Functions",
              "GitHub Flow",
              "Markdown",
            ],
            tools: ["Python", "VSCode", "Git", "GitHub"],
          },
          {
            courseNumber: "CMPSC 101",
            courseName: "Data Abstraction",
            distributionRequirements: ["QR", "SP"],
            prerequisites: ["CMPSC 100", "Permission of the instructor"],
            unlocks: [
              "CMPSC 201",
              "CMPSC 202",
              "CMPSC 203",
              "CMPSC 301",
              "CMPSC 303",
              "CMPSC 304",
              "CMPSC 305",
              "CMPSC 350",
            ],
            courseDescription:
              "A continuation of CMPSC 100 with an emphasis on implementing, using, and evaluating the computational structures needed to efficiently store and retrieve digital data. Participating in hands-on activities that often require teamwork, students create data structures and algorithms whose correctness and performance they study through proofs and experimentation. Students continue to refine their ability to organize and document a program’s source code so that it effectively communicates with the intended users and maintainers. During a weekly laboratory session, students use state-of-the-art technology to complete projects, reporting on their results through both written documents and oral presentations. Students are invited to use their own departmentally approved laptop in this course; a limited number of laptops are available for use during class and lab sessions.",
            cslevel: "foundation",
            topics: [
              "Teamwork",
              "Recursion",
              "Time Complexity",
              "Data Structures",
              "Object-oriented Programming",
              "Data Analysis",
              "Iteration",
              "Version Control Systems",
              "Technical Writing",
              "Algorithms",
              "Statistical Analysis",
              "Software Design",
              "Continuous Deployment",
              "Flow of Control",
              "Computational Thinking",
            ],
            tools: [
              "Docker",
              "Java",
              "Linters",
              "Markdown",
              "Gradle",
              "Travis CI",
              "Python",
              "VSCode",
              "Git",
              "GitHub",
            ],
          },
          {
            courseNumber: "CMPSC 102",
            courseName: "Discrete Structures",
            distributionRequirements: ["QR", "SP"],
            prerequisites: ["CMPSC 100", "Permission of the instructor"],
            unlocks: [
              "CMPSC 200",
              "CMPSC 201",
              "CMPSC 102",
              "CMPSC 204",
              "CMPSC 301",
              "CMPSC 303",
              "CMPSC 304",
            ],
            courseDescription:
              "An introduction to the foundations of computer science with an emphasis on understanding the abstract structures used to represent discrete objects. Participating in hands-on activities that often require teamwork, students learn the computational methods and logical principles that they need to create and manipulate discrete objects in a programming environment. Students also learn how to write, organize, and document a program’s source code so that it is easily accessible to intended users of varied backgrounds. During a weekly laboratory session students use state-of-the-art technology to complete projects, reporting on their results through both written documents and oral presentations. Students are invited to use their own departmentally approved laptop in this course; a limited number of laptops are available for use during class and lab sessions.",
            cslevel: "foundation",
            topics: [
              "Boolean logic",
              "Code Review",
              "Graph Theory",
              "Plotting",
              "Teamwork",
              "Version Control Systems",
              "Technical Writing",
              "Algorithms",
              "Statistical Analysis",
              "Continuous Deployment",
              "Flow of Control",
            ],
            tools: [
              "Docker",
              "SimPy",
              "MatplotLib",
              "Python",
              "GatorGrader",
              "Git",
              "GitHub",
            ],
          },
        ],
      },
    ],
  },
  computerScienceMinor: {
    name: "Computer Science (Minor)",
    requirements: [
      {
        name: "Minor Requirement",
        courses: [
          {
            courseNumber: "CMPSC 100",
            courseName: "Computational Expression",
            distributionRequirements: ["ME", "SP"],
            prerequisites: ["Knowledge of elementary algebra"],
            unlocks: ["CMPSC 101", "CMPSC 102", "CMPSC 300"],
            courseDescription:
              "An introduction to the principles of computer science with an emphasis on creative expression through the medium of a programming language. Participating in hands-on activities that often require teamwork, students learn the computational structures needed to solve problems and produce computational artifacts which address these problems in real-world contexts. Students also learn how to organize and document a program's source code so that it effectively communicates with the intended users and maintainers. Additionally, the introduction includes an overview of the discipline of computer science and computational thinking. During a weekly laboratory session students use industry-grade technology to complete projects, reporting on their results through both written documents and oral presentations. Students are invited to use their own departmentally approved laptop in this course; a limited number of laptops are available for use during class and lab sessions.",
            cslevel: "foundation",
            topics: [
              "Object-oriented programming (OOP)",
              "Teamwork",
              "Version control systems",
              "Integrated development environments (IDE)",
              "Iteration",
              "Python programming",
              "Functions",
              "GitHub Flow",
              "Markdown",
            ],
            tools: ["Python", "VSCode", "Git", "GitHub"],
          },
          {
            courseNumber: "CMPSC 102",
            courseName: "Discrete Structures",
            distributionRequirements: ["QR", "SP"],
            prerequisites: ["CMPSC 100", "Permission of the instructor"],
            unlocks: [
              "CMPSC 200",
              "CMPSC 201",
              "CMPSC 102",
              "CMPSC 204",
              "CMPSC 301",
              "CMPSC 303",
              "CMPSC 304",
            ],
            courseDescription:
              "An introduction to the foundations of computer science with an emphasis on understanding the abstract structures used to represent discrete objects. Participating in hands-on activities that often require teamwork, students learn the computational methods and logical principles that they need to create and manipulate discrete objects in a programming environment. Students also learn how to write, organize, and document a program’s source code so that it is easily accessible to intended users of varied backgrounds. During a weekly laboratory session students use state-of-the-art technology to complete projects, reporting on their results through both written documents and oral presentations. Students are invited to use their own departmentally approved laptop in this course; a limited number of laptops are available for use during class and lab sessions.",
            cslevel: "foundation",
            topics: [
              "Boolean logic",
              "Code Review",
              "Graph Theory",
              "Plotting",
              "Teamwork",
              "Version Control Systems",
              "Technical Writing",
              "Algorithms",
              "Statistical Analysis",
              "Continuous Deployment",
              "Flow of Control",
            ],
            tools: [
              "Docker",
              "SimPy",
              "MatplotLib",
              "Python",
              "GatorGrader",
              "Git",
              "GitHub",
            ],
          },
        ],
      },
    ],
  },
};

const pageContainer = {
  display: "flex",
  flexDirection: "column",
};

const listStyle = {
  marginLeft: 30,
  listStyleType: "square",
};

const titleStyle = {
  fontFamily: "Roboto, sans-serif, serif, -apple-system,",
  fontSize: 50,
  alignSelf: "center",
};

const cardContainer = {
  display: "flex",
  boxSize: "border-box",
};

const cardStyle = {
  width: 500,
  flexDirection: "column",
  background: "#white",
  border: 3,
  borderStyle: "solid",
  marginLeft: 10,
  marginRight: 10,
  padding: 50,
  maxWidth: 500,
};

const cardStyle1 = {

}



// Define the component
const AboutPage = () => {
  return (
    <main>
      <div style={pageContainer}>
        <h1 style={titleStyle}>COMPUTER SCIENCE MAJOR</h1>
        <div style={cardContainer}>
          <CourseCard
            courseNumber={
              data.computerScienceMajor.requirements[0]["courses"][0]
                .courseNumber
            }
            courseName={
              data.computerScienceMajor.requirements[0]["courses"][0].courseName
            }
            distros={
              data.computerScienceMajor.requirements[0]["courses"][0]
                .distributionRequirements
            }
            prereqs={
              data.computerScienceMajor.requirements[0]["courses"][0]
                .prerequisites
            }
            unlocks={
              data.computerScienceMajor.requirements[0]["courses"][0].unlocks
            }
            description={
              data.computerScienceMajor.requirements[0]["courses"][0]
                .courseDescription
            }
            cslevel={
              data.computerScienceMajor.requirements[0]["courses"][0].cslevel
            }
            topics={
              data.computerScienceMajor.requirements[0]["courses"][0].topics
            }
            tools={
              data.computerScienceMajor.requirements[0]["courses"][0].tools
            }
          />
          <CourseCard
            courseNumber={
              data.computerScienceMajor.requirements[0]["courses"][1]
                .courseNumber
            }
            courseName={
              data.computerScienceMajor.requirements[0]["courses"][1].courseName
            }
            distros={
              data.computerScienceMajor.requirements[0]["courses"][1]
                .distributionRequirements
            }
            prereqs={
              data.computerScienceMajor.requirements[0]["courses"][1]
                .prerequisites
            }
            unlocks={
              data.computerScienceMajor.requirements[0]["courses"][1].unlocks
            }
            description={
              data.computerScienceMajor.requirements[0]["courses"][1]
                .courseDescription
            }
            cslevel={
              data.computerScienceMajor.requirements[0]["courses"][1].cslevel
            }
            topics={
              data.computerScienceMajor.requirements[0]["courses"][1].topics
            }
            tools={
              data.computerScienceMajor.requirements[0]["courses"][1].tools
            }
          />
          <CourseCard
            courseNumber={
              data.computerScienceMajor.requirements[0]["courses"][2]
                .courseNumber
            }
            courseName={
              data.computerScienceMajor.requirements[0]["courses"][2].courseName
            }
            distros={
              data.computerScienceMajor.requirements[0]["courses"][2]
                .distributionRequirements
            }
            prereqs={
              data.computerScienceMajor.requirements[0]["courses"][2]
                .prerequisites
            }
            unlocks={
              data.computerScienceMajor.requirements[0]["courses"][2].unlocks
            }
            description={
              data.computerScienceMajor.requirements[0]["courses"][2]
                .courseDescription
            }
            cslevel={
              data.computerScienceMajor.requirements[0]["courses"][2].cslevel
            }
            topics={
              data.computerScienceMajor.requirements[0]["courses"][2].topics
            }
            tools={
              data.computerScienceMajor.requirements[0]["courses"][2].tools
            }
          />
        </div>
      </div>
    </main>
  );
};

function CourseCard1(props) {
  return (
    <div style={cardStyle}>
      <h2>Course Number: {props.courseNumber}</h2>
      <h3>Course Name: {props.courseName}</h3>
      <div>
        <p>
          Distribution Requirements: {props.distros[0]} {props.distros[1]}
        </p>
        <div>
          <h1 style={{ fontWeight: "bold" }}>Preqrequisites: </h1>
          <ul style={listStyle}>
            {props.prereqs.map((prereq) => (
              <li>{prereq}</li>
            ))}
          </ul>
        </div>
        <div>
          <h1>Unlocks: </h1>
          <ul style={listStyle}>
            {props.unlocks.map((unlock) => (
              <li>{unlock}</li>
            ))}
          </ul>
        </div>
      </div>
      <p>Course Description: {props.description}</p>
      <p>CSLevel: {props.cslevel}</p>
      <div>
        <h4>Topics: </h4>
        <ul style={listStyle}>
          {props.topics.map((topic) => (
            <li>{topic}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Tools: </h4>
        <ul style={listStyle}>
          {props.tools.map((tool) => (
            <li>{tool}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}


function CourseCard(props) {
  return (
    <div class="card card-1">
      <div class="card__icon"><i class="fas fa-bolt"></i></div>
      <p class="card__exit"><i class="fas fa-times"></i></p>
      <h2 class="card__title">CS 100: Computational Expression</h2>
      <p class="card__apply">
        <a class="card__link" href="#">Read more <i class="fas fa-arrow-right"></i></a>
      </p>
    </div>
  );
}



export const Head = () => <title>Gator Planner</title>;

// Export the component
export default AboutPage;
