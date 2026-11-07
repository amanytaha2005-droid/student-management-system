class Student {

    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }

    // Calculate Average
    calculateAverage() {
        let total = this.grades.reduce((sum, grade) => {
            return sum + grade;
        }, 0);

        return total / this.grades.length;
    }

    // Calculate Grade
    getGrade(average) {
        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else if (average >= 50) {
            return "E";
        } else {
            return "F";
        }
    }

    // Final Result
    getResult(average) {
        if (average >= 50 && this.attendance >= 75) {
            return "ناجح";
        } else {
            return "يحتاج مراجعة";
        }
    }
}

class Student {

    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }

    // Calculate Average
    calculateAverage() {
        let total = this.grades.reduce((sum, grade) => {
            return sum + grade;
        }, 0);

        return total / this.grades.length;
    }

    // Calculate Grade
    getGrade(average) {
        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else if (average >= 50) {
            return "E";
        } else {
            return "F";
        }
    }

    // Final Result
    getResult(average) {
        if (average >= 50 && this.attendance >= 75) {
            return "ناجح";
        } else {
            return "يحتاج مراجعة";
        }
    }
}
let studentsList = [
    new Student(1, "Ahmed", [90, 85, 95], 90),
    new Student(2, "Mona", [45, 40, 48], 80),
    new Student(3, "Sara", [70, 75, 80], 95),
    new Student(4, "Omar", [42, 45, 48], 85)
];
// Extract students with average between 40 and 49
let weakStudents = studentsList.filter(student => {
    let average = student.calculateAverage();
    return average >= 40 && average <= 49;
});

// Add 5 grace marks
let graceStudents = weakStudents.map(student => {
    let oldAverage = student.calculateAverage();

    return {
        id: student.id,
        name: student.name,
        oldAverage: oldAverage,
        newAverage: oldAverage + 5
    };
});

// Calculate total new averages
let totalNewAverages = graceStudents.reduce((sum, student) => {
    return sum + student.newAverage;
}, 0);

// Calculate grace average with protection
let graceAverage = 0;

if (graceStudents.length > 0) {
    graceAverage = totalNewAverages / graceStudents.length;
}

console.log("Grace Students:", graceStudents);
console.log("Average After Grace:", graceAverage);
console.log("===== STUDENTS REPORT =====");

studentsList.forEach(student => {
    let average = student.calculateAverage();
    let grade = student.getGrade(average);
    let result = student.getResult(average);

    console.log("Student Name:", student.name);
    console.log("Average:", average.toFixed(2));
    console.log("Grade:", grade);
    console.log("Result:", result);
    console.log("----------------------");
});
