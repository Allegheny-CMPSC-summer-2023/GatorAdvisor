// Import React
import * as React from "react";
import data from "../data.json";

// const data = {
//   computerScienceMajor: {
//     name: "Computer Science (Major)",
//     requirements: [
//       {
//         name: "Major Requirement",
//         courses: [
//           {
//             courseNumber: "CMPSC 100",
//             courseName: "Computational Expression",
//             distributionRequirements: ["ME", "SP"],
//             prerequisites: ["Knowledge of elementary algebra"],
//             unlocks: ["CMPSC 101", "CMPSC 102", "CMPSC 300"],
//             courseDescription:
//               "An introduction to the principles of computer science with an emphasis on creative expression through the medium of a programming language. Participating in hands-on activities that often require teamwork, students learn the computational structures needed to solve problems and produce computational artifacts which address these problems in real-world contexts. Students also learn how to organize and document a program's source code so that it effectively communicates with the intended users and maintainers. Additionally, the introduction includes an overview of the discipline of computer science and computational thinking. During a weekly laboratory session students use industry-grade technology to complete projects, reporting on their results through both written documents and oral presentations. Students are invited to use their own departmentally approved laptop in this course; a limited number of laptops are available for use during class and lab sessions.",
//             cslevel: "foundation",
//             topics: [
//               "Object-oriented programming (OOP)",
//               "Teamwork",
//               "Version control systems",
//               "Integrated development environments (IDE)",
//               "Iteration",
//               "Python programming",
//               "Functions",
//               "GitHub Flow",
//               "Markdown",
//             ],
//             tools: ["Python", "VSCode", "Git", "GitHub"],
//           },
//           {
//             courseNumber: "CMPSC 101",
//             courseName: "Data Abstraction",
//             distributionRequirements: ["QR", "SP"],
//             prerequisites: ["CMPSC 100", "Permission of the instructor"],
//             unlocks: [
//               "CMPSC 201",
//               "CMPSC 202",
//               "CMPSC 203",
//               "CMPSC 301",
//               "CMPSC 303",
//               "CMPSC 304",
//               "CMPSC 305",
//               "CMPSC 350",
//             ],
//             courseDescription:
//               "A continuation of CMPSC 100 with an emphasis on implementing, using, and evaluating the computational structures needed to efficiently store and retrieve digital data. Participating in hands-on activities that often require teamwork, students create data structures and algorithms whose correctness and performance they study through proofs and experimentation. Students continue to refine their ability to organize and document a program’s source code so that it effectively communicates with the intended users and maintainers. During a weekly laboratory session, students use state-of-the-art technology to complete projects, reporting on their results through both written documents and oral presentations. Students are invited to use their own departmentally approved laptop in this course; a limited number of laptops are available for use during class and lab sessions.",
//             cslevel: "foundation",
//             topics: [
//               "Teamwork",
//               "Recursion",
//               "Time Complexity",
//               "Data Structures",
//               "Object-oriented Programming",
//               "Data Analysis",
//               "Iteration",
//               "Version Control Systems",
//               "Technical Writing",
//               "Algorithms",
//               "Statistical Analysis",
//               "Software Design",
//               "Continuous Deployment",
//               "Flow of Control",
//               "Computational Thinking",
//             ],
//             tools: [
//               "Docker",
//               "Java",
//               "Linters",
//               "Markdown",
//               "Gradle",
//               "Travis CI",
//               "Python",
//               "VSCode",
//               "Git",
//               "GitHub",
//             ],
//           },
//           {
//             courseNumber: "CMPSC 102",
//             courseName: "Discrete Structures",
//             distributionRequirements: ["QR", "SP"],
//             prerequisites: ["CMPSC 100", "Permission of the instructor"],
//             unlocks: [
//               "CMPSC 200",
//               "CMPSC 201",
//               "CMPSC 102",
//               "CMPSC 204",
//               "CMPSC 301",
//               "CMPSC 303",
//               "CMPSC 304",
//             ],
//             courseDescription:
//               "An introduction to the foundations of computer science with an emphasis on understanding the abstract structures used to represent discrete objects. Participating in hands-on activities that often require teamwork, students learn the computational methods and logical principles that they need to create and manipulate discrete objects in a programming environment. Students also learn how to write, organize, and document a program’s source code so that it is easily accessible to intended users of varied backgrounds. During a weekly laboratory session students use state-of-the-art technology to complete projects, reporting on their results through both written documents and oral presentations. Students are invited to use their own departmentally approved laptop in this course; a limited number of laptops are available for use during class and lab sessions.",
//             cslevel: "foundation",
//             topics: [
//               "Boolean logic",
//               "Code Review",
//               "Graph Theory",
//               "Plotting",
//               "Teamwork",
//               "Version Control Systems",
//               "Technical Writing",
//               "Algorithms",
//               "Statistical Analysis",
//               "Continuous Deployment",
//               "Flow of Control",
//             ],
//             tools: [
//               "Docker",
//               "SimPy",
//               "MatplotLib",
//               "Python",
//               "GatorGrader",
//               "Git",
//               "GitHub",
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   computerScienceMinor: {
//     name: "Computer Science (Minor)",
//     requirements: [
//       {
//         name: "Minor Requirement",
//         courses: [
//           {
//             courseNumber: "CMPSC 100",
//             courseName: "Computational Expression",
//             distributionRequirements: ["ME", "SP"],
//             prerequisites: ["Knowledge of elementary algebra"],
//             unlocks: ["CMPSC 101", "CMPSC 102", "CMPSC 300"],
//             courseDescription:
//               "An introduction to the principles of computer science with an emphasis on creative expression through the medium of a programming language. Participating in hands-on activities that often require teamwork, students learn the computational structures needed to solve problems and produce computational artifacts which address these problems in real-world contexts. Students also learn how to organize and document a program's source code so that it effectively communicates with the intended users and maintainers. Additionally, the introduction includes an overview of the discipline of computer science and computational thinking. During a weekly laboratory session students use industry-grade technology to complete projects, reporting on their results through both written documents and oral presentations. Students are invited to use their own departmentally approved laptop in this course; a limited number of laptops are available for use during class and lab sessions.",
//             cslevel: "foundation",
//             topics: [
//               "Object-oriented programming (OOP)",
//               "Teamwork",
//               "Version control systems",
//               "Integrated development environments (IDE)",
//               "Iteration",
//               "Python programming",
//               "Functions",
//               "GitHub Flow",
//               "Markdown",
//             ],
//             tools: ["Python", "VSCode", "Git", "GitHub"],
//           },
//           {
//             courseNumber: "CMPSC 102",
//             courseName: "Discrete Structures",
//             distributionRequirements: ["QR", "SP"],
//             prerequisites: ["CMPSC 100", "Permission of the instructor"],
//             unlocks: [
//               "CMPSC 200",
//               "CMPSC 201",
//               "CMPSC 102",
//               "CMPSC 204",
//               "CMPSC 301",
//               "CMPSC 303",
//               "CMPSC 304",
//             ],
//             courseDescription:
//               "An introduction to the foundations of computer science with an emphasis on understanding the abstract structures used to represent discrete objects. Participating in hands-on activities that often require teamwork, students learn the computational methods and logical principles that they need to create and manipulate discrete objects in a programming environment. Students also learn how to write, organize, and document a program’s source code so that it is easily accessible to intended users of varied backgrounds. During a weekly laboratory session students use state-of-the-art technology to complete projects, reporting on their results through both written documents and oral presentations. Students are invited to use their own departmentally approved laptop in this course; a limited number of laptops are available for use during class and lab sessions.",
//             cslevel: "foundation",
//             topics: [
//               "Boolean logic",
//               "Code Review",
//               "Graph Theory",
//               "Plotting",
//               "Teamwork",
//               "Version Control Systems",
//               "Technical Writing",
//               "Algorithms",
//               "Statistical Analysis",
//               "Continuous Deployment",
//               "Flow of Control",
//             ],
//             tools: [
//               "Docker",
//               "SimPy",
//               "MatplotLib",
//               "Python",
//               "GatorGrader",
//               "Git",
//               "GitHub",
//             ],
//           },
//         ],
//       },
//     ],
//   },
// };

// const data = {
//   courses: [
//     {
//       courseNumber: "CMPSC 100",
//       courseName: "Computational Expression",
//       Major: [
//         "Computer Science Major",
//         "Data Science Major",
//         "Informatics Major",
//         "Software Engineering Major",
//       ],
//       Minor: [
//         "Computer Science Minor",
//         "Data Science Minor",
//         "Informatics Minor",
//         "Software Engineering Minor",
//       ],
//       distributionRequirements: ["ME", "SP"],
//       credits: "4",
//       prerequisites: {
//         anyof: ["MATH 140", "MATH 141", "MATH 151"],
//         allof: ["ECON 100", "ECON 101"],
//       },
//       unlocks: ["CMPSC 101", "CMPSC 102", "CMPSC 300"],
//       courseDescription:
//         "An introduction to the principles of computer science with an emphasis on creative expression through the medium of a programming language. Participating in hands-on activities that often require teamwork, students learn the computational structures needed to solve problems and produce computational artifacts which address these problems in real-world contexts. Students also learn how to organize and document a program's source code so that it effectively communicates with the intended users and maintainers. Additionally, the introduction includes an overview of the discipline of computer science and computational thinking. During a weekly laboratory session students use industry-grade technology to complete projects, reporting on their results through both written documents and oral presentations. Students are invited to use their own departmentally approved laptop in this course; a limited number of laptops are available for use during class and lab sessions.",
//       cslevel: "foundation",
//       dslevel: "foundation",
//       dsSub: "",
//       inflevel: "foundation",
//       infSub: "",
//       selevel: "foundation",
//       topics: [
//         "Object-oriented programming (OOP)",
//         "Teamwork",
//         "Version control systems",
//         "Integrated development environments (IDE)",
//         "Iteration",
//         "Python programming",
//         "Functions",
//         "GitHub Flow",
//         "Markdown",
//       ],
//       tools: ["Python", "VSCode", "Git", "GitHub"],
//       lab: [],
//       learningObjectives: [],
//       learningOutcomes: [],
//     },
//     {
//       courseNumber: "CMPSC 102",
//       courseName: "Discrete Structures",
//       Major: ["Computer Science Major"],
//       Minor: ["Computer Science Minor"],
//       distributionRequirements: ["QR", "SP"],
//       credits: "4",
//       prerequisites: {
//         anyof: [],
//         allof: ["CMPSC 100"],
//       },
//       unlocks: [
//         "CMPSC 200",
//         "CMPSC 201",
//         "CMPSC 102",
//         "CMPSC 204",
//         "CMPSC 301",
//         "CMPSC 303",
//         "CMPSC 304",
//       ],
//       courseDescription:
//         "An introduction to the foundations of computer science with an emphasis on understanding the abstract structures used to represent discrete objects. Participating in hands-on activities that often require teamwork, students learn the computational methods and logical principles that they need to create and manipulate discrete objects in a programming environment. Students also learn how to write, organize, and document a program’s source code so that it is easily accessible to intended users of varied backgrounds. During a weekly laboratory session students use state-of-the-art technology to complete projects, reporting on their results through both written documents and oral presentations. Students are invited to use their own departmentally approved laptop in this course; a limited number of laptops are available for use during class and lab sessions.",
//       cslevel: "foundation",
//       dslevel: "",
//       dsSub: "",
//       inflevel: "",
//       infSub: "",
//       selevel: "",
//       topics: [
//         "Boolean Logic",
//         "Statistical Analysis",
//         "Flow of Control",
//         "Teamwork",
//         "Graph Theory",
//         "Code Review",
//         "Algorithms",
//         "Continuous Deployment",
//         "Version Control Systems",
//         "Plotting",
//       ],
//       tools: [
//         "Docker",
//         "Python",
//         "GatorGrader",
//         "SimPy",
//         "GitHub",
//         "Matplotlib",
//       ],
//       lab: [],
//       learningObjectives: [],
//       learningOutcomes: [],
//     },
//     {
//       courseNumber: "CMPSC 200",
//       courseName: "Computer Organization",
//       Major: ["Computer Science Major"],
//       Minor: ["Computer Science Minor"],
//       distributionRequirements: ["QR", "SP"],
//       credits: "4",
//       prerequisites: {
//         anyof: [],
//         allof: ["CMPSC 102"],
//       },
//       unlocks: ["CMPSC 400", "CMPSC 403", "CMPSC 406"],
//       courseDescription:
//         "A study of the low-level operation of computer systems. Participating in hands-on activities that often require teamwork, students investigate how computers process instructions in modern computers as information is encoded, stored, and executed in a machine’s physical structures. In addition to learning how to program in assembly and machine languages, students investigate the design and logical operation of processors and the mathematics of machine computation. During a weekly laboratory session, students use state-of-the-art technology to complete projects, reporting on their results through both written documents and oral presentations. Students are invited to use their own departmentally approved laptop in this course; a limited number of laptops are available for use during class and lab sessions.",
//       cslevel: "core",
//       dslevel: "",
//       dsSub: "",
//       inflevel: "",
//       infSub: "",
//       selevel: "",
//       topics: [
//         "Object-oriented programming",
//         "Memory management",
//         "Declarative programming",
//         "Instruction set architectures (ISA)",
//         "Functional programming",
//         "Digital circuits",
//         "Low-level languages",
//       ],
//       tools: ["Docker", "Verilog", "C++", "Assembly"],
//       lab: [],
//       learningObjectives: [],
//       learningOutcomes: [],
//     },
//     {
//       courseNumber: "CMPSC 104",
//       courseName: "Document Engineering",
//       Major: ["Software Engineering Major"],
//       Minor: [],
//       distributionRequirements: ["HE", "SP"],
//       credits: "4",
//       prerequisites: {
//         anyof: [],
//         allof: [],
//       },
//       unlocks: ["CMPSC 302"],
//       courseDescription:
//         "An introduction to creation of effective documents and documentation using industry-standard approaches to creating and treating 'documentation as code.' Participating in project-based and hands-on activities, students create purpose-driven digital writing with special attention to forms, formats, and conventions expected of contemporary technical communication. Students also gain experience with creating collaborative and ethically-consistent content working in a team-based setting. During a weekly laboratory session students employ contemporary software tools to complete technical documentation projects, reporting on their results through both written reflections and oral presentations. Students are invited to use their own departmentally approved laptop in this course; a limited number of laptops are available for use during class and lab sessions.",
//       cslevel: "",
//       dslevel: "",
//       dsSub: "",
//       inflevel: "",
//       infSub: "",
//       selevel: "foundation",
//       topics: [],
//       tools: [],
//       lab: [],
//       learningObjectives: [],
//       learningOutcomes: [],
//     },
//   ],
// };

function filterCourses(data, field) {
  const filteredCourses = data.courses.filter((course) => {
    return course.Major.includes(field);
  });

  const listOfCourses = [];
  listOfCourses.push(filterCourses);

  return filteredCourses;
}

const csMajor = filterCourses(data, "Computer Science Major");

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
  flexWrap: "wrap",
  justifyContent: "center",
  boxSize: "border-box",
};

const cardStyle = {
  width: 500,
  flexDirection: "column",
  background: "#white",
  border: 3,
  borderStyle: "solid",
  margin: 10,
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
          {csMajor.map((course, index) => (
            <CourseCard
              courseNumber={csMajor[index].courseNumber}
              courseName={csMajor[index].courseName}
              distros={csMajor[index].distributionRequirements}
              prereqs={csMajor[index].prerequisites}
              unlocks={csMajor[index].unlocks}
              description={csMajor[index].courseDescription}
              cslevel={csMajor[index].cslevel}
              dslevel={csMajor[index].dslevel}
              dsSub={csMajor[index].dsSub}
              inflevel={csMajor[index].inflevel}
              infSub={csMajor[index].infSub}
              selevel={csMajor[index].selevel}
              topics={csMajor[index].topics}
              tools={csMajor[index].tools}
              lab={csMajor[index].lab}
              learningObjectives={csMajor[index].learningObjectives}
              learningOutcomes={csMajor[index].learningOutcomes}
            />
          ))}
          {/* <CourseCard
            courseNumber={csMajor[1].courseNumber}
            courseName={csMajor[1].courseName}
            distros={csMajor[1].distributionRequirements}
            prereqs={csMajor[1].prerequisites}
            unlocks={csMajor[1].unlocks}
            description={csMajor[1].courseDescription}
            cslevel={csMajor[1].cslevel}
            dslevel={csMajor[1].dslevel}
            dsSub={csMajor[1].dsSub}
            inflevel={csMajor[1].inflevel}
            infSub={csMajor[1].infSub}
            selevel={csMajor[1].selevel}
            topics={csMajor[1].topics}
            tools={csMajor[1].tools}
            lab={csMajor[1].lab}
            learningObjectives={csMajor[1].learningObjectives}
            learningOutcomes={csMajor[1].learningOutcomes}
          /> */}
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
            {props.prereqs.allof.map((req) => (
              <li>Take {req} </li>
            ))}
            {props.prereqs.anyof.length !== 0 && (
              <li>Take {props.prereqs.anyof.join(" or ")}</li>
            )}
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
