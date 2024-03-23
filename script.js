const students = JSON.parse(localStorage.getItem("students")) || [];

const nameInput = document.getElementById("studentName");
const gradeInput = document.getElementById("studentGrade");
const clubInput = document.getElementById("studentClub");
const ageInput = document.getElementById("studentAge");
const sportInput = document.getElementById("studentSport");

const addStudents = (name,grade,club,age,sport) => {
    students.push({
        name,
        grade,
        club,
        age,
        sport
});

    localStorage.setItem("students", JSON.stringify(students));

    return {name,grade,club,age,sport};
}

const studentForm = document.getElementById("form");

studentForm.onsubmit = (e) => {
    e.preventDefault();

    const newStudent = addStudents(
        studentName.value,
        studentGrade.value,
        studentClub.value,
        studentAge.value,
        studentSport.value,
    ); 

    nameInput.value = "";
    gradeInput.value = "";
    clubInput.value = "";
    ageInput.value = "";
    sportInput.value = "";

    createElements(newStudent);
}
