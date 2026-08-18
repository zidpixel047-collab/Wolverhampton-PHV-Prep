const topics = [
 ['Safeguarding','🛡️',40],['Plying for Hire','🚕',35],['Disability Awareness','♿',30],['Vehicle Conditions','🚗',24],['Driver Responsibilities','👤',24],['Road & Passenger Safety','🛣️',24],['Customer Care','🤝',19],['County Lines','🔎',10],['GDPR & Data Protection','🔐',10],['Modern Slavery','🕊️',10],['Equality & Diversity','🌍',10],['Fares & Payments','💳',10],['Licensing & Badges','🪪',10],['Lost Property','🧳',6],['Suicide Awareness','💬',6],['Health & Wellbeing','💚',6],['Vehicle Inspections','🔧',6],['Smoking & Vaping','🚭',6],['Alcohol & Drugs','⚠️',6],['Complaints','📋',6],['Booking Records','📖',6],['Local Knowledge','📍',5],['Professional Conduct','🤝',5],['Accidents & Incidents','🚨',3],['Child Exploitation','🧒',3]
];

const qTemplates = {
 'Safeguarding': ['A young passenger says they feel unsafe going home. What is the best response?','Listen calmly, avoid promising confidentiality, and report the concern using the proper safeguarding route.','Ignore it because it is not your role.','Ask them to post about it online.','Take them somewhere else without telling anyone.'],
 'Plying for Hire': ['When may a private hire driver accept a passenger who approaches them in the street?','Only when the journey has been pre-booked through a licensed private hire operator.','Whenever the passenger is willing to pay.','Only after dark.','If the passenger is travelling alone.'],
 'Disability Awareness': ['A passenger travelling with an assistance dog enters your licensed vehicle. What should you do?','Carry the passenger and assistance dog unless you hold a valid exemption certificate.','Refuse because animals are not allowed.','Charge an additional cleaning fee.','Ask them to use a larger vehicle.'],
 'Vehicle Conditions': ['Before starting work, what should a driver check about their vehicle?','That it is safe, clean, roadworthy and meets licence conditions.','Only that it has enough fuel.','That the radio works.','Nothing until a passenger complains.'],
 'Driver Responsibilities': ['What is the most professional way to deal with a licensing condition you do not understand?','Check the current official guidance or contact the licensing team for clarification.','Make up your own interpretation.','Ask a passenger to decide.','Ignore it until renewal.'],
 'Road & Passenger Safety': ['A passenger asks you to stop in an unsafe location. What should you do?','Explain the safety concern and stop at the nearest safe, lawful place.','Stop immediately wherever they ask.','Continue the journey without speaking.','Ask them to jump out at traffic lights.'],
 'Customer Care': ['A passenger is upset about a delay caused by traffic. What is the best response?','Acknowledge the frustration, remain polite and communicate clearly.','Argue that it is their fault.','End the journey at once.','Ignore them completely.'],
 'County Lines': ['Which sign may indicate someone is being exploited through county lines?','They seem controlled by others and are carrying multiple phones or unexplained cash.','They are reading a book.','They ask for a receipt.','They arrive early.'],
 'GDPR & Data Protection': ['How should you handle a passenger’s personal information?','Keep it secure and use it only for a legitimate work purpose.','Share it with friends for advice.','Post it on social media.','Keep it forever just in case.'],
 'Modern Slavery': ['What should you do if you suspect a passenger may be a victim of modern slavery?','Stay alert, avoid putting them at further risk, and report concerns through the appropriate channel.','Confront a possible controller aggressively.','Ignore the signs.','Ask for money to help.'],
 'Equality & Diversity': ['How should you provide service to passengers?','Fairly and respectfully, without discrimination.','Only to people like you.','Based on how much they tip.','Only if they are local.'],
 'Fares & Payments': ['How should a fare be agreed for a private hire journey?','Through the booking/operator arrangement before or as part of the booking.','After the passenger has arrived.','By guessing at the destination.','Only in cash.'],
 'Licensing & Badges': ['What should you do if your driver badge is lost?','Report it promptly and follow the Council’s replacement process.','Keep working without it indefinitely.','Borrow another driver’s badge.','Make a copy at home.'],
 'Lost Property': ['A passenger leaves a phone in your vehicle. What should you do?','Keep it safe and follow the proper lost-property process.','Sell it after one day.','Use it to contact their friends.','Throw it away.'],
 'Suicide Awareness': ['A passenger says they do not want to live. What is an appropriate immediate response?','Stay calm, listen without judgement and seek urgent help if there is immediate danger.','Tell them to cheer up.','Leave them alone in an unsafe place.','Promise not to tell anyone.'],
 'Health & Wellbeing': ['You feel too tired to drive safely. What should you do?','Stop working and rest before driving again.','Drink more caffeine and continue.','Speed up to finish earlier.','Ignore it.'],
 'Vehicle Inspections': ['Why are regular vehicle checks important?','They help identify safety issues before passengers are put at risk.','They make the car look expensive.','They are optional after a licence is issued.','They only matter in winter.'],
 'Smoking & Vaping': ['What is the appropriate rule for smoking or vaping in a licensed vehicle?','Do not allow it; maintain a smoke-free environment.','Allow it with the windows closed.','Allow only the driver to vape.','Allow it on very short trips.'],
 'Alcohol & Drugs': ['What is the safest rule about alcohol or drugs and driving?','Never drive if impaired; it puts passengers and others at risk.','Drive slowly if you feel affected.','Only avoid them on long shifts.','Ask passengers if you seem okay.'],
 'Complaints': ['A passenger wants to make a complaint. What should you do?','Remain courteous and explain the appropriate complaints route.','Argue until they give up.','Threaten to refuse future journeys.','Take their phone away.'],
 'Booking Records': ['Why are booking records important for private hire journeys?','They provide accountability and help confirm that a journey was properly booked.','They are only useful for advertising.','They replace a driving licence.','They let drivers share passenger details.'],
 'Local Knowledge': ['What should you do if you are unsure of the best route?','Use an appropriate navigation tool and communicate calmly with the passenger.','Pretend you know and drive at random.','Ask them to leave the vehicle.','Speed to make up time.'],
 'Professional Conduct': ['What does professional conduct include?','Being polite, reliable, presentable and respectful to every passenger.','Discussing private passenger details with friends.','Using offensive language when stressed.','Ignoring reasonable requests.'],
 'Accidents & Incidents': ['After a road traffic incident, what is your first priority?','Make the scene as safe as possible and check whether anyone needs emergency help.','Continue driving to finish the fare.','Debate who was at fault.','Leave without exchanging details.'],
 'Child Exploitation': ['A child appears frightened and is with an adult who controls all conversation. What should you do?','Observe, record factual concerns where appropriate and report through safeguarding channels.','Accuse the adult loudly.','Take photos and post them.','Do nothing because you are unsure.']
};

const bank=[];

topics.forEach(([topic,icon,count])=>{
  const t=qTemplates[topic];

  for(let n=0;n<count;n++){
    bank.push({
      id:`${topic}-${n+1}`,
      topic,
      icon,
      question:n?`${t[0]} (${n+1})`:t[0],
      options:t.slice(1),
      answer:0,
      explanation:t[1]
    });
  }
});

const store=JSON.parse(
  localStorage.getItem('wolves-progress') ||
  '{"done":0,"correct":0,"mistakes":[],"xp":0,"history":[]}'
);

function save(){
  localStorage.setItem('wolves-progress',JSON.stringify(store));
}

/*
  Fisher-Yates shuffle.
  This is better than sort(() => Math.random() - 0.5)
  because it gives every answer position a proper random chance.
*/
function shuffle(a){
  const copy=[...a];

  for(let i=copy.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));

    [copy[i],copy[j]]=[copy[j],copy[i]];
  }

  return copy;
}

/*
  Creates a fresh shuffled version of a question.

  The original correct answer is answer index 0.
  We attach "correct" to the actual answer text BEFORE
  shuffling, then find where that answer ended up.

  This means:
  - correct answer can be A
  - correct answer can be B
  - correct answer can be C
  - correct answer can be D
  - the same question can get a different position next time
*/
function shuffledQuestion(q){
  const options=q.options.map((text,index)=>({
    text,
    correct:index===q.answer
  }));

  const shuffled=shuffle(options);

  return {
    ...q,
    options:shuffled.map(option=>option.text),
    answer:shuffled.findIndex(option=>option.correct)
  };
}

let installPrompt = null;

function nav(){
  const canInstall=installPrompt&&!isStandalone();

  return `<nav class="nav"><button class="brand" onclick="home()">Wolves <span>PHV Prep</span></button><div class="nav-links"><button onclick="showTopics()">Study by topic</button><button onclick="showMistakes()">Mistakes</button><button onclick="showProgress()">My progress</button><button id="install-app" class="install-button" ${canInstall?'':'hidden'} onclick="installApp()">↓ Install app</button></div></nav>`;
}

function updateInstallButton(){
  const button=document.querySelector('#install-app');

  if(button){
    button.hidden=!installPrompt||isStandalone();
  }
}

function isStandalone(){
  return window.matchMedia('(display-mode: standalone)').matches ||
         window.navigator.standalone===true;
}

async function installApp(){
  if(!installPrompt)return;

  installPrompt.prompt();

  const choice=await installPrompt.userChoice;

  if(choice.outcome==='accepted'){
    installPrompt=null;
  }

  updateInstallButton();
}

function home(){
  document.querySelector('#app').innerHTML=`<div class="shell">${nav()}<section class="hero"><div><div class="eyebrow">Wolverhampton private hire</div><h1>Practise smart.<br>Drive confident.</h1><p>Prepare for your Wolverhampton Private Hire Driver Assessment with focused, confidence-building practice.</p><div class="cta"><button class="primary" onclick="startPractice()">🎯 Quick practice</button><button class="secondary" onclick="startMock()">📝 Start mock exam</button></div><p class="notice">Practice questions based on the published Wolverhampton PHV Driver Assessment syllabus. Not official Council exam questions.</p></div><div class="hero-art"><div class="eyebrow" style="color:#ffcf46">Your next mock</div><div class="mock-card"><span class="pill">PASS MARK 75%</span><h3>28-question mock</h3><div class="mock-lines"><i></i><i></i><i></div><div class="progress"><i style="width:68%"></i></div><p style="font-size:13px;color:#65718a">30 minutes · random questions</p><button class="primary" onclick="startMock()">Take it now →</button></div></div></section><section class="section"><div class="section-head"><div><h2>Choose your training</h2><p>Build confidence one question at a time.</p></div></div><div class="menu-grid"><button class="menu-card" onclick="startPractice()"><span class="icon">🎯</span><b>Quick Practice</b><small>Five random questions</small></button><button class="menu-card" onclick="startMock()"><span class="icon">📝</span><b>28-Question Mock</b><small>Timed, exam-style practice</small></button><button class="menu-card" onclick="showTopics()"><span class="icon">📚</span><b>Study by Topic</b><small>${bank.length} questions across ${topics.length} subjects</small></button><button class="menu-card" onclick="startKey()"><span class="icon">⭐</span><b>Key Questions</b><small>Safeguarding, plying & disability</small></button><button class="menu-card" onclick="showMistakes()"><span class="icon">❌</span><b>Mistake Review</b><small>${store.mistakes.length} to revisit</small></button><button class="menu-card" onclick="showProgress()"><span class="icon">📊</span><b>My Progress</b><small>See your readiness score</small></button></div></section><section class="section"><div class="stats"><div class="stat"><b>🔥 6</b><small>day streak</small></div><div class="stat"><b>${store.xp.toLocaleString()}</b><small>XP earned</small></div><div class="stat"><b>${store.done}</b><small>questions completed</small></div><div class="stat"><b>${store.done?Math.round(store.correct/store.done*100):'—'}%</b><small>overall accuracy</small></div></div></section></div>`;
}

function showTopics(){
  document.querySelector('#app').innerHTML=`<div class="shell">${nav()}<button class="back" onclick="home()">← Home</button><h1 class="screen-title">Study by topic</h1><p style="color:var(--muted);margin-top:-20px;margin-bottom:28px">Choose a subject area from the current published syllabus.</p><div class="topic-grid">${topics.map(([name,icon,n])=>`<button class="topic" onclick="startPractice('${name}')"><span>${icon}</span><strong>${name}</strong><small>${n} practice questions</small></button>`).join('')}</div></div>`;
}

let session={};

function startPractice(topic){
  let list=topic
    ? shuffle(bank.filter(q=>q.topic===topic)).slice(0,10)
    : shuffle(bank).slice(0,5);

  begin(list,'practice',topic||'Quick Practice');
}

function startKey(){
  const list=shuffle(
    bank.filter(q=>[
      'Safeguarding',
      'Plying for Hire',
      'Disability Awareness'
    ].includes(q.topic))
  ).slice(0,8);

  begin(list,'key','Key Questions');
}

function startMock(){
  let required=[
    'Safeguarding',
    'Safeguarding',
    'Safeguarding',
    'Plying for Hire',
    'Plying for Hire',
    'Plying for Hire',
    'Disability Awareness',
    'Disability Awareness'
  ];

  let list=required.map(t=>shuffle(bank.filter(q=>q.topic===t))[0]);

  list=list.concat(
    shuffle(
      bank.filter(q=>!required.includes(q.topic))
    ).slice(0,20)
  );

  begin(shuffle(list),'mock','Mock Exam');
}

function begin(list,mode,title){
  session={
    list,
    index:0,
    mode,
    title,
    answers:[],
    start:Date.now(),
    timer:null,
    currentQuestion:null
  };

  renderQuestion();

  if(mode==='mock'){
    session.timer=setInterval(renderTimer,1000);
  }
}

function renderTimer(){
  const el=document.querySelector('#timer');

  if(!el)return;

  const left=Math.max(
    0,
    1800-Math.floor((Date.now()-session.start)/1000)
  );

  el.textContent=`${String(Math.floor(left/60)).padStart(2,'0')}:${String(left%60).padStart(2,'0')}`;

  if(!left)finish();
}

function renderQuestion(){
  /*
    IMPORTANT:
    We create a NEW shuffled question every time this function runs.

    Therefore if the same question appears again later,
    its correct answer is shuffled again.
  */
  const original=session.list[session.index];
  const q=shuffledQuestion(original);

  session.currentQuestion=q;

  const isMock=session.mode==='mock';

  document.querySelector('#app').innerHTML=`<div class="shell">${nav()}<div class="question-wrap"><button class="back" onclick="home()">← Exit ${session.title}</button>${isMock?`<div class="exam-bar"><div class="progress"><i style="width:${session.index/session.list.length*100}%"></i></div><span class="timer" id="timer">30:00</span></div>`:''}<div class="question-top"><span>${q.icon} ${q.topic}</span><span>Question ${session.index+1} of ${session.list.length}</span></div><h1 class="question">${q.question}</h1><div class="answers">${q.options.map((o,i)=>`<button class="answer" onclick="answer(${i})"><span class="letter">${'ABCD'[i]}</span>${o}</button>`).join('')}</div><div id="feedback"></div></div></div>`;
}

function answer(selected){
  /*
    Use session.currentQuestion because THAT is the shuffled version
    currently being shown to the user.
  */
  const q=session.currentQuestion||session.list[session.index];

  const correct=selected===q.answer;

  document.querySelectorAll('.answer').forEach((e,i)=>{
    e.disabled=true;

    if(i===q.answer){
      e.classList.add('correct');
    }else if(i===selected){
      e.classList.add('wrong');
    }
  });

  session.answers.push({
    q,
    correct
  });

  store.done++;
  store.xp+=correct?10:2;

  if(correct){
    store.correct++;
  }else if(!store.mistakes.includes(q.id)){
    store.mistakes.push(q.id);
  }

  save();

  const box=document.querySelector('#feedback');

  if(session.mode==='mock'){
    box.innerHTML=`<div class="next-row"><button class="primary" onclick="next()">${session.index===session.list.length-1?'Finish exam':'Next question →'}</button></div>`;
  }else{
    box.innerHTML=`<div class="feedback ${correct?'':'bad'}"><b>${correct?'✅ Correct!':'❌ Not quite'}</b>${q.explanation}</div><div class="next-row"><button class="primary" onclick="next()">${session.index===session.list.length-1?'See results':'Next →'}</button></div>`;
  }
}

function next(){
  session.index++;

  if(session.index<session.list.length){
    renderQuestion();
  }else{
    finish();
  }
}

function finish(){
  if(session.timer){
    clearInterval(session.timer);
  }

  let score=session.answers.filter(x=>x.correct).length;
  let total=session.list.length;
  let percent=Math.round(score/total*100);

  if(session.mode==='mock'){
    store.history.unshift({
      score,
      total,
      date:new Date().toLocaleDateString()
    });
  }

  save();

  let by={};

  session.answers.forEach(({q,correct})=>{
    if(!by[q.topic]){
      by[q.topic]=[0,0];
    }

    by[q.topic][1]++;

    if(correct){
      by[q.topic][0]++;
    }
  });

  document.querySelector('#app').innerHTML=`<div class="shell">${nav()}<div class="result"><button class="back" onclick="home()">← Home</button><div class="result-score"><div class="eyebrow" style="color:#ffcf46">${session.title} complete</div><h2>${score} / ${total} — ${percent}% ${score/total>=.75?'✅':'❌'}</h2><p>${session.mode==='mock'?`Pass mark: 21 / 28 (75%)`:'Keep practising — you’re building the habits that matter.'}</p></div><table class="score-table"><thead><tr><th>Topic</th><th>Score</th></tr></thead><tbody>${Object.entries(by).map(([t,[a,b]])=>`<tr><td>${t}</td><td>${a}/${b}</td></tr>`).join('')}</tbody></table><div class="cta" style="margin-top:22px"><button class="primary" onclick="showTopics()">Revise these topics →</button><button class="secondary" onclick="startMock()">Another mock</button></div></div></div>`;
}

function showMistakes(){
  let list=bank.filter(q=>store.mistakes.includes(q.id));

  document.querySelector('#app').innerHTML=`<div class="shell">${nav()}<button class="back" onclick="home()">← Home</button><h1 class="screen-title">Things I need to revise</h1><p style="color:var(--muted);margin-top:-20px">Every incorrect answer is saved here for focused practice.</p><div class="section">${list.length?`<div class="stats" style="max-width:280px;margin-bottom:22px"><div class="stat"><b>${list.length}</b><small>mistakes to revisit</small></div></div><button class="primary" onclick="begin(shuffle(bank.filter(q=>store.mistakes.includes(q.id))),'practice','Mistake Review')">Start mistake practice →</button>`:`<div class="empty">🎯<br><br>No mistakes saved yet. Start practising and any wrong answers will appear here.</div>`}</div></div>`;
}

function showProgress(){
  let accuracy=store.done
    ? Math.round(store.correct/store.done*100)
    : 0;

  let mock=store.history[0];

  let ready=Math.round(
    (accuracy*.5)+
    (Math.min(store.done/80,1)*20)+
    (mock?mock.score/mock.total*30:0)
  );

  let status=ready>=90
    ?'🔥 Very strong'
    :ready>=75
      ?'🟢 Pass-ready'
      :ready>=60
        ?'🟠 Getting there'
        :'🟥 Not ready';

  document.querySelector('#app').innerHTML=`<div class="shell">${nav()}<button class="back" onclick="home()">← Home</button><h1 class="screen-title">My Progress</h1><div class="result-score" style="max-width:630px"><div class="eyebrow" style="color:#ffcf46">I’m cooked meter</div><h2>${ready}% — ${status}</h2><p>Based on your recent accuracy, completed practice and latest mock score.</p><div class="progress"><i style="width:${ready}%"></i></div></div><section class="section"><div class="stats"><div class="stat"><b>${store.done}</b><small>questions completed</small></div><div class="stat"><b>${accuracy}%</b><small>overall accuracy</small></div><div class="stat"><b>${store.mistakes.length}</b><small>in mistake bank</small></div><div class="stat"><b>${mock?`${mock.score}/${mock.total}`:'—'}</b><small>latest mock</small></div></div></section>${store.history.length?`<section class="section"><h2>Mock history</h2><table class="score-table"><tbody>${store.history.slice(0,5).map(x=>`<tr><td>${x.date}</td><td>${x.score}/${x.total} (${Math.round(x.score/x.total*100)}%)</td></tr>`).join('')}</tbody></table></section>`:''}</div>`;
}

window.addEventListener('beforeinstallprompt',(event)=>{
  event.preventDefault();
  installPrompt=event;
  updateInstallButton();
});

window.addEventListener('appinstalled',()=>{
  installPrompt=null;
  updateInstallButton();
});

if('serviceWorker' in navigator){
  window.addEventListener('load',()=>{
    const base=new URL('./',window.location.href);

    navigator.serviceWorker.register(
      new URL('sw.js',base),
      {scope:base.pathname}
    ).catch(()=>{});
  });
}

home();
