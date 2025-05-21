/// <reference path="./Cpp.ts" />
/// <reference path="./Java.ts" />
/// <reference path="./React.ts" />

import CppClass = Subjects.Cpp;
import JavaClass = Subjects.Java;
import ReactClass = Subjects.React;
import TeacherInterface = Subjects.Teacher;

// Create and export constants
export const cpp = new CppClass();
export const java = new JavaClass();
export const react = new ReactClass();

// Create and export one Teacher object
export const cTeacher: TeacherInterface = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

// === CPP ===
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// === Java ===
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// === React ===
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
