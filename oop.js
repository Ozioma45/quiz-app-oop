// Define the Quiz class
class Quiz {
  // Static property to track total quizzes created
  static totalQuizzes = 0;

  // Constructor for Quiz instances
  constructor(quizID, title) {
    this.quizID = quizID; // Unique quiz identifier
    this.title = title; // Title of the quiz
    this.questions = []; // Array to hold questions
    Quiz.totalQuizzes++; // Increment total quizzes
  }

  // Method to add a question to the quiz
  addQuestion(question) {
    this.questions.push(question);
    console.log(`Question added to quiz "${this.title}".`);
  }

  // Method to start the quiz
  startQuiz() {
    console.log(`Starting Quiz: "${this.title}"`);
    this.questions.forEach((question, index) => {
      console.log(`Q${index + 1}: ${question}`);
    });
  }
}

// Define the Participant class
class Participant {
  // Static property to track total participants
  static totalParticipants = 0;

  // Constructor for Participant instances
  constructor(participantID, name) {
    this.participantID = participantID; // Unique participant ID
    this.name = name; // Participant's name
    this.score = 0; // Initialize score to 0
    Participant.totalParticipants++; // Increment total participants
  }

  // Method to attempt a quiz
  attemptQuiz(quiz) {
    console.log(`${this.name} is attempting the quiz "${quiz.title}"...`);
    // Simplified scoring logic: 1 point per question
    this.score = quiz.questions.length;
    console.log(
      `${this.name} completed the quiz with a score of ${this.score}.`
    );
  }

  // Method to view score
  viewScore() {
    console.log(`${this.name}'s Score: ${this.score}`);
  }
}

// Example Usage
const quiz1 = new Quiz("Q101", "JavaScript Basics"); // Create a quiz instance
quiz1.addQuestion("What is a closure in JavaScript?");
quiz1.addQuestion("Explain the difference between var, let, and const.");

const participant1 = new Participant("P001", "Alice"); // Create a participant instance

// Simulate participant taking the quiz
participant1.attemptQuiz(quiz1);
participant1.viewScore();
