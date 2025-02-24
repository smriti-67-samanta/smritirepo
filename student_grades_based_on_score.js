
let studentScores = {
    Aman: 95,
    Bobi: 82,
    Rohit: 73,
    John: 68,
    Ayush: 55
};


for (let student in studentScores) {
    let score = studentScores[student];
    let grade=""

    
    if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else if (score >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    
    console.log(`${student}: ${grade}`);
}