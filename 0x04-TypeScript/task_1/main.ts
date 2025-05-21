//Define the teacher interface 
interface Teacher{
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number; //? makes it optional.
    location: string;
    [key:string]: any; //Allow additional attributes like contract
}
//Example usage
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: "Doe",
    location: "London",
    contract: false
}
console.log(teacher3);

////////////////////////////////////////////////////

//Define the directors interface that extends Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}
//Example usage
const director1: Directors = {
    firstName: "john",
    lastName: "Doe",
    location:'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
}
console.log (director1);

//////////////////////////////////////////////////

//Function that print the first two letters of a full name
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}
const printTeacher : printTeacherFunction = ( firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
}
console.log(printTeacher("John", "Doe"));

///////////////////////////////////////////////////////

//Define the Constructor interface 
interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}
//Define the class interface 
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}
//Implement the class 
class StudentClass implements StudentClassInterface {
    private firstName: string;
    private lastName: string;

    constructor (firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string {
        return "Currently working";
    }
    displayName(): string {
        return this.firstName;
    }
}
//Example
const student = new StudentClass('Somia', "bilali");
console.log(student.displayName());
console.log(student.workOnHomework());