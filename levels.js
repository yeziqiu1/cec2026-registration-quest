window.GAME_LEVELS = [
  {
    id:"level-01",scenarioId:"greeting-03",guestName:"Daniel",avatar:"assets/guest-daniel.svg",guest:"I'm here to collect my badge.",
    steps:[
      {hint:"先核对姓名与注册记录",actions:[
        {id:"check-name",title:"核对姓名与记录",en:"Check name & record",icon:"search",correct:true},
        {id:"print-badge",title:"直接打印胸牌",en:"Print badge now",icon:"id",correct:false},
        {id:"send-hall",title:"引导到主会场",en:"Send to main hall",icon:"map",correct:false}
      ]},
      {hint:"姓名无误后，交付胸牌和资料",actions:[
        {id:"hand-badge",title:"交付胸牌与资料袋",en:"Hand off badge & kit",icon:"id",correct:true},
        {id:"ask-payment",title:"询问是否需要缴费",en:"Ask about payment",icon:"card",correct:false},
        {id:"call-medical-1",title:"联系现场医疗团队",en:"Call medical team",icon:"help",correct:false}
      ]}
    ]
  },
  {
    id:"level-02",scenarioId:"checkin-01",guestName:"Professor Lin",avatar:"assets/guest-lin.svg",guest:"What do you need from me?",
    steps:[
      {hint:"先查看注册二维码和带照片证件",actions:[
        {id:"verify-docs",title:"核验二维码与证件",en:"Verify QR & ID",icon:"qr",correct:true},
        {id:"reprint-2",title:"直接重新打印胸牌",en:"Reprint the badge",icon:"id",correct:false},
        {id:"guide-2",title:"先引导去会场",en:"Guide to the hall",icon:"map",correct:false}
      ]},
      {hint:"再核对胸牌上的姓名和单位",actions:[
        {id:"confirm-profile",title:"核对姓名与单位",en:"Confirm name & affiliation",icon:"chat",correct:true},
        {id:"payment-2",title:"询问开票信息",en:"Ask for invoice details",icon:"card",correct:false},
        {id:"medical-2",title:"转交医疗团队",en:"Refer to medical team",icon:"help",correct:false}
      ]},
      {hint:"信息无误，交付胸牌与会议资料",actions:[
        {id:"handoff-2",title:"交付胸牌和资料袋",en:"Hand off badge & kit",icon:"id",correct:true},
        {id:"send-2",title:"让顾客自行寻找会场",en:"Ask guest to find the hall",icon:"map",correct:false},
        {id:"wait-2",title:"请顾客稍后再来",en:"Ask guest to return later",icon:"help",correct:false}
      ]}
    ]
  },
  {
    id:"level-03",scenarioId:"checkin-03",guestName:"Dr. Weber",avatar:"assets/guest-weber.svg",guest:"My family name is Weber.",
    steps:[
      {hint:"姓名不能靠猜，请顾客逐字母拼写",actions:[
        {id:"spell-name",title:"请顾客逐字母拼写",en:"Ask for spelling",icon:"chat",correct:true},
        {id:"guess-name",title:"直接按猜测录入",en:"Guess the name",icon:"search",correct:false},
        {id:"call-med-3",title:"联系医疗团队",en:"Call medical team",icon:"help",correct:false}
      ]},
      {hint:"复述拼写，再确认记录",actions:[
        {id:"confirm-record",title:"复述并确认记录",en:"Repeat & confirm record",icon:"chat",correct:true},
        {id:"print-3",title:"不核对直接打印",en:"Print without checking",icon:"id",correct:false},
        {id:"guide-3",title:"引导到试片室",en:"Guide to preview room",icon:"map",correct:false}
      ]}
    ]
  },
  {
    id:"level-04",scenarioId:"badge-01",guestName:"Dr. Patel",avatar:"assets/guest-patel.svg",guest:"Is my badge ready?",
    steps:[
      {hint:"先核对胸牌姓名和单位",actions:[
        {id:"check-badge",title:"核对胸牌信息",en:"Verify badge details",icon:"id",correct:true},
        {id:"give-program",title:"只发会议手册",en:"Give program only",icon:"card",correct:false},
        {id:"call-med-4",title:"联系医疗团队",en:"Call medical team",icon:"help",correct:false}
      ]},
      {hint:"再交付胸牌、资料袋和节目册",actions:[
        {id:"handoff-4",title:"交付胸牌与会议资料",en:"Hand off badge & materials",icon:"id",correct:true},
        {id:"send-4",title:"让顾客自己找资料",en:"Ask guest to look around",icon:"map",correct:false},
        {id:"receipt-4",title:"优先处理收据",en:"Handle receipt first",icon:"card",correct:false}
      ]}
    ]
  },
  {
    id:"level-05",scenarioId:"directions-03",guestName:"Professor Lin",avatar:"assets/guest-lin.svg",guest:"Where is the Speaker Preview Room?",
    steps:[
      {hint:"确认试片室位置：七层",actions:[
        {id:"preview-7f",title:"指引到七层试片室",en:"Guide to 7F preview room",icon:"map",correct:true},
        {id:"mainhall-5",title:"指引到主会场",en:"Guide to main hall",icon:"map",correct:false},
        {id:"restroom-5",title:"指引到洗手间",en:"Guide to restroom",icon:"map",correct:false}
      ]},
      {hint:"说明七层同事可协助检查课件",actions:[
        {id:"slides-help",title:"说明同事会检查课件",en:"Colleagues will check slides",icon:"chat",correct:true},
        {id:"self-upload",title:"让顾客自行处理",en:"Ask guest to handle it alone",icon:"help",correct:false},
        {id:"payment-5",title:"转去缴费台",en:"Send to payment desk",icon:"card",correct:false}
      ]}
    ]
  },
  {
    id:"level-06",scenarioId:"help-01",guestName:"Daniel",avatar:"assets/guest-daniel.svg",guest:"I can't find my registration.",
    steps:[
      {hint:"记录必要信息：全名、邮箱、注册号",actions:[
        {id:"collect-info",title:"记录必要注册信息",en:"Collect registration details",icon:"chat",correct:true},
        {id:"say-no",title:"直接说没有记录",en:"Say there is no record",icon:"help",correct:false},
        {id:"reprint-6",title:"立即补打胸牌",en:"Reprint immediately",icon:"id",correct:false}
      ]},
      {hint:"把异常升级给负责人核查",actions:[
        {id:"escalate-6",title:"升级负责人核查",en:"Escalate to supervisor",icon:"help",correct:true},
        {id:"print-6",title:"先打印再处理",en:"Print first",icon:"id",correct:false},
        {id:"guide-6",title:"引导到主会场",en:"Guide to main hall",icon:"map",correct:false}
      ]}
    ]
  },
  {
    id:"level-07",scenarioId:"help-04",guestName:"Dr. Weber",avatar:"assets/guest-weber.svg",guest:"Can you answer a medical question?",
    steps:[
      {hint:"先说明志愿者不提供医学判断",actions:[
        {id:"decline-advice",title:"说明不提供医学判断",en:"Decline medical advice",icon:"chat",correct:true},
        {id:"answer-med",title:"凭经验直接解答",en:"Answer from experience",icon:"chat",correct:false},
        {id:"web-search",title:"建议自行搜索",en:"Advise web search",icon:"search",correct:false}
      ]},
      {hint:"转交专家或会务团队",actions:[
        {id:"refer-expert",title:"转交专家或会务团队",en:"Refer expert / team",icon:"help",correct:true},
        {id:"queue-7",title:"请顾客排队",en:"Ask guest to queue",icon:"chat",correct:false},
        {id:"guide-7",title:"引导到展区",en:"Guide to exhibition",icon:"map",correct:false}
      ]}
    ]
  },
  {
    id:"level-08",scenarioId:"help-07",guestName:"Dr. Patel",avatar:"assets/guest-patel.svg",guest:"This is a medical emergency.",
    steps:[
      {hint:"立即启动现场医疗响应",actions:[
        {id:"call-medical-8",title:"立即联系现场医疗团队",en:"Call medical team now",icon:"help",correct:true},
        {id:"queue-8",title:"请顾客排队等待",en:"Ask guest to queue",icon:"chat",correct:false},
        {id:"schedule-8",title:"先查会议日程",en:"Check program first",icon:"map",correct:false}
      ]},
      {hint:"同时通知负责人并保护隐私",actions:[
        {id:"notify-supervisor",title:"通知负责人并保护隐私",en:"Notify supervisor & protect privacy",icon:"help",correct:true},
        {id:"photo-8",title:"拍摄现场照片",en:"Take a photo",icon:"card",correct:false},
        {id:"badge-8",title:"先补办胸牌",en:"Replace badge first",icon:"id",correct:false}
      ]}
    ]
  },
  {
    id:"level-09",scenarioId:"payment-01",guestName:"Daniel",avatar:"assets/guest-daniel.svg",guest:"Can I pay onsite?",
    steps:[
      {hint:"确认顾客的支付状态",actions:[
        {id:"check-payment",title:"确认支付状态",en:"Confirm payment status",icon:"card",correct:true},
        {id:"refund-9",title:"先办理退款",en:"Start a refund",icon:"card",correct:false},
        {id:"medical-9",title:"转交医疗团队",en:"Refer to medical team",icon:"help",correct:false}
      ]},
      {hint:"按最新标准说明金额和支付方式",actions:[
        {id:"state-policy",title:"说明现场标准",en:"State onsite policy",icon:"card",correct:true},
        {id:"discount-9",title:"自行提供折扣",en:"Offer a discount",icon:"coin",correct:false},
        {id:"guide-9",title:"引导到主会场",en:"Guide to main hall",icon:"map",correct:false}
      ]}
    ]
  },
  {
    id:"level-10",scenarioId:"directions-04",guestName:"Professor Lin",avatar:"assets/guest-lin.svg",guest:"Where is the shuttle stop?",
    steps:[
      {hint:"确认班车停靠位置",actions:[
        {id:"confirm-stop",title:"确认班车位置",en:"Confirm shuttle stop",icon:"map",correct:true},
        {id:"mainhall-10",title:"指引到主会场",en:"Guide to main hall",icon:"map",correct:false},
        {id:"restroom-10",title:"指引到洗手间",en:"Guide to restroom",icon:"map",correct:false}
      ]},
      {hint:"说明下一班发车时间",actions:[
        {id:"state-time",title:"说明下一班时间",en:"State next departure",icon:"clock",correct:true},
        {id:"guess-time",title:"估计一个时间",en:"Guess the time",icon:"chat",correct:false},
        {id:"payment-10",title:"转去缴费台",en:"Send to payment",icon:"card",correct:false}
      ]},
      {hint:"给顾客地图指引和确认",actions:[
        {id:"show-map",title:"在地图上指出路线",en:"Show the route on map",icon:"map",correct:true},
        {id:"badge-10",title:"先核对胸牌",en:"Check badge first",icon:"id",correct:false},
        {id:"medical-10",title:"联系医疗团队",en:"Call medical team",icon:"help",correct:false}
      ]}
    ]
  },
  {
    id:"level-11",scenarioId:"badge-02",guestName:"Dr. Weber",avatar:"assets/guest-weber.svg",guest:"Where can I get the conference bag?",
    steps:[
      {hint:"先确认胸牌已核对",actions:[
        {id:"verify-11",title:"确认胸牌信息",en:"Verify badge details",icon:"id",correct:true},
        {id:"guide-11",title:"先引导到展区",en:"Guide to exhibition",icon:"map",correct:false},
        {id:"medical-11",title:"联系医疗团队",en:"Call medical team",icon:"help",correct:false}
      ]},
      {hint:"交付会议资料袋和日程册",actions:[
        {id:"hand-bag",title:"交付资料袋与日程册",en:"Hand off bag & program",icon:"id",correct:true},
        {id:"payment-11",title:"优先处理缴费",en:"Handle payment first",icon:"card",correct:false},
        {id:"wait-11",title:"让顾客稍后再来",en:"Ask guest to return",icon:"help",correct:false}
      ]}
    ]
  },
  {
    id:"level-12",scenarioId:"help-08",guestName:"Dr. Patel",avatar:"assets/guest-patel.svg",guest:"Can I take a photo of the slides?",
    steps:[
      {hint:"礼貌说明不能拍摄专家课件",actions:[
        {id:"stop-photo",title:"说明不能拍摄",en:"Explain photo restriction",icon:"chat",correct:true},
        {id:"allow-photo",title:"允许顾客拍摄",en:"Allow the photo",icon:"card",correct:false},
        {id:"guide-12",title:"引导到展区",en:"Guide to exhibition",icon:"map",correct:false}
      ]},
      {hint:"需要进一步解释时，转交会务团队",actions:[
        {id:"refer-team",title:"转交会务团队解释",en:"Refer to conference team",icon:"help",correct:true},
        {id:"call-med-12",title:"联系医疗团队",en:"Call medical team",icon:"help",correct:false},
        {id:"print-12",title:"补打一张胸牌",en:"Print another badge",icon:"id",correct:false}
      ]}
    ]
  }
];
