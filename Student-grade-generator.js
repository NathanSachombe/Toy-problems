const marks

function grade() {
    //Calculate the grade from the provided marks
    if (marks > 79) {
        grade = 'A';
    }
    else if (marks >= 60) {
        grade = 'B';
    }
    else if (marks >= 50) {
        grade = 'C';
    }
    else if (marks >= 40) {
        grade = 'D';
    }
    else {
        grade = 'E';
    }
// Ouput the grade
    return(`The grade is: ${grade}`);
}