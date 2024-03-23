const searchParams = new URLSearchParams(window.location.search);
const nameParam = searchParams.get('name');
const infoDiv = document.getElementById("infoDiv");


const students = JSON.parse(localStorage.getItem("students")) || [];

 const studentName = document.getElementById("name");
 const studentGrade = document.getElementById("grade");
 const studentClub = document.getElementById("club");
 const studentAge = document.getElementById("age");
 const studentSport = document.getElementById("sport");

students.forEach((entry) => {
    if(nameParam === entry.name) {
        console.log(entry);

    studentName.innerText = entry.name;
    studentGrade.innerText = "Grade: " + entry.grade??'';
    studentClub.innerText = "Club: " + entry.club??'';
    studentAge.innerText = "Age: " + entry.age??'';
    studentSport.innerText = "Sport: " + entry.sport??'';

    infoDiv.append(studentName, studentGrade, studentClub, studentAge, studentSport);

}
});