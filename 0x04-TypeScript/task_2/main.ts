//DirectorInterface with 3 methods
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// TeacherInterface with 3 methods
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}
//Director class implementing DirectorInterface
class Director implements DirectorInterface{
    workFromHome(): string {
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break"
    }
    workDirectorTasks(): string {
        return "Getting to director tasks"
    }
}
//Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface{
    workFromHome(): string {
        return "Cannot work from home"
    }
    getCoffeeBreak(): string {
        return "Cannot have a break"
    }
    workTeacherTasks(): string {
        return "Getting to work"
    }
}
//createEmployee function returning either Director or Teacher
function createEmployee(salary: number | string): Director | Teacher{
    //If salary is a string convert to number removing possible $ sign
    const numericSalary = typeof salary === "string" ? Number(salary.replace(/\$/,"")) : salary;

    if(numericSalary < 500){
        return new Teacher();
    }
    return new Director();
}
//Test Cases
console.log(createEmployee(200).constructor.name); //Teacher 
console.log(createEmployee(1000).constructor.name); //Director
console.log(createEmployee("$500").constructor.name); //Director

//////////////////////////////////////
//Type predicate to check if employee is Director
function isDirector (employee: Director | Teacher): employee is Director{
    return employee instanceof Director;
}
//Function that executes work based on employee type
function executeWork (employee: Director | Teacher ): string{
    if(isDirector(employee)){
        return employee.workDirectorTasks();
    }else{
        return employee.workTeacherTasks();
    }
}
// test
console.log(executeWork(createEmployee(200))) // getting to work
console.log(executeWork(createEmployee(1000))) //getting to director tasks

/////////////////////////////////////////////

//Define the string literal type
type Subjects = 'Math' | 'History';
//Define the function using the Subjects type
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}
//emaple
console.log(teachClass('Math'))
console.log(teachClass('History'))