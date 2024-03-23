const infoDiv = document.getElementById("student-info");

const createElements = ({name,grade,club,age,sport}) => {
    const studentName = document.createElement("h1");
    const studentGrade = document.createElement("p");
    const studentClub = document.createElement("p");
    const studentAge = document.createElement("p");
    const studentSport = document.createElement("p");

    const button = document.createElement('button');
    button.innerText = name;
    infoDiv.append(button);
};

const students = JSON.parse(localStorage.getItem("students")) || [];
students.forEach(createElements);

const studentNameButtons = document.querySelectorAll('#student-info button');

studentNameButtons.forEach(function (button) {
    button.addEventListener('click', function(e){
        const name = e.target.innerText;

        location.assign(`student_info.html?name=${name}`)
    });
});