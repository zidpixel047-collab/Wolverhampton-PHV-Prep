/* =========================================================
   WOLVERHAMPTON PHV PREP
   100 UNIQUE PRACTICE QUESTIONS
   ========================================================= */

const topics = [
  ['Safeguarding','🛡️',8],
  ['Plying for Hire','🚕',8],
  ['Disability Awareness','♿',8],
  ['Vehicle Conditions','🚗',7],
  ['Driver Responsibilities','👤',7],
  ['Road & Passenger Safety','🛣️',7],
  ['Customer Care','🤝',6],
  ['County Lines','🔎',4],
  ['GDPR & Data Protection','🔐',4],
  ['Modern Slavery','🕊️',4],
  ['Equality & Diversity','🌍',4],
  ['Fares & Payments','💳',4],
  ['Licensing & Badges','🪪',4],
  ['Lost Property','🧳',3],
  ['Suicide Awareness','💬',3],
  ['Health & Wellbeing','💚',3],
  ['Vehicle Inspections','🔧',3],
  ['Smoking & Vaping','🚭',3],
  ['Alcohol & Drugs','⚠️',3],
  ['Complaints','📋',3],
  ['Booking Records','📖',3],
  ['Local Knowledge','📍',2],
  ['Professional Conduct','🤝',2],
  ['Accidents & Incidents','🚨',2],
  ['Child Exploitation','🧒',2]
];

/*
  q(
    topic,
    question,
    optionA,
    optionB,
    optionC,
    optionD,
    correctIndex,
    explanation
  )

  correctIndex is 0-3.
*/

const rawQuestions = [

/* =========================================================
   SAFEGUARDING — 8
   ========================================================= */

q(
'Safeguarding',
'A passenger who appears vulnerable tells you they are worried about getting home. What should you do?',
'Listen calmly and follow the appropriate safeguarding procedure.',
'Tell them you cannot get involved in personal matters.',
'Ask another passenger to decide what should happen.',
'Promise that you will keep everything they say completely secret.',
0,
'Drivers should take concerns seriously, avoid promising absolute confidentiality and use the appropriate reporting route.'
),

q(
'Safeguarding',
'Which approach is most appropriate when a safeguarding concern is disclosed?',
'Remain calm, listen and record relevant facts accurately.',
'Question the person repeatedly until every detail is known.',
'Confront anyone you think may be responsible.',
'Wait several weeks to see whether the situation improves.',
0,
'The driver should avoid investigating the matter themselves and should report concerns through the appropriate route.'
),

q(
'Safeguarding',
'Why can private hire drivers be important in safeguarding?',
'They may notice concerning behaviour or situations during journeys.',
'They are responsible for carrying out police investigations.',
'They are allowed to interview passengers formally.',
'They can decide whether someone has committed an offence.',
0,
'Drivers can act as the eyes and ears of safeguarding services by recognising and reporting concerns.'
),

q(
'Safeguarding',
'A passenger asks you not to tell anyone about a serious safeguarding concern. What should you remember?',
'You should not promise absolute confidentiality if someone may be at risk.',
'You must always agree to keep the information secret.',
'You should post the concern anonymously online.',
'You should ignore the concern unless another passenger confirms it.',
0,
'Safeguarding information may need to be shared through the correct professional route to protect someone.'
),

q(
'Safeguarding',
'You notice a passenger appears unusually frightened and another person is speaking for them throughout the journey. What is the best response?',
'Stay observant and report factual concerns through the proper safeguarding route.',
'Accuse the other person of a crime immediately.',
'Take photographs of both people and publish them online.',
'Refuse to complete the journey without explaining why.',
0,
'Drivers should observe, avoid unnecessary confrontation and report genuine concerns appropriately.'
),

q(
'Safeguarding',
'When making a safeguarding report, which information is most useful?',
'Clear factual observations, including relevant times, places and behaviour.',
'Your assumptions about what probably happened.',
'Rumours from other drivers.',
'An exaggerated description designed to get attention.',
0,
'Reports should distinguish factual observations from assumptions or speculation.'
),

q(
'Safeguarding',
'If you believe someone is in immediate danger during a journey, what should take priority?',
'Taking reasonable steps to protect safety and seeking appropriate emergency assistance.',
'Finishing the fare before doing anything.',
'Posting about the situation on social media.',
'Arguing with the person who appears responsible.',
0,
'Immediate safety takes priority over completing the commercial journey.'
),

q(
'Safeguarding',
'What should a driver avoid doing when dealing with a safeguarding concern?',
'Attempting to conduct their own investigation.',
'Listening carefully to what has been said.',
'Recording relevant factual information.',
'Using the correct reporting procedure.',
0,
'Drivers are not investigators. Their role is to recognise, respond appropriately and report concerns.'
),


/* =========================================================
   PLYING FOR HIRE — 8
   ========================================================= */

q(
'Plying for Hire',
'How must a private hire journey normally be obtained?',
'It must be booked through a licensed private hire operator.',
'A passenger must flag the vehicle down in the street.',
'The driver may accept anyone who offers the correct fare.',
'The passenger may simply enter the vehicle without a booking.',
0,
'Private hire vehicles must be pre-booked and cannot normally be hailed in the street.'
),

q(
'Plying for Hire',
'A person approaches your private hire vehicle at the roadside and asks for a journey. What should you do?',
'Explain that the journey must be booked through the appropriate operator.',
'Accept the passenger because they approached you first.',
'Accept them if they agree to pay cash.',
'Only accept them if the journey is less than ten minutes.',
0,
'Private hire vehicles cannot be hailed like taxis.'
),

q(
'Plying for Hire',
'What is the main difference between a private hire vehicle and a taxi in relation to obtaining passengers?',
'A private hire vehicle must be pre-booked, whereas a taxi may be hailed where permitted.',
'Private hire vehicles can only carry one passenger.',
'Taxis cannot carry passengers from ranks.',
'Private hire vehicles are never required to be licensed.',
0,
'The Council explains that private hire vehicles must always be pre-booked, while taxis can be flagged down or hired at ranks.'
),

q(
'Plying for Hire',
'You finish a pre-booked journey and someone nearby asks you to take them somewhere else without making a booking. What is the safest licensing response?',
'Do not accept the new journey unless it is properly booked.',
'Accept it if the passenger offers more money.',
'Accept it if the destination is nearby.',
'Accept it as long as the passenger sits in the back.',
0,
'A new private hire journey must be properly booked rather than being accepted as a street hail.'
),

q(
'Plying for Hire',
'Why is illegally plying for hire a serious issue?',
'It can result in passengers travelling without the protections associated with a properly booked journey.',
'It only affects how much fuel the vehicle uses.',
'It is only a problem if the passenger complains.',
'It has no effect on licensing.',
0,
'The Council notes that plying-for-hire offences can also involve insurance issues and passenger safety.'
),

q(
'Plying for Hire',
'You are waiting outside a busy venue hoping someone will ask for a journey. What should you remember?',
'Waiting for passengers in a way that amounts to plying for hire can breach private hire restrictions.',
'It is always acceptable if the vehicle is displaying its plate.',
'It becomes legal if the driver leaves the engine running.',
'It is permitted whenever the venue is busy.',
0,
'Having a licensed vehicle does not give a private hire driver permission to accept street hails.'
),

q(
'Plying for Hire',
'Which passenger request would normally require a new booking?',
'A person who was not part of the original booking asks for a separate journey.',
'A passenger continues to their booked destination.',
'A passenger asks for the radio volume to be changed.',
'A passenger asks for the heating to be adjusted.',
0,
'A separate journey should be properly booked rather than treated as an informal street hire.'
),

q(
'Plying for Hire',
'What should a private hire driver do if they are uncertain whether a proposed journey has been correctly booked?',
'Check with the operator before accepting the journey.',
'Accept it and sort out the booking later.',
'Ask another passenger to confirm it.',
'Take the journey only if cash is offered.',
0,
'If the booking status is unclear, the driver should confirm it through the operator rather than guessing.'
),


/* =========================================================
   DISABILITY AWARENESS — 8
   ========================================================= */

q(
'Disability Awareness',
'What should a driver do when carrying a passenger with an assistance dog?',
'Carry the passenger and assistance dog unless a valid exemption applies.',
'Refuse because animals are not normally allowed in vehicles.',
'Charge an additional animal fee.',
'Ask the passenger to leave the dog at home.',
0,
'Licensed drivers have duties concerning assistance dogs unless a valid exemption applies.'
),

q(
'Disability Awareness',
'Which statement best describes the duties relating to wheelchair users where the relevant legal requirements apply?',
'The passenger should not be refused or charged extra because they use a wheelchair.',
'The driver may refuse if the wheelchair is inconvenient.',
'The driver can charge an additional accessibility fee.',
'The passenger must always transfer out of their wheelchair.',
0,
'The Council states that relevant drivers must carry wheelchair users and cannot charge them an extra fare.'
),

q(
'Disability Awareness',
'If a wheelchair user wants to remain in their wheelchair during a journey, what should the driver do?',
'Provide the required reasonable assistance and ensure the passenger is safe and comfortable.',
'Insist that they transfer to a normal seat.',
'Refuse the journey because the wheelchair remains occupied.',
'Ask another passenger to handle the wheelchair.',
0,
'Relevant duties include enabling the passenger to enter and leave while remaining in the wheelchair where appropriate.'
),

q(
'Disability Awareness',
'What is an example of reasonable mobility assistance?',
'Helping with getting into or out of the vehicle when appropriate.',
'Deciding where the passenger should sit without asking.',
'Moving the passenger without explanation.',
'Refusing to handle luggage in every circumstance.',
0,
'Reasonable assistance can include helping a disabled passenger get into or out of the vehicle.'
),

q(
'Disability Awareness',
'Can a driver charge a wheelchair user an extra fare simply because they use a wheelchair?',
'No, where the applicable legal duty applies.',
'Yes, whenever loading takes longer.',
'Yes, but only for short journeys.',
'Yes, if the driver asks before departure.',
0,
'The Council states that wheelchair users cannot be charged an extra fare under the relevant duty.'
),

q(
'Disability Awareness',
'What is the best way to communicate with a disabled passenger?',
'Speak directly to the passenger and ask what assistance they need.',
'Speak only to whoever is accompanying them.',
'Assume what assistance they require.',
'Avoid speaking to them to prevent embarrassment.',
0,
'Good customer care means treating passengers respectfully and asking rather than making assumptions.'
),

q(
'Disability Awareness',
'A passenger has a disability but does not ask for assistance. What should you do?',
'Offer appropriate help without assuming they need a particular type of assistance.',
'Immediately take control of their belongings.',
'Ignore them completely.',
'Tell them which parts of the vehicle they are allowed to use.',
0,
'Drivers should be respectful and supportive while allowing passengers to communicate their needs.'
),

q(
'Disability Awareness',
'Why is disability awareness important for a private hire driver?',
'Drivers have legal duties and should provide an accessible, respectful service.',
'It only matters when a passenger makes a complaint.',
'It replaces the need for vehicle safety checks.',
'It applies only to wheelchair-accessible vehicles.',
0,
'Disability awareness forms part of the published private hire assessment and legal responsibilities.'
),


/* =========================================================
   VEHICLE CONDITIONS — 7
   ========================================================= */

q(
'Vehicle Conditions',
'Before starting work, what should a driver check?',
'That the vehicle is safe, roadworthy and meets its licensing requirements.',
'Only that there is enough fuel.',
'Only that the exterior is clean.',
'Only that the lights inside the vehicle work.',
0,
'Drivers must ensure the vehicle is safe and compliant before working.'
),

q(
'Vehicle Conditions',
'What should you do if a safety-critical defect is discovered during a check?',
'Do not continue operating the vehicle until the defect is dealt with appropriately.',
'Ignore it if the vehicle can still move.',
'Ask the passenger whether they think it is serious.',
'Drive faster to finish the shift sooner.',
0,
'A safety-critical defect can put passengers and other road users at risk.'
),

q(
'Vehicle Conditions',
'Why is vehicle cleanliness important in private hire work?',
'It contributes to passenger comfort, hygiene and professional standards.',
'It determines the vehicle's fuel consumption.',
'It replaces mechanical inspections.',
'It allows the driver to ignore licensing conditions.',
0,
'Cleanliness is part of providing a professional and suitable service.'
),

q(
'Vehicle Conditions',
'What should you do if a warning light indicates a potentially serious vehicle fault?',
'Assess the issue appropriately and avoid operating the vehicle if it is unsafe.',
'Cover the warning light so passengers cannot see it.',
'Ignore it until the next licence renewal.',
'Continue driving because warning lights are always harmless.',
0,
'Potentially serious faults should never be ignored simply to complete work.'
),

q(
'Vehicle Conditions',
'Why should tyres be checked before driving?',
'Their condition and inflation can affect braking, handling and safety.',
'They determine whether the radio works.',
'They control the passenger's destination.',
'They are only relevant during winter.',
0,
'Tyres are an important part of vehicle safety.'
),

q(
'Vehicle Conditions',
'What should a driver do if a vehicle is no longer safe to operate?',
'Stop using it for passenger work until it is made safe.',
'Continue until the end of the working week.',
'Only tell the next passenger.',
'Drive more slowly and ignore the problem.',
0,
'Passenger and road-user safety comes before completing a shift.'
),

q(
'Vehicle Conditions',
'What is the purpose of a daily vehicle walkaround check?',
'To identify safety or compliance issues before starting work.',
'To calculate the daily fare total.',
'To replace the vehicle licence.',
'To determine which passengers can be carried.',
0,
'Wolverhampton licence conditions require drivers to undertake a daily walkaround check before commencing work.'
),


/* =========================================================
   DRIVER RESPONSIBILITIES — 7
   ========================================================= */

q(
'Driver Responsibilities',
'If you are unsure about a licensing condition, what should you do?',
'Check the current official guidance or ask the appropriate licensing authority.',
'Make your own interpretation.',
'Ignore the condition unless someone complains.',
'Ask a passenger to decide.',
0,
'Drivers should use reliable official information rather than guessing.'
),

q(
'Driver Responsibilities',
'What does being a professional licensed driver involve?',
'Following licensing requirements while providing a safe and respectful service.',
'Doing whatever is fastest during busy periods.',
'Following rules only when officers are nearby.',
'Putting passenger requests above every safety requirement.',
0,
'Professional drivers must balance good service with legal and safety responsibilities.'
),

q(
'Driver Responsibilities',
'What should you do if your personal circumstances may affect your ability to drive safely?',
'Take appropriate action and avoid driving if you are not fit to do so.',
'Hide the issue from everyone.',
'Drive more slowly but continue regardless.',
'Ask passengers to supervise you.',
0,
'Fitness to drive is a fundamental safety responsibility.'
),

q(
'Driver Responsibilities',
'Why should a driver keep up to date with licensing requirements?',
'Rules and conditions can change and drivers are responsible for complying with them.',
'Only new drivers need to know the rules.',
'The operator automatically accepts responsibility for every driver decision.',
'Licensing rules only matter during the application.',
0,
'Drivers need to remain aware of current requirements.'
),

q(
'Driver Responsibilities',
'If an authorised officer asks for information relevant to licensing compliance, what should a driver do?',
'Cooperate appropriately and provide the information required by law or licensing conditions.',
'Refuse every request automatically.',
'Delete the relevant information.',
'Ask passengers to answer instead.',
0,
'Drivers should cooperate with lawful licensing and enforcement processes.'
),

q(
'Driver Responsibilities',
'What should a driver do if their licence or required documentation is no longer valid?',
'Stop undertaking work that requires it and follow the appropriate renewal or replacement process.',
'Continue until someone notices.',
'Borrow another driver's documents.',
'Change the expiry date themselves.',
0,
'Drivers must only work when properly licensed and documented.'
),

q(
'Driver Responsibilities',
'Why is it important for drivers to follow licensing conditions even when passengers request otherwise?',
'Passenger requests do not override legal or licensing requirements.',
'A passenger can authorise any licensing breach.',
'The driver is exempt from rules during busy periods.',
'Rules only apply to journeys lasting more than an hour.',
0,
'Drivers remain responsible for complying with the conditions of their licence.'
),


/* =========================================================
   ROAD & PASSENGER SAFETY — 7
   ========================================================= */

q(
'Road & Passenger Safety',
'A passenger asks you to stop somewhere that is unsafe. What should you do?',
'Explain the concern and stop at the nearest safe and lawful location.',
'Stop immediately regardless of the danger.',
'Tell them to leave while the vehicle is moving slowly.',
'Ignore them completely.',
0,
'Drivers should provide safe passenger drop-off points.'
),

q(
'Road & Passenger Safety',
'What should you do if a passenger is not wearing a seat belt where one is required?',
'Remind them appropriately and encourage compliance with the law.',
'Accelerate to make them put it on.',
'Ignore the issue every time.',
'Refuse to speak to them.',
0,
'Seat belts are an important part of passenger safety.'
),

q(
'Road & Passenger Safety',
'Why should a driver avoid unnecessary distractions while driving?',
'Distractions can reduce attention and increase collision risk.',
'They only affect fuel consumption.',
'They only matter during motorway journeys.',
'Passengers are responsible for watching the road.',
0,
'Drivers need to maintain attention throughout the journey.'
),

q(
'Road & Passenger Safety',
'A passenger asks you to use your phone while the vehicle is moving. What should you do?',
'Do not use it in a way that distracts from safe driving.',
'Use it quickly while travelling slowly.',
'Let the passenger hold the steering wheel.',
'Use it whenever traffic is stopped temporarily.',
0,
'Safe driving requires attention to the road and compliance with phone-use laws.'
),

q(
'Road & Passenger Safety',
'What is the safest approach when driving in poor weather?',
'Adjust speed and driving style to the conditions.',
'Maintain the same speed regardless of visibility.',
'Drive close to the vehicle ahead for shelter.',
'Use hazard lights continuously while moving.',
0,
'Drivers should adapt their driving to road, weather and visibility conditions.'
),

q(
'Road & Passenger Safety',
'A passenger is behaving in a way that distracts you from driving. What should you do?',
'Calmly explain that you need to concentrate on driving safely.',
'Argue with them while driving.',
'Turn around to face them.',
'Stop in the middle of the road.',
0,
'The driver must maintain attention and can set reasonable boundaries.'
),

q(
'Road & Passenger Safety',
'What is the safest reason to choose a particular stopping location?',
'It allows passengers to leave safely without creating unnecessary danger to other road users.',
'It is closest to the passenger's exact door regardless of traffic.',
'It is the quickest place for the driver to stop.',
'It has the fewest pedestrians, regardless of road conditions.',
0,
'Passenger convenience should not override safe and lawful stopping.'
),


/* =========================================================
   CUSTOMER CARE — 6
   ========================================================= */

q(
'Customer Care',
'A passenger is unhappy because traffic has delayed the journey. What is the best response?',
'Remain calm, acknowledge their frustration and communicate clearly.',
'Argue that the delay is entirely their fault.',
'Ignore them until the journey ends.',
'Threaten to end the journey immediately.',
0,
'Professional communication can help manage difficult situations.'
),

q(
'Customer Care',
'What is a good example of professional customer service?',
'Being polite, reliable and respectful while keeping appropriate boundaries.',
'Discussing previous passengers with customers.',
'Arguing whenever a passenger disagrees.',
'Making promises that cannot be kept.',
0,
'Professional service includes respectful communication and appropriate conduct.'
),

q(
'Customer Care',
'A passenger gives you an address that is difficult to understand. What should you do?',
'Politely clarify the destination before continuing.',
'Guess the destination.',
'Drive somewhere nearby and ask later.',
'Refuse the journey immediately.',
0,
'Clarifying information reduces mistakes and helps provide a safe service.'
),

q(
'Customer Care',
'How should a driver respond to a reasonable passenger request?',
'Consider it politely while still following safety and licensing requirements.',
'Automatically refuse every request.',
'Agree even if it would break a licensing condition.',
'Ignore the passenger until they stop asking.',
0,
'Good customer care does not override legal or safety requirements.'
),

q(
'Customer Care',
'A passenger becomes verbally frustrated. What is the most professional response?',
'Remain calm and avoid unnecessarily escalating the situation.',
'Respond with stronger language.',
'Threaten the passenger immediately.',
'Drive aggressively to end the journey faster.',
0,
'Staying calm can prevent a difficult interaction from escalating.'
),

q(
'Customer Care',
'Why should a driver avoid discussing another passenger's private circumstances?',
'It could breach confidentiality and undermine trust.',
'It makes journeys take longer.',
'Passengers may ask too many questions.',
'It affects fuel consumption.',
0,
'Passenger information should be handled respectfully and securely.'
),


/* =========================================================
   COUNTY LINES — 4
   ========================================================= */

q(
'County Lines',
'Which situation could be a warning sign of county lines exploitation?',
'A person appears controlled by others and seems unusually fearful or secretive.',
'A passenger asks for directions.',
'A passenger pays by card.',
'A passenger requests a receipt.',
0,
'Exploitation can involve control, fear, coercion and unusual travel patterns.'
),

q(
'County Lines',
'Why might a taxi or private hire driver notice county lines exploitation?',
'Drivers may observe passengers and journeys that others do not see.',
'Drivers have special police powers.',
'Drivers can search passengers legally whenever they want.',
'Drivers are responsible for deciding criminal charges.',
0,
'Drivers may encounter situations that raise safeguarding concerns.'
),

q(
'County Lines',
'What should a driver do if they have concerns about possible exploitation?',
'Record relevant factual observations and report the concern through the appropriate route.',
'Confront suspected offenders alone.',
'Publish details online.',
'Ignore it unless the passenger asks for help.',
0,
'Drivers should report concerns rather than attempting their own investigation.'
),

q(
'County Lines',
'Which behaviour could increase a driver's safeguarding concern?',
'A passenger appears frightened while another person controls the interaction.',
'A passenger asks for a quieter journey.',
'A passenger checks the time.',
'A passenger asks for a receipt.',
0,
'Controlling behaviour and fear can be indicators requiring attention.'
),


/* =========================================================
   GDPR — 4
   ========================================================= */

q(
'GDPR & Data Protection',
'How should passenger personal information be handled?',
'Keep it secure and use it only for a legitimate purpose.',
'Share it with friends if they are curious.',
'Post it online after removing the passenger's first name.',
'Keep every detail forever without a reason.',
0,
'Personal information should be handled lawfully, securely and only for appropriate purposes.'
),

q(
'GDPR & Data Protection',
'A passenger gives you personal information for their booking. What should you do?',
'Handle it securely and only use it for the relevant purpose.',
'Send it to another driver for entertainment.',
'Save it permanently on a public device.',
'Share it in a group chat.',
0,
'Personal data should be protected from inappropriate access or disclosure.'
),

q(
'GDPR & Data Protection',
'Why should a driver avoid discussing passenger information publicly?',
'Personal information may be confidential and protected by data protection rules.',
'Passengers always dislike conversation.',
'It makes journeys slower.',
'It affects vehicle licensing.',
0,
'Personal information must be handled responsibly.'
),

q(
'GDPR & Data Protection',
'What is a sensible approach to storing passenger information?',
'Keep only what is needed and protect it from unauthorised access.',
'Store everything indefinitely.',
'Leave records where anyone can see them.',
'Copy information onto personal social media accounts.',
0,
'Good data handling includes security, purpose limitation and avoiding unnecessary retention.'
),


/* =========================================================
   MODERN SLAVERY — 4
   ========================================================= */

q(
'Modern Slavery',
'What should you do if you suspect a passenger may be a victim of modern slavery?',
'Stay alert, avoid increasing their risk and report concerns appropriately.',
'Confront the suspected controller yourself.',
'Offer money in exchange for information.',
'Ignore the situation because it is private.',
0,
'Drivers should not put themselves or the passenger at additional risk.'
),

q(
'Modern Slavery',
'Which may be a warning sign of exploitation?',
'A person appears controlled, frightened or unable to speak freely.',
'A passenger asks for directions.',
'A passenger has luggage.',
'A passenger asks for a receipt.',
0,
'Control and fear can be warning signs of exploitation.'
),

q(
'Modern Slavery',
'Why should a driver avoid confronting a suspected exploiter?',
'Confrontation could increase the risk to the passenger or driver.',
'Drivers are never allowed to speak to passengers.',
'It would automatically cancel the driver's licence.',
'It would make the journey more expensive.',
0,
'Safety should be considered before taking action.'
),

q(
'Modern Slavery',
'What is the driver's role when noticing possible modern slavery?',
'Recognise warning signs and report concerns through the appropriate channels.',
'Conduct an investigation.',
'Decide whether the person is guilty.',
'Publish the passenger's identity.',
0,
'Drivers can help by recognising concerns and reporting them appropriately.'
),


/* =========================================================
   EQUALITY & DIVERSITY — 4
   ========================================================= */

q(
'Equality & Diversity',
'How should a private hire driver treat passengers?',
'Fairly and respectfully without unlawful discrimination.',
'Differently depending on their background.',
'According to how much they are likely to tip.',
'Only according to whether they agree with the driver.',
0,
'Passengers should receive a fair and respectful service.'
),

q(
'Equality & Diversity',
'What is discrimination?',
'Treating someone unfairly because of a protected characteristic or other unlawful reason.',
'Helping a passenger with luggage.',
'Charging the agreed fare.',
'Checking a booking.',
0,
'Equality law protects people from discrimination relating to protected characteristics.'
),

q(
'Equality & Diversity',
'What should a driver do if a passenger has a different background or belief?',
'Provide the same professional standard of service.',
'Ask them to explain their beliefs before starting.',
'Refuse the journey.',
'Charge them a different fare.',
0,
'Professional service should not depend on a passenger's background or beliefs.'
),

q(
'Equality & Diversity',
'Why is respectful communication important?',
'It helps ensure passengers are treated fairly and professionally.',
'It means drivers must agree with every passenger.',
'It removes all licensing requirements.',
'It means passengers can ignore safety rules.',
0,
'Respectful communication is an important part of equality and customer care.'
),


/* =========================================================
   FARES & PAYMENTS — 4
   ========================================================= */

q(
'Fares & Payments',
'How should a private hire fare normally be established?',
'Through the booking or operator arrangement applying to the journey.',
'By guessing after reaching the destination.',
'By asking another passenger.',
'By choosing any amount after the journey.',
0,
'Private hire journeys operate through a booking arrangement.'
),

q(
'Fares & Payments',
'A passenger disputes the fare. What is the best response?',
'Remain polite and explain the appropriate process for resolving the dispute.',
'Threaten the passenger.',
'Change the fare without explanation.',
'Refuse to provide any information.',
0,
'Professional handling of disputes reduces conflict.'
),

q(
'Fares & Payments',
'Why is it important to provide clear information about a journey's payment arrangements?',
'It helps avoid misunderstandings between the passenger and operator.',
'It allows the driver to ignore licensing conditions.',
'It guarantees every passenger will tip.',
'It removes the need for bookings.',
0,
'Clear arrangements help prevent disputes.'
),

q(
'Fares & Payments',
'A passenger asks to pay in a way that conflicts with the operator's agreed arrangements. What should you do?',
'Follow the applicable booking and operator payment arrangements.',
'Invent a new payment method.',
'Accept anything without recording it.',
'Cancel every future booking.',
0,
'Drivers should follow the arrangements governing the journey.'
),


/* =========================================================
   LICENSING & BADGES — 4
   ========================================================= */

q(
'Licensing & Badges',
'What should you do if your driver badge is lost?',
'Report it promptly and follow the required replacement process.',
'Borrow another driver's badge.',
'Continue indefinitely without reporting it.',
'Print your own replacement.',
0,
'Lost badges should be reported and replaced through the proper process.'
),

q(
'Licensing & Badges',
'Why is a driver badge important?',
'It helps identify the licensed driver and forms part of the licensing requirements.',
'It replaces vehicle insurance.',
'It allows street hailing by private hire vehicles.',
'It guarantees a passenger can avoid paying.',
0,
'Licensing identification is part of the regulatory system.'
),

q(
'Licensing & Badges',
'What should you do if a licensing document expires?',
'Follow the appropriate renewal process before continuing work that requires it.',
'Change the expiry date yourself.',
'Use another driver's document.',
'Ignore the expiry date.',
0,
'Drivers must keep required licensing documentation valid.'
),

q(
'Licensing & Badges',
'Why should a driver never lend their badge to another person?',
'It could misrepresent who is licensed to drive and undermine licensing controls.',
'It makes the vehicle slower.',
'It changes the fare.',
'It prevents passengers from using seat belts.',
0,
'Licensing identification must correspond to the correct driver.'
),


/* =========================================================
   LOST PROPERTY — 3
   ========================================================= */

q(
'Lost Property',
'A passenger leaves a phone in your vehicle. What should you do?',
'Keep it secure and follow the appropriate lost-property procedure.',
'Use it to contact their friends without permission.',
'Sell it after the shift.',
'Throw it away.',
0,
'Lost property should be protected and dealt with through the proper process.'
),

q(
'Lost Property',
'Why should you avoid using a passenger's lost phone?',
'It is someone else's property and may contain private information.',
'Phones cannot be used in vehicles.',
'It automatically changes the vehicle licence.',
'It prevents the next booking.',
0,
'Lost property should not be used or accessed unnecessarily.'
),

q(
'Lost Property',
'A passenger contacts you about an item they left behind. What should you do?',
'Follow the proper procedure for returning or recording the property.',
'Demand an unrelated payment before considering it.',
'Post the item publicly with their details.',
'Keep it because it was left in the vehicle.',
0,
'Lost property should be handled fairly and according to the relevant procedure.'
),


/* =========================================================
   SUICIDE AWARENESS — 3
   ========================================================= */

q(
'Suicide Awareness',
'A passenger says they are struggling and may not be safe. What is an appropriate response?',
'Stay calm, listen without judgement and seek appropriate urgent help where necessary.',
'Tell them to stop talking about it.',
'Promise that nobody will ever be told.',
'Ignore the comment completely.',
0,
'The appropriate response is calm, supportive and focused on safety.'
),

q(
'Suicide Awareness',
'What should a driver avoid when responding to a passenger expressing serious emotional distress?',
'Making promises of absolute secrecy.',
'Listening calmly.',
'Taking the concern seriously.',
'Seeking appropriate help when necessary.',
0,
'Drivers should not promise confidentiality when immediate safety may be involved.'
),

q(
'Suicide Awareness',
'If a passenger appears to be in immediate danger, what should take priority?',
'Getting appropriate urgent assistance while keeping the situation as safe as possible.',
'Finishing the journey before acting.',
'Arguing with the passenger.',
'Posting the situation online.',
0,
'Immediate safety should take priority.'
),


/* =========================================================
   HEALTH & WELLBEING — 3
   ========================================================= */

q(
'Health & Wellbeing',
'You feel too tired to drive safely. What should you do?',
'Stop working and rest before driving again.',
'Drink caffeine and continue regardless.',
'Drive faster to finish sooner.',
'Ignore the symptoms.',
0,
'Fatigue can impair driving and should be taken seriously.'
),

q(
'Health & Wellbeing',
'Why is adequate rest important for a professional driver?',
'Fatigue can reduce concentration, reaction time and judgement.',
'It guarantees there will be no traffic.',
'It eliminates all vehicle faults.',
'It allows passengers to choose the driver's route.',
0,
'Rest supports safe driving performance.'
),

q(
'Health & Wellbeing',
'If you become unwell while driving, what should you consider?',
'Whether you can continue safely and, if not, stop somewhere safe.',
'Whether the passenger will give you a good review.',
'Whether you can increase your speed.',
'Whether you can hide the symptoms.',
0,
'Fitness to drive should always be prioritised.'
),


/* =========================================================
   VEHICLE INSPECTIONS — 3
   ========================================================= */

q(
'Vehicle Inspections',
'Why are regular vehicle inspections important?',
'They help identify safety and compliance problems.',
'They guarantee a vehicle will never break down.',
'They replace insurance.',
'They determine passenger fares.',
0,
'Inspections help identify problems before they become more serious.'
),

q(
'Vehicle Inspections',
'What should a driver do if an inspection identifies a serious safety issue?',
'Follow the appropriate procedure and do not carry passengers in an unsafe vehicle.',
'Ignore the result if the vehicle still starts.',
'Ask the passenger to accept the risk.',
'Hide the defect before the next inspection.',
0,
'Unsafe vehicles should not be used for passenger work.'
),

q(
'Vehicle Inspections',
'What is the purpose of checking lights before work?',
'To identify faults that could affect visibility or communication with other road users.',
'To improve the vehicle's music system.',
'To calculate the fare.',
'To determine the passenger's destination.',
0,
'Vehicle lighting is an important safety feature.'
),


/* =========================================================
   SMOKING & VAPING — 3
   ========================================================= */

q(
'Smoking & Vaping',
'What is the appropriate approach to smoking in a licensed vehicle?',
'Maintain a smoke-free environment.',
'Allow smoking when the windows are open.',
'Allow it on journeys under ten minutes.',
'Allow passengers to smoke if they pay extra.',
0,
'Smoking is prohibited in vehicles used as workplaces and public transport.'
),

q(
'Smoking & Vaping',
'What should a driver do if a passenger asks to vape inside the vehicle?',
'Explain that vaping is not permitted in the vehicle.',
'Allow it if the passenger sits in the rear.',
'Allow it when travelling outside the city.',
'Ask another passenger to approve it.',
0,
'The vehicle should remain smoke-free and drivers should apply the relevant restrictions consistently.'
),

q(
'Smoking & Vaping',
'Why should a driver maintain a smoke-free vehicle?',
'It protects passengers and supports legal and professional requirements.',
'It increases the vehicle's engine power.',
'It guarantees higher fares.',
'It makes navigation easier.',
0,
'Smoke-free vehicles provide a safer and more appropriate environment for passengers.'
),


/* =========================================================
   ALCOHOL & DRUGS — 3
   ========================================================= */

q(
'Alcohol & Drugs',
'What is the safest rule regarding alcohol and driving?',
'Never drive when impaired by alcohol.',
'Drive slowly if you have been drinking.',
'Only avoid alcohol on long journeys.',
'Ask passengers whether you seem safe.',
0,
'Impairment can seriously affect driving and puts others at risk.'
),

q(
'Alcohol & Drugs',
'What should a driver do if medication may affect their ability to drive?',
'Check the relevant medical advice and do not drive if they are not fit to do so.',
'Ignore the warning because prescribed medication is always safe for driving.',
'Take an extra dose before driving.',
'Ask a passenger to monitor them.',
0,
'Some medicines can affect fitness to drive, so appropriate medical advice should be followed.'
),

q(
'Alcohol & Drugs',
'Why is driving while impaired especially serious for a professional driver?',
'Passengers and other road users depend on the driver to operate safely.',
'It only affects the driver's insurance price.',
'Passengers can legally take control of the vehicle.',
'It only matters if the journey crosses a county boundary.',
0,
'Professional drivers have a responsibility to protect passengers and other road users.'
),


/* =========================================================
   COMPLAINTS — 3
   ========================================================= */

q(
'Complaints',
'A passenger wants to make a complaint about their journey. What should you do?',
'Remain courteous and explain the appropriate complaints route.',
'Argue until they withdraw the complaint.',
'Threaten to refuse future journeys.',
'Take their phone away.',
0,
'Passengers should be able to raise concerns through the appropriate process.'
),

q(
'Complaints',
'Why should a driver remain calm during a complaint?',
'It helps prevent the situation from escalating and allows the issue to be dealt with professionally.',
'It means the driver automatically wins the dispute.',
'It removes the need for records.',
'It prevents the passenger contacting the Council.',
0,
'Calm communication supports professional complaint handling.'
),

q(
'Complaints',
'If a complaint concerns a licensing matter outside your authority to resolve, what should you do?',
'Direct the passenger towards the appropriate operator or licensing complaints process.',
'Destroy any related records.',
'Promise the complaint will definitely be rejected.',
'Ask another passenger to investigate.',
0,
'Complaints should be directed to the correct channel rather than ignored or mishandled.'
),


/* =========================================================
   BOOKING RECORDS — 3
   ========================================================= */

q(
'Booking Records',
'Why are booking records important?',
'They provide evidence that a private hire journey was properly booked.',
'They replace the driver's licence.',
'They are only used for advertising.',
'They allow passenger information to be shared publicly.',
0,
'Booking records support accountability and demonstrate the proper booking of journeys.'
),

q(
'Booking Records',
'What should a driver do if there appears to be a problem with the booking details?',
'Check the information with the operator before proceeding where necessary.',
'Invent missing details.',
'Ignore the issue because the passenger is already waiting.',
'Delete the booking.',
0,
'Accurate booking information helps ensure the journey is properly authorised.'
),

q(
'Booking Records',
'Why should booking information be protected?',
'It may contain personal information about passengers and journeys.',
'It determines tyre pressure.',
'It controls traffic lights.',
'It replaces vehicle inspections.',
0,
'Booking records can contain personal data and should be handled securely.'
),


/* =========================================================
   LOCAL KNOWLEDGE — 2
   ========================================================= */

q(
'Local Knowledge',
'If you are unsure of the best route to a destination, what should you do?',
'Use an appropriate navigation tool and communicate clearly with the passenger.',
'Pretend you know the route.',
'Drive randomly until you recognise somewhere.',
'Ask the passenger to leave the vehicle.',
0,
'Navigation tools can assist drivers, while clear communication keeps the passenger informed.'
),

q(
'Local Knowledge',
'Why is knowing the local road network useful to a private hire driver?',
'It can help with efficient routing and informed decisions during journeys.',
'It removes the need to obey road signs.',
'It allows drivers to ignore navigation information.',
'It guarantees there will be no delays.',
0,
'Local knowledge can improve journey planning without replacing legal road requirements.'
),


/* =========================================================
   PROFESSIONAL CONDUCT — 2
   ========================================================= */

q(
'Professional Conduct',
'Which behaviour best demonstrates professional conduct?',
'Being polite, reliable, respectful and appropriately presented.',
'Discussing passengers with friends.',
'Using offensive language when annoyed.',
'Ignoring reasonable concerns.',
0,
'Professional conduct is an important part of maintaining passenger confidence.'
),

q(
'Professional Conduct',
'Why should a driver maintain appropriate boundaries with passengers?',
'It helps protect both the passenger and driver and keeps the relationship professional.',
'It prevents passengers from asking questions.',
'It means the driver cannot speak to passengers.',
'It removes all customer service responsibilities.',
0,
'Professional boundaries support safety, respect and appropriate conduct.'
),


/* =========================================================
   ACCIDENTS & INCIDENTS — 2
   ========================================================= */

q(
'Accidents & Incidents',
'After a road traffic incident, what should be your immediate priority?',
'Make the situation as safe as possible and check whether anyone needs urgent assistance.',
'Continue the journey immediately.',
'Argue about fault.',
'Leave before anyone notices.',
0,
'Safety and appropriate assistance should come before deciding who was responsible.'
),

q(
'Accidents & Incidents',
'What should a driver do after an incident involving damage or injury?',
'Follow the appropriate reporting and emergency procedures.',
'Hide the incident from the operator.',
'Delete all relevant information.',
'Continue working without checking whether the vehicle is safe.',
0,
'Incidents should be handled and reported appropriately, and the vehicle must be safe before further passenger work.'
),


/* =========================================================
   CHILD EXPLOITATION — 2
   ========================================================= */

q(
'Child Exploitation',
'A child appears frightened while travelling with an adult who controls the conversation. What should you do?',
'Remain observant and report factual safeguarding concerns through the proper route.',
'Accuse the adult publicly.',
'Take photographs and publish them.',
'Ignore the situation because you cannot prove anything.',
0,
'Drivers should recognise potential safeguarding concerns without attempting their own investigation.'
),

q(
'Child Exploitation',
'Why is child exploitation awareness relevant to private hire drivers?',
'Drivers may encounter children in situations where warning signs are visible.',
'Drivers are responsible for prosecuting offenders.',
'Drivers are allowed to question children formally.',
'Drivers can decide whether a child is legally protected.',
0,
'Drivers can play an important safeguarding role by recognising and reporting concerns.'
)

];


/* =========================================================
   QUESTION BUILDER
   ========================================================= */

function q(topic, question, a, b, c, d, answer, explanation) {
  const topicData = topics.find(t => t[0] === topic);

  return {
    id: '',
    topic,
    icon: topicData ? topicData[1] : '📚',
    question,
    options: [a, b, c, d],
    answer,
    explanation
  };
}


/* =========================================================
   GIVE EVERY QUESTION A UNIQUE ID
   ========================================================= */

const bank = rawQuestions.map((question, index) => ({
  ...question,
  id: `${question.topic}-${index + 1}`
}));


/* =========================================================
   SAFETY CHECKS
   ========================================================= */

console.assert(
  bank.length === 100,
  `Question bank error: expected 100 questions but found ${bank.length}`
);

console.assert(
  new Set(bank.map(q => q.id)).size === bank.length,
  'Question bank error: duplicate question IDs detected'
);


/* =========================================================
   RANDOM ANSWER POSITION
   ========================================================= */

function shuffle(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}


function shuffledQuestion(original) {
  const options = original.options.map((text, index) => ({
    text,
    correct: index === original.answer
  }));

  const shuffled = shuffle(options);

  return {
    ...original,
    options: shuffled.map(option => option.text),
    answer: shuffled.findIndex(option => option.correct)
  };
}


/* =========================================================
   STORAGE
   ========================================================= */

const store = JSON.parse(
  localStorage.getItem('wolves-progress') ||
  '{"done":0,"correct":0,"mistakes":[],"xp":0,"history":[]}'
);


function save() {
  localStorage.setItem(
    'wolves-progress',
    JSON.stringify(store)
  );
}


/* =========================================================
   NO STREAK FEATURE
   ========================================================= */

/*
   The old:
       🔥 6 day streak

   HAS BEEN REMOVED.

   There is intentionally no streak counter anywhere.
*/


/* =========================================================
   PRACTICE
   ========================================================= */

function startPractice(topic) {

  const list = topic
    ? shuffle(bank.filter(q => q.topic === topic))
        .slice(0, Math.min(10, bank.filter(q => q.topic === topic).length))
    : shuffle(bank).slice(0, 5);

  begin(
    list,
    'practice',
    topic || 'Quick Practice'
  );
}


/* =========================================================
   KEY QUESTIONS
   ========================================================= */

function startKey() {

  const keyTopics = [
    'Safeguarding',
    'Plying for Hire',
    'Disability Awareness'
  ];

  const list = [
    ...shuffle(bank.filter(q => q.topic === 'Safeguarding')).slice(0, 3),
    ...shuffle(bank.filter(q => q.topic === 'Plying for Hire')).slice(0, 3),
    ...shuffle(bank.filter(q => q.topic === 'Disability Awareness')).slice(0, 2)
  ];

  begin(
    shuffle(list),
    'key',
    'Key Questions'
  );
}


/* =========================================================
   28 QUESTION MOCK
   8 KEY QUESTIONS:
   3 SAFEGUARDING
   3 PLYING FOR HIRE
   2 DISABILITY
   ========================================================= */

function startMock() {

  const safeguarding = shuffle(
    bank.filter(q => q.topic === 'Safeguarding')
  ).slice(0, 3);

  const plying = shuffle(
    bank.filter(q => q.topic === 'Plying for Hire')
  ).slice(0, 3);

  const disability = shuffle(
    bank.filter(q => q.topic === 'Disability Awareness')
  ).slice(0, 2);

  const keyQuestions = [
    ...safeguarding,
    ...plying,
    ...disability
  ];

  const remaining = shuffle(
    bank.filter(q =>
      !keyQuestions.some(key => key.id === q.id)
    )
  ).slice(0, 20);

  begin(
    shuffle([
      ...keyQuestions,
      ...remaining
    ]),
    'mock',
    'Mock Exam'
  );
}


/* =========================================================
   SESSION
   ========================================================= */

let session = {
  list: [],
  index: 0,
  mode: '',
  title: '',
  answers: [],
  start: null,
  timer: null,
  currentQuestion: null
};


function begin(list, mode, title) {

  session = {
    list,
    index: 0,
    mode,
    title,
    answers: [],
    start: Date.now(),
    timer: null,
    currentQuestion: null
  };

  renderQuestion();

  if (mode === 'mock') {
    session.timer = setInterval(renderTimer, 1000);
  }
}


/* =========================================================
   TIMER
   ========================================================= */

function renderTimer() {

  const el = document.querySelector('#timer');

  if (!el) return;

  const left = Math.max(
    0,
    1800 - Math.floor(
      (Date.now() - session.start) / 1000
    )
  );

  el.textContent =
    `${String(Math.floor(left / 60)).padStart(2, '0')}:${String(left % 60).padStart(2, '0')}`;

  if (left === 0) {
    finish();
  }
}


/* =========================================================
   RENDER QUESTION
   ========================================================= */

function renderQuestion() {

  const original = session.list[session.index];

  const q = shuffledQuestion(original);

  session.currentQuestion = q;

  const isMock = session.mode === 'mock';

  document.querySelector('#app').innerHTML = `
    <div class="shell">

      ${typeof nav === 'function' ? nav() : ''}

      <div class="question-wrap">

        <button
          class="back"
          onclick="home()"
        >
          ← Exit ${session.title}
        </button>

        ${
          isMock
          ? `
            <div class="exam-bar">

              <div class="progress">
                <i
                  style="
                    width:${session.index / session.list.length * 100}%
                  "
                ></i>
              </div>

              <span
                class="timer"
                id="timer"
              >
                30:00
              </span>

            </div>
          `
          : ''
        }

        <div class="question-top">

          <span>
            ${q.icon} ${q.topic}
          </span>

          <span>
            Question ${session.index + 1}
            of
            ${session.list.length}
          </span>

        </div>

        <h1 class="question">
          ${q.question}
        </h1>

        <div class="answers">

          ${q.options.map((option, index) => `
            <button
              class="answer"
              onclick="answer(${index})"
            >
              <span class="letter">
                ${'ABCD'[index]}
              </span>

              ${option}
            </button>
          `).join('')}

        </div>

        <div id="feedback"></div>

      </div>
    </div>
  `;
}


/* =========================================================
   ANSWER
   ========================================================= */

function answer(selected) {

  const q =
    session.currentQuestion ||
    session.list[session.index];

  const correct =
    selected === q.answer;

  document
    .querySelectorAll('.answer')
    .forEach((button, index) => {

      button.disabled = true;

      if (index === q.answer) {
        button.classList.add('correct');
      }

      if (
        index === selected &&
        selected !== q.answer
      ) {
        button.classList.add('wrong');
      }

    });


  session.answers.push({
    q,
    correct
  });


  store.done++;

  store.xp += correct ? 10 : 2;


  if (correct) {

    store.correct++;

  } else if (
    !store.mistakes.includes(q.id)
  ) {

    store.mistakes.push(q.id);

  }


  save();


  const box =
    document.querySelector('#feedback');


  if (session.mode === 'mock') {

    box.innerHTML = `
      <div class="next-row">

        <button
          class="primary"
          onclick="next()"
        >
          ${
            session.index === session.list.length - 1
              ? 'Finish exam'
              : 'Next question →'
          }
        </button>

      </div>
    `;

  } else {

    box.innerHTML = `
      <div class="feedback ${correct ? '' : 'bad'}">

        <b>
          ${
            correct
              ? '✅ Correct!'
              : '❌ Not quite'
          }
        </b>

        ${q.explanation}

      </div>

      <div class="next-row">

        <button
          class="primary"
          onclick="next()"
        >
          ${
            session.index === session.list.length - 1
              ? 'See results'
              : 'Next →'
          }
        </button>

      </div>
    `;

  }
}


/* =========================================================
   NEXT
   ========================================================= */

function next() {

  session.index++;

  if (
    session.index < session.list.length
  ) {

    renderQuestion();

  } else {

    finish();

  }
}


/* =========================================================
   FINISH
   ========================================================= */

function finish() {

  if (session.timer) {
    clearInterval(session.timer);
    session.timer = null;
  }


  const score =
    session.answers.filter(
      answer => answer.correct
    ).length;

  const total =
    session.list.length;

  const percent =
    total
      ? Math.round(score / total * 100)
      : 0;


  if (session.mode === 'mock') {

    store.history.unshift({

      score,

      total,

      date: new Date().toLocaleDateString()

    });

  }


  save();


  const byTopic = {};


  session.answers.forEach(
    ({ q, correct }) => {

      if (!byTopic[q.topic]) {
        byTopic[q.topic] = [0, 0];
      }

      byTopic[q.topic][1]++;

      if (correct) {
        byTopic[q.topic][0]++;
      }

    }
  );


  document.querySelector('#app').innerHTML = `

    <div class="shell">

      ${typeof nav === 'function' ? nav() : ''}

      <div class="result">

        <button
          class="back"
          onclick="home()"
        >
          ← Home
        </button>

        <div class="result-score">

          <div
            class="eyebrow"
            style="color:#ffcf46"
          >
            ${session.title} complete
          </div>

          <h2>
            ${score} / ${total}
            —
            ${percent}%
            ${percent >= 75 ? '✅' : '❌'}
          </h2>

          <p>
            ${
              session.mode === 'mock'
                ? 'Pass mark: 21 / 28 (75%)'
                : 'Keep practising — you are building the habits that matter.'
            }
          </p>

        </div>


        <table class="score-table">

          <thead>

            <tr>
              <th>Topic</th>
              <th>Score</th>
            </tr>

          </thead>

          <tbody>

            ${
              Object.entries(byTopic)
                .map(
                  ([topic, [correctAnswers, totalAnswers]]) => `
                    <tr>
                      <td>${topic}</td>
                      <td>
                        ${correctAnswers}/${totalAnswers}
                      </td>
                    </tr>
                  `
                )
                .join('')
            }

          </tbody>

        </table>


        <div
          class="cta"
          style="margin-top:22px"
        >

          <button
            class="primary"
            onclick="showTopics()"
          >
            Revise these topics →
          </button>

          <button
            class="secondary"
            onclick="startMock()"
          >
            Another mock
          </button>

        </div>

      </div>

    </div>
  `;
}


/* =========================================================
   MISTAKES
   ========================================================= */

function showMistakes() {

  const list =
    bank.filter(
      question =>
        store.mistakes.includes(question.id)
    );


  document.querySelector('#app').innerHTML = `

    <div class="shell">

      ${typeof nav === 'function' ? nav() : ''}

      <button
        class="back"
        onclick="home()"
      >
        ← Home
      </button>

      <h1 class="screen-title">
        Things I need to revise
      </h1>

      <p
        style="
          color:var(--muted);
          margin-top:-20px
        "
      >
        Every incorrect answer is saved here
        for focused practice.
      </p>

      <div class="section">

        ${
          list.length
            ? `
              <div
                class="stats"
                style="
                  max-width:280px;
                  margin-bottom:22px
                "
              >

                <div class="stat">

                  <b>${list.length}</b>

                  <small>
                    mistakes to revisit
                  </small>

                </div>

              </div>

              <button
                class="primary"
                onclick="
                  begin(
                    shuffle(
                      bank.filter(
                        q => store.mistakes.includes(q.id)
                      )
                    ),
                    'practice',
                    'Mistake Review'
                  )
                "
              >
                Start mistake practice →
              </button>
            `
            : `
              <div class="empty">
                🎯
                <br><br>
                No mistakes saved yet.
                Start practising and any wrong
                answers will appear here.
              </div>
            `
        }

      </div>

    </div>
  `;
}


/* =========================================================
   PROGRESS
   ========================================================= */

function showProgress() {

  const accuracy =
    store.done
      ? Math.round(
          store.correct /
          store.done *
          100
        )
      : 0;


  const mock =
    store.history[0];


  const ready = Math.round(
    (accuracy * 0.5) +
    (Math.min(store.done / 80, 1) * 20) +
    (mock
      ? (mock.score / mock.total * 30)
      : 0)
  );


  let status;

  if (ready >= 90) {
    status = '🔥 Very strong';
  } else if (ready >= 75) {
    status = '🟢 Pass-ready';
  } else if (ready >= 60) {
    status = '🟠 Getting there';
  } else {
    status = '🟥 Not ready';
  }


  document.querySelector('#app').innerHTML = `

    <div class="shell">

      ${typeof nav === 'function' ? nav() : ''}

      <button
        class="back"
        onclick="home()"
      >
        ← Home
      </button>

      <h1 class="screen-title">
        My Progress
      </h1>


      <div
        class="result-score"
        style="max-width:630px"
      >

        <div
          class="eyebrow"
          style="color:#ffcf46"
        >
          I’m cooked meter
        </div>

        <h2>
          ${ready}% — ${status}
        </h2>

        <p>
          Based on your recent accuracy,
          completed practice and latest mock score.
        </p>

        <div class="progress">

          <i
            style="width:${Math.min(ready,100)}%"
          ></i>

        </div>

      </div>


      <section class="section">

        <div class="stats">

          <div class="stat">
            <b>${store.done}</b>
            <small>questions completed</small>
          </div>

          <div class="stat">
            <b>${accuracy}%</b>
            <small>overall accuracy</small>
          </div>

          <div class="stat">
            <b>${store.mistakes.length}</b>
            <small>in mistake bank</small>
          </div>

          <div class="stat">
            <b>
              ${
                mock
                  ? `${mock.score}/${mock.total}`
                  : '—'
              }
            </b>
            <small>latest mock</small>
          </div>

        </div>

      </section>


      ${
        store.history.length
          ? `
            <section class="section">

              <h2>
                Mock history
              </h2>

              <table class="score-table">

                <tbody>

                  ${
                    store.history
                      .slice(0, 5)
                      .map(
                        item => `
                          <tr>
                            <td>${item.date}</td>
                            <td>
                              ${item.score}/${item.total}
                              (
                              ${Math.round(
                                item.score /
                                item.total *
                                100
                              )}%
                              )
                            </td>
                          </tr>
                        `
                      )
                      .join('')
                  }

                </tbody>

              </table>

            </section>
          `
          : ''
      }

    </div>
  `;
}
