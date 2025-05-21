"use strict";
const teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: "Doe",
    location: "London",
    contract: false
};
console.log(teacher3);
const director1 = {
    firstName: "john",
    lastName: "Doe",
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
const printTeacher = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};
console.log(printTeacher("John", "Doe"));
class StudentClass {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework() {
        return "Currently working";
    }
    displayName() {
        return this.firstName;
    }
}
const student = new StudentClass('Somia', "bilali");
console.log(student.displayName());
console.log(student.workOnHomework());
