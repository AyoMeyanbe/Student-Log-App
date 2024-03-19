const nameInput = document.getElementById("studentName");
const gradeInput = document.getElementById("studentGrade");
const clubInput = document.getElementById("studentClub");
const ageInput = document.getElementById("studentAge");
const sportInput = document.getElementById("studentSport");
const infoDiv = document.getElementById("student-info");
const studentForm = document.getElementById("form");

const students = JSON.parse(localStorage.getItem("students")) || [];

const addStudents = (name,grade,club,age,sport) => {
    students.push({
        name,
        grade,
        club,
        age,
        sport
})

    localStorage.setItem("students", JSON.stringify(students));

    return {name,grade,club,age,sport};
}

const createElements = ({name,grade,club,age,sport}) => {
    const studentName = document.createElement("h1");
    const studentGrade = document.createElement("p");
    const studentClub = document.createElement("p");
    const studentAge = document.createElement("p");
    const studentSport = document.createElement("p");

    studentName.innerText = name??'';
    studentGrade.innerText = "Grade: " + grade??'';
    studentClub.innerText = "Club: " + club??'';
    studentAge.innerText = "Age: " + age??'';
    studentSport.innerText = "Sport: " + sport??'';

    infoDiv.append(studentName, studentGrade, studentClub, studentAge, studentSport);

    //infoDiv.append(studentName);

};

students.forEach(createElements);

studentForm.onsubmit = (e) => {
    e.preventDefault();

    const newStudent = addStudents(
        studentName.value,
        studentGrade.value,
        studentClub.value,
        studentAge.value,
        studentSport.value,
    ); 

    createElements(newStudent);
}

const data = localStorage.getItem('students');
console.log(data);