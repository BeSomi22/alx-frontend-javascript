"use strict";
var Subjects;
(function (Subjects) {
    class Subject {
        setTeacher(teacher) {
            this.teacher = teacher;
        }
    }
    Subjects.Subject = Subject;
})(Subjects || (Subjects = {}));
var Subjects;
(function (Subjects) {
    class Cpp extends Subjects.Subject {
        getRequirements() {
            return 'Here is the list of requirements for Cpp';
        }
        getAvailableTeacher() {
            if (this.teacher &&
                typeof this.teacher.experienceTeachingC === 'number' &&
                this.teacher.experienceTeachingC > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            return 'No available teacher';
        }
    }
    Subjects.Cpp = Cpp;
})(Subjects || (Subjects = {}));
var Subjects;
(function (Subjects) {
    class Java extends Subjects.Subject {
        getRequirements() {
            return 'Here is the list of requirements for Java';
        }
        getAvailableTeacher() {
            if (this.teacher &&
                typeof this.teacher.experienceTeachingJava === 'number' &&
                this.teacher.experienceTeachingJava > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            return 'No available teacher';
        }
    }
    Subjects.Java = Java;
})(Subjects || (Subjects = {}));
var Subjects;
(function (Subjects) {
    class React extends Subjects.Subject {
        getRequirements() {
            return 'Here is the list of requirements for React';
        }
        getAvailableTeacher() {
            if (this.teacher &&
                typeof this.teacher.experienceTeachingReact === 'number' &&
                this.teacher.experienceTeachingReact > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            return 'No available teacher';
        }
    }
    Subjects.React = React;
})(Subjects || (Subjects = {}));
