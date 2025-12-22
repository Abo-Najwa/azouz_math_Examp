// Quiz Questions - Saudi Arabia Grade 9 Math Curriculum
const quizQuestions = [
    {
        question: "حل المعادلة التالية: 2س + 5 = 15",
        answers: ["س = 5", "س = 10", "س = 7", "س = 3"],
        correct: 0
    },
    {
        question: "ما هو ناتج ضرب وحيدتي الحد: (3س²) × (4س³)",
        answers: ["7س⁵", "12س⁵", "12س⁶", "7س⁶"],
        correct: 1
    },
    {
        question: "حلل المقدار التالي إلى عوامله: س² - 9",
        answers: ["(س - 3)(س - 3)", "(س + 3)(س - 3)", "(س + 9)(س - 1)", "(س - 9)(س + 1)"],
        correct: 1
    },
    {
        question: "إذا كان المثلث قائم الزاوية وطول ضلعيه القائمين 3 سم و 4 سم، فما طول الوتر؟ (استخدم نظرية فيثاغورس)",
        answers: ["5 سم", "7 سم", "6 سم", "8 سم"],
        correct: 0
    },
    {
        question: "ما هو ناتج جمع كثيرتي الحدود: (2س² + 3س - 1) + (س² - 2س + 4)",
        answers: ["3س² + س + 3", "3س² + 5س + 3", "2س² + س + 3", "س² + س + 5"],
        correct: 0
    },
    {
        question: "حل نظام المعادلات: س + ص = 7 و س - ص = 3",
        answers: ["س = 5، ص = 2", "س = 4، ص = 3", "س = 6، ص = 1", "س = 3، ص = 4"],
        correct: 0
    },
    {
        question: "ما هو ناتج تحليل المقدار: 2س² + 8س",
        answers: ["2س(س + 4)", "س(2س + 8)", "2(س² + 4س)", "س(س + 8)"],
        correct: 0
    },
    {
        question: "إذا كانت الدالة د(س) = 2س - 3، فما قيمة د(5)؟",
        answers: ["7", "10", "13", "8"],
        correct: 0
    },
    {
        question: "ما هو ناتج ضرب كثيرتي الحدود: (س + 2)(س + 3)",
        answers: ["س² + 5س + 6", "س² + 6س + 5", "س² + 5س + 5", "س² + 6س + 6"],
        correct: 0
    },
    {
        question: "حل المعادلة التربيعية: س² - 5س + 6 = 0",
        answers: ["س = 2 أو س = 3", "س = 1 أو س = 6", "س = -2 أو س = -3", "س = 5 أو س = 1"],
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
