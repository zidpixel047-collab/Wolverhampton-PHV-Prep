/* =========================================================
   WOLVERHAMPTON PHV PREP
   COMPLETE APP JAVASCRIPT
   100 UNIQUE QUESTIONS
   ========================================================= */

const topics = [
  ['Safeguarding', '🛡️', 18],
  ['Plying for Hire', '🚕', 13],
  ['Disability Awareness', '♿', 9],
  ['Vehicle Conditions', '🚗', 8],
  ['Driver Responsibilities', '👤', 8],
  ['Road & Passenger Safety', '🛣️', 7],
  ['Customer Care', '🤝', 5],
  ['County Lines', '🔎', 4],
  ['GDPR & Data Protection', '🔐', 4],
  ['Modern Slavery', '🕊️', 4],
  ['Equality & Diversity', '🌍', 3],
  ['Fares & Payments', '💳', 3],
  ['Licensing & Badges', '🪪', 2],
  ['Lost Property', '🧳', 1],
  ['Suicide Awareness', '💬', 1],
  ['Health & Wellbeing', '💚', 1],
  ['Vehicle Inspections', '🔧', 1],
  ['Smoking & Vaping', '🚭', 1],
  ['Alcohol & Drugs', '⚠️', 1],
  ['Complaints', '📋', 1],
  ['Booking Records', '📖', 1],
  ['Local Knowledge', '📍', 1],
  ['Professional Conduct', '🤝', 1],
  ['Accidents & Incidents', '🚨', 1],
  ['Child Exploitation', '🧒', 1]
];

/* =========================================================
   QUESTION BANK
   Each question:
   [topic, question, correct, distractor1, distractor2, distractor3, explanation]
   ========================================================= */

const questionData = [

/* =========================
   SAFEGUARDING — 18
   ========================= */

['Safeguarding',
 'A passenger tells you that they are frightened to go home. What should you do?',
 'Listen calmly and follow the appropriate safeguarding procedure.',
 'Tell them that personal problems are not your responsibility.',
 'Promise that you will never tell anyone.',
 'Take them somewhere different without informing anyone.',
 'Stay calm, listen, avoid making promises about confidentiality, and report the concern through the correct safeguarding route.'],

['Safeguarding',
 'Why is safeguarding important for private hire drivers?',
 'Drivers may notice concerns because they regularly transport members of the public.',
 'Drivers are expected to investigate crimes themselves.',
 'Drivers are responsible for making every passenger answer personal questions.',
 'Drivers can replace professional safeguarding services.',
 'Drivers can be in a position to notice concerns, but their role is to recognise and report rather than investigate.'],

['Safeguarding',
 'A child appears distressed during a journey. What is the most appropriate approach?',
 'Remain calm, consider their immediate safety and report concerns appropriately.',
 'Question them aggressively until they explain everything.',
 'Ignore the situation unless they complain.',
 'Post about the situation online to ask for advice.',
 'A driver should prioritise safety, avoid unnecessary questioning and use the correct safeguarding process.'],

['Safeguarding',
 'What should you avoid doing when receiving a safeguarding disclosure?',
 'Making promises that you will keep the information completely secret.',
 'Listening carefully.',
 'Recording relevant factual information where required.',
 'Passing the concern to the appropriate person or service.',
 'You should not promise secrecy because safeguarding concerns may need to be shared with appropriate professionals.'],

['Safeguarding',
 'If you suspect a passenger is being controlled by another person, what should you do?',
 'Observe the situation and report genuine concerns through the appropriate route.',
 'Confront the other person immediately.',
 'Demand that the passenger explain everything.',
 'Ignore the situation because you are not a police officer.',
 'Drivers should not put themselves or passengers at unnecessary risk. Concerns should be reported appropriately.'],

['Safeguarding',
 'Which approach is best when speaking to a vulnerable passenger?',
 'Use calm, respectful and clear communication.',
 'Speak loudly so they cannot misunderstand you.',
 'Make decisions for them without listening.',
 'Use technical language wherever possible.',
 'Clear and respectful communication helps passengers feel safe and understood.'],

['Safeguarding',
 'What does safeguarding generally involve?',
 'Protecting people from abuse, neglect, exploitation or avoidable harm.',
 'Checking whether passengers have enough money.',
 'Preventing passengers from making complaints.',
 'Making every passenger provide identification.',
 'Safeguarding is about recognising and responding to risks of abuse, neglect, exploitation and harm.'],

['Safeguarding',
 'A passenger gives you information suggesting they may be at risk. What should you record?',
 'Relevant factual information, avoiding assumptions or unnecessary personal detail.',
 'Your personal opinion about the passenger.',
 'A detailed description of unrelated private information.',
 'Rumours you heard from another passenger.',
 'Accurate factual information is more useful than speculation or unnecessary personal information.'],

['Safeguarding',
 'If a safeguarding concern is urgent and someone appears to be in immediate danger, what should take priority?',
 'Getting appropriate emergency help while keeping yourself and others safe.',
 'Finishing the journey before doing anything.',
 'Posting the situation on social media.',
 'Waiting several days before mentioning it.',
 'Immediate danger requires an appropriate urgent response rather than delaying action.'],

['Safeguarding',
 'Why should a driver avoid investigating a suspected safeguarding case themselves?',
 'They could increase the risk to the person involved or interfere with professional procedures.',
 'Drivers are never allowed to speak to passengers.',
 'Drivers are required to ignore all safeguarding concerns.',
 'Investigation is always illegal for everyone.',
 'Drivers should recognise, respond safely and report rather than conduct their own investigation.'],

['Safeguarding',
 'A passenger asks you to keep a serious safety concern secret. What should you say?',
 'Explain that you may need to share concerns with the appropriate people to keep them safe.',
 'Promise that nobody will ever find out.',
 'Tell them you will publish the information.',
 'Refuse to listen.',
 'Safety concerns may need to be passed to appropriate professionals.'],

['Safeguarding',
 'Which behaviour could be a warning sign of exploitation?',
 'Someone else controls where a passenger goes or speaks for them repeatedly.',
 'A passenger asks for directions.',
 'A passenger checks their phone.',
 'A passenger pays by card.',
 'Controlling behaviour can be a warning sign, particularly when combined with other concerns.'],

['Safeguarding',
 'How should a driver respond if they are unsure whether something is a safeguarding concern?',
 'Seek guidance through the appropriate safeguarding or licensing route.',
 'Automatically ignore it.',
 'Accuse the passenger of being exploited.',
 'Ask another passenger to investigate.',
 'If unsure, seek appropriate professional guidance rather than ignoring or investigating yourself.'],

['Safeguarding',
 'What is the safest way to handle sensitive information about a passenger?',
 'Only share it with people who have a legitimate reason to receive it.',
 'Tell friends because they may have useful advice.',
 'Put it in a public group chat.',
 'Keep it on an unsecured public device.',
 'Sensitive information should be handled securely and shared only when there is a legitimate reason.'],

['Safeguarding',
 'A passenger seems unusually frightened when another person enters the vehicle. What should you avoid?',
 'Escalating the situation by confronting the other person unnecessarily.',
 'Remaining observant.',
 'Considering immediate safety.',
 'Reporting appropriate concerns.',
 'Confrontation can increase risk. A driver should prioritise safety and report concerns appropriately.'],

['Safeguarding',
 'What is an important principle when dealing with a vulnerable passenger?',
 'Treat them with dignity and respect.',
 'Assume they cannot make any decisions.',
 'Speak about them as though they are not present.',
 'Make jokes about their situation.',
 'Vulnerable passengers should be treated respectfully and with dignity.'],

['Safeguarding',
 'What should a driver do if they receive a safeguarding concern from a passenger but the journey has ended?',
 'Record and report the concern through the appropriate process as soon as reasonably possible.',
 'Forget about it because the passenger has left.',
 'Share it with other drivers.',
 'Contact the passenger repeatedly for more information.',
 'The end of the journey does not remove the responsibility to report an appropriate concern.'],

['Safeguarding',
 'Which statement best describes a driver’s safeguarding role?',
 'Recognise possible concerns, act safely and report through the correct channels.',
 'Investigate every suspected crime personally.',
 'Guarantee protection for every passenger.',
 'Decide whether someone is guilty.',
 'Drivers have an important observation and reporting role, not a law-enforcement or investigative role.'],

/* =========================
   PLYING FOR HIRE — 13
   ========================= */

['Plying for Hire',
 'What is the key difference between a private hire vehicle and a hackney carriage?',
 'A private hire journey must generally be pre-booked through a licensed operator.',
 'Private hire vehicles can always pick people up from the street without a booking.',
 'Hackney carriages can never accept street hails.',
 'Private hire drivers can operate without licensing.',
 'Private hire vehicles generally require a booking before the journey can be undertaken.'],

['Plying for Hire',
 'A person approaches a private hire driver in the street asking for a ride. What should the driver do?',
 'Only accept the journey if it has been properly booked through the licensed operator.',
 'Accept immediately because the passenger has offered cash.',
 'Accept if the journey is less than one mile.',
 'Accept if there are no police nearby.',
 'A private hire driver must not simply accept an unbooked street hail.'],

['Plying for Hire',
 'Why is accepting an unbooked private hire journey a problem?',
 'It can amount to unlawful plying for hire and breach licensing requirements.',
 'It automatically makes the journey free.',
 'It means the driver no longer needs insurance.',
 'It changes the vehicle into a bus.',
 'Private hire licensing depends on journeys being properly booked.'],

['Plying for Hire',
 'Who normally makes a private hire booking arrangement?',
 'A licensed private hire operator.',
 'Any passenger standing at the roadside.',
 'Another passenger already inside the vehicle.',
 'A nearby shopkeeper.',
 'Private hire journeys are normally arranged through the licensed operator.'],

['Plying for Hire',
 'A passenger says they booked a journey but cannot remember the driver’s name. What should the driver do?',
 'Confirm the booking details through the proper operator system before proceeding.',
 'Ignore the booking requirement.',
 'Ask the passenger to create a booking after the journey.',
 'Accept the journey only if they pay cash.',
 'The booking should be capable of being verified through the appropriate operator arrangement.'],

['Plying for Hire',
 'Can a private hire driver normally wait at a taxi rank for passengers to approach them?',
 'No, private hire vehicles should not use taxi ranks as though they were hackney carriages.',
 'Yes, whenever the driver has no passengers.',
 'Yes, provided the driver keeps the engine running.',
 'Yes, but only at weekends.',
 'Taxi ranks are not generally for private hire vehicles to use for picking up unbooked passengers.'],

['Plying for Hire',
 'What should a driver do if someone asks them to take a journey but there is no booking?',
 'Explain that the journey must be properly booked before it can be accepted.',
 'Take the passenger and create a booking later.',
 'Take the passenger if they promise to call the operator.',
 'Take the passenger if the destination is nearby.',
 'The booking must exist before the private hire journey is accepted.'],

['Plying for Hire',
 'Why should a driver know whether a journey is properly booked?',
 'It helps ensure the journey complies with private hire licensing requirements.',
 'It guarantees there will be no traffic.',
 'It means the passenger cannot complain.',
 'It removes the need for vehicle checks.',
 'Proper booking is an important part of lawful private hire operation.'],

['Plying for Hire',
 'A friend asks you to give them a private hire journey without making a booking. What should you do?',
 'Follow the same booking requirements that apply to other passengers.',
 'Make an exception because they are a friend.',
 'Accept only if they pay cash.',
 'Accept because private journeys do not need recording.',
 'Licensing requirements apply regardless of whether the passenger is a friend.'],

['Plying for Hire',
 'What is the safest response when a passenger tries to arrange another journey directly with you?',
 'Direct them through the licensed operator and proper booking process.',
 'Agree privately and avoid recording it.',
 'Ask them to pay you directly.',
 'Tell them bookings are unnecessary for repeat customers.',
 'Keeping bookings within the proper operator system helps maintain compliance and accountability.'],

['Plying for Hire',
 'Which action is most likely to breach private hire rules?',
 'Stopping to collect a person who has hailed the vehicle without a prior booking.',
 'Collecting a passenger whose booking is confirmed.',
 'Completing a journey arranged through the operator.',
 'Returning a passenger’s property through the operator.',
 'Street hails are a key distinction between private hire and hackney carriage operation.'],

['Plying for Hire',
 'Why should a private hire driver avoid advertising themselves as available for immediate street pickup?',
 'It could suggest that they are unlawfully plying for hire.',
 'Advertising is never allowed for any business.',
 'Passengers are not allowed to choose drivers.',
 'Private hire vehicles cannot display any information.',
 'Private hire drivers must avoid presenting themselves as available for unbooked street hires.'],

['Plying for Hire',
 'A passenger says they will pay extra if you ignore the booking requirement. What should you do?',
 'Refuse the unbooked journey and explain that it must be properly booked.',
 'Accept because the higher fare makes it worthwhile.',
 'Accept if the passenger signs a note.',
 'Accept if the trip is under ten minutes.',
 'Payment does not override private hire booking requirements.'],

/* =========================
   DISABILITY AWARENESS — 9
   ========================= */

['Disability Awareness',
 'What is the appropriate attitude toward a passenger with a disability?',
 'Provide the same respectful service while making reasonable adjustments where required.',
 'Assume they always need help.',
 'Speak only to their companion.',
 'Refuse journeys that require extra assistance.',
 'Passengers with disabilities should receive respectful and appropriate service.'],

['Disability Awareness',
 'What should a driver do before physically helping a disabled passenger?',
 'Ask whether they would like assistance and follow their instructions where appropriate.',
 'Move them immediately without asking.',
 'Ask another passenger to decide.',
 'Assume what they need based on their appearance.',
 'The passenger should be given the opportunity to explain what assistance they need.'],

['Disability Awareness',
 'Why should a driver not assume that every disabled passenger needs assistance?',
 'People have different needs and may prefer to do things independently.',
 'Disabled passengers are never allowed assistance.',
 'Assistance is always against the law.',
 'Drivers should not communicate with disabled passengers.',
 'Individual needs differ, so respectful communication is important.'],

['Disability Awareness',
 'What should a driver do if a passenger uses a mobility aid?',
 'Allow appropriate space and handle the aid carefully when assistance is required.',
 'Move it without telling the passenger.',
 'Refuse the passenger because the aid takes space.',
 'Leave the mobility aid outside.',
 'Mobility aids should be treated respectfully and handled safely.'],

['Disability Awareness',
 'How should a driver communicate with a passenger who has a hearing impairment?',
 'Use clear communication and adapt to the passenger’s preferred method where possible.',
 'Shout directly into their ear.',
 'Speak only to their companion.',
 'Assume they cannot communicate.',
 'Communication should be clear and adapted to the individual.'],

['Disability Awareness',
 'How should a driver communicate with a passenger who has a visual impairment?',
 'Describe relevant information clearly and ask whether they need assistance.',
 'Grab their arm without warning.',
 'Assume they know exactly where the vehicle is.',
 'Speak only to another person accompanying them.',
 'Clear verbal information and asking before assisting are appropriate.'],

['Disability Awareness',
 'A passenger has an assistance dog. What should a driver do?',
 'Follow the legal requirements for assistance dogs and only refuse where a lawful exemption applies.',
 'Automatically refuse the journey.',
 'Charge an extra animal fee.',
 'Ask the passenger to leave the dog outside.',
 'Assistance dogs have specific legal protections and drivers should follow the applicable requirements.'],

['Disability Awareness',
 'Why should a driver avoid making jokes about disability?',
 'It can be disrespectful and may amount to discriminatory behaviour.',
 'Passengers always find disability jokes funny.',
 'Professional drivers are expected to entertain passengers.',
 'Jokes are acceptable if no one complains.',
 'Respectful treatment is an important part of professional service and equality.'],

['Disability Awareness',
 'What should a driver do if they are unsure how to assist a disabled passenger?',
 'Ask the passenger what assistance would be useful and act safely.',
 'Guess and act immediately.',
 'Refuse the journey.',
 'Ask strangers to take over.',
 'The passenger is usually best placed to explain what assistance they need.'],

/* =========================
   VEHICLE CONDITIONS — 8
   ========================= */

['Vehicle Conditions',
 'What should a driver do before starting a shift?',
 'Carry out the required safety checks and make sure the vehicle is suitable for use.',
 'Wait until the first passenger reports a problem.',
 'Only check the fuel level.',
 'Only clean the outside of the vehicle.',
 'Pre-use checks help identify safety problems before passengers are carried.'],

['Vehicle Conditions',
 'Which item should be checked as part of a basic vehicle safety check?',
 'Tyres and their condition.',
 'The passenger’s preferred radio station.',
 'The colour of the driver’s phone case.',
 'The number of apps on the driver’s phone.',
 'Tyres are an important safety component and should be checked appropriately.'],

['Vehicle Conditions',
 'What should happen if a serious safety defect is discovered before a journey?',
 'The vehicle should not be used until the defect is dealt with appropriately.',
 'The driver should continue slowly.',
 'The passenger should decide.',
 'The defect should be hidden from the operator.',
 'A serious safety defect should be resolved before the vehicle is used.'],

['Vehicle Conditions',
 'Why should a licensed vehicle be kept clean?',
 'It contributes to passenger comfort, hygiene and professional standards.',
 'It makes the engine use less fuel.',
 'It removes the need for maintenance.',
 'It guarantees a higher fare.',
 'Cleanliness is part of providing an appropriate professional service.'],

['Vehicle Conditions',
 'What should a driver do if a warning light indicates a serious mechanical problem?',
 'Stop safely and seek appropriate assistance rather than continuing if it is unsafe.',
 'Cover the warning light.',
 'Drive faster to finish the journey.',
 'Ask the passenger to repair it.',
 'Serious warning signs should not be ignored.'],

['Vehicle Conditions',
 'Why are functioning seat belts important?',
 'They help protect occupants during a collision.',
 'They improve mobile phone reception.',
 'They reduce fuel consumption.',
 'They replace airbags.',
 'Seat belts are a fundamental vehicle safety feature.'],

['Vehicle Conditions',
 'What should a driver do if a windscreen becomes seriously damaged?',
 'Assess the safety issue and do not continue using the vehicle if it is unsafe.',
 'Ignore it until the end of the month.',
 'Cover it with paper while driving.',
 'Ask passengers to hold it together.',
 'Damage affecting visibility or structural safety should be dealt with appropriately.'],

['Vehicle Conditions',
 'What is the best approach to vehicle maintenance?',
 'Follow required checks, servicing and repair arrangements consistently.',
 'Only repair faults after an inspection catches them.',
 'Repair only cosmetic damage.',
 'Avoid servicing to reduce costs.',
 'Regular maintenance helps keep the vehicle safe and compliant.'],

/* =========================
   DRIVER RESPONSIBILITIES — 8
   ========================= */

['Driver Responsibilities',
 'What is a key responsibility of a licensed PHV driver?',
 'Operate safely and comply with the conditions of their licence.',
 'Choose which licensing rules they want to follow.',
 'Allow passengers to control the vehicle.',
 'Ignore defects during busy periods.',
 'Drivers are responsible for safe and compliant operation.'],

['Driver Responsibilities',
 'If you do not understand a licensing requirement, what should you do?',
 'Check the current official guidance or ask the appropriate licensing authority.',
 'Invent an interpretation.',
 'Ask a passenger to decide.',
 'Ignore the requirement.',
 'Official guidance is the safest source when a licensing requirement is unclear.'],

['Driver Responsibilities',
 'Why should a driver keep required documentation available?',
 'It helps demonstrate that the driver and vehicle are operating lawfully.',
 'It guarantees every passenger will leave a tip.',
 'It removes the need for insurance.',
 'It allows the driver to avoid inspections.',
 'Required documentation supports lawful operation and checks.'],

['Driver Responsibilities',
 'What should a driver do if their licence conditions change?',
 'Make sure they understand and comply with the updated requirements.',
 'Continue using the old rules indefinitely.',
 'Ask passengers whether the change matters.',
 'Ignore the change until a complaint is made.',
 'Drivers are responsible for keeping up with applicable requirements.'],

['Driver Responsibilities',
 'What should a driver do if they are asked to break a licensing rule by an operator?',
 'Refuse to break the rule and seek appropriate guidance if necessary.',
 'Follow the instruction because the operator is always responsible.',
 'Break it if the passenger agrees.',
 'Break it if the journey is profitable.',
 'A driver remains responsible for complying with applicable requirements.'],

['Driver Responsibilities',
 'Why is professional record keeping important?',
 'It provides evidence and accountability for relevant journeys and incidents.',
 'It allows drivers to collect unnecessary personal information.',
 'It replaces the need for a licence.',
 'It prevents passengers from making complaints.',
 'Accurate records support accountability and compliance.'],

['Driver Responsibilities',
 'What should a driver do after receiving a legitimate licensing instruction?',
 'Follow it and seek clarification if any part is unclear.',
 'Ignore it until renewal.',
 'Ask passengers to vote on it.',
 'Change the instruction themselves.',
 'Drivers should comply with official requirements and clarify uncertainty.'],

['Driver Responsibilities',
 'Which behaviour best demonstrates responsibility?',
 'Planning journeys, following safety rules and dealing with problems promptly.',
 'Ignoring problems until someone complains.',
 'Taking shortcuts through licensing requirements.',
 'Working while too tired to drive safely.',
 'Responsible driving involves preparation, compliance and safe decision-making.'],

/* =========================
   ROAD & PASSENGER SAFETY — 7
   ========================= */

['Road & Passenger Safety',
 'A passenger asks you to stop somewhere dangerous. What should you do?',
 'Explain the concern and stop at the nearest safe and lawful location.',
 'Stop immediately wherever they request.',
 'Stop in the middle of a junction.',
 'Ask them to leave while the vehicle is moving.',
 'Passenger requests should not override road safety.'],

['Road & Passenger Safety',
 'What should a driver do before moving away from the kerb?',
 'Check mirrors and surroundings and move only when it is safe.',
 'Move immediately after closing the door.',
 'Rely entirely on the passenger.',
 'Accelerate before checking mirrors.',
 'Observation before moving is a basic road-safety principle.'],

['Road & Passenger Safety',
 'Why should passengers be encouraged to wear seat belts where required?',
 'Seat belts reduce the risk of serious injury in a collision.',
 'Seat belts make journeys shorter.',
 'Seat belts improve navigation.',
 'Seat belts prevent all accidents.',
 'Seat belts reduce injury risk but do not prevent every collision.'],

['Road & Passenger Safety',
 'What should you do if a passenger distracts you while driving?',
 'Remain focused on driving and deal with the request safely.',
 'Turn around to face them.',
 'Use your phone to answer them.',
 'Drive faster so the distraction ends sooner.',
 'The driver must maintain concentration and control of the vehicle.'],

['Road & Passenger Safety',
 'What is a safe response to heavy traffic causing a delay?',
 'Remain patient and drive within the rules rather than taking unsafe shortcuts.',
 'Speed to recover the lost time.',
 'Use pavements where possible.',
 'Ignore traffic signals.',
 'Traffic delays do not justify unsafe or unlawful driving.'],

['Road & Passenger Safety',
 'When should a driver use a mobile phone while driving?',
 'Only when it can legally and safely be used without compromising control of the vehicle.',
 'Whenever a passenger asks.',
 'Whenever traffic is slow.',
 'Whenever the phone is within reach.',
 'Drivers must comply with mobile-phone laws and avoid distraction.'],

['Road & Passenger Safety',
 'What should a driver do if a passenger becomes disruptive while the vehicle is moving?',
 'Prioritise safe control of the vehicle and deal with the situation without unnecessary escalation.',
 'Argue while continuing to drive.',
 'Stop in a dangerous location.',
 'Threaten the passenger.',
 'Safety and de-escalation should come before winning an argument.'],

/* =========================
   CUSTOMER CARE — 5
   ========================= */

['Customer Care',
 'A passenger complains about a delay caused by traffic. What is the best response?',
 'Acknowledge the frustration, remain polite and explain the situation calmly.',
 'Argue that the passenger is wrong.',
 'Ignore them for the rest of the journey.',
 'Tell them they should have walked.',
 'Professional communication can reduce tension and maintain good customer service.'],

['Customer Care',
 'What does good customer service involve?',
 'Being polite, reliable, respectful and clear with passengers.',
 'Agreeing to every request regardless of safety.',
 'Allowing passengers to break rules.',
 'Discussing other passengers with them.',
 'Good customer service must still operate within safety and legal requirements.'],

['Customer Care',
 'A passenger is confused about where they are being dropped off. What should you do?',
 'Communicate clearly and confirm the destination safely.',
 'Ignore the confusion.',
 'Tell them to use a map while you drive.',
 'Change the destination without asking.',
 'Clear communication helps prevent misunderstandings.'],

['Customer Care',
 'What should a driver do if a passenger is rude?',
 'Remain professional and avoid escalating the situation.',
 'Insult them back.',
 'Threaten them.',
 'Drive dangerously to end the journey faster.',
 'Professionalism is especially important during difficult interactions.'],

['Customer Care',
 'Why is clear communication important during a journey?',
 'It helps prevent misunderstandings and supports a positive passenger experience.',
 'It allows the driver to avoid all responsibilities.',
 'It guarantees the passenger will tip.',
 'It means road rules no longer apply.',
 'Clear communication supports safety and customer service.'],

/* =========================
   COUNTY LINES — 4
   ========================= */

['County Lines',
 'Which situation may indicate county lines exploitation?',
 'A person appears controlled by others and is repeatedly travelling under suspicious circumstances.',
 'A passenger asks for a receipt.',
 'A passenger carries an umbrella.',
 'A passenger uses contactless payment.',
 'No single sign proves exploitation, but controlling behaviour and unusual travel can be warning signs.'],

['County Lines',
 'Why might a private hire driver encounter county lines concerns?',
 'Vehicles can be used to transport vulnerable people between locations.',
 'Drivers are responsible for investigating organised crime.',
 'County lines only happens on public buses.',
 'Private hire vehicles cannot carry young people.',
 'Transport can form part of exploitation, so drivers should remain alert to warning signs.'],

['County Lines',
 'What should a driver do if they suspect exploitation?',
 'Report concerns through the appropriate safeguarding route without putting anyone at unnecessary risk.',
 'Confront suspected criminals.',
 'Try to investigate the network personally.',
 'Post the suspected person’s details online.',
 'Safe reporting is preferable to confrontation or amateur investigation.'],

['County Lines',
 'Which combination could be concerning?',
 'A vulnerable person being directed by another person and appearing frightened or controlled.',
 'A passenger asking for directions.',
 'A passenger carrying shopping bags.',
 'A passenger travelling during the daytime.',
 'Multiple concerning indicators together can warrant reporting.'],

/* =========================
   GDPR — 4
   ========================= */

['GDPR & Data Protection',
 'What is the safest way to handle passenger personal information?',
 'Keep it secure and use it only for a legitimate purpose.',
 'Share it with friends.',
 'Post it publicly.',
 'Collect as much information as possible without a reason.',
 'Personal information should be handled lawfully, securely and only when needed.'],

['GDPR & Data Protection',
 'Why should passenger information not be discussed casually with friends?',
 'It may breach privacy and data-protection responsibilities.',
 'Friends are always legally responsible for the information.',
 'Passengers cannot have privacy rights.',
 'Drivers must publish all journey information.',
 'Personal data should not be shared without a legitimate reason.'],

['GDPR & Data Protection',
 'What should happen to personal information that is no longer needed?',
 'It should be handled according to the applicable retention and disposal requirements.',
 'It should automatically be posted online.',
 'It should always be kept forever.',
 'It should be sold.',
 'Data should not be retained indefinitely without a valid reason.'],

['GDPR & Data Protection',
 'What is an example of personal data?',
 'Information that can identify or relate to an individual passenger.',
 'The weather forecast.',
 'A public road sign.',
 'The colour of the vehicle.',
 'Personal data can include information connected to an identifiable individual.'],

/* =========================
   MODERN SLAVERY — 4
   ========================= */

['Modern Slavery',
 'What may be a warning sign of modern slavery?',
 'A person appears controlled, frightened or unable to speak freely about their circumstances.',
 'A passenger asks for a receipt.',
 'A passenger carries luggage.',
 'A passenger checks the time.',
 'Control, fear and restricted freedom can be indicators of exploitation.'],

['Modern Slavery',
 'What should a driver avoid doing if they suspect modern slavery?',
 'Confronting a suspected controller in a way that could increase danger.',
 'Remaining observant.',
 'Reporting concerns appropriately.',
 'Prioritising immediate safety.',
 'Confrontation can increase risk to the potential victim and driver.'],

['Modern Slavery',
 'Why might a potential victim of exploitation not ask directly for help?',
 'They may be frightened, controlled or unaware of what support is available.',
 'They are always pretending.',
 'They are legally unable to speak.',
 'They never want help.',
 'Fear and control can prevent victims from openly asking for help.'],

['Modern Slavery',
 'What is the appropriate role of a driver when concerned about exploitation?',
 'Recognise signs, keep people safe where possible and report concerns appropriately.',
 'Conduct an investigation.',
 'Interrogate the passenger.',
 'Publicly identify the suspected offender.',
 'Drivers can play an important role in recognising and reporting concerns.'],

/* =========================
   EQUALITY — 3
   ========================= */

['Equality & Diversity',
 'How should passengers be treated?',
 'Fairly, respectfully and without unlawful discrimination.',
 'According to their appearance.',
 'According to how much they tip.',
 'Only if they have the same background as the driver.',
 'Professional service should be fair and respectful.'],

['Equality & Diversity',
 'What is discrimination?',
 'Treating someone unfairly because of a protected characteristic or another unlawful reason.',
 'Giving everyone the same route.',
 'Offering a passenger a receipt.',
 'Checking a booking.',
 'Discrimination can involve unfair treatment connected to protected characteristics.'],

['Equality & Diversity',
 'Why is inclusive service important?',
 'Passengers should be able to access services respectfully and fairly.',
 'It means safety rules do not apply.',
 'It means drivers must accept every request.',
 'It means passengers can choose which laws apply.',
 'Inclusion means fair treatment while maintaining appropriate safety and legal requirements.'],

/* =========================
   FARES & PAYMENTS — 3
   ========================= */

['Fares & Payments',
 'How should a private hire fare normally be handled?',
 'According to the booking and operator arrangements applicable to the journey.',
 'By guessing the price at the end.',
 'By changing the fare whenever the passenger complains.',
 'Only through cash.',
 'The fare should follow the applicable booking and operator arrangements.'],

['Fares & Payments',
 'A passenger disputes a charge. What should the driver do?',
 'Remain calm and explain the appropriate process for resolving the fare dispute.',
 'Threaten the passenger.',
 'Take their belongings as payment.',
 'Change the price without explanation.',
 'Fare disputes should be handled professionally through the appropriate process.'],

['Fares & Payments',
 'Why is accurate payment information important?',
 'It helps prevent disputes and supports transparent transactions.',
 'It allows the driver to charge different passengers randomly.',
 'It removes the need for bookings.',
 'It guarantees every payment is cash.',
 'Clear payment arrangements help reduce misunderstandings.'],

/* =========================
   LICENSING — 2
   ========================= */

['Licensing & Badges',
 'What should a driver do if their driver badge is lost?',
 'Report the loss promptly and follow the licensing authority’s replacement procedure.',
 'Borrow another driver’s badge.',
 'Continue indefinitely without reporting it.',
 'Make a replacement at home.',
 'Lost identification should be reported and replaced through the official process.'],

['Licensing & Badges',
 'Why must a driver display or carry required licensing identification correctly?',
 'It helps passengers and enforcement officers identify the licensed driver.',
 'It makes the vehicle faster.',
 'It replaces vehicle insurance.',
 'It guarantees a passenger tip.',
 'Licensing identification provides transparency and supports enforcement.'],

/* =========================
   ONE-QUESTION TOPICS
   ========================= */

['Lost Property',
 'A passenger leaves a phone in your vehicle. What should you do?',
 'Keep it secure and follow the appropriate lost-property procedure.',
 'Use it to contact their friends.',
 'Sell it immediately.',
 'Leave it on the pavement.',
 'Lost property should be secured and handled through the correct process.'],

['Suicide Awareness',
 'A passenger expresses serious concern about their own safety. What is an appropriate response?',
 'Stay calm, listen without judgement and seek appropriate urgent help if there is immediate danger.',
 'Tell them to simply forget about it.',
 'Promise to keep every concern secret.',
 'Leave them somewhere unsafe.',
 'The priority is calm support and appropriate help, especially where immediate danger exists.'],

['Health & Wellbeing',
 'You feel too tired to drive safely. What should you do?',
 'Stop working and rest before driving again.',
 'Drink caffeine and continue regardless.',
 'Drive faster to finish sooner.',
 'Ignore the tiredness.',
 'Fatigue can seriously affect driving ability and should not be ignored.'],

['Vehicle Inspections',
 'Why are formal vehicle inspections important?',
 'They help identify whether a vehicle meets required safety and licensing standards.',
 'They are only about the colour of the vehicle.',
 'They guarantee the vehicle will never break down.',
 'They replace daily safety checks.',
 'Formal inspections help assess safety and compliance but do not remove the need for routine checks.'],

['Smoking & Vaping',
 'What is the appropriate approach to smoking or vaping in a licensed vehicle?',
 'Maintain the required smoke-free environment and do not allow prohibited smoking or vaping.',
 'Allow it if the passenger opens a window.',
 'Allow it only on short journeys.',
 'Allow the driver to vape whenever traffic is slow.',
 'Licensed vehicles must comply with applicable smoke-free requirements.'],

['Alcohol & Drugs',
 'What is the safest rule regarding alcohol, drugs and driving?',
 'Never drive while impaired by alcohol or drugs.',
 'Drive slowly if impaired.',
 'Only avoid impairment on long journeys.',
 'Ask passengers whether you seem fit to drive.',
 'Driving while impaired creates serious risks to passengers and other road users.'],

['Complaints',
 'A passenger wants to make a complaint. What should you do?',
 'Remain courteous and explain the appropriate complaints procedure.',
 'Argue until they stop complaining.',
 'Threaten to refuse all future bookings.',
 'Take their phone away.',
 'Passengers should be able to use the appropriate complaints process without intimidation.'],

['Booking Records',
 'Why are private hire booking records important?',
 'They provide evidence that journeys were properly booked and support accountability.',
 'They replace the driver’s licence.',
 'They are only used for advertising.',
 'They allow passenger information to be shared freely.',
 'Booking records are an important part of accountability and lawful operation.'],

['Local Knowledge',
 'If you are unsure of the best route, what should you do?',
 'Use an appropriate navigation method and communicate calmly with the passenger.',
 'Pretend you know the route.',
 'Drive randomly until you recognise something.',
 'Speed to make up lost time.',
 'Navigation tools can assist, while clear communication helps manage expectations.'],

['Professional Conduct',
 'Which behaviour best demonstrates professional conduct?',
 'Being polite, reliable, respectful and appropriately presented.',
 'Discussing passenger information with friends.',
 'Using offensive language with difficult passengers.',
 'Ignoring reasonable passenger concerns.',
 'Professional conduct includes respectful behaviour and appropriate standards.'],

['Accidents & Incidents',
 'After a road traffic incident, what should be the immediate priority?',
 'Make the area as safe as possible and check whether anyone needs emergency assistance.',
 'Continue the journey immediately.',
 'Argue about who caused the collision.',
 'Leave without dealing with the situation.',
 'Safety and appropriate emergency assistance should come first after an incident.'],

['Child Exploitation',
 'A child appears frightened and another adult controls all of their conversation. What should you do?',
 'Remain alert and report appropriate safeguarding concerns through the correct route.',
 'Accuse the adult loudly in front of everyone.',
 'Take photographs and post them online.',
 'Ignore it because you cannot be certain.',
 'Drivers should report genuine concerns without escalating the situation or exposing the child.']

];

/* =========================================================
   BUILD QUESTION BANK
   ========================================================= */

const bank = questionData.map((item, index) => {
  const [
    topic,
    question,
    correct,
    wrong1,
    wrong2,
    wrong3,
    explanation
  ] = item;

  const topicInfo = topics.find(t => t[0] === topic);

  return {
    id: `Q-${index + 1}`,
    topic,
    icon: topicInfo ? topicInfo[1] : '📚',
    question,
    options: [correct, wrong1, wrong2, wrong3],
    answer: 0,
    explanation
  };
});

/* Make sure the bank is exactly 100 questions. */
console.assert(
  bank.length === 100,
  `Question bank error: expected 100 questions, got ${bank.length}`
);

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
    localStorage.getItem('wolves-progress') ||
    JSON.stringify(defaultStore)
  );

  store.done = Number(store.done) || 0;
  store.correct = Number(store.correct) || 0;
  store.xp = Number(store.xp) || 0;
  store.mistakes = Array.isArray(store.mistakes) ? store.mistakes : [];
  store.history = Array.isArray(store.history) ? store.history : [];
} catch {
  store = { ...defaultStore };
}

function save() {
  localStorage.setItem(
    'wolves-progress',
    JSON.stringify(store)
  );
}

/* =========================================================
   SHUFFLING
   ========================================================= */

function shuffle(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

/*
  Correct answer is tagged BEFORE shuffling.
  This prevents the old bug where the correct answer
  stayed permanently in position A.
*/

function shuffledQuestion(question) {
  const options = question.options.map((text, index) => ({
    text,
    correct: index === question.answer
  }));

  const shuffled = shuffle(options);

  return {
    ...question,
    options: shuffled.map(option => option.text),
    answer: shuffled.findIndex(option => option.correct)
  };
}

/* =========================================================
   PWA INSTALL
   ========================================================= */

let installPrompt = null;

function isStandalone() {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true
  );
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

function updateInstallButton() {
  const button = document.querySelector('#install-app');

  if (button) {
    button.hidden = !installPrompt || isStandalone();
  }
}

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  installPrompt = event;
  updateInstallButton();
});

window.addEventListener('appinstalled', () => {
  installPrompt = null;
  updateInstallButton();
});

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
            Prepare for your Wolverhampton Private Hire Driver
            Assessment with focused, confidence-building practice.
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
            Practice questions based on the published Wolverhampton
            PHV Driver Assessment syllabus. Not official Council exam questions.
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
              ${bank.length} questions across ${topics.length} subjects
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
              ${
                store.done
                  ? Math.round((store.correct / store.done) * 100)
                  : '—'
              }%
            </b>
            <small>overall accuracy</small>
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

      <button class="back" onclick="home()">
        ← Home
      </button>

      <h1 class="screen-title">
        Study by topic
      </h1>

      <p style="color:var(--muted);margin-top:-20px;margin-bottom:28px">
        Choose a subject area from the current published syllabus.
      </p>

      <div class="topic-grid">

        ${topics.map(([name, icon, count]) => `
          <button
            class="topic"
            onclick="startPractice(${JSON.stringify(name)})"
          >
            <span>${icon}</span>
            <strong>${name}</strong>
            <small>${count} practice questions</small>
          </button>
        `).join('')}

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

/* =========================================================
   PRACTICE
   ========================================================= */

function startPractice(topic) {
  let list;

  if (topic) {
    list = shuffle(
      bank.filter(question => question.topic === topic)
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

/* =========================================================
   KEY QUESTIONS
   ========================================================= */

function startKey() {
  const keyTopics = [
    'Safeguarding',
    'Plying for Hire',
    'Disability Awareness'
  ];

  const list = shuffle(
    bank.filter(question =>
      keyTopics.includes(question.topic)
    )
  ).slice(0, 8);

  begin(
    list,
    'key',
    'Key Questions'
  );
}

/* =========================================================
   MOCK
   ========================================================= */

function startMock() {

  const requiredTopics = [
    'Safeguarding',
    'Safeguarding',
    'Safeguarding',
    'Plying for Hire',
    'Plying for Hire',
    'Plying for Hire',
    'Disability Awareness',
    'Disability Awareness'
  ];

  let list = [];

  requiredTopics.forEach(topic => {
    const available = bank.filter(
      question => question.topic === topic
    );

    if (available.length) {
      list.push(
        shuffle(available)[0]
      );
    }
  });

  const remaining = shuffle(
    bank.filter(
      question => !list.some(
        selected => selected.id === question.id
      )
    )
  );

  list = list.concat(
    remaining.slice(0, 28 - list.length)
  );

  begin(
    shuffle(list),
    'mock',
    'Mock Exam'
  );
}

/* =========================================================
   BEGIN SESSION
   ========================================================= */

function begin(list, mode, title) {

  if (!list || !list.length) {
    alert('There are no questions available for this section.');
    return;
  }

  if (session.timer) {
    clearInterval(session.timer);
  }

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
    1800 -
    Math.floor(
      (Date.now() - session.start) / 1000
    )
  );

  el.textContent =
    `${String(Math.floor(left / 60)).padStart(2, '0')}:` +
    `${String(left % 60).padStart(2, '0')}`;

  if (left === 0) {
    finish();
  }
}

/* =========================================================
   RENDER QUESTION
   ========================================================= */

function renderQuestion() {

  const original =
    session.list[session.index];

  const q =
    shuffledQuestion(original);

  session.currentQuestion = q;

  const isMock =
    session.mode === 'mock';

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

  store.done += 1;

  store.xp += correct ? 10 : 2;

  if (correct) {
    store.correct += 1;
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

  session.index += 1;

  if (
    session.index <
    session.list.length
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

  if (!session.list.length) {
    home();
    return;
  }

  const score =
    session.answers.filter(
      answer => answer.correct
    ).length;

  const total =
    session.list.length;

  const percent =
    Math.round((score / total) * 100);

  if (session.mode === 'mock') {

    store.history.unshift({
      score,
      total,
      date: new Date().toLocaleDateString()
    });

    store.history =
      store.history.slice(0, 20);
  }

  save();

  const byTopic = {};

  session.answers.forEach(
    ({ q, correct }) => {

      if (!byTopic[q.topic]) {
        byTopic[q.topic] = [0, 0];
      }

      byTopic[q.topic][1] += 1;

      if (correct) {
        byTopic[q.topic][0] += 1;
      }
    }
  );

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
                ? 'Pass mark: 21 / 28 (75%)'
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

            ${Object.entries(byTopic)
              .map(([topic, result]) => `
                <tr>
                  <td>${topic}</td>
                  <td>
                    ${result[0]}/${result[1]}
                  </td>
                </tr>
              `)
              .join('')}

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
    bank.filter(question =>
      store.mistakes.includes(question.id)
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
        style="
          color:var(--muted);
          margin-top:-20px;
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
                  margin-bottom:22px;
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
                Start practising and any wrong answers
                will appear here.
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

  const mock =
    store.history.length
      ? store.history[0]
      : null;

  const practiceScore =
    Math.min(
      store.done / 80,
      1
    ) * 20;

  const accuracyScore =
    accuracy * 0.5;

  const mockScore =
    mock
      ? (mock.score / mock.total) * 30
      : 0;

  const ready =
    Math.min(
      100,
      Math.round(
        accuracyScore +
        practiceScore +
        mockScore
      )
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
          Readiness meter
        </div>

        <h2>
          ${ready}% — ${status}
        </h2>

        <p>
          Based on your recent accuracy,
          completed practice and latest mock score.
        </p>

        <div class="progress">
          <i style="width:${ready}%"></i>
        </div>

      </div>

      <section class="section">

        <div class="stats">

          <div class="stat">
            <b>${store.done}</b>
            <small>
              questions completed
            </small>
          </div>

          <div class="stat">
            <b>${accuracy}%</b>
            <small>
              overall accuracy
            </small>
          </div>

          <div class="stat">
            <b>${store.mistakes.length}</b>
            <small>
              in mistake bank
            </small>
          </div>

          <div class="stat">
            <b>
              ${
                mock
                  ? `${mock.score}/${mock.total}`
                  : '—'
              }
            </b>
            <small>
              latest mock
            </small>
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

                  ${store.history
                    .slice(0, 5)
                    .map(mockResult => `
                      <tr>
                        <td>
                          ${mockResult.date}
                        </td>

                        <td>
                          ${mockResult.score}/${mockResult.total}
                          (
                            ${Math.round(
                              mockResult.score /
                              mockResult.total *
                              100
                            )}%
                          )
                        </td>
                      </tr>
                    `)
                    .join('')}

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
   SERVICE WORKER / PWA
   ========================================================= */

if ('serviceWorker' in navigator) {

  window.addEventListener(
    'load',
    () => {

      const base =
        new URL(
          './',
          window.location.href
        );

      navigator.serviceWorker
        .register(
          new URL(
            'sw.js',
            base
          ), {
            scope: base.pathname
          }
        )
        .catch(() => {});

    }
  );
}

/* =========================================================
   START APP
   ========================================================= */

home();
