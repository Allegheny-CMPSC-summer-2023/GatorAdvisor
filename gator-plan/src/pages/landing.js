// Import React
import React from 'react';
import data from "../data.json";
import ReactDOM from "react-dom/client"
import App from "../App"
import { BrowserRouter } from "react-router-dom"
import * as Card from "../components/Cards"

// function filterCourses(data, field) {
//   const filteredCourses = data.courses.filter((course) => {
//     return course.Major.includes(field);
//   });

//   const listOfCourses = [];
//   listOfCourses.push(filterCourses);

//   return filteredCourses;
// }

// const csMajor = filterCourses(data, "Computer Science Major");

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



function CourseCard1(props) {
  return (
    <div style={Card.cardStyle}>
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



// const landingPage = () => {
//   return (
//     <main>

//       <div style={Card.pageContainer}>

//         <App/>
//         <h1 style={titleStyle}>ALLEGHENY COMPUTER SCIENCE</h1>
//         <div style={Card.cardContainer}>
//           <Card.CScourseCards/>
//         </div>

//       </div>
//     </main>
//   );
// };


//export const Head = () => <title>Gator Planner</title>;

// Export the component
//export default landingPage;
