const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let questions = [];
let correctAnswers = [];
let candidateAnswers = [];
let candidateCorrectAnswers = 0;

questions[0] = "Who was the first American woman in space? ";
correctAnswers[0] = "Sally Ride";

questions[1] = "True or false: 5 kilometer == 5000 meters? ";
correctAnswers[1] = "true";

questions[2] = "(5 + 3)/2 * 10 = ? ";
correctAnswers[2] = "40";

questions[3] = "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ";
correctAnswers[3] = "Trajectory";

questions[4] = "What is the minimum crew size for the ISS? ";
correctAnswers[4] = "3";


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
	candidateName = input.question("What is your name? ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
	for (let i = 0; i < questions.length; i++) {
		candidateAnswers[i] = input.question(`${i + 1}) ${questions[i]}`);
		if (candidateAnswers[i].trim().toUpperCase() === correctAnswers[i].trim().toUpperCase()) {
			console.log("That is correct!");
			candidateCorrectAnswers++;
		} else {
			console.log("I'm sorry, that is incorrect. " + `\nThe correct answer is: ${correctAnswers[i]}`);
		}
		console.log('')
	} 
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

	let grade = (candidateCorrectAnswers / questions.length) * 100;
	console.log(`>>> Overall Grade: ${grade}% (${candidateCorrectAnswers} of ${questions.length} responses correct) <<<`);
	if (grade >= 80) {
		console.log('>>> Status: PASSED <<<');
	} else {
		console.log('>>> Status: FAILED <<<');
	}
	return String(grade);
}


function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Welcome ${candidateName}!`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};