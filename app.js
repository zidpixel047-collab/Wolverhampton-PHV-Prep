/* =========================================================
   WOLVES PHV PREP
   Complete app.js replacement
   150 genuine practice questions
   No fake day streak
   ========================================================= */

const topicInfo = [
  ['Safeguarding', '🛡️'],
  ['Plying for Hire', '🚕'],
  ['Disability Awareness', '♿'],
  ['Vehicle Conditions', '🚗'],
  ['Driver Responsibilities', '👤'],
  ['Road & Passenger Safety', '🛣️'],
  ['Customer Care', '🤝'],
  ['County Lines', '🔎'],
  ['GDPR & Data Protection', '🔐'],
  ['Modern Slavery', '🕊️'],
  ['Equality & Diversity', '🌍'],
  ['Fares & Payments', '💳'],
  ['Licensing & Badges', '🪪'],
  ['Lost Property', '🧳'],
  ['Suicide Awareness', '💬'],
  ['Health & Wellbeing', '💚'],
  ['Vehicle Inspections', '🔧'],
  ['Smoking & Vaping', '🚭'],
  ['Alcohol & Drugs', '⚠️'],
  ['Complaints', '📋'],
  ['Booking Records', '📖'],
  ['Local Knowledge', '📍'],
  ['Professional Conduct', '🤝'],
  ['Accidents & Incidents', '🚨'],
  ['Child Exploitation', '🧒']
];

const questions = [];

function add(topic, q, correct, wrong1, wrong2, wrong3, explanation) {
  const icon = topicInfo.find(x => x[0] === topic)?.[1] || '📚';

  questions.push({
    id: `${topic}-${questions.filter(x => x.topic === topic).length + 1}`,
    topic,
    icon,
    question: q,
    options: [correct, wrong1, wrong2, wrong3],
    answer: 0,
    explanation
  });
}

/* =========================================================
   SAFEGUARDING — 6
   ========================================================= */

add(
  'Safeguarding',
  'A young passenger says they feel unsafe going home. What should you do?',
  'Listen calmly, take the concern seriously and report it through the appropriate safeguarding route.',
  'Ignore it because safeguarding is never a driver’s responsibility.',
  'Promise that you will never tell anybody.',
  'Confront anyone you suspect immediately.',
  'Drivers can have an important safeguarding role and should pass concerns through the correct route.'
);

add(
  'Safeguarding',
  'Which behaviour could be a warning sign that a passenger is being exploited?',
  'Someone else appears to control where they go, who they speak to or what they say.',
  'They are carrying a normal shopping bag.',
  'They ask the driver for directions.',
  'They are travelling during daylight.',
  'Control, fear and unusual dependency can be warning signs of exploitation.'
);

add(
  'Safeguarding',
  'If you have a safeguarding concern but are not certain what is happening, what should you do?',
  'Record the relevant facts and seek advice through the appropriate safeguarding process.',
  'Wait until you have proof before telling anyone.',
  'Investigate the person yourself.',
  'Post your concerns publicly.',
  'A driver does not need to investigate an allegation themselves.'
);

add(
  'Safeguarding',
  'Why should a driver avoid promising complete confidentiality to a vulnerable passenger?',
  'Information may need to be shared with appropriate people to protect someone from harm.',
  'Confidentiality is illegal in every situation.',
  'Passengers are never allowed to speak privately.',
  'Drivers must publish all conversations.',
  'A safeguarding concern may need to be passed to an appropriate authority or professional.'
);

add(
  'Safeguarding',
  'What is the best approach when a vulnerable passenger begins describing a worrying situation?',
  'Stay calm, listen without judgement and focus on their immediate safety.',
  'Interrupt them and demand every detail.',
  'Tell them the situation is probably their fault.',
  'Record the conversation and upload it online.',
  'A calm and non-judgemental response helps the passenger feel heard without turning the driver into an investigator.'
);

add(
  'Safeguarding',
  'What should a driver do if they believe a passenger is in immediate danger?',
  'Take appropriate steps to protect safety and seek emergency assistance where necessary.',
  'Continue the journey and ignore the concern.',
  'Argue with everyone involved.',
  'Leave the passenger somewhere isolated.',
  'Immediate danger requires an appropriate urgent response rather than simply ignoring the situation.'
);

/* =========================================================
   PLYING FOR HIRE — 6
   ========================================================= */

add(
  'Plying for Hire',
  'Can a private hire driver accept a passenger who simply approaches the vehicle on the street without a booking?',
  'No. A private hire journey must be pre-booked through the licensed operator.',
  'Yes, if the passenger offers enough money.',
  'Yes, if the driver is not busy.',
  'Yes, after midnight.',
  'Wolverhampton private hire conditions prohibit accepting a fare without it being pre-booked via the operator.'
);

add(
  'Plying for Hire',
  'What does “plying for hire” mean in the private hire context?',
  'Seeking or accepting passengers for hire without the required prior booking.',
  'Driving to a booked passenger.',
  'Taking a vehicle for servicing.',
  'Returning home after work.',
  'Private hire vehicles must not solicit or accept unbooked work.'
);

add(
  'Plying for Hire',
  'Can a private hire driver stand on a public road waiting for members of the public to hire the vehicle?',
  'No, not for the purpose of soliciting or accepting unbooked private hire work.',
  'Yes, whenever the engine is running.',
  'Yes, if the vehicle is clean.',
  'Yes, if the driver has a badge.',
  'Private hire drivers must not stand or ply for hire or solicit passengers on roads or other public places.'
);

add(
  'Plying for Hire',
  'Who must communicate a private hire booking to the driver?',
  'The licensed private hire operator or an authorised person acting for that operator.',
  'Any passer-by.',
  'Another passenger.',
  'A nearby shopkeeper.',
  'The published private hire driver conditions specify that bookings come through the licensed operator.'
);

add(
  'Plying for Hire',
  'A person offers you a cash fare while you are waiting between booked journeys. What should you do?',
  'Decline the unbooked fare and only accept work that has been properly booked.',
  'Accept it because it is cash.',
  'Accept it if the destination is nearby.',
  'Accept it if the passenger signs a note.',
  'Private hire drivers cannot accept unbooked fares simply because the passenger offers payment.'
);

add(
  'Plying for Hire',
  'Why is the distinction between private hire and hackney carriage important?',
  'The two types of service have different rules about how passengers can hire them.',
  'There is no legal difference.',
  'Only the vehicle colour matters.',
  'Private hire vehicles can use any method of accepting passengers.',
  'Private hire vehicles have booking requirements that differ from hackney carriage arrangements.'
);

/* =========================================================
   DISABILITY AWARENESS — 6
   ========================================================= */

add(
  'Disability Awareness',
  'What should a driver do when a passenger with an assistance dog needs to travel?',
  'Carry the passenger and assistance dog in accordance with the applicable legal duties.',
  'Refuse because animals are never permitted.',
  'Charge an automatic animal surcharge.',
  'Tell the passenger to leave the dog outside.',
  'Assistance dogs have specific legal protections.'
);

add(
  'Disability Awareness',
  'Why is charging an additional fee simply because a passenger has an assistance dog inappropriate?',
  'Assistance dog users have legal protections and should not be unfairly charged because of the dog.',
  'Dogs always travel free on every type of transport.',
  'Drivers may charge any amount they want.',
  'The passenger does not have to pay the normal fare.',
  'The Equality Act provides protections for assistance dog users.'
);

add(
  'Disability Awareness',
  'How should you communicate with a passenger who has a disability?',
  'Speak directly to the passenger and ask how you can assist if help is needed.',
  'Speak only to whoever is accompanying them.',
  'Assume you know exactly what help they need.',
  'Avoid speaking to them.',
  'Good disability awareness means treating the passenger with dignity and asking rather than assuming.'
);

add(
  'Disability Awareness',
  'What is the best approach if a wheelchair user needs help boarding?',
  'Ask what assistance they need and follow the appropriate safe procedure.',
  'Move the wheelchair without asking.',
  'Tell them they cannot travel.',
  'Rush them because other passengers are waiting.',
  'The passenger should be treated respectfully and assistance should be provided appropriately.'
);

add(
  'Disability Awareness',
  'What is a good example of reasonable customer service for a disabled passenger?',
  'Make reasonable adjustments and provide the same respectful service as other passengers.',
  'Automatically refuse the journey.',
  'Charge extra because assistance takes time.',
  'Ignore accessibility needs.',
  'Equality legislation protects disabled people from discrimination.'
);

add(
  'Disability Awareness',
  'Why should a driver avoid making assumptions about what a disabled passenger can or cannot do?',
  'Disabilities affect people differently and the passenger is best placed to explain what assistance they need.',
  'Drivers are legally required to know every passenger’s medical history.',
  'All disabled passengers need identical assistance.',
  'Disabled passengers should not travel alone.',
  'Asking respectfully is better than making assumptions.'
);

/* =========================================================
   VEHICLE CONDITIONS — 6
   ========================================================= */

add(
  'Vehicle Conditions',
  'Before starting work, what should a driver do with the vehicle?',
  'Carry out the required safety and walkaround checks and make sure the vehicle is fit to use.',
  'Wait until a passenger reports a problem.',
  'Only check the fuel level.',
  'Only wash the outside.',
  'Regular checks help identify defects before they create a safety risk.'
);

add(
  'Vehicle Conditions',
  'Which part of a vehicle should be checked for obvious damage during a walkaround?',
  'Tyres, lights, mirrors, bodywork and other safety-critical areas.',
  'Only the radio.',
  'Only the boot carpet.',
  'Only the air conditioning.',
  'A proper walkaround covers multiple safety-critical areas.'
);

add(
  'Vehicle Conditions',
  'Why are worn or damaged tyres a serious concern?',
  'They can reduce grip and affect the vehicle’s ability to stop or handle safely.',
  'They only affect fuel economy.',
  'They make the radio quieter.',
  'They only matter on parked vehicles.',
  'Tyres are a fundamental road-safety component.'
);

add(
  'Vehicle Conditions',
  'What should you do if a safety-critical defect is discovered before a journey?',
  'Do not use the vehicle until the defect has been dealt with appropriately.',
  'Hide the defect from the operator.',
  'Drive faster to finish sooner.',
  'Ask passengers whether they think it is safe.',
  'A vehicle should not be used when a defect makes it unsafe or otherwise non-compliant.'
);

add(
  'Vehicle Conditions',
  'Why should vehicle lights be checked before working?',
  'They help the driver see and help other road users see the vehicle and its intentions.',
  'They are only decorative.',
  'They only matter in car parks.',
  'They have no safety purpose.',
  'Lights are important for visibility and communication with other road users.'
);

add(
  'Vehicle Conditions',
  'What is the purpose of checking mirrors before a journey?',
  'To make sure the driver has the necessary visibility around the vehicle.',
  'To check the passenger’s clothing.',
  'To increase engine power.',
  'To calculate the fare.',
  'Correctly adjusted and usable mirrors contribute to safe observation.'
);

/* =========================================================
   DRIVER RESPONSIBILITIES — 6
   ========================================================= */

add(
  'Driver Responsibilities',
  'What should a driver do if their personal details change?',
  'Notify Licensing Services using the required process and within the applicable time limit.',
  'Wait until the licence expires.',
  'Tell passengers instead.',
  'Make the change only on social media.',
  'Licence conditions require drivers to keep Licensing Services informed of relevant changes.'
);

add(
  'Driver Responsibilities',
  'What should a driver do if they receive a matter that must be disclosed to the licensing authority?',
  'Make the required notification themselves using the Council’s process.',
  'Assume the police will always notify the Council.',
  'Ignore it unless a passenger asks.',
  'Delete the paperwork.',
  'Current Council conditions place notification responsibilities on the licence holder.'
);

add(
  'Driver Responsibilities',
  'Why must a driver keep their licence information accurate?',
  'The licensing authority needs accurate information to administer and monitor the licence.',
  'It only affects the vehicle’s fuel economy.',
  'Passengers use it to choose music.',
  'It determines the weather.',
  'Accurate licensing information is part of responsible licence holding.'
);

add(
  'Driver Responsibilities',
  'Can a Wolverhampton private hire driver simply work for any private hire operator?',
  'No. The applicable licence conditions specify requirements about the operator the driver works for and bookings they receive.',
  'Yes, without notifying anyone.',
  'Yes, if the journey is short.',
  'Only if the passenger agrees.',
  'The Council’s private hire driver conditions contain operator-related requirements.'
);

add(
  'Driver Responsibilities',
  'What should a driver do if they are unsure about a current licence condition?',
  'Check the current official guidance or ask Licensing Services for clarification.',
  'Invent an interpretation.',
  'Ask a passenger to decide.',
  'Ignore the condition.',
  'Official guidance is the safest source for licensing requirements.'
);

add(
  'Driver Responsibilities',
  'What is a key responsibility when carrying passengers?',
  'Provide the service safely, lawfully and professionally.',
  'Maximise speed at all times.',
  'Avoid communicating with passengers.',
  'Ignore vehicle defects.',
  'Passenger safety and compliance are central responsibilities of a licensed driver.'
);

/* =========================================================
   ROAD & PASSENGER SAFETY — 6
   ========================================================= */

add(
  'Road & Passenger Safety',
  'A passenger asks you to stop somewhere unsafe. What should you do?',
  'Explain the safety issue and stop at the nearest safe and lawful location.',
  'Stop immediately wherever they request.',
  'Ask them to leave while the vehicle is moving.',
  'Ignore road safety completely.',
  'Passenger requests do not override road-safety requirements.'
);

add(
  'Road & Passenger Safety',
  'Why should passengers use seatbelts where required?',
  'Seatbelts reduce the risk of serious injury in a collision.',
  'They improve the radio signal.',
  'They reduce the fare.',
  'They are only for drivers.',
  'Seatbelts are a fundamental passenger-safety measure.'
);

add(
  'Road & Passenger Safety',
  'What should a driver do if a passenger distracts them while driving?',
  'Remain focused on driving and deal with the distraction safely.',
  'Turn around to argue with them.',
  'Use the phone to record them.',
  'Drive faster to finish the journey.',
  'Driver attention must remain on safe vehicle control.'
);

add(
  'Road & Passenger Safety',
  'Why should luggage be secured appropriately?',
  'Loose luggage can move around and create a hazard during braking or a collision.',
  'It makes the fare cheaper.',
  'It improves the vehicle’s paintwork.',
  'It guarantees a faster journey.',
  'Unsecured objects can become hazards.'
);

add(
  'Road & Passenger Safety',
  'What should you do if visibility becomes seriously reduced while driving?',
  'Reduce risk appropriately, slow down and stop somewhere safe if necessary.',
  'Speed up to get through the area.',
  'Switch off the headlights.',
  'Ignore the conditions.',
  'Drivers should adapt to conditions and avoid unnecessary risk.'
);

add(
  'Road & Passenger Safety',
  'What is the safest approach when collecting a passenger near a busy road?',
  'Choose a safe legal stopping point that allows the passenger to enter without unnecessary danger.',
  'Stop wherever the passenger waves.',
  'Stop on a pedestrian crossing.',
  'Stop in the middle of traffic.',
  'Passenger collection should be planned around safety and legality.'
);

/* =========================================================
   CUSTOMER CARE — 6
   ========================================================= */

add(
  'Customer Care',
  'A passenger is upset about traffic delays. What is the best response?',
  'Stay calm, acknowledge the frustration and communicate politely.',
  'Argue with the passenger.',
  'Blame them for the traffic.',
  'Stop the journey immediately.',
  'Professional communication can prevent a difficult situation from escalating.'
);

add(
  'Customer Care',
  'What is good customer service?',
  'Being polite, reliable, respectful and clear with passengers.',
  'Ignoring passengers.',
  'Using offensive language.',
  'Arguing over every request.',
  'Professional conduct helps create a safe and positive journey.'
);

add(
  'Customer Care',
  'A passenger asks a reasonable question about the journey. What should you do?',
  'Answer politely and clearly if you can.',
  'Refuse to speak.',
  'Mock the passenger.',
  'Tell them questions are not allowed.',
  'Clear communication is an important part of customer care.'
);

add(
  'Customer Care',
  'How should a driver deal with a language or communication difficulty?',
  'Remain patient and use clear, respectful communication.',
  'Become aggressive.',
  'Refuse every journey.',
  'Make fun of the passenger.',
  'Patience and clarity are important when communication is difficult.'
);

add(
  'Customer Care',
  'What should a driver do if a passenger makes a reasonable request that can safely be accommodated?',
  'Try to assist professionally where appropriate.',
  'Automatically refuse.',
  'Insult the passenger.',
  'Demand a tip first.',
  'Good customer care involves reasonable assistance while maintaining safety and compliance.'
);

add(
  'Customer Care',
  'Why is maintaining a calm tone useful during a disagreement?',
  'It can prevent the situation from escalating and supports professional communication.',
  'It guarantees the passenger is wrong.',
  'It allows the driver to ignore safety.',
  'It removes the need for licensing rules.',
  'Calm communication is especially important during difficult situations.'
);

/* =========================================================
   COUNTY LINES — 6
   ========================================================= */

add(
  'County Lines',
  'What does “county lines” commonly involve?',
  'Criminal exploitation in which vulnerable people may be used to transport or sell drugs or money.',
  'A type of road maintenance.',
  'A taxi booking system.',
  'A passenger loyalty scheme.',
  'County lines is associated with organised criminal exploitation.'
);

add(
  'County Lines',
  'Which could be a warning sign of county lines exploitation?',
  'A person appears controlled by others and may have unexplained phones, money or travel.',
  'A passenger carrying an umbrella.',
  'A passenger asking for a receipt.',
  'A passenger wearing headphones.',
  'Multiple phones, unexplained money and controlling relationships can be warning signs.'
);

add(
  'County Lines',
  'What should a driver do if they suspect county lines exploitation?',
  'Record relevant concerns and report them through an appropriate safeguarding or reporting route.',
  'Confront suspected criminals alone.',
  'Post the passenger’s details online.',
  'Ignore it automatically.',
  'Drivers should report concerns rather than investigate or confront people themselves.'
);

add(
  'County Lines',
  'Why might a vulnerable person involved in county lines appear reluctant to speak?',
  'They may be frightened, controlled or threatened by others.',
  'They are always trying to hide a driving offence.',
  'They have no ability to speak.',
  'They are necessarily guilty of a crime.',
  'Exploitation can involve fear and coercion.'
);

add(
  'County Lines',
  'Which situation should increase a driver’s safeguarding awareness?',
  'A young person repeatedly being collected by different adults and appearing frightened or controlled.',
  'A passenger travelling to work.',
  'A passenger paying by card.',
  'A passenger carrying groceries.',
  'Patterns of control and unusual adult involvement can warrant safeguarding concern.'
);

add(
  'County Lines',
  'What should a driver avoid doing when they suspect exploitation?',
  'Putting themselves or the passenger at greater risk by confronting suspected offenders.',
  'Seeking appropriate advice.',
  'Recording factual observations.',
  'Following safeguarding procedures.',
  'Drivers should not put themselves or vulnerable passengers in unnecessary danger.'
);

/* =========================================================
   GDPR — 6
   ========================================================= */

add(
  'GDPR & Data Protection',
  'How should passenger personal information be handled?',
  'Keep it secure and use it only for a legitimate purpose.',
  'Share it with friends.',
  'Post it online.',
  'Keep every piece of information forever.',
  'Personal data should be handled securely and lawfully.'
);

add(
  'GDPR & Data Protection',
  'What is personal data?',
  'Information that relates to an identifiable person.',
  'Only information printed on paper.',
  'Only a person’s bank PIN.',
  'Only information stored by the Council.',
  'Personal data can exist in many forms and can identify or relate to a person.'
);

add(
  'GDPR & Data Protection',
  'A passenger gives you contact details for a legitimate booking purpose. What should you do?',
  'Handle the information securely and only use it for the relevant legitimate purpose.',
  'Send it to your friends.',
  'Publish it online.',
  'Use it for unrelated advertising.',
  'Personal information should not be reused or shared without a proper basis.'
);

add(
  'GDPR & Data Protection',
  'Why should a driver avoid discussing a passenger’s private information with friends?',
  'It could breach the passenger’s privacy and data-protection responsibilities.',
  'Friends are automatically authorised to receive it.',
  'It makes the journey slower.',
  'It changes the vehicle licence.',
  'Passenger information should be kept confidential and secure.'
);

add(
  'GDPR & Data Protection',
  'What should you do if you accidentally disclose passenger information to the wrong person?',
  'Follow the relevant data-breach procedure and report it to the appropriate person.',
  'Delete all evidence and say nothing.',
  'Post an explanation online.',
  'Blame the passenger.',
  'Potential data breaches should be dealt with through the appropriate reporting process.'
);

add(
  'GDPR & Data Protection',
  'What is data minimisation?',
  'Only collecting or using the personal information that is necessary for the purpose.',
  'Collecting as much information as possible.',
  'Keeping every passenger’s information permanently.',
  'Publishing all information publicly.',
  'Data minimisation is a core privacy principle.'
);

/* =========================================================
   MODERN SLAVERY — 6
   ========================================================= */

add(
  'Modern Slavery',
  'What is modern slavery?',
  'A situation where people are exploited through coercion, control or other forms of forced exploitation.',
  'A type of driving licence.',
  'A private hire booking system.',
  'A road traffic offence only.',
  'Modern slavery involves exploitation and a lack of genuine freedom.'
);

add(
  'Modern Slavery',
  'Which could be a warning sign of modern slavery?',
  'A person appears frightened, controlled or unable to speak freely.',
  'A passenger asks for a receipt.',
  'A passenger uses a navigation app.',
  'A passenger carries shopping.',
  'Fear, control and restricted freedom can be warning signs.'
);

add(
  'Modern Slavery',
  'What should a driver do if they suspect modern slavery?',
  'Report concerns through the appropriate safeguarding or reporting route without putting anyone at greater risk.',
  'Confront the suspected exploiter alone.',
  'Demand money from the passenger.',
  'Ignore it.',
  'Reporting concerns safely is preferable to personal confrontation.'
);

add(
  'Modern Slavery',
  'Why might a victim of modern slavery not ask for help directly?',
  'They may be frightened, controlled or unaware of where to seek help.',
  'They are always responsible for the exploitation.',
  'They cannot understand any language.',
  'They necessarily know the driver personally.',
  'Fear and control can prevent victims from seeking help.'
);

add(
  'Modern Slavery',
  'What should a driver focus on when observing a possible safeguarding concern?',
  'Relevant factual observations rather than assumptions.',
  'Making accusations immediately.',
  'Posting details online.',
  'Trying to investigate a criminal network.',
  'Objective observations are more useful when concerns are reported.'
);

add(
  'Modern Slavery',
  'What is an appropriate response if a suspected victim asks for help?',
  'Remain calm, listen and use the appropriate safeguarding or emergency route depending on the situation.',
  'Promise absolute secrecy.',
  'Tell them to confront the person controlling them.',
  'Leave them without explanation.',
  'The priority is safety and appropriate support.'
);

/* =========================================================
   EQUALITY & DIVERSITY — 6
   ========================================================= */

add(
  'Equality & Diversity',
  'How should a driver treat passengers?',
  'Fairly, respectfully and without unlawful discrimination.',
  'Based on their appearance.',
  'Based on their nationality.',
  'Based only on how much they tip.',
  'Equality and respect are fundamental to professional passenger service.'
);

add(
  'Equality & Diversity',
  'What is discrimination?',
  'Unfair treatment of someone because of a protected characteristic or other unlawful reason.',
  'Giving clear directions.',
  'Helping a passenger with luggage.',
  'Checking a seatbelt.',
  'Discrimination can occur when someone is treated unfairly for a protected characteristic.'
);

add(
  'Equality & Diversity',
  'What should a driver do if they hear another person making discriminatory comments?',
  'Remain professional and do not participate in discriminatory behaviour.',
  'Join in.',
  'Repeat the comments to other passengers.',
  'Record them and publish them online.',
  'Professional conduct requires respectful treatment.'
);

add(
  'Equality & Diversity',
  'Why should assumptions about passengers be avoided?',
  'They can lead to unfair treatment and poor customer service.',
  'They always make journeys faster.',
  'They are required by licensing law.',
  'They guarantee a higher fare.',
  'Treating passengers as individuals supports equality and good service.'
);

add(
  'Equality & Diversity',
  'What is inclusive customer service?',
  'Providing respectful service while considering reasonable accessibility needs.',
  'Providing service only to certain groups.',
  'Charging different fares based on identity.',
  'Ignoring accessibility requirements.',
  'Inclusive service aims to avoid barriers and discrimination.'
);

add(
  'Equality & Diversity',
  'If two passengers have different communication needs, what should a driver do?',
  'Adapt communication respectfully where reasonably possible.',
  'Refuse one passenger automatically.',
  'Mock the difference.',
  'Speak louder regardless of need.',
  'Good service involves adapting communication appropriately.'
);

/* =========================================================
   FARES & PAYMENTS — 6
   ========================================================= */

add(
  'Fares & Payments',
  'How should a private hire journey be arranged?',
  'Through a proper booking with the licensed operator.',
  'By picking up anyone who waves at the vehicle.',
  'By agreeing the journey after driving away.',
  'Only through cash.',
  'Private hire journeys must be properly booked.'
);

add(
  'Fares & Payments',
  'What should a driver do if there is a disagreement about a fare?',
  'Remain calm and use the appropriate booking or operator process to resolve it.',
  'Threaten the passenger.',
  'Take their property.',
  'Refuse to explain anything.',
  'Professional handling of payment disputes is important.'
);

add(
  'Fares & Payments',
  'Why should drivers avoid inventing additional charges?',
  'Passengers should be charged according to the applicable booking and fare arrangements.',
  'Drivers may charge anything they want.',
  'Extra charges are always legal.',
  'Passengers cannot ask questions about fares.',
  'Charges should be transparent and consistent with the applicable arrangements.'
);

add(
  'Fares & Payments',
  'What is a sensible approach if a passenger asks how much the journey will cost?',
  'Explain the applicable fare or booking arrangement clearly.',
  'Refuse to answer.',
  'Give a deliberately false amount.',
  'Tell them to guess.',
  'Clear fare information helps avoid disputes.'
);

add(
  'Fares & Payments',
  'Why should a driver provide or retain appropriate payment records where required?',
  'They can help demonstrate what was charged and support accountability.',
  'They are useful only for decoration.',
  'They replace the driver licence.',
  'They allow passenger data to be posted online.',
  'Accurate records can help resolve disputes and demonstrate compliance.'
);

add(
  'Fares & Payments',
  'A passenger believes they have been charged incorrectly. What should you do?',
  'Listen politely and explain the appropriate route for checking the charge.',
  'Argue until they leave.',
  'Delete the booking.',
  'Refuse to provide any information.',
  'A calm explanation and proper dispute route are appropriate.'
);

/* =========================================================
   LICENSING & BADGES — 6
   ========================================================= */

add(
  'Licensing & Badges',
  'What should a driver do if their driver badge is lost?',
  'Report it promptly and follow the Council’s replacement process.',
  'Borrow another driver’s badge.',
  'Make a photocopy at home.',
  'Continue indefinitely without reporting it.',
  'Lost badges should be dealt with through Licensing Services.'
);

add(
  'Licensing & Badges',
  'Why is the driver badge important?',
  'It helps identify the licensed driver to passengers and authorised officers.',
  'It replaces vehicle insurance.',
  'It is a payment card.',
  'It gives permission to speed.',
  'The badge is an important part of driver identification.'
);

add(
  'Licensing & Badges',
  'What should a driver do if their appearance changes substantially and the badge no longer identifies them properly?',
  'Follow the Council’s process for obtaining an updated badge or photograph.',
  'Use someone else’s badge.',
  'Cover the photograph.',
  'Ignore it permanently.',
  'Current conditions require drivers to remain recognisable from the badge photograph.'
);

add(
  'Licensing & Badges',
  'Can a private hire driver licence be used as though it were a hackney carriage licence?',
  'No. They are different licence types with different permissions.',
  'Yes, they are identical.',
  'Only on weekends.',
  'Only when the passenger asks.',
  'The Council distinguishes private hire and hackney carriage licensing.'
);

add(
  'Licensing & Badges',
  'What is a licence condition?',
  'A requirement attached to the licence that the licence holder must comply with.',
  'A passenger suggestion.',
  'A vehicle advertisement.',
  'An optional recommendation.',
  'Breaching licence conditions can have licensing consequences.'
);

add(
  'Licensing & Badges',
  'Why should drivers keep up to date with licensing requirements?',
  'Rules and conditions can change and compliance is part of holding a licence.',
  'Licensing rules never change.',
  'Passengers set the rules.',
  'Only vehicle manufacturers decide licensing rules.',
  'Drivers are responsible for complying with the current requirements.'
);

/* =========================================================
   LOST PROPERTY — 6
   ========================================================= */

add(
  'Lost Property',
  'A passenger leaves a phone in the vehicle. What should you do?',
  'Keep it safe and follow the appropriate lost-property process.',
  'Sell it.',
  'Use it for personal calls.',
  'Post it online.',
  'Lost property should be handled responsibly and according to the relevant process.'
);

add(
  'Lost Property',
  'Why should a driver avoid searching through a passenger’s phone?',
  'It is private property and may contain personal information.',
  'Phones are never useful.',
  'The driver automatically owns lost phones.',
  'Searching phones is required by licensing rules.',
  'Respect for privacy and property is important.'
);

add(
  'Lost Property',
  'What information can be useful when recording lost property?',
  'A factual description of the item and the relevant journey details.',
  'The driver’s personal opinions about the passenger.',
  'A social-media post.',
  'A guessed value only.',
  'Accurate factual records help identify and return property.'
);

add(
  'Lost Property',
  'What should you do if you find valuable property after a journey?',
  'Secure it and follow the appropriate procedure for returning or reporting it.',
  'Keep it as a reward.',
  'Throw it away.',
  'Give it to the next passenger.',
  'Valuable property should be handled responsibly.'
);

add(
  'Lost Property',
  'Why is a proper lost-property procedure useful?',
  'It gives passengers a fair way to recover their belongings.',
  'It allows drivers to keep anything they find.',
  'It eliminates privacy responsibilities.',
  'It guarantees every item is valuable.',
  'A clear process improves accountability.'
);

add(
  'Lost Property',
  'A passenger says they left something in your vehicle yesterday. What should you do?',
  'Check the appropriate records or procedure and respond professionally.',
  'Automatically accuse them of lying.',
  'Demand money before checking.',
  'Ignore the request.',
  'A professional response helps resolve lost-property enquiries fairly.'
);

/* =========================================================
   SUICIDE AWARENESS — 6
   ========================================================= */

add(
  'Suicide Awareness',
  'A passenger says they are struggling and do not feel safe. What should a driver do?',
  'Stay calm, listen without judgement and seek appropriate urgent help when necessary.',
  'Tell them to stop talking.',
  'Promise complete secrecy in every circumstance.',
  'Leave them somewhere unsafe.',
  'The priority is immediate safety and appropriate support.'
);

add(
  'Suicide Awareness',
  'Why is it important to take a passenger expressing serious distress seriously?',
  'Their words may indicate that they need immediate support or protection.',
  'People never mean what they say.',
  'Drivers should always ignore emotional concerns.',
  'It is always a driving offence.',
  'Taking concerns seriously can help someone access appropriate support.'
);

add(
  'Suicide Awareness',
  'What communication style is appropriate when someone is distressed?',
  'Calm, respectful and non-judgemental.',
  'Aggressive and confrontational.',
  'Mocking.',
  'Dismissive.',
  'A calm approach can help reduce distress and encourage communication.'
);

add(
  'Suicide Awareness',
  'If a passenger appears to be in immediate danger, what is the priority?',
  'Get appropriate urgent help and keep the situation as safe as possible.',
  'Finish the fare regardless of circumstances.',
  'Ignore the passenger.',
  'Post about it online.',
  'Immediate safety takes priority.'
);

add(
  'Suicide Awareness',
  'Why should a driver avoid making promises they cannot keep to a distressed passenger?',
  'Promises of secrecy or guaranteed outcomes may prevent appropriate help being sought.',
  'Passengers dislike promises.',
  'Drivers are never allowed to speak.',
  'It changes the fare.',
  'The driver should respond responsibly and seek appropriate help.'
);

add(
  'Suicide Awareness',
  'What should a driver avoid when responding to someone in serious distress?',
  'Judging, mocking or dismissing what the person is saying.',
  'Listening calmly.',
  'Taking the concern seriously.',
  'Seeking appropriate help.',
  'A supportive and non-judgemental response is more appropriate.'
);

/* =========================================================
   HEALTH & WELLBEING — 6
   ========================================================= */

add(
  'Health & Wellbeing',
  'You feel too tired to drive safely. What should you do?',
  'Stop working and rest before driving again.',
  'Drink caffeine and ignore the problem.',
  'Drive faster to finish.',
  'Open a window and continue regardless.',
  'Fatigue can seriously affect driving performance.'
);

add(
  'Health & Wellbeing',
  'Why is taking regular appropriate breaks important during long periods of driving?',
  'It can help reduce fatigue and maintain concentration.',
  'It guarantees higher fares.',
  'It makes the vehicle faster.',
  'It removes all driving risks.',
  'Managing fatigue is important for safe driving.'
);

add(
  'Health & Wellbeing',
  'What should a driver do if illness could affect their ability to drive safely?',
  'Follow the appropriate medical and licensing requirements and do not drive if it is unsafe.',
  'Hide the condition.',
  'Drive anyway.',
  'Ask passengers to monitor them.',
  'Health conditions that affect safe driving may require notification and action.'
);

add(
  'Health & Wellbeing',
  'What can fatigue affect?',
  'Concentration, reaction time, judgement and alertness.',
  'Only the radio volume.',
  'Only the vehicle colour.',
  'Only the fare calculation.',
  'Fatigue can affect several abilities needed for safe driving.'
);

add(
  'Health & Wellbeing',
  'What is a sensible way to manage a demanding working day?',
  'Plan rest, hydration and breaks while maintaining safe working practices.',
  'Avoid all breaks.',
  'Drive continuously until exhausted.',
  'Ignore warning signs of fatigue.',
  'Good wellbeing supports safer professional driving.'
);

add(
  'Health & Wellbeing',
  'If a driver notices a health problem that may affect their DVLA driving standard, what should they do?',
  'Follow the required DVLA and licensing notification process.',
  'Keep it secret.',
  'Ask a passenger to approve driving.',
  'Ignore the issue permanently.',
  'The Council’s licensing material refers to DVLA Group 2 medical standards.'
);

/* =========================================================
   VEHICLE INSPECTIONS — 6
   ========================================================= */

add(
  'Vehicle Inspections',
  'Why are regular vehicle inspections important?',
  'They help identify defects before they put passengers or other road users at risk.',
  'They only improve the vehicle’s appearance.',
  'They replace insurance.',
  'They are only useful for selling cars.',
  'Inspection helps identify safety and compliance problems.'
);

add(
  'Vehicle Inspections',
  'Which area should be checked during a vehicle walkaround?',
  'Tyres and wheels.',
  'Only the radio.',
  'Only the boot carpet.',
  'Only the dashboard decoration.',
  'Tyres and wheels are safety-critical.'
);

add(
  'Vehicle Inspections',
  'Why should mirrors be checked during a vehicle inspection?',
  'They must provide the driver with appropriate visibility.',
  'They calculate the fare.',
  'They control the brakes.',
  'They measure tyre pressure.',
  'Visibility is essential for safe driving.'
);

add(
  'Vehicle Inspections',
  'Why should seatbelts be checked?',
  'They must be present and usable for passenger safety where required.',
  'They control the engine.',
  'They change the route.',
  'They reduce the fare.',
  'Seatbelts are essential safety equipment.'
);

add(
  'Vehicle Inspections',
  'Why should lights be inspected before working?',
  'Defective lights can reduce visibility and make the vehicle harder for others to see.',
  'They only affect the radio.',
  'They determine the passenger’s destination.',
  'They control the vehicle licence.',
  'Lights support visibility and communication with other road users.'
);

add(
  'Vehicle Inspections',
  'What should happen if an inspection identifies a serious safety defect?',
  'The vehicle should not be used until the defect has been appropriately dealt with.',
  'The defect should be hidden.',
  'The vehicle should be driven faster.',
  'Passengers should decide whether it is safe.',
  'Serious defects must be addressed before the vehicle is safely used.'
);

/* =========================================================
   SMOKING & VAPING — 6
   ========================================================= */

add(
  'Smoking & Vaping',
  'What is the appropriate approach to smoking in a licensed vehicle?',
  'Maintain a smoke-free environment in accordance with the law.',
  'Allow it whenever the passenger pays extra.',
  'Allow it with windows closed.',
  'Allow it only during short journeys.',
  'Smoking restrictions apply to enclosed public and work vehicles.'
);

add(
  'Smoking & Vaping',
  'Why should a driver not simply allow vaping because there is no cigarette smoke?',
  'The applicable smoke-free requirements and vehicle policies should be followed rather than making assumptions.',
  'Vaping always improves air quality.',
  'Vaping is required by licensing law.',
  'Passengers decide all vehicle rules.',
  'Drivers should follow the applicable legal and licensing requirements.'
);

add(
  'Smoking & Vaping',
  'What should a driver do if a passenger starts smoking in the vehicle?',
  'Politely ask them to stop and maintain the required smoke-free environment.',
  'Ignore it.',
  'Join them.',
  'Turn off the lights.',
  'The vehicle should remain smoke-free.'
);

add(
  'Smoking & Vaping',
  'Why is smoking inside a vehicle a safety concern as well as a legal issue?',
  'Smoke can affect air quality and driver visibility and can distract the driver.',
  'It always improves concentration.',
  'It makes tyres safer.',
  'It reduces stopping distance.',
  'Smoking can create several safety and health concerns.'
);

add(
  'Smoking & Vaping',
  'What should a driver do if there is disagreement about the smoke-free rule?',
  'Remain polite and explain that the vehicle must comply with the applicable rules.',
  'Argue aggressively.',
  'Allow smoking to avoid conflict.',
  'End the journey dangerously.',
  'Professional communication should accompany enforcement of the rules.'
);

add(
  'Smoking & Vaping',
  'Why should a driver never smoke while transporting passengers?',
  'The vehicle must be maintained as a smoke-free environment.',
  'It makes the vehicle faster.',
  'It improves customer care.',
  'It reduces fuel use.',
  'Smoke-free vehicles protect passengers and comply with applicable requirements.'
);

/* =========================================================
   ALCOHOL & DRUGS — 6
   ========================================================= */

add(
  'Alcohol & Drugs',
  'What is the safest rule about alcohol and driving?',
  'Never drive when affected by alcohol.',
  'Drive slowly when affected.',
  'Drive only short journeys.',
  'Ask passengers whether you seem safe.',
  'Alcohol can impair judgement, coordination and reaction time.'
);

add(
  'Alcohol & Drugs',
  'What should a driver do if medication may affect their ability to drive?',
  'Check the relevant medical advice and do not drive if it makes driving unsafe.',
  'Ignore the warning.',
  'Double the dose.',
  'Ask a passenger to drive.',
  'Some medicines can affect driving ability.'
);

add(
  'Alcohol & Drugs',
  'Why is driving while impaired particularly dangerous for a professional driver?',
  'The driver is responsible for the safety of passengers and other road users.',
  'Professional drivers are immune to impairment.',
  'Passengers can control the vehicle.',
  'Impairment only matters on motorways.',
  'Professional driving carries responsibility for passenger safety.'
);

add(
  'Alcohol & Drugs',
  'What should you do if you are not fit to drive safely?',
  'Do not drive until you are fit and safe to do so.',
  'Drive carefully and hope nobody notices.',
  'Speed up.',
  'Turn the music louder.',
  'Fitness to drive is essential.'
);

add(
  'Alcohol & Drugs',
  'Can a driver rely on passengers to tell them whether they are safe to drive?',
  'No. The driver is responsible for being fit and safe to drive.',
  'Yes, passengers always decide.',
  'Only children decide.',
  'Only the first passenger decides.',
  'Fitness to drive is the driver’s responsibility.'
);

add(
  'Alcohol & Drugs',
  'Why should illegal drugs and driving never be mixed?',
  'Drugs can impair driving ability and create serious risks to passengers and other road users.',
  'They improve reaction time.',
  'They guarantee safer driving.',
  'They are safe in short journeys.',
  'Impairment creates serious safety risks.'
);

/* =========================================================
   COMPLAINTS — 6
   ========================================================= */

add(
  'Complaints',
  'A passenger wants to complain about the service. What should you do?',
  'Remain courteous and explain the appropriate complaints route.',
  'Argue until they leave.',
  'Threaten them.',
  'Take their phone.',
  'Complaints should be handled professionally.'
);

add(
  'Complaints',
  'Why should a driver avoid becoming defensive when a passenger complains?',
  'A calm response helps prevent escalation and allows the issue to be dealt with properly.',
  'Defensiveness automatically proves innocence.',
  'Passengers are never allowed to complain.',
  'Complaints are always illegal.',
  'Professional complaint handling supports good customer service.'
);

add(
  'Complaints',
  'What should a driver do when a passenger raises a legitimate concern?',
  'Listen and provide the appropriate information or route for resolving it.',
  'Ignore them.',
  'Insult them.',
  'Refuse all future journeys.',
  'Listening and providing a proper route for resolution are appropriate.'
);

add(
  'Complaints',
  'Why is it useful to keep accurate records relating to a complaint where required?',
  'They can help establish what happened and support a fair response.',
  'Records guarantee the driver wins.',
  'Records should be posted publicly.',
  'Records replace licensing.',
  'Accurate records can support accountability.'
);

add(
  'Complaints',
  'A passenger is angry but has not threatened anyone. What should the driver do?',
  'Remain calm and try to de-escalate the situation professionally.',
  'Shout louder.',
  'Provoke them.',
  'Drive dangerously.',
  'De-escalation is safer than confrontation.'
);

add(
  'Complaints',
  'If a complaint concerns a licensing matter, what should happen?',
  'It should be directed through the appropriate licensing or complaints process.',
  'It should be ignored.',
  'It should be posted online by the driver.',
  'The driver should invent a rule.',
  'Formal processes exist to handle licensing concerns.'
);

/* =========================================================
   BOOKING RECORDS — 6
   ========================================================= */

add(
  'Booking Records',
  'Why are private hire booking records important?',
  'They provide evidence that journeys were properly booked and support accountability.',
  'They are only advertisements.',
  'They replace the driver badge.',
  'They remove the need for insurance.',
  'Booking records help demonstrate compliance.'
);

add(
  'Booking Records',
  'Who should a private hire driver receive bookings from under the relevant Wolverhampton conditions?',
  'The licensed operator through whom the driver is authorised to work.',
  'Any person standing in the street.',
  'Another passenger.',
  'A random business.',
  'The driver conditions contain requirements about receiving bookings through the operator.'
);

add(
  'Booking Records',
  'Why should booking information be kept accurate?',
  'Accurate records support safety, accountability and compliance.',
  'It makes the vehicle faster.',
  'It guarantees more tips.',
  'It removes data-protection duties.',
  'Accurate records are important for lawful operation.'
);

add(
  'Booking Records',
  'What should happen to passenger booking information?',
  'It should be handled securely and only used for legitimate purposes.',
  'It should be shared publicly.',
  'It should be sold to friends.',
  'It should be posted online.',
  'Booking information may contain personal data.'
);

add(
  'Booking Records',
  'Why can booking records be useful after a complaint?',
  'They can help establish details about the journey and booking.',
  'They automatically prove the passenger is wrong.',
  'They replace CCTV in every case.',
  'They guarantee a refund.',
  'Records can support an accurate review of events.'
);

add(
  'Booking Records',
  'What should a driver do if they are asked to accept an unrecorded private hire fare?',
  'Decline it and follow the proper booking process.',
  'Accept it immediately.',
  'Hide it from the operator.',
  'Create a fake booking afterwards.',
  'Private hire journeys must be properly booked.'
);

/* =========================================================
   LOCAL KNOWLEDGE — 6
   ========================================================= */

add(
  'Local Knowledge',
  'If you are unsure of the best route, what is a sensible approach?',
  'Use an appropriate navigation tool and communicate clearly with the passenger.',
  'Pretend to know and drive randomly.',
  'Speed until you find the destination.',
  'Ask the passenger to leave.',
  'Safe navigation and communication are preferable to guessing.'
);

add(
  'Local Knowledge',
  'Why is knowledge of local roads useful to a private hire driver?',
  'It helps with safe, efficient journeys and allows the driver to understand local conditions.',
  'It removes the need to follow traffic laws.',
  'It allows speeding.',
  'It guarantees no traffic.',
  'Local knowledge supports professional service.'
);

add(
  'Local Knowledge',
  'What should a driver do if a road is unexpectedly closed?',
  'Choose a safe lawful alternative route and explain the delay if necessary.',
  'Drive through the closure.',
  'Ignore road signs.',
  'Drive on the pavement.',
  'Drivers must respond safely to changing road conditions.'
);

add(
  'Local Knowledge',
  'Why should a driver avoid promising an exact arrival time when traffic is unpredictable?',
  'Traffic and road conditions can change unexpectedly.',
  'Drivers control all traffic.',
  'Passengers cannot understand delays.',
  'Exact times are always legally required.',
  'Honest communication is better than unrealistic promises.'
);

add(
  'Local Knowledge',
  'A passenger gives an unclear destination. What should you do?',
  'Clarify the destination before continuing when it is safe to do so.',
  'Guess the destination.',
  'Drive anywhere.',
  'End the journey immediately.',
  'Clarifying the destination reduces the risk of taking the passenger somewhere unintended.'
);

add(
  'Local Knowledge',
  'What is more important than taking a shortcut?',
  'Using a safe and lawful route appropriate to the journey.',
  'Always choosing the narrowest road.',
  'Driving faster.',
  'Ignoring road restrictions.',
  'Safety and legality should come before convenience.'
);

/* =========================================================
   PROFESSIONAL CONDUCT — 6
   ========================================================= */

add(
  'Professional Conduct',
  'What does professional conduct include?',
  'Being polite, reliable, respectful and compliant with licensing requirements.',
  'Sharing passenger secrets.',
  'Using offensive language.',
  'Ignoring reasonable safety concerns.',
  'Professional behaviour builds trust and supports safe service.'
);

add(
  'Professional Conduct',
  'How should a driver behave toward passengers who are difficult or upset?',
  'Remain calm and professional while maintaining safety.',
  'Become aggressive.',
  'Insult them.',
  'Deliberately prolong the argument.',
  'Professional drivers should manage difficult situations calmly.'
);

add(
  'Professional Conduct',
  'Why should passenger information not be discussed casually with friends?',
  'It may breach privacy and professional responsibilities.',
  'Friends are automatically authorised.',
  'It increases customer trust.',
  'It is required by GDPR.',
  'Passenger information should be treated responsibly.'
);

add(
  'Professional Conduct',
  'What should a driver do if they make a mistake during a journey?',
  'Deal with it honestly and professionally and take appropriate corrective action.',
  'Hide it at all costs.',
  'Blame the passenger.',
  'Create a false record.',
  'Honest and professional handling of mistakes is safer.'
);

add(
  'Professional Conduct',
  'Why is personal presentation important for a professional driver?',
  'It contributes to a professional and respectful service.',
  'It determines the engine size.',
  'It changes the legal fare.',
  'It guarantees a passenger will tip.',
  'Presentation is part of professional customer service.'
);

add(
  'Professional Conduct',
  'What should a driver do if another driver encourages them to break a licence condition?',
  'Follow the correct condition and do not copy the unsafe or unlawful behaviour.',
  'Agree immediately.',
  'Ignore every licensing rule.',
  'Hide the breach.',
  'A driver remains responsible for complying with their own licence conditions.'
);

/* =========================================================
   ACCIDENTS & INCIDENTS — 6
   ========================================================= */

add(
  'Accidents & Incidents',
  'What is the first priority after a road traffic collision?',
  'Make the scene as safe as possible and check whether anyone needs emergency help.',
  'Argue about blame.',
  'Finish the fare first.',
  'Leave immediately.',
  'Safety and emergency assistance take priority after a collision.'
);

add(
  'Accidents & Incidents',
  'Why should a driver avoid admitting blame during an incident before the facts are established?',
  'The immediate priority is safety and appropriate reporting rather than arguing about fault.',
  'Drivers are never responsible for accidents.',
  'Passengers decide fault.',
  'Insurance never matters.',
  'The driver should focus on safety and the correct reporting process.'
);

add(
  'Accidents & Incidents',
  'What should a driver do if someone appears injured after a collision?',
  'Seek appropriate emergency assistance and provide reasonable help without creating further danger.',
  'Ignore them.',
  'Drive away.',
  'Take photos for social media.',
  'Injuries require appropriate urgent attention.'
);

add(
  'Accidents & Incidents',
  'Why is it important to record relevant facts after an incident?',
  'Accurate information can help with reporting, insurance and later investigation.',
  'It guarantees the driver wins every dispute.',
  'It allows the driver to delete evidence.',
  'It replaces emergency assistance.',
  'Factual records can be useful when an incident is reviewed.'
);

add(
  'Accidents & Incidents',
  'If the vehicle becomes unsafe during a journey, what should the driver do?',
  'Stop somewhere safe and deal with the problem before continuing.',
  'Continue regardless.',
  'Ask passengers to push the vehicle while moving.',
  'Drive faster.',
  'An unsafe vehicle should not simply continue operating.'
);

add(
  'Accidents & Incidents',
  'Why should a driver remain calm after an incident?',
  'Calm behaviour helps them make safer decisions and communicate clearly.',
  'It proves there was no accident.',
  'It removes legal responsibilities.',
  'It guarantees no one is injured.',
  'Good decision-making is especially important during incidents.'
);

/* =========================================================
   CHILD EXPLOITATION — 6
   ========================================================= */

add(
  'Child Exploitation',
  'Which could be a warning sign that a child is being exploited?',
  'The child appears frightened, controlled or unusually dependent on an adult.',
  'The child asks for directions.',
  'The child is travelling during the day.',
  'The child has a backpack.',
  'Fear, control and unusual adult influence can be safeguarding warning signs.'
);

add(
  'Child Exploitation',
  'What should a driver do if they suspect a child is being exploited?',
  'Record relevant concerns and report them through the appropriate safeguarding route.',
  'Confront the suspected exploiter alone.',
  'Post photographs online.',
  'Ignore it unless the child asks for help.',
  'Safeguarding concerns should be reported appropriately.'
);

add(
  'Child Exploitation',
  'Why might an exploited child not ask the driver for help?',
  'They may be frightened, controlled, threatened or unsure who they can trust.',
  'They always agree with the exploiter.',
  'They are necessarily responsible for the situation.',
  'Children cannot communicate.',
  'Fear and coercion can prevent a child from asking for help.'
);

add(
  'Child Exploitation',
  'A child is travelling with an adult who answers every question for them and appears controlling. What should this do?',
  'Increase the driver’s safeguarding awareness and prompt appropriate reporting if there are other concerns.',
  'Automatically prove the adult is a criminal.',
  'Be ignored completely.',
  'Be posted online.',
  'A controlling relationship can be a warning sign, although it does not by itself prove exploitation.'
);

add(
  'Child Exploitation',
  'What should a driver avoid when they suspect child exploitation?',
  'Putting the child or themselves at greater risk through confrontation.',
  'Recording factual observations.',
  'Seeking safeguarding advice.',
  'Taking immediate safety concerns seriously.',
  'Drivers should report concerns safely rather than investigate personally.'
);

add(
  'Child Exploitation',
  'Why are taxi and private hire drivers in a useful position to notice safeguarding concerns?',
  'They may encounter children and vulnerable people in different circumstances and locations.',
  'Drivers have police powers.',
  'Drivers are required to investigate crimes.',
  'Drivers automatically know a passenger’s history.',
  'Regular contact with passengers can provide opportunities to notice warning signs.'
);

/* =========================================================
   VALIDATION
   ========================================================= */

console.log(`Loaded ${questions.length} genuine practice questions.`);

const bank = questions;

/*
  Make sure the bank really contains 150 questions.
  If you accidentally edit the bank later, this warning will
  immediately tell you.
*/
if (bank.length !== 150) {
  console.warn(`Question bank contains ${bank.length} questions instead of 150.`);
}

/* =========================================================
   PROGRESS STORAGE
   ========================================================= */

const defaultStore = {
  done: 0,
  correct: 0,
  mistakes: [],
  xp: 0,
  history: []
};

let store;

try {
  store = JSON.parse(
    localStorage.getItem('wolves-progress') || JSON.stringify(defaultStore)
  );
} catch {
  store = { ...defaultStore };
}

store.done = Number(store.done) || 0;
store.correct = Number(store.correct) || 0;
store.xp = Number(store.xp) || 0;
store.mistakes = Array.isArray(store.mistakes) ? store.mistakes : [];
store.history = Array.isArray(store.history) ? store.history : [];

function save() {
  localStorage.setItem('wolves-progress', JSON.stringify(store));
}

/* =========================================================
   SHUFFLE
   ========================================================= */

function shuffle(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function shuffledQuestion(q) {
  const options = q.options.map((text, index) => ({
    text,
    correct: index === q.answer
  }));

  const shuffled = shuffle(options);

  return {
    ...q,
    options: shuffled.map(option => option.text),
    answer: shuffled.findIndex(option => option.correct)
  };
}

/* =========================================================
   INSTALL
   ========================================================= */

let installPrompt = null;

function isStandalone() {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true
  );
}

function updateInstallButton() {
  const button = document.querySelector('#install-app');

  if (button) {
    button.hidden = !installPrompt || isStandalone();
  }
}

async function installApp() {
  if (!installPrompt) return;

  installPrompt.prompt();

  const choice = await installPrompt.userChoice;

  if (choice.outcome === 'accepted') {
    installPrompt = null;
  }

  updateInstallButton();
}

/* =========================================================
   NAVIGATION
   ========================================================= */

function nav() {
  const canInstall = installPrompt && !isStandalone();

  return `
    <nav class="nav">
      <button class="brand" onclick="home()">
        Wolves <span>PHV Prep</span>
      </button>

      <div class="nav-links">
        <button onclick="showTopics()">Study by topic</button>
        <button onclick="showMistakes()">Mistakes</button>
        <button onclick="showProgress()">My progress</button>

        <button
          id="install-app"
          class="install-button"
          ${canInstall ? '' : 'hidden'}
          onclick="installApp()"
        >
          ↓ Install app
        </button>
      </div>
    </nav>
  `;
}

/* =========================================================
   HOME
   ========================================================= */

function home() {
  document.querySelector('#app').innerHTML = `
    <div class="shell">
      ${nav()}

      <section class="hero">
        <div>
          <div class="eyebrow">Wolverhampton private hire</div>

          <h1>
            Practise smart.<br>
            Drive confident.
          </h1>

          <p>
            Prepare for your Wolverhampton Private Hire Driver Assessment
            with focused, confidence-building practice.
          </p>

          <div class="cta">
            <button class="primary" onclick="startPractice()">
              🎯 Quick practice
            </button>

            <button class="secondary" onclick="startMock()">
              📝 Start mock exam
            </button>
          </div>

          <p class="notice">
            Practice questions based on the published Wolverhampton PHV
            Driver Assessment syllabus. Not official Council exam questions.
          </p>
        </div>

        <div class="hero-art">
          <div class="eyebrow" style="color:#ffcf46">
            Your next mock
          </div>

          <div class="mock-card">
            <span class="pill">PASS MARK 75%</span>

            <h3>28-question mock</h3>

            <div class="mock-lines">
              <i></i>
              <i></i>
              <i></i>
            </div>

            <div class="progress">
              <i style="width:68%"></i>
            </div>

            <p style="font-size:13px;color:#65718a">
              30 minutes · random questions
            </p>

            <button class="primary" onclick="startMock()">
              Take it now →
            </button>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="section-head">
          <div>
            <h2>Choose your training</h2>
            <p>Build confidence one question at a time.</p>
          </div>
        </div>

        <div class="menu-grid">

          <button class="menu-card" onclick="startPractice()">
            <span class="icon">🎯</span>
            <b>Quick Practice</b>
            <small>Five random questions</small>
          </button>

          <button class="menu-card" onclick="startMock()">
            <span class="icon">📝</span>
            <b>28-Question Mock</b>
            <small>Timed, exam-style practice</small>
          </button>

          <button class="menu-card" onclick="showTopics()">
            <span class="icon">📚</span>
            <b>Study by Topic</b>
            <small>
              ${bank.length} questions across ${topicInfo.length} subjects
            </small>
          </button>

          <button class="menu-card" onclick="startKey()">
            <span class="icon">⭐</span>
            <b>Key Questions</b>
            <small>Safeguarding, plying & disability</small>
          </button>

          <button class="menu-card" onclick="showMistakes()">
            <span class="icon">❌</span>
            <b>Mistake Review</b>
            <small>${store.mistakes.length} to revisit</small>
          </button>

          <button class="menu-card" onclick="showProgress()">
            <span class="icon">📊</span>
            <b>My Progress</b>
            <small>See your readiness score</small>
          </button>

        </div>
      </section>

      <section class="section">
        <div class="stats">

          <div class="stat">
            <b>${store.xp.toLocaleString()}</b>
            <small>XP earned</small>
          </div>

          <div class="stat">
            <b>${store.done}</b>
            <small>questions completed</small>
          </div>

          <div class="stat">
            <b>
              ${store.done
                ? Math.round((store.correct / store.done) * 100)
                : '—'}%
            </b>
            <small>overall accuracy</small>
          </div>

          <div class="stat">
            <b>${bank.length}</b>
            <small>practice questions</small>
          </div>

        </div>
      </section>
    </div>
  `;
}

/* =========================================================
   TOPICS
   ========================================================= */

function showTopics() {
  document.querySelector('#app').innerHTML = `
    <div class="shell">
      ${nav()}

      <button class="back" onclick="home()">← Home</button>

      <h1 class="screen-title">Study by topic</h1>

      <p style="color:var(--muted);margin-top:-20px;margin-bottom:28px">
        Every number below is calculated from the actual question bank.
      </p>

      <div class="topic-grid">

        ${topicInfo.map(([name, icon]) => {
          const count = bank.filter(q => q.topic === name).length;

          return `
            <button
              class="topic"
              onclick="startPractice('${name.replace(/'/g, "\\'")}')"
            >
              <span>${icon}</span>
              <strong>${name}</strong>
              <small>${count} practice questions</small>
            </button>
          `;
        }).join('')}

      </div>
    </div>
  `;
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
  start: 0,
  timer: null,
  currentQuestion: null
};

function startPractice(topic) {
  let list;

  if (topic) {
    list = shuffle(
      bank.filter(q => q.topic === topic)
    ).slice(0, 10);
  } else {
    list = shuffle(bank).slice(0, 5);
  }

  begin(
    list,
    'practice',
    topic || 'Quick Practice'
  );
}

function startKey() {
  const list = shuffle(
    bank.filter(q =>
      [
        'Safeguarding',
        'Plying for Hire',
        'Disability Awareness'
      ].includes(q.topic)
    )
  ).slice(0, 8);

  begin(list, 'key', 'Key Questions');
}

/* =========================================================
   REALISTIC 28 QUESTION MOCK
   3 safeguarding
   3 plying for hire
   2 disability
   + 20 other topics
   ========================================================= */

function startMock() {
  const keyQuestions = [];

  const keyTopics = [
    'Safeguarding',
    'Safeguarding',
    'Safeguarding',
    'Plying for Hire',
    'Plying for Hire',
    'Plying for Hire',
    'Disability Awareness',
    'Disability Awareness'
  ];

  keyTopics.forEach(topic => {
    const available = bank.filter(q => q.topic === topic);

    if (available.length) {
      keyQuestions.push(
        shuffle(available)[0]
      );
    }
  });

  const usedIds = new Set(
    keyQuestions.map(q => q.id)
  );

  const remaining = shuffle(
    bank.filter(q => !usedIds.has(q.id))
  ).slice(0, 20);

  begin(
    shuffle([...keyQuestions, ...remaining]),
    'mock',
    'Mock Exam'
  );
}

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
    session.timer = setInterval(
      renderTimer,
      1000
    );
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
    `${String(Math.floor(left / 60)).padStart(2, '0')}:` +
    `${String(left % 60).padStart(2, '0')}`;

  if (!left) {
    finish();
  }
}

/* =========================================================
   QUESTION DISPLAY
   ========================================================= */

function renderQuestion() {
  const original = session.list[session.index];

  if (!original) {
    finish();
    return;
  }

  const q = shuffledQuestion(original);

  session.currentQuestion = q;

  const isMock = session.mode === 'mock';

  const progress =
    (session.index / session.list.length) * 100;

  document.querySelector('#app').innerHTML = `
    <div class="shell">
      ${nav()}

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
                  <i style="width:${progress}%"></i>
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
            of ${session.list.length}
          </span>
        </div>

        <h1 class="question">
          ${q.question}
        </h1>

        <div class="answers">

          ${q.options.map((option, i) => `
            <button
              class="answer"
              onclick="answer(${i})"
            >
              <span class="letter">
                ${'ABCD'[i]}
              </span>

              ${option}
            </button>
          `).join('')}

        </div>

        <div id="feedback"></div>

      </div>
    </div>
  `;

  if (isMock) {
    renderTimer();
  }
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
    .forEach((button, i) => {

      button.disabled = true;

      if (i === q.answer) {
        button.classList.add('correct');
      } else if (i === selected) {
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
  } else if (!store.mistakes.includes(q.id)) {
    store.mistakes.push(q.id);
  }

  save();

  const box =
    document.querySelector('#feedback');

  if (!box) return;

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
      <div
        class="feedback ${correct ? '' : 'bad'}"
      >
        <b>
          ${correct ? '✅ Correct!' : '❌ Not quite'}
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

  if (session.index < session.list.length) {
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
    session.answers.filter(x => x.correct).length;

  const total =
    session.list.length;

  const percent =
    total
      ? Math.round((score / total) * 100)
      : 0;

  if (session.mode === 'mock') {
    store.history.unshift({
      score,
      total,
      date: new Date().toLocaleDateString()
    });

    store.history =
      store.history.slice(0, 10);
  }

  save();

  const byTopic = {};

  session.answers.forEach(({ q, correct }) => {

    if (!byTopic[q.topic]) {
      byTopic[q.topic] = [0, 0];
    }

    byTopic[q.topic][1]++;

    if (correct) {
      byTopic[q.topic][0]++;
    }

  });

  document.querySelector('#app').innerHTML = `
    <div class="shell">
      ${nav()}

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
            — ${percent}%
            ${percent >= 75 ? '✅' : '❌'}
          </h2>

          <p>
            ${
              session.mode === 'mock'
                ? 'Pass mark: 75%'
                : 'Keep practising — you’re building the habits that matter.'
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
                .map(([topic, [correct, total]]) => `
                  <tr>
                    <td>${topic}</td>
                    <td>${correct}/${total}</td>
                  </tr>
                `)
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
    bank.filter(q =>
      store.mistakes.includes(q.id)
    );

  document.querySelector('#app').innerHTML = `
    <div class="shell">
      ${nav()}

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
        style="color:var(--muted);
        margin-top:-20px"
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
                style="max-width:280px;
                margin-bottom:22px"
              >
                <div class="stat">
                  <b>${list.length}</b>
                  <small>mistakes to revisit</small>
                </div>
              </div>

              <button
                class="primary"
                onclick="begin(
                  shuffle(bank.filter(q =>
                    store.mistakes.includes(q.id)
                  )),
                  'practice',
                  'Mistake Review'
                )"
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
          (store.correct / store.done) * 100
        )
      : 0;

  const mock = store.history[0];

  const ready = Math.round(
    (accuracy * 0.5) +
    (Math.min(store.done / 80, 1) * 20) +
    (mock
      ? (mock.score / mock.total) * 30
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
      ${nav()}

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
          <i style="width:${Math.min(ready, 100)}%"></i>
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

              <h2>Mock history</h2>

              <table class="score-table">
                <tbody>

                  ${
                    store.history
                      .slice(0, 5)
                      .map(x => `
                        <tr>
                          <td>${x.date}</td>
                          <td>
                            ${x.score}/${x.total}
                            (${Math.round(
                              x.score / x.total * 100
                            )}%)
                          </td>
                        </tr>
                      `)
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

/* =========================================================
   PWA
   ========================================================= */

window.addEventListener(
  'beforeinstallprompt',
  event => {
    event.preventDefault();
    installPrompt = event;
    updateInstallButton();
  }
);

window.addEventListener(
  'appinstalled',
  () => {
    installPrompt = null;
    updateInstallButton();
  }
);

if ('serviceWorker' in navigator) {
  window.addEventListener(
    'load',
    () => {
      const base =
        new URL('./', window.location.href);

      navigator.serviceWorker
        .register(
          new URL('sw.js', base),
          {
            scope: base.pathname
          }
        )
        .catch(() => {});
    }
  );
}

/* =========================================================
   START
   ========================================================= */

home();
