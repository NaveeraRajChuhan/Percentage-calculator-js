let marksOfSubject1 = +prompt ("enter your number1");
let marksOfSubject2 = +prompt ("enter your number2");
let marksOfSubject3 = +prompt ("enter your number3");
let marksOfSubject4 = +prompt ("enter your number4");
let marksOfSubject5 = +prompt ("enter your number5");

let sumOfAllSubjects = marksOfSubject1 + marksOfSubject2 + marksOfSubject3 + marksOfSubject4 + marksOfSubject5 

let percentageOfSubjects = sumOfAllSubjects / 500 * 100

document.write(percentageOfSubjects);
// console.log(percentageOfSubjects);

if (percentageOfSubjects >= 90) {
    document.write(" A+");
} else if (percentageOfSubjects >= 100) {
    document.write(" you entered a wrong number");
}else if (percentageOfSubjects >= 80) {
    document.write(" A");
}else if (percentageOfSubjects >= 65) {
    document.write(" B");
}else if (percentageOfSubjects >= 55) {
    document.write(" C");
}else if (percentageOfSubjects >= 45) {
    document.write(" D");
}else if (percentageOfSubjects >= 0) {
    document.write(" Fail");
}else{
    document.write(" you entered a invalid answer");
}

