// Define the student interface 
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
//Create two student objects
const student1: Student = {
    firstName: "Alice",
    lastName: "Smith",
    age: 20,
    location: "New York",
};
const student2: Student = {
    firstName: "Somia",
    lastName: "bilali",
    age: 23,
    location: "Morocco",
};

//Array of students
const studentsList: Student[] = [student1, student2];

//Create the table element
const table = document.createElement("table");
table.style.borderCollapse = "collapse";
table.style.width = "50%";

//Create the header Row 
const headerRow = table.insertRow();
const nameHeader = headerRow.insertCell();
nameHeader.textContent = "First Name";
nameHeader.style.border = "1px solid black";
const locationHeader = headerRow.insertCell();
locationHeader.textContent = "Location";
locationHeader.style.border = "1px solid black";

//Populate the table rows with student data
studentsList.forEach((student)=>{
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    firstNameCell.textContent = student.firstName;
    firstNameCell.style.border = "1ps solid black";

    const locationCell = row.insertCell();
    locationCell.textContent = student.location;
    locationCell.style.border = "1px solid black"
});

//Append the table to the document body 
document.body.appendChild(table);