import React, { useState, useEffect } from 'react';
import './quiz.css';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Quiz = () => {
    const quizData = [
        // Your quiz data
        {
            question: "What is the correct syntax for referring to an external script in JavaScript?",
            options: [
              "<script src='filename.js'>",
              "<script href='filename.js'>",
              "<script ref='filename.js'>",
              "<script name='filename.js'>"
            ],
            answer: "<script src='filename.js'>"
        },
        {
            question: "What is the correct syntax for referring to an external script in JavaScript?",
            options: [
              "<script src='filename.js'>",
              "<script href='filename.js'>",
              "<script ref='filename.js'>",
              "<script name='filename.js'>"
            ],
            answer: "<script src='filename.js'>"
          },
          {
            question: "Which company developed JavaScript?",
            options: [
              "Microsoft",
              "Sun Microsystems",
              "Netscape",
              "Oracle"
            ],
            answer: "Netscape"
          },
          {
            question: "What is the correct syntax to print a message in the console in JavaScript?",
            options: [
              "print('Hello, World!')",
              "console.print('Hello, World!')",
              "console.log('Hello, World!')",
              "document.write('Hello, World!')"
            ],
            answer: "console.log('Hello, World!')"
          },
          {
            question: "Which built-in method returns the character at a specified index in JavaScript?",
            options: [
              "getCharAt()",
              "charAt()",
              "characterAt()",
              "getCharacterAt()"
            ],
            answer: "charAt()"
          },
          {
            question: "Which of the following is not a reserved keyword in JavaScript?",
            options: [
              "interface",
              "throws",
              "program",
              "short"
            ],
            answer: "program"
          },
          {
            question: "Which of the following is a JavaScript data type?",
            options: [
              "string",
              "number",
              "boolean",
              "All of the above"
            ],
            answer: "All of the above"
          },
          {
            question: "What is the output of: typeof NaN in JavaScript?",
            options: [
              "undefined",
              "object",
              "number",
              "NaN"
            ],
            answer: "number"
          },
          {
            question: "Which function is used to parse a string to an integer in JavaScript?",
            options: [
              "Number()",
              "parseFloat()",
              "parseInt()",
              "parse()"
            ],
            answer: "parseInt()"
          },
          {
            question: "How do you create an array in JavaScript?",
            options: [
              "var colors = ['red', 'green', 'blue']",
              "var colors = 'red', 'green', 'blue'",
              "var colors = (1:'red', 2:'green', 3:'blue')",
              "var colors = array('red', 'green', 'blue')"
            ],
            answer: "var colors = ['red', 'green', 'blue']"
          },
          {
            question: "Which of the following methods is used to add an element to the end of an array in JavaScript?",
            options: [
              "add()",
              "push()",
              "append()",
              "insert()"
            ],
            answer: "push()"
          },
          {
            question: "Which of the following is not a JavaScript framework?",
            options: [
              "React",
              "Angular",
              "Django",
              "Vue"
            ],
            answer: "Django"
          },
          {
            question: "What will the following code return: Boolean(10 > 9)?",
            options: [
              "false",
              "true",
              "undefined",
              "null"
            ],
            answer: "true"
          },
          {
            question: "Which operator is used to assign a value to a variable in JavaScript?",
            options: [
              "x",
              "-",
              "=",
              "*"
            ],
            answer: "="
          },
          {
            question: "How do you create a function in JavaScript?",
            options: [
              "function = myFunction()",
              "function myFunction()",
              "function:myFunction()",
              "func myFunction()"
            ],
            answer: "function myFunction()"
          },
          {
            question: "How do you call a function named 'myFunction' in JavaScript?",
            options: [
              "call function myFunction()",
              "call myFunction()",
              "myFunction()",
              "myFunction.call()"
            ],
            answer: "myFunction()"
          },
          {
            question: "How can you add a comment in JavaScript?",
            options: [
              "//This is a comment",
              "<!--This is a comment-->",
              "#This is a comment",
              "**This is a comment**"
            ],
            answer: "//This is a comment"
          },
          {
            question: "What is the correct way to write a JavaScript array?",
            options: [
              "var colors = (1:'red', 2:'green', 3:'blue')",
              "var colors = ['red', 'green', 'blue']",
              "var colors = 'red', 'green', 'blue'",
              "var colors = {'red', 'green', 'blue'}"
            ],
            answer: "var colors = ['red', 'green', 'blue']"
          },
          {
            question: "How do you round the number 7.25 to the nearest integer in JavaScript?",
            options: [
              "Math.round(7.25)",
              "round(7.25)",
              "Math.rnd(7.25)",
              "Math.floor(7.25)"
            ],
            answer: "Math.round(7.25)"
          },
          {
            question: "What is the correct way to write an if statement in JavaScript?",
            options: [
              "if i = 5 then",
              "if (i == 5)",
              "if i == 5 then",
              "if i = 5"
            ],
            answer: "if (i == 5)"
          },
          {
            question: "Which method can be used to find the length of a string in JavaScript?",
            options: [
              "length()",
              "getSize()",
              "len()",
              "string.length"
            ],
            answer: "string.length"
          },
          {
            question: "Which event occurs when a user clicks on an HTML element in JavaScript?",
            options: [
              "onClick",
              "onChange",
              "onMouseOver",
              "onKeyDown"
            ],
            answer: "onClick"
          },
          {
            question: "Which of the following is used to declare a constant in JavaScript?",
            options: [
              "var",
              "let",
              "const",
              "constant"
            ],
            answer: "const"
          },
          {
            question: "What does the '===' operator do in JavaScript?",
            options: [
              "Compares only value",
              "Compares both value and type",
              "Compares type only",
              "Assigns value"
            ],
            answer: "Compares both value and type"
          },
          {
            question: "How do you write a 'for' loop in JavaScript?",
            options: [
              "for i = 1 to 5",
              "for (i = 0; i <= 5)",
              "for (i = 0; i <= 5; i++)",
              "for (i <= 5; i++)"
            ],
            answer: "for (i = 0; i <= 5; i++)"
          },
          {
            question: "How do you write an 'if' statement for executing some code if 'i' is NOT equal to 5?",
            options: [
              "if (i != 5)",
              "if i <> 5",
              "if (i <> 5)",
              "if i =! 5"
            ],
            answer: "if (i != 5)"
          },
          {
            question: "Which method is used to remove the last element from an array in JavaScript?",
            options: [
              "remove()",
              "pop()",
              "delete()",
              "trim()"
            ],
            answer: "pop()"
          },
          {
            question: "Which of the following methods is used to convert a JSON string into a JavaScript object?",
            options: [
              "JSON.stringify()",
              "JSON.parse()",
              "JSON.convert()",
              "JSON.objectify()"
            ],
            answer: "JSON.parse()"
          },
          {
            question: "Which keyword is used to define a JavaScript class?",
            options: [
              "function",
              "object",
              "class",
              "define"
            ],
            answer: "class"
          },
          {
            question: "Which built-in method is used to combine the elements of an array into a single string?",
            options: [
              "join()",
              "concat()",
              "push()",
              "slice()"
            ],
            answer: "join()"
          },
          {
            question: "What will be the output of: '2' + 2 in JavaScript?",
            options: [
              "22",
              "4",
              "undefined",
              "NaN"
            ],
            answer: "22"
          }
        // Add more questions here...
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState(Array(quizData.length).fill(null));
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(900); // 15-minute timer
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    // Handle Option Selection
    const handleOptionChange = (index) => {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[currentQuestion] = quizData[currentQuestion].options[index];
        setUserAnswers(updatedAnswers);
    };

    // Timer Effect
    useEffect(() => {
        if (!isPaused && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else if (timeLeft === 0) {
            handleSubmit();
        }
    }, [timeLeft, isPaused]);

    // Convert timeLeft into minutes and seconds
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    // Full-screen toggle
    const handleFullScreenToggle = () => {
        if (!isFullScreen) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
        setIsFullScreen(!isFullScreen);
    };

    // Pause/Resume timer
    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };

    // Navigate to Next Question
    const handleNext = () => {
        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    // Navigate to Previous Question
    const handlePrev = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleSubmit = () => {
        let calculatedScore = 0;
    
        // Loop through each question in the quiz data
        quizData.forEach((question, index) => {
            // If the user has answered the question
            if (userAnswers[index] !== null) {
                // Compare the selected answer index with the correct answer
                if (quizData[index].options[userAnswers[index]] === quizData[index].answer) {
                    calculatedScore++; // Increment score if the selected answer is correct
                }
            }
            // If the user hasn't answered the question, treat it as incorrect (no need to handle here, just ignore)
        });
    
        setScore(calculatedScore); // Update score
        setShowResult(true); // Show result section
        setTimeLeft(0); // Stop the timer (optional)
    };
    

    // Retry Quiz
    const handleRetry = () => {
        setUserAnswers(Array(quizData.length).fill(null));
        setCurrentQuestion(0);
        setShowResult(false);
        setScore(0);
        setTimeLeft(900); // Reset timer
    };

    return (
        <div className="quiz-container">
            <h1>Responsive Web Design Quiz</h1>

            {/* Timer and Full-screen button */}
            <div className="quiz-controls">
                <div className="timer">Time Left: {formatTime(timeLeft)}</div>
                <button onClick={handleFullScreenToggle}>
                    {isFullScreen ? 'Exit Full-Screen' : 'Full-Screen'}
                </button>
                <button onClick={handlePauseResume}>
                    {isPaused ? 'Resume' : 'Pause'}
                </button>
            </div>

            {!showResult ? (
                <div className="quiz-content">
                    {/* Question Navigator */}
                    <div className="question-navigator">
                        {quizData.map((_, index) => (
                            <button
                                key={index}
                                className={`question-number-btn ${
                                    currentQuestion === index ? 'active' : ''
                                }`}
                                onClick={() => setCurrentQuestion(index)}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="progress-bar">
                        <div
                            className="progress"
                            style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
                        ></div>
                    </div>

                    {/* Question Number */}
                    <div className="question-number">
                        Question {currentQuestion + 1} of {quizData.length}
                    </div>

                    {/* Question Text */}
                    <div className="question-text">
                        {quizData[currentQuestion].question}
                    </div>

                    {/* Options */}
                    <div className="options">
                        {quizData[currentQuestion].options.map((option, index) => (
                            <label key={index} className="option-label">
                                <input
                                    type="radio"
                                    name={`question-${currentQuestion}`}
                                    value={index}
                                    checked={userAnswers[currentQuestion] === option}
                                    onChange={() => handleOptionChange(index)}
                                />
                                {option}
                            </label>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="navigation-buttons">
                        <button
                            onClick={handlePrev}
                            disabled={currentQuestion === 0}
                            className="nav-button"
                        >
                            Previous
                        </button>
                        {currentQuestion < quizData.length - 1 ? (
                            <button
                                onClick={handleNext}
                                disabled={userAnswers[currentQuestion] === null}
                                className="nav-button"
                            >
                                Next
                            </button>
                        ) : (
                            <button
                                onClick={handleSubmit}
                                disabled={userAnswers.some(answer => answer === null)}
                                className="nav-button submit-button"
                            >
                                Submit
                            </button>
                        )}
                    </div>
                </div>
            ) : (
                <div className="result-section">
                    <h2>Your Score: {score} / {quizData.length}</h2>
                    <p className={score === quizData.length ? 'result-feedback excellent' :
                        score >= quizData.length * 0.7 ? 'result-feedback good' :
                        'result-feedback needs-improvement'}>
                        {score === quizData.length ? 'Excellent work!' :
                            score >= quizData.length * 0.7 ? 'Good job!' : 'Better luck next time!'}
                    </p>
                    <p>Score Percentage: {(score / quizData.length) * 100}%</p>
                    <button onClick={handleRetry} className="retry-button">Retry Quiz</button>
                </div>
            )}
        </div>
    );
};

export default Quiz;
