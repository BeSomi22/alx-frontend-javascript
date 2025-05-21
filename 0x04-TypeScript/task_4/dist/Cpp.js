"use strict";
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
