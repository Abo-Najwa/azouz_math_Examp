// ========================================
// بيانات الأسئلة - مرتبة من السهل للصعب
// ========================================

const questions = [
    // ========================================
    // الفصل الأول: المعادلات الخطية
    // ========================================

    // القواعد والأساسيات
    {
        id: 1,
        chapter: "الفصل 1: المعادلات الخطية",
        difficulty: "سهل",
        type: "trueFalse",
        question: "قاعدة: المعادلة هي جملة رياضية تحتوي على إشارة يساوي (=) وتربط بين تعبيرين",
        correctAnswer: true,
        hint: "فكّر في تعريف المعادلة الأساسي، هل تحتاج إلى علامة المساواة؟",
        explanation: "المعادلة هي جملة رياضية تحتوي على إشارة المساواة وتربط بين تعبيرين جبريين"
    },
    {
        id: 2,
        chapter: "الفصل 1: المعادلات الخطية",
        difficulty: "سهل",
        type: "trueFalse",
        question: "قاعدة الجمع والطرح: يمكن إضافة أو طرح نفس العدد من طرفي المعادلة دون تغيير الحل",
        correctAnswer: true,
        hint: "هذه قاعدة أساسية في حل المعادلات",
        explanation: "خاصية التساوي: إذا كان أ = ب، فإن أ + ج = ب + ج"
    },
    {
        id: 3,
        chapter: "الفصل 1: المعادلات الخطية",
        difficulty: "سهل",
        type: "multipleChoice",
        question: "ما هو حل المعادلة: س + 5 = 12",
        options: ["س = 5", "س = 7", "س = 12", "س = 17"],
        correctAnswer: 1,
        hint: "استخدم قاعدة الطرح: اطرح 5 من طرفي المعادلة",
        explanation: "س + 5 = 12 → س = 12 - 5 = 7"
    },
    {
        id: 4,
        chapter: "الفصل 1: المعادلات الخطية",
        difficulty: "سهل",
        type: "multipleChoice",
        question: "حل المعادلة: س - 8 = 15",
        options: ["س = 7", "س = 15", "س = 23", "س = 8"],
        correctAnswer: 2,
        hint: "أضف 8 لطرفي المعادلة",
        explanation: "س - 8 = 15 → س = 15 + 8 = 23"
    },
    {
        id: 5,
        chapter: "الفصل 1: المعادلات الخطية",
        difficulty: "سهل",
        type: "multipleChoice",
        question: "حل المعادلة: 3س = 15",
        options: ["س = 3", "س = 5", "س = 12", "س = 18"],
        correctAnswer: 1,
        hint: "قاعدة القسمة: اقسم طرفي المعادلة على 3",
        explanation: "3س = 15 → س = 15 ÷ 3 = 5"
    },
    {
        id: 6,
        chapter: "الفصل 1: المعادلات الخطية",
        difficulty: "سهل",
        type: "multipleChoice",
        question: "حل المعادلة: س/4 = 6",
        options: ["س = 2", "س = 10", "س = 24", "س = 1.5"],
        correctAnswer: 2,
        hint: "اضرب طرفي المعادلة في 4",
        explanation: "س/4 = 6 → س = 6 × 4 = 24"
    },
    {
        id: 7,
        chapter: "الفصل 1: المعادلات الخطية",
        difficulty: "سهل",
        type: "trueFalse",
        question: "حل المعادلة 2س = 18 هو س = 9",
        correctAnswer: true,
        hint: "اقسم الطرفين على 2",
        explanation: "2س = 18 → س = 18 ÷ 2 = 9 ✓"
    },

    // معادلات متعددة الخطوات
    {
        id: 8,
        chapter: "الفصل 1: المعادلات الخطية",
        difficulty: "متوسط",
        type: "multipleChoice",
        question: "حل المعادلة: 2س + 7 = 19",
        options: ["س = 5", "س = 6", "س = 12", "س = 13"],
        correctAnswer: 1,
        hint: "خطوة 1: اطرح 7 من الطرفين، خطوة 2: اقسم على 2",
        explanation: "2س + 7 = 19 → 2س = 12 → س = 6"
    },
    {
        id: 9,
        chapter: "الفصل 1: المعادلات الخطية",
        difficulty: "متوسط",
        type: "multipleChoice",
        question: "حل المعادلة: 5س - 10 = 25",
        options: ["س = 3", "س = 5", "س = 7", "س = 15"],
        correctAnswer: 2,
        hint: "أضف 10 للطرفين، ثم اقسم على 5",
        explanation: "5س - 10 = 25 → 5س = 35 → س = 7"
    },
    {
        id: 10,
        chapter: "الفصل 1: المعادلات الخطية",
        difficulty: "متوسط",
        type: "trueFalse",
        question: "حل المعادلة 4س - 8 = 12 هو س = 5",
        correctAnswer: true,
        hint: "أضف 8 للطرفين ثم اقسم على 4",
        explanation: "4س - 8 = 12 → 4س = 20 → س = 5 ✓"
    },
    {
        id: 11,
        chapter: "الفصل 1: المعادلات الخطية",
        difficulty: "متوسط",
        type: "multipleChoice",
        question: "حل المعادلة: 3س + 5 = 2س + 11",
        options: ["س = 3", "س = 6", "س = 8", "س = 16"],
        correctAnswer: 1,
        hint: "اجمع الحدود المتشابهة: انقل 2س للطرف الأيسر و5 للطرف الأيمن",
        explanation: "3س - 2س = 11 - 5 → س = 6"
    },
    {
        id: 12,
        chapter: "الفصل 1: المعادلات الخطية",
        difficulty: "متوسط",
        type: "multipleChoice",
        question: "حل المعادلة: 7س - 3 = 4س + 12",
        options: ["س = 3", "س = 5", "س = 9", "س = 15"],
        correctAnswer: 1,
        hint: "انقل المتغيرات لطرف والأعداد لطرف آخر",
        explanation: "7س - 4س = 12 + 3 → 3س = 15 → س = 5"
    },

    // معادلات مع الأقواس (خاصية التوزيع)
    {
        id: 13,
        chapter: "الفصل 1: المعادلات الخطية",
        difficulty: "متوسط",
        type: "trueFalse",
        question: "قاعدة التوزيع: أ(ب + ج) = أب + أج",
        correctAnswer: true,
        hint: "هذه خاصية التوزيع الأساسية",
        explanation: "خاصية التوزيع: يتم توزيع العامل الخارجي على كل حد داخل القوس"
    },
    {
        id: 14,
        chapter: "الفصل 1: المعادلات الخطية",
        difficulty: "صعب",
        type: "multipleChoice",
        question: "حل المعادلة: 2(س + 4) = 18",
        options: ["س = 4", "س = 5", "س = 7", "س = 9"],
        correctAnswer: 1,
        hint: "افتح القوس بالتوزيع أو اقسم الطرفين على 2 أولاً",
        explanation: "2(س + 4) = 18 → 2س + 8 = 18 → 2س = 10 → س = 5"
    },
    {
        id: 15,
        chapter: "الفصل 1: المعادلات الخطية",
        difficulty: "صعب",
        type: "multipleChoice",
        question: "حل المعادلة: 5(س - 3) = 2س + 9",
        options: ["س = 6", "س = 8", "س = 10", "س = 12"],
        correctAnswer: 1,
        hint: "افتح الأقواس أولاً، ثم اجمع الحدود المتشابهة",
        explanation: "5س - 15 = 2س + 9 → 3س = 24 → س = 8"
    },
    {
        id: 16,
        chapter: "الفصل 1: المعادلات الخطية",
        difficulty: "صعب",
        type: "multipleChoice",
        question: "حل المعادلة: 3(2س - 1) = 4س + 7",
        options: ["س = 3", "س = 4", "س = 5", "س = 6"],
        correctAnswer: 2,
        hint: "وزّع 3 على القوس، ثم اجمع الحدود المتشابهة",
        explanation: "6س - 3 = 4س + 7 → 2س = 10 → س = 5"
    },
    {
        id: 17,
        chapter: "الفصل 1: المعادلات الخطية",
        difficulty: "صعب",
        type: "multipleChoice",
        question: "حل المعادلة: 4(س + 2) - 3 = 2(س - 1) + 13",
        options: ["س = 1", "س = 2", "س = 3", "س = 4"],
        correctAnswer: 1,
        hint: "افتح كل الأقواس أولاً، ثم بسّط ورتب المعادلة",
        explanation: "4س + 8 - 3 = 2س - 2 + 13 → 4س + 5 = 2س + 11 → 2س = 6 → س = 3"
    },

    // معادلات مع القيمة المطلقة
    {
        id: 18,
        chapter: "الفصل 1: المعادلات الخطية",
        difficulty: "صعب",
        type: "trueFalse",
        question: "قاعدة: القيمة المطلقة |س| تعني البعد عن الصفر (دائماً موجبة أو صفر)",
        correctAnswer: true,
        hint: "القيمة المطلقة لا يمكن أن تكون سالبة",
        explanation: "|س| = س إذا كان س ≥ 0، و|س| = -س إذا كان س < 0"
    },
    {
        id: 19,
        chapter: "الفصل 1: المعادلات الخطية",
        difficulty: "صعب",
        type: "multipleChoice",
        question: "إذا كان |س| = 7، فما قيم س الممكنة؟",
        options: ["س = 7 فقط", "س = -7 فقط", "س = 7 أو س = -7", "لا يوجد حل"],
        correctAnswer: 2,
        hint: "القيمة المطلقة يمكن أن تساوي الموجب أو السالب",
        explanation: "|س| = 7 يعني س = 7 أو س = -7"
    },

    // ========================================
    // الفصل الثاني: العلاقات والدوال الخطية
    // ========================================

    // تعريف الدالة
    {
        id: 20,
        chapter: "الفصل 2: العلاقات والدوال الخطية",
        difficulty: "سهل",
        type: "trueFalse",
        question: "قاعدة: الدالة هي علاقة يرتبط فيها كل عنصر من المجال بعنصر واحد فقط من المدى",
        correctAnswer: true,
        hint: "تذكر الفرق بين العلاقة والدالة",
        explanation: "هذا هو التعريف الصحيح للدالة - كل مدخل له مخرج واحد فقط"
    },
    {
        id: 21,
        chapter: "الفصل 2: العلاقات والدوال الخطية",
        difficulty: "سهل",
        type: "trueFalse",
        question: "كل دالة هي علاقة، لكن ليس كل علاقة هي دالة",
        correctAnswer: true,
        hint: "الدالة شرط خاص من العلاقة",
        explanation: "الدالة هي نوع خاص من العلاقات يتطلب شرطاً إضافياً"
    },
    {
        id: 22,
        chapter: "الفصل 2: العلاقات والدوال الخطية",
        difficulty: "سهل",
        type: "multipleChoice",
        question: "إذا كانت د(س) = 2س + 1، فما قيمة د(3)؟",
        options: ["5", "6", "7", "8"],
        correctAnswer: 2,
        hint: "عوّض قيمة س = 3 في الدالة",
        explanation: "د(3) = 2(3) + 1 = 6 + 1 = 7"
    },
    {
        id: 23,
        chapter: "الفصل 2: العلاقات والدوال الخطية",
        difficulty: "سهل",
        type: "multipleChoice",
        question: "إذا كانت هـ(س) = 5س - 3، فما قيمة هـ(2)؟",
        options: ["5", "7", "10", "13"],
        correctAnswer: 1,
        hint: "عوّض س = 2 في الدالة",
        explanation: "هـ(2) = 5(2) - 3 = 10 - 3 = 7"
    },
    {
        id: 24,
        chapter: "الفصل 2: العلاقات والدوال الخطية",
        difficulty: "متوسط",
        type: "multipleChoice",
        question: "إذا كانت و(س) = 3س² + 2س، فما قيمة و(-1)؟",
        options: ["1", "-1", "5", "-5"],
        correctAnswer: 0,
        hint: "عوّض س = -1 واحذر من إشارات السالب",
        explanation: "و(-1) = 3(-1)² + 2(-1) = 3(1) - 2 = 1"
    },

    // الميل ومعدل التغير
    {
        id: 25,
        chapter: "الفصل 2: العلاقات والدوال الخطية",
        difficulty: "سهل",
        type: "trueFalse",
        question: "قانون الميل: م = (ص₂ - ص₁) ÷ (س₂ - س₁) حيث (س₁، ص₁) و (س₂، ص₂) نقطتان على المستقيم",
        correctAnswer: true,
        hint: "هذا القانون الأساسي لحساب الميل",
        explanation: "الميل = التغير في ص ÷ التغير في س"
    },
    {
        id: 26,
        chapter: "الفصل 2: العلاقات والدوال الخطية",
        difficulty: "متوسط",
        type: "multipleChoice",
        question: "ما هو ميل المستقيم المار بالنقطتين (1, 2) و (3, 6)؟",
        options: ["1", "2", "3", "4"],
        correctAnswer: 1,
        hint: "استخدم قانون الميل",
        explanation: "م = (6 - 2) ÷ (3 - 1) = 4 ÷ 2 = 2"
    },
    {
        id: 27,
        chapter: "الفصل 2: العلاقات والدوال الخطية",
        difficulty: "متوسط",
        type: "multipleChoice",
        question: "ما ميل المستقيم المار بـ (2, 5) و (4, 11)؟",
        options: ["2", "3", "6", "4"],
        correctAnswer: 1,
        hint: "م = (ص₂ - ص₁) ÷ (س₂ - س₁)",
        explanation: "م = (11 - 5) ÷ (4 - 2) = 6 ÷ 2 = 3"
    },
    {
        id: 28,
        chapter: "الفصل 2: العلاقات والدوال الخطية",
        difficulty: "متوسط",
        type: "trueFalse",
        question: "المستقيم الأفقي له ميل يساوي صفر",
        correctAnswer: true,
        hint: "المستقيم الأفقي لا يرتفع ولا ينخفض (ص ثابتة)",
        explanation: "المستقيم الأفقي: ميل = 0 لأن التغير في ص = 0"
    },
    {
        id: 29,
        chapter: "الفصل 2: العلاقات والدوال الخطية",
        difficulty: "متوسط",
        type: "trueFalse",
        question: "المستقيم الرأسي له ميل غير معرّف",
        correctAnswer: true,
        hint: "المستقيم الرأسي: س ثابتة (التغير في س = 0)",
        explanation: "المستقيم الرأسي: ميل غير معرّف لأن المقام = 0"
    },
    {
        id: 30,
        chapter: "الفصل 2: العلاقات والدوال الخطية",
        difficulty: "صعب",
        type: "multipleChoice",
        question: "ما ميل المستقيم المار بـ (-2, 3) و (4, -9)؟",
        options: ["-2", "-3", "2", "3"],
        correctAnswer: 0,
        hint: "انتبه للإشارات السالبة",
        explanation: "م = (-9 - 3) ÷ (4 - (-2)) = -12 ÷ 6 = -2"
    },

    // المتتابعات الحسابية
    {
        id: 31,
        chapter: "الفصل 2: العلاقات والدوال الخطية",
        difficulty: "متوسط",
        type: "trueFalse",
        question: "قانون الحد النوني للمتتابعة الحسابية: أ_ن = أ₁ + (ن - 1)د حيث د هو أساس المتتابعة",
        correctAnswer: true,
        hint: "د = الفرق المشترك بين الحدود",
        explanation: "هذا القانون العام للمتتابعة الحسابية"
    },
    {
        id: 32,
        chapter: "الفصل 2: العلاقات والدوال الخطية",
        difficulty: "متوسط",
        type: "multipleChoice",
        question: "ما أساس المتتابعة: 5، 8، 11، 14، ...؟",
        options: ["2", "3", "4", "5"],
        correctAnswer: 1,
        hint: "الأساس = الفرق بين أي حدين متتاليين",
        explanation: "الأساس = 8 - 5 = 3"
    },
    {
        id: 33,
        chapter: "الفصل 2: العلاقات والدوال الخطية",
        difficulty: "صعب",
        type: "multipleChoice",
        question: "المتتابعة: 3، 7، 11، 15، ... ما الحد العاشر؟",
        options: ["35", "37", "39", "41"],
        correctAnswer: 2,
        hint: "أ₁ = 3، د = 4، استخدم: أ₁₀ = أ₁ + 9د",
        explanation: "أ₁₀ = 3 + (10-1)×4 = 3 + 36 = 39"
    },
    {
        id: 34,
        chapter: "الفصل 2: العلاقات والدوال الخطية",
        difficulty: "صعب",
        type: "multipleChoice",
        question: "إذا كان الحد الأول = 2 والأساس = 5، فما الحد السابع؟",
        options: ["30", "32", "35", "37"],
        correctAnswer: 1,
        hint: "أ₇ = 2 + (7-1) × 5",
        explanation: "أ₇ = 2 + 6×5 = 2 + 30 = 32"
    },

    // ========================================
    // الفصل الثالث: الدوال الخطية
    // ========================================

    // صيغة الميل والمقطع
    {
        id: 35,
        chapter: "الفصل 3: الدوال الخطية",
        difficulty: "سهل",
        type: "trueFalse",
        question: "قاعدة: معادلة المستقيم بصيغة الميل والمقطع: ص = م س + ب (م: الميل، ب: المقطع الصادي)",
        correctAnswer: true,
        hint: "هذه الصيغة القياسية للمستقيم",
        explanation: "ص = م س + ب حيث م الميل وب نقطة تقاطع المستقيم مع محور الصادات"
    },
    {
        id: 36,
        chapter: "الفصل 3: الدوال الخطية",
        difficulty: "سهل",
        type: "multipleChoice",
        question: "في المعادلة ص = 3س + 2، ما قيمة الميل؟",
        options: ["1", "2", "3", "5"],
        correctAnswer: 2,
        hint: "الميل هو معامل س",
        explanation: "الميل م = 3"
    },
    {
        id: 37,
        chapter: "الفصل 3: الدوال الخطية",
        difficulty: "سهل",
        type: "multipleChoice",
        question: "في المعادلة ص = 3س + 2، ما قيمة المقطع الصادي؟",
        options: ["1", "2", "3", "5"],
        correctAnswer: 1,
        hint: "المقطع الصادي هو الثابت",
        explanation: "المقطع الصادي ب = 2"
    },
    {
        id: 38,
        chapter: "الفصل 3: الدوال الخطية",
        difficulty: "متوسط",
        type: "multipleChoice",
        question: "ما معادلة المستقيم الذي ميله 4 ومقطعه الصادي -3؟",
        options: ["ص = 4س - 3", "ص = -3س + 4", "ص = 4س + 3", "ص = 3س - 4"],
        correctAnswer: 0,
        hint: "استخدم ص = م س + ب مباشرة",
        explanation: "ص = 4س + (-3) = 4س - 3"
    },

    // صيغة الميل ونقطة
    {
        id: 39,
        chapter: "الفصل 3: الدوال الخطية",
        difficulty: "متوسط",
        type: "trueFalse",
        question: "قاعدة: صيغة الميل ونقطة: ص - ص₁ = م(س - س₁) حيث م الميل و(س₁، ص₁) نقطة معلومة",
        correctAnswer: true,
        hint: "هذه الصيغة تستخدم عند معرفة الميل ونقطة واحدة",
        explanation: "صيغة نقطة-ميل: ص - ص₁ = م(س - س₁)"
    },
    {
        id: 40,
        chapter: "الفصل 3: الدوال الخطية",
        difficulty: "متوسط",
        type: "multipleChoice",
        question: "معادلة المستقيم الذي ميله 2 ويمر بـ(1, 5)؟",
        options: ["ص = 2س + 1", "ص = 2س + 3", "ص = 2س + 5", "ص = س + 3"],
        correctAnswer: 1,
        hint: "استخدم ص - 5 = 2(س - 1) ثم بسّط",
        explanation: "ص - 5 = 2(س - 1) → ص = 2س + 3"
    },
    {
        id: 41,
        chapter: "الفصل 3: الدوال الخطية",
        difficulty: "صعب",
        type: "multipleChoice",
        question: "معادلة المستقيم الذي ميله -3 ويمر بـ(2, 4)؟",
        options: ["ص = -3س + 10", "ص = -3س + 4", "ص = 3س - 10", "ص = -3س - 2"],
        correctAnswer: 0,
        hint: "ص - 4 = -3(س - 2)",
        explanation: "ص - 4 = -3س + 6 → ص = -3س + 10"
    },

    // المستقيمات المتوازية والمتعامدة
    {
        id: 42,
        chapter: "الفصل 3: الدوال الخطية",
        difficulty: "متوسط",
        type: "trueFalse",
        question: "قاعدة: المستقيمان المتوازيان لهما نفس الميل (م₁ = م₂)",
        correctAnswer: true,
        hint: "المستقيمات المتوازية لا تتقاطع أبداً",
        explanation: "المستقيمات المتوازية: م₁ = م₂"
    },
    {
        id: 43,
        chapter: "الفصل 3: الدوال الخطية",
        difficulty: "متوسط",
        type: "trueFalse",
        question: "قاعدة: المستقيمان المتعامدان: حاصل ضرب ميلهما = -1 (م₁ × م₂ = -1)",
        correctAnswer: true,
        hint: "المتعامدان يشكلان زاوية قائمة",
        explanation: "المستقيمات المتعامدة: م₁ × م₂ = -1"
    },
    {
        id: 44,
        chapter: "الفصل 3: الدوال الخطية",
        difficulty: "صعب",
        type: "multipleChoice",
        question: "ما ميل المستقيم الموازي لـ ص = 3س + 5؟",
        options: ["1/3", "-1/3", "3", "-3"],
        correctAnswer: 2,
        hint: "المستقيمات المتوازية لها نفس الميل",
        explanation: "الميل = 3 (نفس الميل)"
    },
    {
        id: 45,
        chapter: "الفصل 3: الدوال الخطية",
        difficulty: "صعب",
        type: "multipleChoice",
        question: "ما ميل المستقيم العمودي على ص = 2س + 1؟",
        options: ["2", "-1/2", "1/2", "-2"],
        correctAnswer: 1,
        hint: "ميل العمودي = سالب مقلوب الميل الأصلي",
        explanation: "الميل الأصلي = 2 → الميل العمودي = -1/2"
    },
    {
        id: 46,
        chapter: "الفصل 3: الدوال الخطية",
        difficulty: "صعب",
        type: "multipleChoice",
        question: "ما ميل المستقيم العمودي على ص = -4س + 3؟",
        options: ["4", "-4", "1/4", "-1/4"],
        correctAnswer: 2,
        hint: "م × م₁ = -1 حيث م₁ = -4",
        explanation: "م × (-4) = -1 → م = 1/4"
    },

    // ========================================
    // الفصل الرابع: المتباينات الخطية
    // ========================================

    // أساسيات المتباينات
    {
        id: 47,
        chapter: "الفصل 4: المتباينات الخطية",
        difficulty: "سهل",
        type: "trueFalse",
        question: "قاعدة مهمة: عند ضرب أو قسمة طرفي المتباينة بعدد سالب، تنعكس إشارة المتباينة",
        correctAnswer: true,
        hint: "هذه القاعدة الذهبية للمتباينات!",
        explanation: "مثال: -2س < 6 → س > -3 (انعكست الإشارة)"
    },
    {
        id: 48,
        chapter: "الفصل 4: المتباينات الخطية",
        difficulty: "سهل",
        type: "trueFalse",
        question: "يمكن إضافة أو طرح نفس العدد من طرفي المتباينة دون عكس الإشارة",
        correctAnswer: true,
        hint: "الجمع والطرح لا يؤثران على اتجاه المتباينة",
        explanation: "إذا كان أ < ب، فإن أ + ج < ب + ج"
    },
    {
        id: 49,
        chapter: "الفصل 4: المتباينات الخطية",
        difficulty: "سهل",
        type: "multipleChoice",
        question: "حل المتباينة: س + 3 < 8",
        options: ["س < 3", "س < 5", "س < 8", "س < 11"],
        correctAnswer: 1,
        hint: "اطرح 3 من الطرفين",
        explanation: "س + 3 < 8 → س < 5"
    },
    {
        id: 50,
        chapter: "الفصل 4: المتباينات الخطية",
        difficulty: "سهل",
        type: "multipleChoice",
        question: "حل المتباينة: س - 4 > 7",
        options: ["س > 3", "س > 7", "س > 11", "س > 4"],
        correctAnswer: 2,
        hint: "أضف 4 للطرفين",
        explanation: "س - 4 > 7 → س > 11"
    },
    {
        id: 51,
        chapter: "الفصل 4: المتباينات الخطية",
        difficulty: "سهل",
        type: "multipleChoice",
        question: "حل المتباينة: 5س ≤ 20",
        options: ["س ≤ 4", "س ≤ 15", "س ≤ 20", "س ≤ 25"],
        correctAnswer: 0,
        hint: "اقسم الطرفين على 5",
        explanation: "5س ≤ 20 → س ≤ 4"
    },

    // متباينات مع أعداد سالبة
    {
        id: 52,
        chapter: "الفصل 4: المتباينات الخطية",
        difficulty: "متوسط",
        type: "multipleChoice",
        question: "حل المتباينة: -2س ≥ 10",
        options: ["س ≥ -5", "س ≤ -5", "س ≥ 5", "س ≤ 5"],
        correctAnswer: 1,
        hint: "اقسم على -2 واعكس الإشارة!",
        explanation: "-2س ≥ 10 → س ≤ -5 (انعكست الإشارة)"
    },
    {
        id: 53,
        chapter: "الفصل 4: المتباينات الخطية",
        difficulty: "متوسط",
        type: "multipleChoice",
        question: "حل المتباينة: -3س < 15",
        options: ["س < -5", "س > -5", "س < 5", "س > 5"],
        correctAnswer: 1,
        hint: "اقسم على -3 ولا تنسى عكس الإشارة",
        explanation: "-3س < 15 → س > -5"
    },
    {
        id: 54,
        chapter: "الفصل 4: المتباينات الخطية",
        difficulty: "متوسط",
        type: "trueFalse",
        question: "حل المتباينة 3س - 6 < 9 هو س < 5",
        correctAnswer: true,
        hint: "أضف 6 ثم اقسم على 3",
        explanation: "3س - 6 < 9 → 3س < 15 → س < 5 ✓"
    },

    // متباينات متعددة الخطوات
    {
        id: 55,
        chapter: "الفصل 4: المتباينات الخطية",
        difficulty: "متوسط",
        type: "multipleChoice",
        question: "حل المتباينة: 2س + 5 ≥ 13",
        options: ["س ≥ 4", "س ≥ 6", "س ≥ 8", "س ≥ 9"],
        correctAnswer: 0,
        hint: "اطرح 5 ثم اقسم على 2",
        explanation: "2س + 5 ≥ 13 → 2س ≥ 8 → س ≥ 4"
    },
    {
        id: 56,
        chapter: "الفصل 4: المتباينات الخطية",
        difficulty: "صعب",
        type: "multipleChoice",
        question: "حل المتباينة: 4س - 7 ≤ 2س + 5",
        options: ["س ≤ 4", "س ≤ 6", "س ≤ 8", "س ≤ 12"],
        correctAnswer: 1,
        hint: "اجمع الحدود المتشابهة: 4س - 2س ≤ 5 + 7",
        explanation: "2س ≤ 12 → س ≤ 6"
    },
    {
        id: 57,
        chapter: "الفصل 4: المتباينات الخطية",
        difficulty: "صعب",
        type: "multipleChoice",
        question: "حل المتباينة: -5س + 10 > 25",
        options: ["س < -3", "س > -3", "س < 3", "س > 3"],
        correctAnswer: 0,
        hint: "اطرح 10، ثم اقسم على -5 واعكس الإشارة",
        explanation: "-5س > 15 → س < -3"
    },

    // المتباينات المركبة والقيمة المطلقة
    {
        id: 58,
        chapter: "الفصل 4: المتباينات الخطية",
        difficulty: "صعب",
        type: "trueFalse",
        question: "قاعدة: المتباينة المركبة أ < س < ب تعني س أكبر من أ وأقل من ب في نفس الوقت",
        correctAnswer: true,
        hint: "المتباينة المركبة تحصر المتغير بين قيمتين",
        explanation: "مثال: 2 < س < 7 تعني س بين 2 و 7"
    },
    {
        id: 59,
        chapter: "الفصل 4: المتباينات الخطية",
        difficulty: "صعب",
        type: "trueFalse",
        question: "إذا كان |س| < 5، فإن الحل هو -5 < س < 5",
        correctAnswer: true,
        hint: "|س| < أ يعني -أ < س < أ",
        explanation: "القيمة المطلقة أقل من عدد تعني حصر المتغير بين السالب والموجب"
    },
    {
        id: 60,
        chapter: "الفصل 4: المتباينات الخطية",
        difficulty: "صعب",
        type: "multipleChoice",
        question: "إذا كان |س| ≤ 3، فما مجموعة الحل؟",
        options: ["س ≥ 3", "س ≤ 3", "-3 ≤ س ≤ 3", "س ≤ -3 أو س ≥ 3"],
        correctAnswer: 2,
        hint: "|س| ≤ أ يكافئ -أ ≤ س ≤ أ",
        explanation: "|س| ≤ 3 → -3 ≤ س ≤ 3"
    }
];

// ========================================
// متغيرات الحالة
// ========================================

let currentQuestionIndex = 0;
let score = 0;
let hintsUsed = 0;
let studentName = '';
let userAnswers = [];
let hintShown = false;

// ========================================
// تهيئة الصفحة
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    setupEventListeners();
});

// ========================================
// إنشاء الجسيمات المتحركة
// ========================================

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        particlesContainer.appendChild(particle);
    }
}

// ========================================
// إعداد المستمعات
// ========================================

function setupEventListeners() {
    // Enter key في حقل الاسم
    const nameInput = document.getElementById('studentName');
    if (nameInput) {
        nameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                startQuiz();
            }
        });
    }
}

// ========================================
// بدء الاختبار
// ========================================

function startQuiz() {
    studentName = document.getElementById('studentName').value.trim() || 'الطالب/ة';

    // إخفاء شاشة الترحيب وإظهار شاشة الاختبار
    document.getElementById('welcomeScreen').classList.remove('active');
    document.getElementById('quizScreen').classList.add('active');

    // تحديث عرض الاسم
    document.getElementById('studentNameDisplay').textContent = studentName;
    document.getElementById('totalQuestions').textContent = questions.length;

    // عرض السؤال الأول
    showQuestion();
}

// ========================================
// عرض السؤال
// ========================================

function showQuestion() {
    const question = questions[currentQuestionIndex];
    hintShown = false;

    // تحديث رقم السؤال
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;

    // تحديث شريط التقدم
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';

    // تحديث شارة الفصل
    document.getElementById('chapterBadge').textContent = question.chapter;

    // تحديث شارة الصعوبة
    const difficultyBadge = document.getElementById('difficultyBadge');
    difficultyBadge.textContent = question.difficulty;
    difficultyBadge.className = 'difficulty-badge';
    if (question.difficulty === 'سهل') difficultyBadge.classList.add('easy');
    else if (question.difficulty === 'متوسط') difficultyBadge.classList.add('medium');
    else difficultyBadge.classList.add('hard');

    // عرض السؤال
    document.getElementById('questionText').textContent = question.question;

    // عرض الخيارات
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    if (question.type === 'multipleChoice') {
        question.options.forEach((option, index) => {
            const optionElement = createMultipleChoiceOption(option, index);
            optionsContainer.appendChild(optionElement);
        });
    } else if (question.type === 'trueFalse') {
        const trueOption = createTrueFalseOption('صح', true);
        const falseOption = createTrueFalseOption('خطأ', false);
        optionsContainer.appendChild(trueOption);
        optionsContainer.appendChild(falseOption);
    }

    // إخفاء التلميح
    document.getElementById('hintContent').classList.remove('visible');

    // تعطيل زر التالي
    document.getElementById('nextButton').disabled = true;
}

// ========================================
// إنشاء خيار متعدد
// ========================================

function createMultipleChoiceOption(text, index) {
    const option = document.createElement('div');
    option.className = 'option';
    option.onclick = () => selectOption(index);

    const letter = document.createElement('div');
    letter.className = 'option-letter';
    letter.textContent = String.fromCharCode(65 + index); // A, B, C, D

    const textSpan = document.createElement('span');
    textSpan.textContent = text;

    option.appendChild(letter);
    option.appendChild(textSpan);

    return option;
}

// ========================================
// إنشاء خيار صح/خطأ
// ========================================

function createTrueFalseOption(text, value) {
    const option = document.createElement('div');
    option.className = 'option';
    option.onclick = () => selectOption(value);

    const letter = document.createElement('div');
    letter.className = 'option-letter';
    letter.textContent = value ? '✓' : '✗';

    const textSpan = document.createElement('span');
    textSpan.textContent = text;

    option.appendChild(letter);
    option.appendChild(textSpan);

    return option;
}

// ========================================
// اختيار إجابة
// ========================================

function selectOption(answer) {
    const question = questions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');

    // إزالة التحديد السابق
    options.forEach(opt => {
        opt.classList.remove('selected', 'correct', 'wrong');
    });

    // تحديد الخيار المختار
    if (question.type === 'multipleChoice') {
        options[answer].classList.add('selected');
    } else {
        const selectedIndex = answer ? 0 : 1;
        options[selectedIndex].classList.add('selected');
    }

    // حفظ الإجابة
    userAnswers[currentQuestionIndex] = answer;

    // التحقق من الإجابة
    checkAnswer(answer);

    // تفعيل زر التالي
    document.getElementById('nextButton').disabled = false;
}

// ========================================
// التحقق من الإجابة
// ========================================

function checkAnswer(answer) {
    const question = questions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    const isCorrect = answer === question.correctAnswer;

    if (isCorrect) {
        score++;
        if (question.type === 'multipleChoice') {
            options[answer].classList.add('correct');
        } else {
            options[answer ? 0 : 1].classList.add('correct');
        }
    } else {
        if (question.type === 'multipleChoice') {
            options[answer].classList.add('wrong');
            options[question.correctAnswer].classList.add('correct');
        } else {
            options[answer ? 0 : 1].classList.add('wrong');
            options[question.correctAnswer ? 0 : 1].classList.add('correct');
        }
    }

    // تعطيل جميع الخيارات
    options.forEach(opt => {
        opt.style.pointerEvents = 'none';
    });
}

// ========================================
// عرض التلميح
// ========================================

function showHint() {
    if (!hintShown) {
        const question = questions[currentQuestionIndex];
        const hintContent = document.getElementById('hintContent');
        hintContent.textContent = question.hint;
        hintContent.classList.add('visible');
        hintShown = true;
        hintsUsed++;
    }
}

// ========================================
// السؤال التالي
// ========================================

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// ========================================
// عرض النتائج
// ========================================

function showResults() {
    // إخفاء شاشة الاختبار وإظهار شاشة النتائج
    document.getElementById('quizScreen').classList.remove('active');
    document.getElementById('resultsScreen').classList.add('active');

    // حساب النسبة المئوية
    const percentage = Math.round((score / questions.length) * 100);

    // تحديد الأيقونة والرسالة
    let icon, title, message, encouragement;

    if (percentage >= 90) {
        icon = '🏆';
        title = 'ممتاز جداً!';
        message = 'أداء رائع! أنت متميز/ة في الرياضيات';
        encouragement = 'واصل/ي تفوقك! أنت نجم/ة المستقبل ✨';
    } else if (percentage >= 75) {
        icon = '🌟';
        title = 'أحسنت!';
        message = 'أداء جيد جداً! استمر/ي في التقدم';
        encouragement = 'أنت على الطريق الصحيح! فقط المزيد من التدريب 💪';
    } else if (percentage >= 60) {
        icon = '👍';
        title = 'جيد!';
        message = 'أداء مقبول، لكن يمكنك التحسن';
        encouragement = 'راجع/ي المواضيع وحاول/ي مرة أخرى 📚';
    } else {
        icon = '💪';
        title = 'يمكنك التحسن!';
        message = 'تحتاج/ين للمزيد من المراجعة';
        encouragement = 'لا تيأس/ي! المثابرة طريقك للنجاح 🌈';
    }

    // تحديث العناصر
    document.getElementById('resultsIcon').textContent = icon;
    document.getElementById('resultsTitle').textContent = title;
    document.getElementById('resultsMessage').textContent = message;
    document.getElementById('encouragement').textContent = encouragement;
    document.getElementById('scoreNumber').textContent = percentage + '%';
    document.getElementById('correctAnswers').textContent = score;
    document.getElementById('wrongAnswers').textContent = questions.length - score;
    document.getElementById('hintsUsed').textContent = hintsUsed;

    // تحريك دائرة النتيجة
    setTimeout(() => {
        const circle = document.getElementById('scoreCircle');
        const circumference = 2 * Math.PI * 90; // r = 90
        const offset = circumference - (percentage / 100) * circumference;
        circle.style.strokeDashoffset = offset;
    }, 500);
}

// ========================================
// إعادة الاختبار
// ========================================

function restartQuiz() {
    // إعادة تعيين المتغيرات
    currentQuestionIndex = 0;
    score = 0;
    hintsUsed = 0;
    userAnswers = [];

    // العودة لشاشة البداية
    document.getElementById('resultsScreen').classList.remove('active');
    document.getElementById('welcomeScreen').classList.add('active');

    // إعادة تعيين دائرة النتيجة
    document.getElementById('scoreCircle').style.strokeDashoffset = 565;
}

// ========================================
// SVG Gradient للدائرة
// ========================================

// إضافة gradient للـ SVG
const svg = document.querySelector('.score-circle svg');
if (svg) {
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    gradient.id = 'scoreGradient';

    const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop1.setAttribute('offset', '0%');
    stop1.setAttribute('stop-color', '#FF6B9D');

    const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop2.setAttribute('offset', '100%');
    stop2.setAttribute('stop-color', '#C77DFF');

    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    defs.appendChild(gradient);
    svg.insertBefore(defs, svg.firstChild);
}
