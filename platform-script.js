// Curriculum Data - Complete Saudi Math Curriculum for Grade 9
const curriculum = {
    1: { // Semester 1
        name: "الفصل الدراسي الأول",
        chapters: [
            {
                id: 1,
                title: "المعادلات الخطية",
                lessons: [
                    {
                        title: "حل المعادلات ذات الخطوة الواحدة",
                        content: `
                            <h3>📌 تعريف المعادلة</h3>
                            <p>المعادلة هي جملة رياضية تحتوي على إشارة المساواة (=) وتربط بين تعبيرين جبريين.</p>
                            
                            <h3>📝 مثال</h3>
                            <p>س + 5 = 12</p>
                            <p>لحل هذه المعادلة، نطرح 5 من الطرفين:</p>
                            <p>س + 5 - 5 = 12 - 5</p>
                            <p>س = 7</p>
                            
                            <h3>✨ القاعدة الذهبية</h3>
                            <p>ما تفعلينه في طرف يجب أن تفعليه في الطرف الآخر للحفاظ على التوازن!</p>
                        `,
                        quiz: [
                            {
                                question: "حل المعادلة: س + 8 = 15",
                                answers: ["س = 7", "س = 23", "س = 8", "س = 15"],
                                correct: 0
                            },
                            {
                                question: "حل المعادلة: 3س = 21",
                                answers: ["س = 7", "س = 18", "س = 24", "س = 3"],
                                correct: 0
                            },
                            {
                                question: "حل المعادلة: س - 4 = 10",
                                answers: ["س = 14", "س = 6", "س = 40", "س = 4"],
                                correct: 0
                            }
                        ]
                    },
                    {
                        title: "حل المعادلات متعددة الخطوات",
                        content: `
                            <h3>📌 المعادلات متعددة الخطوات</h3>
                            <p>هي معادلات تحتاج إلى أكثر من عملية حسابية واحدة لحلها.</p>
                            
                            <h3>📝 مثال</h3>
                            <p>2س + 5 = 13</p>
                            <p>الخطوة 1: نطرح 5 من الطرفين</p>
                            <p>2س = 8</p>
                            <p>الخطوة 2: نقسم على 2</p>
                            <p>س = 4</p>
                            
                            <h3>💡 نصيحة</h3>
                            <p>ابدأي بإزالة الحدود الثابتة أولاً، ثم تعاملي مع المعاملات!</p>
                        `,
                        quiz: [
                            {
                                question: "حل المعادلة: 2س + 3 = 11",
                                answers: ["س = 4", "س = 7", "س = 14", "س = 8"],
                                correct: 0
                            },
                            {
                                question: "حل المعادلة: 5س - 10 = 15",
                                answers: ["س = 5", "س = 1", "س = 25", "س = 3"],
                                correct: 0
                            },
                            {
                                question: "حل المعادلة: 3س + 7 = 22",
                                answers: ["س = 5", "س = 15", "س = 29", "س = 3"],
                                correct: 0
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                title: "العلاقات والدوال الخطية",
                lessons: [
                    {
                        title: "العلاقات والدوال",
                        content: `
                            <h3>📌 ما هي العلاقة؟</h3>
                            <p>العلاقة هي مجموعة من الأزواج المرتبة (س، ص).</p>
                            
                            <h3>📌 ما هي الدالة؟</h3>
                            <p>الدالة هي علاقة خاصة، حيث لكل قيمة من س قيمة واحدة فقط من ص.</p>
                            
                            <h3>📝 مثال</h3>
                            <p>د(س) = 2س + 1</p>
                            <p>إذا كان س = 3، فإن د(3) = 2(3) + 1 = 7</p>
                            
                            <h3>✨ اختبار الخط الرأسي</h3>
                            <p>إذا قطع أي خط رأسي التمثيل البياني في نقطة واحدة فقط، فهي دالة!</p>
                        `,
                        quiz: [
                            {
                                question: "إذا كانت د(س) = 3س - 2، فما قيمة د(4)؟",
                                answers: ["10", "14", "12", "8"],
                                correct: 0
                            },
                            {
                                question: "أي من التالي يمثل دالة؟",
                                answers: ["لكل س قيمة ص واحدة", "لكل س عدة قيم ص", "لكل ص قيمة س واحدة", "لا شيء مما سبق"],
                                correct: 0
                            },
                            {
                                question: "إذا كانت د(س) = س² + 1، فما قيمة د(2)؟",
                                answers: ["5", "3", "4", "6"],
                                correct: 0
                            }
                        ]
                    }
                ]
            }
        ]
    },
    2: { // Semester 2
        name: "الفصل الدراسي الثاني",
        chapters: [
            {
                id: 5,
                title: "أنظمة المعادلات الخطية",
                lessons: [
                    {
                        title: "حل نظام المعادلات بيانياً",
                        content: `
                            <h3>📌 نظام المعادلات</h3>
                            <p>هو مجموعة من معادلتين أو أكثر تحتوي على متغيرين أو أكثر.</p>
                            
                            <h3>📝 مثال</h3>
                            <p>س + ص = 5</p>
                            <p>س - ص = 1</p>
                            
                            <h3>🎯 الحل البياني</h3>
                            <p>نرسم كل معادلة على المستوى الإحداثي، ونقطة التقاطع هي الحل!</p>
                            
                            <h3>💡 الحل الجبري</h3>
                            <p>بجمع المعادلتين: 2س = 6، إذن س = 3</p>
                            <p>بالتعويض: 3 + ص = 5، إذن ص = 2</p>
                        `,
                        quiz: [
                            {
                                question: "حل النظام: س + ص = 7، س - ص = 3",
                                answers: ["س = 5، ص = 2", "س = 4، ص = 3", "س = 6، ص = 1", "س = 3، ص = 4"],
                                correct: 0
                            },
                            {
                                question: "حل النظام: 2س + ص = 10، س = 3",
                                answers: ["ص = 4", "ص = 7", "ص = 10", "ص = 3"],
                                correct: 0
                            },
                            {
                                question: "حل النظام: س + ص = 8، س = ص",
                                answers: ["س = 4، ص = 4", "س = 8، ص = 0", "س = 2، ص = 6", "س = 5، ص = 3"],
                                correct: 0
                            }
                        ]
                    }
                ]
            },
            {
                id: 6,
                title: "كثيرات الحدود",
                lessons: [
                    {
                        title: "ضرب وحيدات الحد",
                        content: `
                            <h3>📌 وحيدة الحد</h3>
                            <p>هي عدد أو متغير أو حاصل ضرب عدد ومتغير أو أكثر.</p>
                            
                            <h3>📝 قاعدة الضرب</h3>
                            <p>عند ضرب وحيدات الحد:</p>
                            <ul>
                                <li>اضربي المعاملات</li>
                                <li>اجمعي الأسس للمتغيرات المتشابهة</li>
                            </ul>
                            
                            <h3>✨ مثال</h3>
                            <p>(3س²) × (4س³) = 12س⁵</p>
                            <p>لأن: 3 × 4 = 12 و س² × س³ = س⁵</p>
                        `,
                        quiz: [
                            {
                                question: "ما ناتج: (2س³) × (5س²)؟",
                                answers: ["10س⁵", "7س⁵", "10س⁶", "7س⁶"],
                                correct: 0
                            },
                            {
                                question: "ما ناتج: (4س) × (3س²)؟",
                                answers: ["12س³", "7س³", "12س²", "7س"],
                                correct: 0
                            },
                            {
                                question: "ما ناتج: (6س⁴) ÷ (2س²)؟",
                                answers: ["3س²", "4س²", "3س⁶", "8س²"],
                                correct: 0
                            }
                        ]
                    }
                ]
            },
            {
                id: 7,
                title: "التحليل والمعادلات التربيعية",
                lessons: [
                    {
                        title: "تحليل المقادير الجبرية",
                        content: `
                            <h3>📌 التحليل</h3>
                            <p>هو كتابة المقدار الجبري على صورة حاصل ضرب عاملين أو أكثر.</p>
                            
                            <h3>📝 أنواع التحليل</h3>
                            <ul>
                                <li><strong>العامل المشترك:</strong> 2س + 4 = 2(س + 2)</li>
                                <li><strong>الفرق بين مربعين:</strong> س² - 9 = (س + 3)(س - 3)</li>
                                <li><strong>المربع الكامل:</strong> س² + 6س + 9 = (س + 3)²</li>
                            </ul>
                            
                            <h3>✨ نصيحة</h3>
                            <p>ابحثي دائماً عن العامل المشترك الأكبر أولاً!</p>
                        `,
                        quiz: [
                            {
                                question: "حلل: س² - 16",
                                answers: ["(س + 4)(س - 4)", "(س + 16)(س - 1)", "(س - 4)²", "(س + 8)(س - 2)"],
                                correct: 0
                            },
                            {
                                question: "حلل: 3س + 6",
                                answers: ["3(س + 2)", "س(3 + 6)", "3س + 6", "(3 + س)(6)"],
                                correct: 0
                            },
                            {
                                question: "حلل: س² - 25",
                                answers: ["(س + 5)(س - 5)", "(س - 5)²", "(س + 25)(س - 1)", "لا يمكن تحليله"],
                                correct: 0
                            }
                        ]
                    }
                ]
            }
        ]
    },
    3: { // Semester 3
        name: "الفصل الدراسي الثالث",
        chapters: [
            {
                id: 8,
                title: "الدوال التربيعية",
                lessons: [
                    {
                        title: "تمثيل الدوال التربيعية بيانياً",
                        content: `
                            <h3>📌 الدالة التربيعية</h3>
                            <p>هي دالة على الصورة: د(س) = أس² + ب س + ج</p>
                            
                            <h3>📊 التمثيل البياني</h3>
                            <p>التمثيل البياني للدالة التربيعية هو قطع مكافئ (Parabola).</p>
                            
                            <h3>📝 خصائص القطع المكافئ</h3>
                            <ul>
                                <li><strong>الرأس:</strong> أعلى أو أدنى نقطة</li>
                                <li><strong>محور التماثل:</strong> خط رأسي يمر بالرأس</li>
                                <li><strong>الاتجاه:</strong> لأعلى إذا كان أ > 0، لأسفل إذا كان أ < 0</li>
                            </ul>
                        `,
                        quiz: [
                            {
                                question: "ما شكل التمثيل البياني للدالة التربيعية؟",
                                answers: ["قطع مكافئ", "خط مستقيم", "دائرة", "قطع ناقص"],
                                correct: 0
                            },
                            {
                                question: "إذا كانت د(س) = -س²، فإن القطع المكافئ يفتح:",
                                answers: ["لأسفل", "لأعلى", "لليمين", "لليسار"],
                                correct: 0
                            },
                            {
                                question: "ما قيمة د(2) إذا كانت د(س) = س² + 1؟",
                                answers: ["5", "3", "4", "6"],
                                correct: 0
                            }
                        ]
                    }
                ]
            },
            {
                id: 9,
                title: "المعادلات الجذرية والمثلثات",
                lessons: [
                    {
                        title: "نظرية فيثاغورس",
                        content: `
                            <h3>📌 نظرية فيثاغورس</h3>
                            <p>في المثلث القائم الزاوية: مربع الوتر = مجموع مربعي الضلعين القائمين</p>
                            
                            <h3>📝 الصيغة</h3>
                            <p>أ² + ب² = ج²</p>
                            <p>حيث ج هو الوتر (أطول ضلع)</p>
                            
                            <h3>✨ مثال</h3>
                            <p>مثلث قائم الزاوية، ضلعاه القائمان 3 سم و 4 سم</p>
                            <p>الوتر = √(3² + 4²) = √(9 + 16) = √25 = 5 سم</p>
                        `,
                        quiz: [
                            {
                                question: "مثلث قائم ضلعاه القائمان 6 سم و 8 سم، ما طول الوتر؟",
                                answers: ["10 سم", "14 سم", "12 سم", "100 سم"],
                                correct: 0
                            },
                            {
                                question: "مثلث قائم وتره 13 سم وأحد ضلعيه 5 سم، ما طول الضلع الآخر؟",
                                answers: ["12 سم", "8 سم", "18 سم", "144 سم"],
                                correct: 0
                            },
                            {
                                question: "ما قيمة √(9 + 16)؟",
                                answers: ["5", "25", "7", "13"],
                                correct: 0
                            }
                        ]
                    }
                ]
            },
            {
                id: 10,
                title: "الإحصاء والاحتمال",
                lessons: [
                    {
                        title: "التباديل والتوافيق",
                        content: `
                            <h3>📌 التباديل</h3>
                            <p>هي ترتيبات مختلفة لمجموعة من العناصر، حيث الترتيب مهم.</p>
                            
                            <h3>📌 التوافيق</h3>
                            <p>هي اختيارات من مجموعة عناصر، حيث الترتيب غير مهم.</p>
                            
                            <h3>📝 مثال على التباديل</h3>
                            <p>عدد طرق ترتيب 3 أشخاص = 3! = 3 × 2 × 1 = 6 طرق</p>
                            
                            <h3>💡 الفرق</h3>
                            <p>التباديل: ABC ≠ BAC (مختلفان)</p>
                            <p>التوافيق: {A,B,C} = {B,A,C} (نفس المجموعة)</p>
                        `,
                        quiz: [
                            {
                                question: "كم عدد طرق ترتيب 4 كتب على رف؟",
                                answers: ["24", "12", "16", "4"],
                                correct: 0
                            },
                            {
                                question: "ما قيمة 5!؟",
                                answers: ["120", "25", "15", "100"],
                                correct: 0
                            },
                            {
                                question: "في التوافيق، هل الترتيب مهم؟",
                                answers: ["لا", "نعم", "أحياناً", "يعتمد على السؤال"],
                                correct: 0
                            }
                        ]
                    }
                ]
            }
        ]
    }
};

// State Management
let currentSemester = 1;
let currentChapter = null;
let currentLesson = null;
let currentQuizQuestion = 0;
let quizScore = 0;
let selectedAnswer = null;

// Sound Effects
function playSound(soundId) {
    const sound = document.getElementById(soundId);
    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(e => console.log('Sound play failed:', e));
    }
}

// DOM Elements
const welcomeSection = document.getElementById('welcomeSection');
const curriculumSection = document.getElementById('curriculumSection');
const lessonSection = document.getElementById('lessonSection');
const quizSection = document.getElementById('quizSection');
const quizResultsSection = document.getElementById('quizResultsSection');

// Event Listeners
document.getElementById('startLearningBtn').addEventListener('click', () => {
    playSound('clickSound');
    showSection('curriculum');
    loadChapters(currentSemester);
});

document.querySelectorAll('.semester-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
        playSound('clickSound');
        document.querySelectorAll('.semester-tab').forEach(t => t.classList.remove('active'));
        e.currentTarget.classList.add('active');
        currentSemester = parseInt(e.currentTarget.dataset.semester);
        loadChapters(currentSemester);
    });
});

document.getElementById('backToChapters').addEventListener('click', () => {
    playSound('clickSound');
    showSection('curriculum');
});

document.getElementById('startQuizBtn').addEventListener('click', () => {
    playSound('clickSound');
    startQuiz();
});

document.getElementById('nextQuizBtn').addEventListener('click', () => {
    playSound('clickSound');
    nextQuizQuestion();
});

document.getElementById('retryQuizBtn').addEventListener('click', () => {
    playSound('clickSound');
    startQuiz();
});

document.getElementById('continueBtn').addEventListener('click', () => {
    playSound('clickSound');
    showSection('curriculum');
});

// Show Section
function showSection(section) {
    welcomeSection.style.display = 'none';
    curriculumSection.style.display = 'none';
    lessonSection.style.display = 'none';
    quizSection.style.display = 'none';
    quizResultsSection.style.display = 'none';

    switch (section) {
        case 'welcome':
            welcomeSection.style.display = 'block';
            break;
        case 'curriculum':
            curriculumSection.style.display = 'block';
            break;
        case 'lesson':
            lessonSection.style.display = 'block';
            break;
        case 'quiz':
            quizSection.style.display = 'block';
            break;
        case 'quizResults':
            quizResultsSection.style.display = 'block';
            break;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Load Chapters
function loadChapters(semester) {
    const chaptersContainer = document.getElementById('chaptersContainer');
    chaptersContainer.innerHTML = '';

    const semesterData = curriculum[semester];

    semesterData.chapters.forEach(chapter => {
        const chapterCard = document.createElement('div');
        chapterCard.className = 'chapter-card fade-in';
        chapterCard.innerHTML = `
            <div class="chapter-number">الفصل ${chapter.id}</div>
            <h3 class="chapter-title">${chapter.title}</h3>
            <p class="chapter-lessons">${chapter.lessons.length} ${chapter.lessons.length === 1 ? 'درس' : 'دروس'}</p>
            <div class="lessons-list">
                ${chapter.lessons.map((lesson, index) => `
                    <div class="lesson-item" data-chapter="${chapter.id}" data-lesson="${index}">
                        ${index + 1}. ${lesson.title}
                    </div>
                `).join('')}
            </div>
        `;

        chaptersContainer.appendChild(chapterCard);
    });

    // Add lesson click listeners
    document.querySelectorAll('.lesson-item').forEach(item => {
        item.addEventListener('click', (e) => {
            playSound('clickSound');
            const chapterId = parseInt(e.currentTarget.dataset.chapter);
            const lessonIndex = parseInt(e.currentTarget.dataset.lesson);
            loadLesson(semester, chapterId, lessonIndex);
        });
    });
}

// Load Lesson
function loadLesson(semester, chapterId, lessonIndex) {
    const semesterData = curriculum[semester];
    const chapter = semesterData.chapters.find(ch => ch.id === chapterId);
    const lesson = chapter.lessons[lessonIndex];

    currentChapter = chapter;
    currentLesson = lesson;

    document.getElementById('lessonTitle').textContent = lesson.title;
    document.getElementById('lessonNumber').textContent = `الفصل ${chapterId} - الدرس ${lessonIndex + 1}`;
    document.getElementById('lessonContent').innerHTML = lesson.content;

    showSection('lesson');
}

// Start Quiz
function startQuiz() {
    if (!currentLesson || !currentLesson.quiz) return;

    currentQuizQuestion = 0;
    quizScore = 0;
    selectedAnswer = null;

    showSection('quiz');
    loadQuizQuestion();
}

// Load Quiz Question
function loadQuizQuestion() {
    const quiz = currentLesson.quiz;
    const question = quiz[currentQuizQuestion];

    document.getElementById('quizQuestionNum').textContent = currentQuizQuestion + 1;
    document.getElementById('quizScore').textContent = quizScore;
    document.getElementById('quizQuestionText').textContent = question.question;

    const answersContainer = document.getElementById('quizAnswersContainer');
    answersContainer.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const answerBtn = document.createElement('button');
        answerBtn.className = 'quiz-answer';
        answerBtn.textContent = answer;
        answerBtn.onclick = () => selectQuizAnswer(index, answerBtn);
        answersContainer.appendChild(answerBtn);
    });

    document.getElementById('nextQuizBtn').style.display = 'none';
    selectedAnswer = null;
}

// Select Quiz Answer
function selectQuizAnswer(index, button) {
    if (selectedAnswer !== null) return;

    selectedAnswer = index;
    const question = currentLesson.quiz[currentQuizQuestion];
    const allButtons = document.querySelectorAll('.quiz-answer');

    allButtons.forEach(btn => btn.classList.add('disabled'));

    if (index === question.correct) {
        button.classList.add('correct');
        quizScore++;
        playSound('correctSound');
    } else {
        button.classList.add('wrong');
        allButtons[question.correct].classList.add('correct');
        playSound('wrongSound');
    }

    setTimeout(() => {
        document.getElementById('nextQuizBtn').style.display = 'inline-flex';
    }, 1000);
}

// Next Quiz Question
function nextQuizQuestion() {
    currentQuizQuestion++;

    if (currentQuizQuestion < currentLesson.quiz.length) {
        loadQuizQuestion();
    } else {
        showQuizResults();
    }
}

// Show Quiz Results
function showQuizResults() {
    const totalQuestions = currentLesson.quiz.length;
    const percentage = (quizScore / totalQuestions) * 100;

    document.getElementById('finalQuizScore').textContent = quizScore;

    let icon, title, message;

    if (percentage === 100) {
        icon = '🏆';
        title = 'ممتاز جداً!';
        message = 'أحسنتِ يا هناء! حصلتِ على الدرجة الكاملة! 🌟';
        playSound('correctSound');
    } else if (percentage >= 66) {
        icon = '🎉';
        title = 'رائع!';
        message = 'عمل جيد! أنتِ على الطريق الصحيح! 💪';
        playSound('correctSound');
    } else {
        icon = '📚';
        title = 'جيد!';
        message = 'راجعي الدرس مرة أخرى وستتحسنين! ✨';
    }

    document.getElementById('resultsIcon').textContent = icon;
    document.getElementById('resultsTitle').textContent = title;
    document.getElementById('resultsMessage').textContent = message;

    showSection('quizResults');
}

// Background Music Control
const backgroundMusic = document.getElementById('backgroundMusic');
const musicToggle = document.getElementById('musicToggle');
let isMusicPlaying = false;

if (backgroundMusic && musicToggle) {
    // Set initial volume to be gentle
    backgroundMusic.volume = 0.3;

    musicToggle.addEventListener('click', () => {
        playSound('clickSound');

        if (isMusicPlaying) {
            backgroundMusic.pause();
            musicToggle.classList.remove('playing');
            musicToggle.querySelector('.music-text').textContent = 'موسيقى هادئة';
            musicToggle.querySelector('.music-icon').textContent = '🎵';
            isMusicPlaying = false;
        } else {
            backgroundMusic.play().then(() => {
                musicToggle.classList.add('playing');
                musicToggle.querySelector('.music-text').textContent = 'إيقاف الموسيقى';
                musicToggle.querySelector('.music-icon').textContent = '🎶';
                isMusicPlaying = true;
            }).catch(error => {
                console.log('Music play failed:', error);
                // Auto-play might be blocked, show message
                alert('اضغطي على الزر مرة أخرى لتشغيل الموسيقى 🎵');
            });
        }
    });

    // Auto-start music on first user interaction
    let firstInteraction = true;
    document.addEventListener('click', () => {
        if (firstInteraction && !isMusicPlaying) {
            firstInteraction = false;
            // Don't auto-play, let user decide
        }
    }, { once: false });
}

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    loadChapters(currentSemester);
});
