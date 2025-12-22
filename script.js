// Lesson Content Data
const lessons = {
    1: {
        title: "المعادلات الخطية",
        icon: "📐",
        content: `
            <h3>📌 ما هي المعادلة الخطية؟</h3>
            <p>المعادلة الخطية هي معادلة رياضية تحتوي على متغير واحد أو أكثر، ولا يوجد فيها أس أعلى من 1.</p>
            
            <h3>✨ مثال بسيط</h3>
            <p><strong>س + 5 = 12</strong></p>
            <p>لحل هذه المعادلة:</p>
            <ul>
                <li>نطرح 5 من الطرفين</li>
                <li>س + 5 - 5 = 12 - 5</li>
                <li>س = 7 ✓</li>
            </ul>
            
            <h3>💡 القاعدة الذهبية</h3>
            <p>ما تفعلينه في طرف، يجب أن تفعليه في الطرف الآخر!</p>
            
            <h3>🌸 تمرين لكِ</h3>
            <p>حاولي حل: 2س + 3 = 11</p>
            <p><small>الحل: س = 4</small></p>
        `
    },
    2: {
        title: "الدوال والعلاقات",
        icon: "📊",
        content: `
            <h3>📌 ما هي الدالة؟</h3>
            <p>الدالة هي علاقة خاصة، حيث لكل قيمة من س قيمة واحدة فقط من ص.</p>
            
            <h3>✨ مثال على الدالة</h3>
            <p><strong>د(س) = 2س + 1</strong></p>
            <p>إذا كان س = 3:</p>
            <ul>
                <li>د(3) = 2(3) + 1</li>
                <li>د(3) = 6 + 1</li>
                <li>د(3) = 7 ✓</li>
            </ul>
            
            <h3>💡 كيف نعرف أنها دالة؟</h3>
            <p>إذا رسمنا خط رأسي على التمثيل البياني ولم يقطع المنحنى إلا في نقطة واحدة، فهي دالة!</p>
            
            <h3>🌸 تمرين لكِ</h3>
            <p>إذا كانت د(س) = 3س - 2، ما قيمة د(4)؟</p>
            <p><small>الحل: د(4) = 10</small></p>
        `
    },
    3: {
        title: "كثيرات الحدود",
        icon: "🔢",
        content: `
            <h3>📌 ما هي كثيرة الحدود؟</h3>
            <p>كثيرة الحدود هي مجموع عدة حدود جبرية، مثل: 2س² + 3س + 5</p>
            
            <h3>✨ ضرب وحيدات الحد</h3>
            <p><strong>(3س²) × (4س³)</strong></p>
            <p>الخطوات:</p>
            <ul>
                <li>اضربي المعاملات: 3 × 4 = 12</li>
                <li>اجمعي الأسس: س² × س³ = س⁵</li>
                <li>الناتج: 12س⁵ ✓</li>
            </ul>
            
            <h3>💡 قاعدة الجمع</h3>
            <p>عند جمع كثيرات الحدود، نجمع الحدود المتشابهة فقط!</p>
            
            <h3>🌸 مثال</h3>
            <p>(2س² + 3س) + (س² - 2س) = 3س² + س</p>
        `
    },
    4: {
        title: "الهندسة والمساحات",
        icon: "📏",
        content: `
            <h3>📌 المساحات الأساسية</h3>
            <p>تعلمي كيفية حساب مساحات الأشكال الهندسية المختلفة!</p>
            
            <h3>✨ مساحة المربع</h3>
            <p><strong>المساحة = الضلع × الضلع</strong></p>
            <p>مثال: مربع طول ضلعه 5 سم</p>
            <ul>
                <li>المساحة = 5 × 5</li>
                <li>المساحة = 25 سم² ✓</li>
            </ul>
            
            <h3>💡 مساحة المستطيل</h3>
            <p><strong>المساحة = الطول × العرض</strong></p>
            <p>مثال: مستطيل طوله 8 سم وعرضه 3 سم</p>
            <p>المساحة = 8 × 3 = 24 سم²</p>
            
            <h3>🌸 مساحة الدائرة</h3>
            <p><strong>المساحة = π × نصف القطر²</strong></p>
            <p>مثال: دائرة نصف قطرها 7 سم (π = 22/7)</p>
            <p>المساحة = (22/7) × 7 × 7 = 154 سم²</p>
        `
    }
};

// Auto-play background music
window.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('bgMusic');
    if (music) {
        music.volume = 0.3; // Set gentle volume

        // Try to auto-play
        music.play().catch(() => {
            // If auto-play is blocked, play on first user interaction
            document.addEventListener('click', () => {
                music.play();
            }, { once: true });
        });
    }
});

// Open Lesson Modal
function openLesson(lessonId) {
    const lesson = lessons[lessonId];
    if (!lesson) return;

    const modal = document.getElementById('lessonModal');
    const content = document.getElementById('lessonContent');

    content.innerHTML = `
        <div class="lesson-content-title">
            ${lesson.icon} ${lesson.title}
        </div>
        <div class="lesson-content-body">
            ${lesson.content}
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close Lesson Modal
function closeLesson() {
    const modal = document.getElementById('lessonModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function (event) {
    const modal = document.getElementById('lessonModal');
    if (event.target === modal) {
        closeLesson();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLesson();
        closeGame();
    }
});

// ========== GAMES ==========

// Open Game Modal
function openGame(gameId) {
    const modal = document.getElementById('gameModal');
    const content = document.getElementById('gameContent');

    let gameHTML = '';

    switch (gameId) {
        case 1:
            gameHTML = getMemoryGame();
            break;
        case 2:
            gameHTML = getStarGame();
            break;
        case 3:
            gameHTML = getColorGame();
            break;
    }

    content.innerHTML = gameHTML;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Initialize game after modal opens
    setTimeout(() => {
        if (gameId === 1) initMemoryGame();
        if (gameId === 2) initStarGame();
        if (gameId === 3) initColorGame();
    }, 100);
}

// Close Game Modal
function closeGame() {
    const modal = document.getElementById('gameModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Game 1: Memory Cards
function getMemoryGame() {
    return `
        <div class="lesson-content-title">🎴 لعبة الذاكرة</div>
        <div style="text-align: center; margin: 20px 0;">
            <p style="font-size: 18px; color: var(--text); margin-bottom: 20px;">اقلبي البطاقات واعثري على الأزواج المتطابقة! 💕</p>
            <div style="margin-bottom: 15px;">
                <span style="font-size: 20px; font-weight: 700; color: var(--pink-1);">النقاط: <span id="memoryScore">0</span></span>
            </div>
            <div id="memoryBoard" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; max-width: 400px; margin: 0 auto;"></div>
            <button onclick="initMemoryGame()" style="margin-top: 20px; padding: 12px 30px; background: linear-gradient(135deg, var(--pink-1), var(--purple)); color: white; border: none; border-radius: 15px; font-size: 16px; font-weight: 700; cursor: pointer;">لعبة جديدة 🔄</button>
        </div>
    `;
}

let memoryCards = [];
let flippedCards = [];
let matchedPairs = 0;
let memoryScore = 0;

function initMemoryGame() {
    const emojis = ['🌸', '💖', '⭐', '🎀', '🦋', '🌺', '💝', '✨'];
    memoryCards = [...emojis, ...emojis].sort(() => Math.random() - 0.5);
    flippedCards = [];
    matchedPairs = 0;
    memoryScore = 0;

    const board = document.getElementById('memoryBoard');
    board.innerHTML = '';
    document.getElementById('memoryScore').textContent = '0';

    memoryCards.forEach((emoji, index) => {
        const card = document.createElement('div');
        card.style.cssText = 'width: 80px; height: 80px; background: linear-gradient(135deg, var(--pink-2), var(--lavender)); border-radius: 15px; display: flex; align-items: center; justify-content: center; font-size: 40px; cursor: pointer; transition: all 0.3s; border: 3px solid var(--pink-3);';
        card.dataset.index = index;
        card.dataset.emoji = emoji;
        card.innerHTML = '?';
        card.onclick = () => flipCard(card);
        board.appendChild(card);
    });
}

function flipCard(card) {
    if (flippedCards.length >= 2 || card.classList.contains('matched') || card.classList.contains('flipped')) return;

    card.innerHTML = card.dataset.emoji;
    card.classList.add('flipped');
    card.style.background = 'linear-gradient(135deg, var(--pink-1), var(--purple))';
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 800);
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.emoji === card2.dataset.emoji) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedPairs++;
        memoryScore += 10;
        document.getElementById('memoryScore').textContent = memoryScore;

        if (matchedPairs === 8) {
            setTimeout(() => alert('🎉 أحسنتِ يا هناء! فزتِ باللعبة! 💖'), 300);
        }
    } else {
        card1.innerHTML = '?';
        card2.innerHTML = '?';
        card1.style.background = 'linear-gradient(135deg, var(--pink-2), var(--lavender))';
        card2.style.background = 'linear-gradient(135deg, var(--pink-2), var(--lavender))';
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
    }

    flippedCards = [];
}

// Game 2: Star Collector
function getStarGame() {
    return `
        <div class="lesson-content-title">⭐ جمع النجوم</div>
        <div style="text-align: center; margin: 20px 0;">
            <p style="font-size: 18px; color: var(--text); margin-bottom: 20px;">اضغطي على النجوم بأسرع ما يمكن! 🌟</p>
            <div style="margin-bottom: 15px;">
                <span style="font-size: 20px; font-weight: 700; color: var(--pink-1);">النقاط: <span id="starScore">0</span></span>
                <span style="margin: 0 20px;">|</span>
                <span style="font-size: 18px; font-weight: 600; color: var(--purple);">الوقت: <span id="starTime">30</span>ث</span>
            </div>
            <div id="starGame" style="position: relative; width: 100%; max-width: 500px; height: 400px; margin: 0 auto; background: linear-gradient(135deg, var(--pink-4), var(--lavender)); border-radius: 20px; border: 3px solid var(--pink-2); overflow: hidden;"></div>
            <button id="starStartBtn" onclick="initStarGame()" style="margin-top: 20px; padding: 12px 30px; background: linear-gradient(135deg, var(--pink-1), var(--purple)); color: white; border: none; border-radius: 15px; font-size: 16px; font-weight: 700; cursor: pointer;">ابدأي اللعبة! 🚀</button>
        </div>
    `;
}

let starGameInterval;
let starSpawnInterval;
let starTimeLeft = 30;
let starScore = 0;

function initStarGame() {
    clearInterval(starGameInterval);
    clearInterval(starSpawnInterval);

    starTimeLeft = 30;
    starScore = 0;
    document.getElementById('starScore').textContent = '0';
    document.getElementById('starTime').textContent = '30';
    document.getElementById('starGame').innerHTML = '';
    document.getElementById('starStartBtn').style.display = 'none';

    starGameInterval = setInterval(() => {
        starTimeLeft--;
        document.getElementById('starTime').textContent = starTimeLeft;

        if (starTimeLeft <= 0) {
            endStarGame();
        }
    }, 1000);

    starSpawnInterval = setInterval(spawnStar, 800);
}

function spawnStar() {
    const game = document.getElementById('starGame');
    if (!game) return;

    const star = document.createElement('div');
    star.innerHTML = '⭐';
    star.style.cssText = `
        position: absolute;
        font-size: 40px;
        cursor: pointer;
        animation: starFloat 2s ease-in-out;
        left: ${Math.random() * 85}%;
        top: ${Math.random() * 85}%;
    `;

    star.onclick = () => {
        starScore++;
        document.getElementById('starScore').textContent = starScore;
        star.remove();
    };

    game.appendChild(star);

    setTimeout(() => star.remove(), 2000);
}

function endStarGame() {
    clearInterval(starGameInterval);
    clearInterval(starSpawnInterval);
    document.getElementById('starStartBtn').style.display = 'inline-block';
    setTimeout(() => alert(`🎉 انتهت اللعبة! جمعتِ ${starScore} نجمة! 💖`), 300);
}

// Game 3: Color Match
function getColorGame() {
    return `
        <div class="lesson-content-title">🎨 تطابق الألوان</div>
        <div style="text-align: center; margin: 20px 0;">
            <p style="font-size: 18px; color: var(--text); margin-bottom: 20px;">اختاري اللون الذي يطابق الكلمة! 🌈</p>
            <div style="margin-bottom: 20px;">
                <span style="font-size: 20px; font-weight: 700; color: var(--pink-1);">النقاط: <span id="colorScore">0</span></span>
            </div>
            <div id="colorWord" style="font-size: 60px; font-weight: 800; margin: 30px 0; min-height: 80px;"></div>
            <div id="colorButtons" style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap; margin-top: 30px;"></div>
        </div>
    `;
}

let colorScore = 0;
const colors = [
    { name: 'وردي', color: '#ff6b9d', text: 'وردي' },
    { name: 'بنفسجي', color: '#c471ed', text: 'بنفسجي' },
    { name: 'أزرق', color: '#4a90e2', text: 'أزرق' },
    { name: 'أخضر', color: '#50c878', text: 'أخضر' },
    { name: 'أصفر', color: '#ffd700', text: 'أصفر' }
];

function initColorGame() {
    colorScore = 0;
    document.getElementById('colorScore').textContent = '0';
    nextColorRound();
}

function nextColorRound() {
    const correctColor = colors[Math.floor(Math.random() * colors.length)];
    const displayColor = colors[Math.floor(Math.random() * colors.length)];

    document.getElementById('colorWord').innerHTML = `<span style="color: ${displayColor.color}">${correctColor.text}</span>`;

    const buttons = document.getElementById('colorButtons');
    buttons.innerHTML = '';

    const shuffledColors = [...colors].sort(() => Math.random() - 0.5);

    shuffledColors.forEach(color => {
        const btn = document.createElement('button');
        btn.textContent = color.name;
        btn.style.cssText = `
            padding: 15px 30px;
            background: ${color.color};
            color: white;
            border: none;
            border-radius: 15px;
            font-size: 18px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        `;

        btn.onmouseover = () => btn.style.transform = 'scale(1.1)';
        btn.onmouseout = () => btn.style.transform = 'scale(1)';

        btn.onclick = () => {
            if (color.name === correctColor.name) {
                colorScore++;
                document.getElementById('colorScore').textContent = colorScore;
                btn.style.background = 'linear-gradient(135deg, #50c878, #90ee90)';
                setTimeout(nextColorRound, 500);
            } else {
                btn.style.background = 'linear-gradient(135deg, #ff4444, #ff6666)';
                setTimeout(() => {
                    alert(`❌ خطأ! الإجابة الصحيحة: ${correctColor.name}\nنقاطك النهائية: ${colorScore} 💖`);
                    initColorGame();
                }, 300);
            }
        };

        buttons.appendChild(btn);
    });
}
