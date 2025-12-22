// Quiz Questions - Geometry & Areas (Saudi Arabia Grade 9 Math)
const quizQuestions = [
    {
        question: "ما هي مساحة المربع الذي طول ضلعه 8 سم؟",
        answers: ["64 سم²", "32 سم²", "16 سم²", "48 سم²"],
        correct: 0
    },
    {
        question: "مستطيل طوله 12 سم وعرضه 5 سم، ما محيطه؟",
        answers: ["34 سم", "60 سم", "17 سم", "24 سم"],
        correct: 0
    },
    {
        question: "دائرة نصف قطرها 7 سم، ما مساحتها تقريباً؟ (استخدمي π = 22/7)",
        answers: ["154 سم²", "44 سم²", "308 سم²", "22 سم²"],
        correct: 0
    },
    {
        question: "مثلث قائم الزاوية، طول قاعدته 10 سم وارتفاعه 6 سم، ما مساحته؟",
        answers: ["30 سم²", "60 سم²", "16 سم²", "20 سم²"],
        correct: 0
    },
    {
        question: "ما هو حجم مكعب طول حرفه 5 سم؟",
        answers: ["125 سم³", "25 سم³", "75 سم³", "100 سم³"],
        correct: 0
    },
    {
        question: "دائرة قطرها 14 سم، ما محيطها تقريباً؟ (π = 22/7)",
        answers: ["44 سم", "88 سم", "22 سم", "154 سم"],
        correct: 0
    },
    {
        question: "شبه منحرف قاعدته الكبرى 12 سم والصغرى 8 سم وارتفاعه 5 سم، ما مساحته؟",
        answers: ["50 سم²", "100 سم²", "40 سم²", "60 سم²"],
        correct: 0
    },
    {
        question: "متوازي أضلاع طول قاعدته 9 سم وارتفاعه 4 سم، ما مساحته؟",
        answers: ["36 سم²", "13 سم²", "26 سم²", "18 سم²"],
        correct: 0
    },
    {
        question: "أسطوانة نصف قطر قاعدتها 3 سم وارتفاعها 10 سم، ما حجمها تقريباً؟ (π = 3.14)",
        answers: ["282.6 سم³", "94.2 سم³", "188.4 سم³", "30 سم³"],
        correct: 0
    },
    {
        question: "مثلث متساوي الأضلاع طول ضلعه 6 سم، ما محيطه؟",
        answers: ["18 سم", "12 سم", "24 سم", "36 سم"],
        correct: 0
    }
];

// State Management
let currentQuestionIndex = 0;
let score = 0;
let studentName = "";
let selectedAnswer = null;
let correctAnswers = 0;
let wrongAnswers = 0;

// DOM Elements
const welcomeScreen = document.getElementById('welcomeScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');
const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const retryBtn = document.getElementById('retryBtn');
const studentNameInput = document.getElementById('studentName');

// Event Listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
retryBtn.addEventListener('click', resetQuiz);

// Start Quiz
function startQuiz() {
    studentName = studentNameInput.value.trim();

    // Add animation
    welcomeScreen.style.animation = 'fadeOut 0.3s ease';

    setTimeout(() => {
        welcomeScreen.classList.remove('active');
        quizScreen.classList.add('active');
        loadQuestion();
    }, 300);
}

// Load Question
function loadQuestion() {
    const question = quizQuestions[currentQuestionIndex];

    // Update progress
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('totalQuestions').textContent = quizQuestions.length;
    document.getElementById('questionNum').textContent = currentQuestionIndex + 1;
    document.getElementById('currentScore').textContent = score;

    // Update progress bar
    const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';

    // Display question
    document.getElementById('questionText').textContent = question.question;

    // Display answers
    const answersContainer = document.getElementById('answersContainer');
    answersContainer.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.onclick = () => selectAnswer(index, button);
        answersContainer.appendChild(button);
    });

    // Reset state
    selectedAnswer = null;
    nextBtn.style.display = 'none';
}

// Select Answer
function selectAnswer(index, button) {
    if (selectedAnswer !== null) return; // Already answered

    selectedAnswer = index;
    const question = quizQuestions[currentQuestionIndex];
    const allButtons = document.querySelectorAll('.answer-btn');

    // Disable all buttons
    allButtons.forEach(btn => btn.classList.add('disabled'));

    // Check if correct
    if (index === question.correct) {
        button.classList.add('correct');
        score++;
        correctAnswers++;

        // Play success animation
        createConfetti();
    } else {
        button.classList.add('wrong');
        allButtons[question.correct].classList.add('correct');
        wrongAnswers++;
    }

    // Show next button
    setTimeout(() => {
        nextBtn.style.display = 'block';
    }, 1000);
}

// Next Question
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        // Add transition
        quizScreen.style.animation = 'fadeOut 0.2s ease';

        setTimeout(() => {
            quizScreen.style.animation = 'fadeIn 0.5s ease';
            loadQuestion();
        }, 200);
    } else {
        showResults();
    }
}

// Show Results
function showResults() {
    quizScreen.style.animation = 'fadeOut 0.3s ease';

    setTimeout(() => {
        quizScreen.classList.remove('active');
        resultsScreen.classList.add('active');
        displayResults();
    }, 300);
}

// Display Results
function displayResults() {
    const percentage = (score / quizQuestions.length) * 100;

    // Update student name
    if (studentName) {
        document.getElementById('studentNameDisplay').textContent = studentName;
    }

    // Update score
    document.getElementById('finalScore').textContent = score;
    document.getElementById('correctAnswers').textContent = correctAnswers;
    document.getElementById('wrongAnswers').textContent = wrongAnswers;

    // Animate score ring
    const circumference = 2 * Math.PI * 85;
    const offset = circumference - (percentage / 100) * circumference;

    // Add SVG gradient
    const svg = document.querySelector('.score-ring');
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    gradient.setAttribute('id', 'scoreGradient');
    gradient.innerHTML = `
        <stop offset="0%" style="stop-color:#ff6b9d;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#c471ed;stop-opacity:1" />
    `;
    defs.appendChild(gradient);
    svg.appendChild(defs);

    setTimeout(() => {
        document.getElementById('scoreRingFill').style.strokeDashoffset = offset;
    }, 500);

    // Update result message and emoji
    let emoji, title, message;

    if (percentage === 100) {
        emoji = '🏆';
        title = 'ممتاز جداً!';
        message = 'أحسنتِ! حصلتِ على الدرجة الكاملة! أنتِ متميزة في الرياضيات! 🌟';
    } else if (percentage >= 80) {
        emoji = '🎉';
        title = 'رائع!';
        message = 'عمل رائع! لديكِ فهم ممتاز للمادة! استمري في التفوق! 💪';
    } else if (percentage >= 60) {
        emoji = '😊';
        title = 'جيد!';
        message = 'أداء جيد! مع المزيد من المراجعة ستكونين أفضل! 📚';
    } else if (percentage >= 40) {
        emoji = '💪';
        title = 'يمكنك التحسن!';
        message = 'لا بأس، راجعي الدروس وحاولي مرة أخرى! أنتِ قادرة على ذلك! ✨';
    } else {
        emoji = '📖';
        title = 'تحتاجين للمراجعة';
        message = 'لا تقلقي، راجعي الدروس جيداً وستتحسنين بإذن الله! 🌸';
    }

    document.getElementById('resultEmoji').textContent = emoji;
    document.getElementById('resultTitle').textContent = title;
    document.getElementById('resultMessage').textContent = message;

    // Create celebration confetti for high scores
    if (percentage >= 80) {
        setTimeout(() => {
            createBigConfetti();
        }, 1000);
    }
}

// Reset Quiz
function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    selectedAnswer = null;

    resultsScreen.style.animation = 'fadeOut 0.3s ease';

    setTimeout(() => {
        resultsScreen.classList.remove('active');
        welcomeScreen.classList.add('active');
        welcomeScreen.style.animation = 'fadeIn 0.5s ease';
    }, 300);
}

// Confetti Animation
function createConfetti() {
    const colors = ['#ff6b9d', '#c471ed', '#ffb5a7', '#b8f2e6', '#ffc2d4'];
    const confettiCount = 30;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.opacity = '1';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';

        document.body.appendChild(confetti);

        const duration = Math.random() * 3 + 2;
        const xMovement = (Math.random() - 0.5) * 200;

        confetti.animate([
            { transform: 'translateY(0) translateX(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight}px) translateX(${xMovement}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });

        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}

function createBigConfetti() {
    const colors = ['#ff6b9d', '#c471ed', '#ffb5a7', '#b8f2e6', '#ffc2d4'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '15px';
            confetti.style.height = '15px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-20px';
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.opacity = '1';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';

            document.body.appendChild(confetti);

            const duration = Math.random() * 3 + 2;
            const xMovement = (Math.random() - 0.5) * 300;

            confetti.animate([
                { transform: 'translateY(0) translateX(0) rotate(0deg)', opacity: 1 },
                { transform: `translateY(${window.innerHeight}px) translateX(${xMovement}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
            ], {
                duration: duration * 1000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });

            setTimeout(() => {
                confetti.remove();
            }, duration * 1000);
        }, i * 50);
    }
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (welcomeScreen.classList.contains('active')) {
            startQuiz();
        } else if (nextBtn.style.display === 'block') {
            nextQuestion();
        }
    }
});

// Prevent accidental page refresh
window.addEventListener('beforeunload', (e) => {
    if (quizScreen.classList.contains('active')) {
        e.preventDefault();
        e.returnValue = '';
    }
});
