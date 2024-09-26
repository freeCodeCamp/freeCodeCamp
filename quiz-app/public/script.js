document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');
    const resultContainer = document.getElementById('result');
    const submitButton = document.getElementById('submit-btn');
    const loadingMessage = document.getElementById('loading-message');
    let questions = []; // Store questions globally
    let score = 0;

    // Fetch quiz questions
    fetch('/api/quiz')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            questions = data; // Assign fetched questions to global variable
            loadingMessage.style.display = 'none'; // Hide loading message
            questions.forEach((q, index) => {
                const questionDiv = document.createElement('div');
                questionDiv.innerHTML = `
                    <h3>${q.question}</h3>
                    ${q.options.map(option => `
                        <label>
                            <input type="radio" name="question${index}" value="${option}">
                            ${option}
                        </label>
                    `).join('')}
                `;
                quizContainer.appendChild(questionDiv);
            });
        })
        .catch(err => {
            console.error('Error fetching quiz questions:', err);
            loadingMessage.textContent = 'Failed to load questions. Please try again.';
        });

    // Handle quiz submission
    submitButton.addEventListener('click', () => {
        score = 0; // Reset score
        const questionsDivs = quizContainer.querySelectorAll('h3');

        questionsDivs.forEach((questionDiv, index) => {
            const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
            console.log(`Question ${index}: Selected Option: ${selectedOption ? selectedOption.value : 'None'}`); // Log selected options
            
            // Check if an option was selected and if it's correct
            if (selectedOption && selectedOption.value === questions[index].answer) {
                score++;
            }
        });

        console.log(`Final Score: ${score}`); // Log final score
        resultContainer.textContent = `You scored ${score} out of ${questions.length}`;
    });
});
