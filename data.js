window.APP_DATA = {
  categories: [
    { id: "all", label: "All", zh: "全部", color: "teal", icon: "chat" },
    { id: "greeting", label: "Greeting", zh: "迎接开场", color: "teal", icon: "chat" },
    { id: "checkin", label: "Check-in", zh: "注册核验", color: "blue", icon: "qr" },
    { id: "badge", label: "Badge & Kit", zh: "胸牌资料", color: "gold", icon: "id" },
    { id: "payment", label: "Payment", zh: "缴费票据", color: "coral", icon: "card" },
    { id: "directions", label: "Directions", zh: "指路日程", color: "teal", icon: "map" },
    { id: "help", label: "Help & Escalate", zh: "异常升级", color: "coral", icon: "help" }
  ],
  scenarios: [
    {
      id: "greeting-01", category: "greeting",
      guest: "Good morning. I'm here for the conference.",
      answer: "Good morning. Welcome to CEC 2026. How may I help you?",
      tipZh: "先完整问候，再给对方说明来意的机会。不要一上来连续追问。",
      chunks: ["Welcome to CEC 2026", "How may I help you?"],
      keywords: ["welcome", "morning", "greeting", "迎接", "问候"]
    },
    {
      id: "greeting-02", category: "greeting",
      guest: "Is this the international registration desk?",
      answer: "Yes, it is. How may I help you?",
      tipZh: "先明确确认，再主动询问需要什么帮助。",
      chunks: ["Yes, it is", "How may I help you?"],
      keywords: ["international", "registration desk", "国际注册台"]
    },
    {
      id: "greeting-03", category: "greeting",
      guest: "I'm here to collect my badge.",
      answer: "Certainly. May I have your name, please?",
      tipZh: "先接住来意，再问姓名。不要直接问对方是否已经注册。",
      chunks: ["I'm here to collect my badge", "May I have your name, please?"],
      keywords: ["collect badge", "badge", "name", "领取胸牌", "姓名"]
    },
    {
      id: "greeting-04", category: "greeting",
      guest: "My name is Daniel Weber.",
      answer: "Thank you. One moment, please. I'll check your registration.",
      tipZh: "听到姓名后先复述或确认，再查记录。",
      chunks: ["One moment, please", "I'll check your registration"],
      keywords: ["daniel", "weber", "name", "registration", "查记录"]
    },
    {
      id: "checkin-01", category: "checkin",
      guest: "What do you need from me?",
      answer: "May I see your registration QR code and photo ID, please?",
      tipZh: "证件类型按现场规定执行。这里用 photo ID 保留弹性。",
      chunks: ["registration QR code", "photo ID", "May I see ... please?"],
      keywords: ["qr code", "photo id", "passport", "注册二维码", "证件"]
    },
    {
      id: "checkin-02", category: "checkin",
      guest: "Here is my passport.",
      answer: "Thank you. May I confirm your institution, please?",
      tipZh: "核验后核对姓名和单位，确保胸牌信息正确。",
      chunks: ["May I confirm ...", "your institution"],
      keywords: ["passport", "institution", "affiliation", "护照", "单位"]
    },
    {
      id: "checkin-03", category: "checkin",
      guest: "My family name is Weber.",
      answer: "Could you spell that for me?",
      tipZh: "只要有一丝不确定，就请对方拼写。拼错会直接影响胸牌。",
      chunks: ["family name", "Could you spell that for me?"],
      keywords: ["spell", "family name", "surname", "拼写", "姓氏"]
    },
    {
      id: "checkin-04", category: "checkin",
      guest: "It's W-E-B-E-R.",
      answer: "So that's W-E-B-E-R, correct?",
      tipZh: "逐字母复述是确认姓名最稳的方法。",
      chunks: ["So that's ...", "correct?"],
      keywords: ["spell", "repeat", "confirm", "复述", "确认"]
    },
    {
      id: "badge-01", category: "badge",
      guest: "Is my badge ready?",
      answer: "Yes. Your badge is ready. Please check your name and affiliation.",
      tipZh: "胸牌递出前，让参会者自己确认姓名和单位。",
      chunks: ["Your badge is ready", "Please check your name", "affiliation"],
      keywords: ["badge", "ready", "affiliation", "胸牌", "核对"]
    },
    {
      id: "badge-02", category: "badge",
      guest: "Where can I get the conference bag?",
      answer: "Here is your conference bag and program.",
      tipZh: "一边递出资料，一边说清袋子里有什么。",
      chunks: ["conference bag", "program", "Here is your ..."],
      keywords: ["conference bag", "program", "materials", "资料袋", "会议手册"]
    },
    {
      id: "badge-03", category: "badge",
      guest: "Do I need to wear the badge all the time?",
      answer: "Yes, please wear your badge at all times in the venue.",
      tipZh: "明确说明胸牌是入场凭证，并提醒妥善保管。",
      chunks: ["wear your badge", "at all times", "in the venue"],
      keywords: ["wear badge", "venue", "入场", "佩戴胸牌"]
    },
    {
      id: "badge-04", category: "badge",
      guest: "My affiliation is incorrect.",
      answer: "I'll correct it and print a new badge.",
      tipZh: "如果权限允许就更正；不确定流程时先联系负责人确认。",
      chunks: ["I'll correct it", "print a new badge"],
      keywords: ["incorrect", "affiliation", "reprint", "单位错误", "重新打印"]
    },
    {
      id: "payment-01", category: "payment",
      guest: "Can I pay onsite?",
      answer: "Yes. The onsite fee is [amount]. We accept [payment methods].",
      tipZh: "金额、币种和支付方式必须使用现场最新规定，不能临场猜。",
      chunks: ["onsite fee", "We accept ...", "[amount] / [payment methods]"],
      keywords: ["pay", "onsite fee", "payment", "缴费", "现场支付"]
    },
    {
      id: "payment-02", category: "payment",
      guest: "Can I have a receipt?",
      answer: "Yes. Would you like a printed or digital receipt?",
      tipZh: "先确认收据形式，再按现场财务流程处理。",
      chunks: ["a printed or digital receipt", "Would you like ...?"],
      keywords: ["receipt", "printed", "digital", "收据"]
    },
    {
      id: "payment-03", category: "payment",
      guest: "I need an invoice.",
      answer: "For an invoice, please provide [details].",
      tipZh: "开票资料按现场财务要求填写；本岗位不处理时直接转交。",
      chunks: ["For an invoice", "provide [details]"],
      keywords: ["invoice", "billing", "发票", "开票"]
    },
    {
      id: "directions-01", category: "directions",
      guest: "Where is the main hall?",
      answer: "The main hall is on the [floor]. Take the escalator and turn [left/right] at [landmark].",
      tipZh: "给出楼层、路线和一个明显参照点，不要只说“那边”。",
      chunks: ["The main hall is on ...", "Take the escalator", "at [landmark]"],
      keywords: ["main hall", "floor", "escalator", "主会场", "指路"]
    },
    {
      id: "directions-02", category: "directions",
      guest: "How do I get to the exhibition?",
      answer: "Take the escalator to [floor] and follow the signs for the exhibition area.",
      tipZh: "能用地标或指示牌时，优先用最简单、最可确认的路线。",
      chunks: ["Take the escalator to ...", "follow the signs"],
      keywords: ["exhibition", "signs", "escalator", "展览", "展区"]
    },
    {
      id: "directions-03", category: "directions",
      guest: "Where is the Speaker Preview Room?",
      answer: "It's on the 7th floor. Our colleagues there can check your slides.",
      tipZh: "岗位明细明确标注试片室在七层。报告专家可直接用这句话。",
      chunks: ["Speaker Preview Room", "on the 7th floor", "check your slides"],
      keywords: ["speaker preview room", "slides", "7th floor", "试片室", "课件"]
    },
    {
      id: "directions-04", category: "directions",
      guest: "Where is the shuttle stop?",
      answer: "It's at [location]. The next bus leaves at [time].",
      tipZh: "班车位置和发车时间以现场最新时刻表为准。",
      chunks: ["shuttle stop", "The next bus leaves at ..."],
      keywords: ["shuttle", "bus", "stop", "班车", "发车"]
    },
    {
      id: "directions-05", category: "directions",
      guest: "Where is the restroom?",
      answer: "It's [near the ...]. Let me show you on the map.",
      tipZh: "用最近的地标描述位置，必要时直接在地图上指出来。",
      chunks: ["near the ...", "Let me show you on the map"],
      keywords: ["restroom", "toilet", "map", "洗手间", "地图"]
    },
    {
      id: "help-01", category: "help",
      guest: "I can't find my registration.",
      answer: "May I have your full name and email address? Let me check with my supervisor.",
      tipZh: "只收集必要信息：全名、单位、邮箱或注册号，然后升级核查。",
      chunks: ["full name and email address", "check with my supervisor"],
      keywords: ["missing record", "can't find", "registration", "找不到记录", "查不到"]
    },
    {
      id: "help-02", category: "help",
      guest: "My QR code isn't working.",
      answer: "Let me try again. If it still doesn't work, I'll help you with onsite registration.",
      tipZh: "先重试，再按现场流程协助补注册；不要直接承诺一定成功。",
      chunks: ["Let me try again", "onsite registration"],
      keywords: ["qr code", "not working", "onsite registration", "二维码", "现场注册"]
    },
    {
      id: "help-03", category: "help",
      guest: "I lost my badge.",
      answer: "I'll check the replacement procedure with my supervisor.",
      tipZh: "胸牌补发必须按流程核实，不要直接补打。",
      chunks: ["replacement procedure", "with my supervisor"],
      keywords: ["lost badge", "replacement", "胸牌丢失", "补办"]
    },
    {
      id: "help-04", category: "help",
      guest: "Can you answer a medical question?",
      answer: "I'll connect you with the right expert or conference team.",
      tipZh: "志愿者不解答医学专业问题，只负责转交给合适的人。",
      chunks: ["connect you with", "the right expert"],
      keywords: ["medical", "expert", "professional question", "医学问题", "转交"]
    },
    {
      id: "help-05", category: "help",
      guest: "I need wheelchair access.",
      answer: "Let me arrange assistance for you.",
      tipZh: "先确认需求，再联系现场负责人或无障碍服务人员。",
      chunks: ["wheelchair access", "arrange assistance"],
      keywords: ["wheelchair", "accessibility", "assistance", "无障碍", "轮椅"]
    },
    {
      id: "help-06", category: "help",
      guest: "I'd like to make a complaint.",
      answer: "I understand. Let me bring my supervisor to help you.",
      tipZh: "先听完并承认感受，不争辩，再把问题升级给负责人。",
      chunks: ["I understand", "bring my supervisor"],
      keywords: ["complaint", "upset", "supervisor", "投诉", "负责人"]
    },
    {
      id: "help-07", category: "help",
      guest: "This is a medical emergency.",
      answer: "I'll call the on-site medical team immediately.",
      tipZh: "医疗紧急情况立即联系现场医疗人员和负责人，不自行判断或处置。",
      chunks: ["medical emergency", "on-site medical team", "immediately"],
      keywords: ["emergency", "medical team", "urgent", "急救", "医疗紧急"]
    },
    {
      id: "help-08", category: "help",
      guest: "Can I take a photo of the slides?",
      answer: "I'm sorry, photography of speaker slides is not permitted.",
      tipZh: "专家课件、病例和患者信息属于保密范围，不能私拍外传。",
      chunks: ["photography is not permitted", "speaker slides"],
      keywords: ["photo", "photography", "slides", "privacy", "拍照", "保密"]
    }
  ],
  challenges: [
    { id: "c1", guest: "Hi, I'm here to pick up my badge.", options: ["What do you want?", "Certainly. May I have your name, please?", "Please wait outside."], answer: 1, success: "Acknowledge the purpose first, then ask for the name.", retry: "Use a polite opening and move the conversation forward." },
    { id: "c2", guest: "Do you need my passport?", options: ["No, never.", "Yes. May I see your passport and registration QR code, please?", "Leave it on the table."], answer: 1, success: "Make the request polite and specific.", retry: "Ask clearly, use May I..., and include please." },
    { id: "c3", guest: "I can't find my QR code.", options: ["That is your problem.", "Please scan this QR code and complete the form.", "Come back tomorrow."], answer: 1, success: "Offer a concrete next action instead of stopping the conversation.", retry: "Give the guest something actionable to do next." },
    { id: "c4", guest: "My hospital name is misspelled.", options: ["I'll correct it and print a new badge.", "The badge is fine.", "You can write on it yourself."], answer: 0, success: "Confirm the correction and explain the next step.", retry: "Own the correction and tell the guest what you will do." },
    { id: "c5", guest: "What is the best treatment for this condition?", options: ["I'll explain the treatment.", "I'll connect you with the right expert or conference team.", "Search online."], answer: 1, success: "A volunteer should not give medical advice. Escalate to the right expert.", retry: "Do not answer professional medical questions yourself." },
    { id: "c6", guest: "Where should I upload my slides?", options: ["Just email them to me.", "The Speaker Preview Room is on the 7th floor. Our colleagues there can help.", "I don't know."], answer: 1, success: "Use the confirmed location and hand the guest to the right team.", retry: "Give a verified location and a clear handoff." },
    { id: "c7", guest: "This is a medical emergency.", options: ["I'll call the on-site medical team immediately.", "Please wait in line.", "Let me find the schedule."], answer: 0, success: "Medical emergencies need immediate escalation, not routine registration steps.", retry: "Call the on-site medical team immediately." },
    { id: "c8", guest: "Can I photograph the slides?", options: ["Yes, go ahead.", "I'm sorry, photography of speaker slides is not permitted.", "Only from the back of the room."], answer: 1, success: "Protect speaker material and patient privacy.", retry: "Photography of speaker slides is restricted." }
  ],
  corePhrases: [
    "Welcome to CEC 2026.",
    "May I have your name, please?",
    "Could you spell that for me?",
    "May I see your QR code and ID?",
    "One moment, please. I'll check.",
    "Your badge is ready.",
    "Please check your name and affiliation.",
    "Let me show you on the map.",
    "Let me check with my supervisor.",
    "Thank you. Enjoy the conference."
  ],
  gameLevels: [
    {
      id: "level-01", scenarioId: "greeting-03", guestName: "Daniel", avatar: "assets/guest-daniel.svg",
      guest: "I'm here to collect my badge.", hint: "先接住来意，再核对身份与注册记录。",
      actions: [
        { id: "name", title: "核对姓名与记录", en: "Check name & record", icon: "search", correct: true },
        { id: "print", title: "直接打印胸牌", en: "Print badge now", icon: "id", correct: false },
        { id: "directions", title: "引导到主会场", en: "Send to main hall", icon: "map", correct: false }
      ]
    },
    {
      id: "level-02", scenarioId: "checkin-01", guestName: "Professor Lin", avatar: "assets/guest-lin.svg",
      guest: "What do you need from me?", hint: "礼貌提出核验请求，不要连续追问。",
      actions: [
        { id: "verify", title: "核验二维码与证件", en: "Verify QR & ID", icon: "qr", correct: true },
        { id: "wait", title: "请顾客稍后再来", en: "Come back later", icon: "help", correct: false },
        { id: "bag", title: "先发资料袋", en: "Hand out bag first", icon: "id", correct: false }
      ]
    },
    {
      id: "level-03", scenarioId: "checkin-03", guestName: "Dr. Weber", avatar: "assets/guest-weber.svg",
      guest: "My family name is Weber.", hint: "姓名是胸牌信息，不能靠猜。",
      actions: [
        { id: "spell", title: "请顾客逐字母拼写", en: "Ask for spelling", icon: "chat", correct: true },
        { id: "assume", title: "直接按猜测录入", en: "Guess the name", icon: "help", correct: false },
        { id: "medical", title: "转到医疗组", en: "Call medical team", icon: "help", correct: false }
      ]
    },
    {
      id: "level-04", scenarioId: "badge-01", guestName: "Dr. Patel", avatar: "assets/guest-patel.svg",
      guest: "Is my badge ready?", hint: "交付前核对姓名和单位，再递出胸牌与资料。",
      actions: [
        { id: "badge", title: "核对胸牌并交付", en: "Verify & hand off", icon: "id", correct: true },
        { id: "program", title: "只给会议手册", en: "Give program only", icon: "card", correct: false },
        { id: "look", title: "让顾客自己找", en: "Ask guest to look", icon: "map", correct: false }
      ]
    },
    {
      id: "level-05", scenarioId: "directions-03", guestName: "Professor Lin", avatar: "assets/guest-lin.svg",
      guest: "Where is the Speaker Preview Room?", hint: "岗位明细明确标注：试片室在七层。",
      actions: [
        { id: "preview", title: "指引到七层试片室", en: "Guide to 7F preview", icon: "map", correct: true },
        { id: "mainhall", title: "指引到主会场", en: "Guide to main hall", icon: "map", correct: false },
        { id: "restroom", title: "指引到洗手间", en: "Guide to restroom", icon: "map", correct: false }
      ]
    },
    {
      id: "level-06", scenarioId: "help-01", guestName: "Daniel", avatar: "assets/guest-daniel.svg",
      guest: "I can't find my registration.", hint: "只记录必要信息，再交给负责人核查。",
      actions: [
        { id: "record", title: "记录信息并升级核查", en: "Record & escalate", icon: "help", correct: true },
        { id: "deny", title: "直接说没有记录", en: "Say no record", icon: "help", correct: false },
        { id: "reprint", title: "直接补打胸牌", en: "Reprint immediately", icon: "id", correct: false }
      ]
    },
    {
      id: "level-07", scenarioId: "help-04", guestName: "Dr. Weber", avatar: "assets/guest-weber.svg",
      guest: "Can you answer a medical question?", hint: "志愿者不解答医学专业问题，只负责转交。",
      actions: [
        { id: "refer", title: "转交专家或会务团队", en: "Refer expert / team", icon: "help", correct: true },
        { id: "answer", title: "凭经验直接解答", en: "Answer from experience", icon: "chat", correct: false },
        { id: "online", title: "建议自行搜索", en: "Advise web search", icon: "search", correct: false }
      ]
    },
    {
      id: "level-08", scenarioId: "help-07", guestName: "Dr. Patel", avatar: "assets/guest-patel.svg",
      guest: "This is a medical emergency.", hint: "医疗紧急情况立即升级，不按普通接待流程处理。",
      actions: [
        { id: "medical", title: "立即联系现场医疗团队", en: "Call medical team", icon: "help", correct: true },
        { id: "queue", title: "请顾客排队等待", en: "Ask guest to queue", icon: "chat", correct: false },
        { id: "schedule", title: "先查会议日程", en: "Check program first", icon: "map", correct: false }
      ]
    }
  ]
};
