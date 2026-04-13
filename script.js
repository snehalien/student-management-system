let students = JSON.parse(localStorage.getItem("students")) || [];

function displayStudents(data = students) {
    let table = document.getElementById("studentTable");
    table.innerHTML = "";

    data.forEach((student, index) => {
        table.innerHTML += `
            <tr>
                <td>${student.name}</td>
                <td>${student.roll}</td>
                <td>${student.marks}</td>
                <td><button class="delete" onclick="deleteStudent(${index})">Delete</button></td>
            </tr>
        `;
    });
}

function addStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let marks = document.getElementById("marks").value;

    if(name === "" || roll === "" || marks === "") {
        alert("Fill all fields");
        return;
    }

    students.push({name, roll, marks});
    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("marks").value = "";
}

function deleteStudent(index) {
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

function searchStudent() {
    let search = document.getElementById("search").value.toLowerCase();

    let filtered = students.filter(s => 
        s.name.toLowerCase().includes(search)
    );

    displayStudents(filtered);
}

displayStudents();