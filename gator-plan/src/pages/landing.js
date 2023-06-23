// Import React
import * as React from "react";
import data from "../data.json";

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




function FieldCard1(props) {
  return (
  <div class="card card-1">
      <div class="card__icon"><i class="fas fa-bolt"></i></div>
      <p class="card__exit"><i class="fas fa-times"></i></p>
      <h2 class="card__title">Computer Science Major</h2>
      <p class="card__apply">
        <a class="card__link" href="#">See Courses <i class="fas fa-arrow-right"></i></a>
      </p>
  </div>
  );
}

function FieldCard2(props) {
  return (  <div class="card card-2">
  <div class="card__icon"><i class="fas fa-bolt"></i></div>
  <p class="card__exit"><i class="fas fa-times"></i></p>
  <h2 class="card__title">Data Science Major</h2>
  <p class="card__apply">
    <a class="card__link" href="#">See Courses <i class="fas fa-arrow-right"></i></a>
  </p>
</div>
);

};

function FieldCard3(props) {
  return (  <div class="card card-3">
  <div class="card__icon"><i class="fas fa-bolt"></i></div>
  <p class="card__exit"><i class="fas fa-times"></i></p>
  <h2 class="card__title">Informatics Major</h2>
  <p class="card__apply">
    <a class="card__link" href="#">See Courses <i class="fas fa-arrow-right"></i></a>
  </p>
</div> );


};

function FieldCard4(props) {
  return (<div class="card card-4">
          <div class="card__icon"><i class="fas fa-bolt"></i></div>
          <p class="card__exit"><i class="fas fa-times"></i></p>
          <h2 class="card__title">Software Engineering Major</h2>
          <p class="card__apply">
          <a class="card__link" href="#">See Courses <i class="fas fa-arrow-right"></i></a>
  </p>
</div> );
};

function MinorCard5(props) {
  return (  <div class="card card-5">
  <div class="card__icon"><i class="fas fa-bolt"></i></div>
  <p class="card__exit"><i class="fas fa-times"></i></p>
  <h2 class="card__title">Computer Science Minor</h2>
  <p class="card__apply">
    <a class="card__link" href="#">See Courses <i class="fas fa-arrow-right"></i></a>
  </p>
</div>
);

};

function MinorCard6(props) {
  return (  <div class="card card-3">
  <div class="card__icon"><i class="fas fa-bolt"></i></div>
  <p class="card__exit"><i class="fas fa-times"></i></p>
  <h2 class="card__title">Data Science Minor</h2>
  <p class="card__apply">
    <a class="card__link" href="#">See Courses <i class="fas fa-arrow-right"></i></a>
  </p>
</div>
);
};


function  MinorCard7(props) {
  return (  <div class="card card-2">
  <div class="card__icon"><i class="fas fa-bolt"></i></div>
  <p class="card__exit"><i class="fas fa-times"></i></p>
  <h2 class="card__title">Informatics Minor</h2>
  <p class="card__apply">
    <a class="card__link" href="#">See Courses <i class="fas fa-arrow-right"></i></a>
  </p>
</div>
);

};

function MinorCard8(props) {
  return (  <div class="card card-1">
  <div class="card__icon"><i class="fas fa-bolt"></i></div>
  <p class="card__exit"><i class="fas fa-times"></i></p>
  <h2 class="card__title">Software Engineering Minor</h2>
  <p class="card__apply">
    <a class="card__link" href="#">See Courses <i class="fas fa-arrow-right"></i></a>
  </p>
</div>
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

function  CourseCard(props) {
  return (  <div class="card card-1">
  <div class="card__icon"><i class="fas fa-bolt"></i></div>
  <p class="card__exit"><i class="fas fa-times"></i></p>
  <h2 class="card__title">sehehehe Minor</h2>
  <p class="card__apply">
    <a class="card__link" href="#">See Coudededrses <i class="fas fa-arrow-right"></i></a>
  </p>
</div>
);

};


const FieldPage = () => {
  return (
    <main>
      <div style={pageContainer}>
        <h1 style={titleStyle}>ALLEGHENY COMPUTER SCIENCE</h1>
        <div style={cardContainer}>
          <FieldCard1/>
          <FieldCard2/>
          <FieldCard3/>
          <FieldCard4/>
          <MinorCard5/>
          <MinorCard6/>
          <MinorCard7/>
          <MinorCard8/>
        </div>
      </div>
    </main>
  );
};


export const Head = () => <title>Gator Planner</title>;

// Export the component
export default FieldPage;
