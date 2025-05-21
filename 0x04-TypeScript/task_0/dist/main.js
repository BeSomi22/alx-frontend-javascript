"use strict";
const student1 = {
    firstName: "Alice",
    lastName: "Smith",
    age: 20,
    location: "New York",
};
const student2 = {
    firstName: "Somia",
    lastName: "bilali",
    age: 23,
    location: "Morocco",
};
const studentsList = [student1, student2];
const table = document.createElement("table");
table.style.borderCollapse = "collapse";
table.style.width = "50%";
const headerRow = table.insertRow();
const nameHeader = headerRow.insertCell();
nameHeader.textContent = "First Name";
nameHeader.style.border = "1px solid black";
const locationHeader = headerRow.insertCell();
locationHeader.textContent = "Location";
locationHeader.style.border = "1px solid black";
studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    firstNameCell.textContent = student.firstName;
    firstNameCell.style.border = "1ps solid black";
    const locationCell = row.insertCell();
    locationCell.textContent = student.location;
    locationCell.style.border = "1px solid black";
});
document.body.appendChild(table);
