// ini javascript

console.log("linked success");

const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "Rome", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "J.K. Rowling", "Mark Twain", "Jane Austen"],
      correctAnswer: "Harper Lee"
    },
    {
        question: "What is the capital of Indonesia?",
        options: ["Lombok", "Kalimantan", "Bali", "Jakarta"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        correctAnswer: "H2O"
    },
    {
        question: "In what year did World War II end?",
        options: ["1945", "1939", "1965", "1955"],
        correctAnswer: "1945"
    },
    {
        question: "What is the smallest prime number?",
        options: ["1", "2", "3", "5"],
        correctAnswer: "2"
    }
    // Add more questions as needed
  ];
  
// Variables to track the current question
let currentQuestionIndex = 0;
let score = 0;

// Function to display the current question and its options
function displayQuestion() {
    // Get the current question
    const currentQuestion = quizData[currentQuestionIndex];
    
     // Select the HTML elements where the question and options will be displayed
    const questionElement = document.getElementById("currentQuestion");
    const optionsElement = document.getElementById("options");

    // Set the text of the question element to the current question
    questionElement.innerText = currentQuestion.question;

    // Clear all previous options
    optionsElement.innerHTML = "";

    // Loop through each option and create a radio button for each
    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");

        const inputElement = document.createElement("input");
        inputElement.type = "radio";
        inputElement.name = "quizOption";
        inputElement.id = `option${index}`;
        inputElement.value = option;

        const labelElement = document.createElement("label");
        labelElement.htmlFor = `option${index}`;
        labelElement.innerText = option;

        optionElement.appendChild(inputElement);
        optionElement.appendChild(labelElement);

        optionsElement.appendChild(optionElement);
    });
}


// Call the displayQuestion function when the page loads
displayQuestion();
    
// Get the Next and Submit Button 
const nextButton = document.getElementById("nextButton");
const submitButton = document.getElementById("submitButton");

// Event listener for the Next button 
nextButton.addEventListener("click", () => {
    // Checck which option is selected
    const selectedOption = document.querySelector('input[name="quizOption"]:checked');
    
    if (selectedOption) {
        // Check if the selected option is correct
        if (selectedOption.value === quizData[currentQuestionIndex].correctAnswer) {
            score++;
        }

        // Move to the next question
        currentQuestionIndex++;

        // Check if there are more questions
        if (currentQuestionIndex < quizData.length) {
            displayQuestion();
        } else {
            // If no more questions, hide the next button and show the submit button
            nextButton.style.display = "none";
            submitButton.style.display = "inline";
        }
    } else {
        alert("Please select an option to proceed.");
    }
});


// Event listener for the Submit button 
submitButton.addEventListener("click", () => {
    // Hide the quiz container and display the result 
    document.querySelector(".quiz-container").style.display = "none";
    showResult();
});

// Function to display the result 
function showResult() {
    const resultElement = document.getElementById("result");
    resultElement.style.display = "block";
    resultElement.innerHTML = `
    <h2>Your Score: ${score}/${quizData.length}</h2>
    <p>${getResultMessage(score)}</p>
    <button id="restartButton">Restart Quiz</button>
    `;

    // Add event listener to the restart button 
    document.getElementById("restartButton").addEventListener("click", () => {
        restartQuiz();
    });
}


// Function to provide a message based on the score
function getResultMessage(score) {
    if (score === quizData.length) {
        return "Excelent! You have answered all questions correctly.";
    } else  if (score >= (quizData.length / 2)) {
        return "Good! You have answered more than half of the questions correctly.";
    } else {
        return "Keep trying!";
    }
}


// Function to restart the quiz
function restartQuiz() {
    // Reset variables
    currentQuestionIndex = 0;
    score = 0;

    // Hide the result section and show the quiz container
    document.getElementById("result").style.display = "none";
    document.querySelector(".quiz-container").style.display = "block";

    // Reset the buttons 
    nextButton.style.display = "inline";
    submitButton.style.display = "none";

    // Display the first question
    displayQuestion();
}