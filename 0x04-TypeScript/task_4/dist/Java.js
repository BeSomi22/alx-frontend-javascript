"use strict";
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
