"use strict";
class Director {
    workFromHome() {
        return "Working from home";
    }
    getCoffeeBreak() {
        return "Getting a coffee break";
    }
    workDirectorTasks() {
        return "Getting to director tasks";
    }
}
class Teacher {
    workFromHome() {
        return "Cannot work from home";
    }
    getCoffeeBreak() {
        return "Cannot have a break";
    }
    workTeacherTasks() {
        return "Getting to work";
    }
}
function createEmployee(salary) {
    const numericSalary = typeof salary === "string" ? Number(salary.replace(/\$/, "")) : salary;
    if (numericSalary < 500) {
        return new Teacher();
    }
    return new Director();
}
console.log(createEmployee(200).constructor.name);
console.log(createEmployee(1000).constructor.name);
console.log(createEmployee("$500").constructor.name);
function isDirector(employee) {
    return employee instanceof Director;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
}
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    else {
        return 'Teaching History';
    }
}
console.log(teachClass('Math'));
console.log(teachClass('History'));
