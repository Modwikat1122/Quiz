/**
 * DWIKAT NURSING HUB — Question Bank
 * Structured MCQ Database
 * Format: { id, level, subject, question, options, correct_answer, rationale }
 */

const QUESTION_BANK = [

  // ============================================================
  // BACHELOR — FUNDAMENTALS
  // ============================================================
  {
    id: "B-F-001", level: "Bachelor", subject: "Fundamentals",
    question: "When performing hand hygiene before a clean/aseptic procedure, the WHO recommends scrubbing for at least:",
    options: ["10 seconds", "20 seconds", "40 seconds", "60 seconds"],
    correct_answer: "20 seconds",
    rationale: "The WHO 'How to Handrub' technique recommends 20–30 seconds for alcohol-based hand rub. This duration is sufficient to reduce transient microorganisms on hand surfaces."
  },
  {
    id: "B-F-002", level: "Bachelor", subject: "Fundamentals",
    question: "A nurse is preparing to administer an intramuscular injection to an adult. The most appropriate site to minimize risk of nerve injury is:",
    options: ["Deltoid muscle", "Ventrogluteal site", "Dorsogluteal site", "Vastus lateralis"],
    correct_answer: "Ventrogluteal site",
    rationale: "The ventrogluteal site is the preferred IM injection site for adults because it is free of major nerves and blood vessels, has a thick muscle mass, and is well-defined by bony landmarks."
  },
  {
    id: "B-F-003", level: "Bachelor", subject: "Fundamentals",
    question: "The correct sequence for donning personal protective equipment (PPE) is:",
    options: [
      "Gown → Mask → Goggles → Gloves",
      "Gloves → Gown → Mask → Goggles",
      "Mask → Goggles → Gown → Gloves",
      "Goggles → Mask → Gloves → Gown"
    ],
    correct_answer: "Gown → Mask → Goggles → Gloves",
    rationale: "The CDC recommends donning PPE in this order: gown first (to protect clothing), then mask/respirator (respiratory protection), then goggles/face shield (eye protection), and finally gloves. This sequence ensures maximum protection against contamination."
  },
  {
    id: "B-F-004", level: "Bachelor", subject: "Fundamentals",
    question: "A patient's pressure injury shows full-thickness tissue loss with visible bone, tendon, or muscle. This is classified as:",
    options: ["Stage 1", "Stage 2", "Stage 3", "Stage 4"],
    correct_answer: "Stage 4",
    rationale: "Stage 4 pressure injuries involve full-thickness tissue loss with exposed or directly palpable fascia, muscle, tendon, ligament, cartilage, or bone. This is the most severe classification in the NPUAP staging system."
  },
  {
    id: "B-F-005", level: "Bachelor", subject: "Fundamentals",
    question: "What is the correct technique for applying restraints to prevent complications?",
    options: [
      "Tie restraints directly to side rails",
      "Tie restraints to the bed frame using a quick-release knot",
      "Secure restraints as tightly as possible",
      "Apply restraints without a physician order in emergency"
    ],
    correct_answer: "Tie restraints to the bed frame using a quick-release knot",
    rationale: "Restraints should always be tied to the movable part of the bed frame (not side rails) using a quick-release knot (clove hitch or slip knot) to allow rapid removal in emergencies. They should be snug but allow two fingers to slip under the restraint."
  },
  {
    id: "B-F-006", level: "Bachelor", subject: "Fundamentals",
    question: "A nurse notices a patient has a nasogastric tube in place. Before administering a tube feeding, the PRIORITY nursing action is:",
    options: [
      "Flush the tube with 30 mL of water",
      "Verify tube placement by checking gastric pH and X-ray confirmation",
      "Elevate the head of bed to 30–45 degrees",
      "Warm the formula to room temperature"
    ],
    correct_answer: "Verify tube placement by checking gastric pH and X-ray confirmation",
    rationale: "Confirming tube placement is the priority safety measure before any NG tube feeding. X-ray is the gold standard; bedside pH testing (gastric aspirate pH ≤ 5.5) is used for ongoing verification. Incorrect placement can lead to pulmonary aspiration."
  },
  {
    id: "B-F-007", level: "Bachelor", subject: "Fundamentals",
    question: "Normal saline solution has an osmolality of approximately:",
    options: ["154 mOsm/L", "308 mOsm/L", "380 mOsm/L", "100 mOsm/L"],
    correct_answer: "308 mOsm/L",
    rationale: "0.9% NaCl (normal saline) has an osmolality of approximately 308 mOsm/L, which is isotonic (close to plasma osmolality of 280–295 mOsm/L). It is used for fluid replacement and does not cause significant fluid shifts."
  },
  {
    id: "B-F-008", level: "Bachelor", subject: "Fundamentals",
    question: "The nurse is performing a physical assessment and notes that a patient's skin has a yellow discoloration. This finding is called:",
    options: ["Cyanosis", "Pallor", "Jaundice", "Erythema"],
    correct_answer: "Jaundice",
    rationale: "Jaundice (icterus) is a yellow discoloration of the skin, sclera, and mucous membranes caused by accumulation of bilirubin. It typically becomes visible when serum bilirubin exceeds 2–3 mg/dL."
  },
  {
    id: "B-F-009", level: "Bachelor", subject: "Fundamentals",
    question: "When measuring blood pressure, if the cuff is too small for the patient's arm, the reading will be:",
    options: ["Falsely low", "Falsely high", "Accurate", "Unreadable"],
    correct_answer: "Falsely high",
    rationale: "A blood pressure cuff that is too small will give a falsely elevated reading because more pressure is needed to compress the artery. The bladder width should encircle at least 80% of the arm circumference."
  },
  {
    id: "B-F-010", level: "Bachelor", subject: "Fundamentals",
    question: "A nurse is caring for a patient in contact precautions. Which of the following is required when entering the room?",
    options: [
      "N95 respirator only",
      "Gown and gloves",
      "Surgical mask only",
      "No special precautions are needed"
    ],
    correct_answer: "Gown and gloves",
    rationale: "Contact precautions require donning both a gown and gloves upon entering the patient's room. These precautions are used for patients with infections spread by direct or indirect contact, such as MRSA, C. diff, and VRE."
  },

  // ============================================================
  // BACHELOR — MEDICAL-SURGICAL
  // ============================================================
  {
    id: "B-MS-001", level: "Bachelor", subject: "Medical-Surgical",
    question: "A patient with type 2 diabetes reports numbness and tingling in both feet. The nurse recognizes this as a sign of:",
    options: [
      "Peripheral arterial disease",
      "Peripheral neuropathy",
      "Deep vein thrombosis",
      "Raynaud's phenomenon"
    ],
    correct_answer: "Peripheral neuropathy",
    rationale: "Peripheral neuropathy is a common complication of diabetes characterized by numbness, tingling, burning, or pain in the extremities (especially feet), resulting from prolonged hyperglycemia damaging nerve fibers."
  },
  {
    id: "B-MS-002", level: "Bachelor", subject: "Medical-Surgical",
    question: "A patient is admitted with acute myocardial infarction. The priority nursing intervention is:",
    options: [
      "Administer aspirin 325 mg",
      "Obtain 12-lead ECG",
      "Establish IV access",
      "Administer oxygen"
    ],
    correct_answer: "Obtain 12-lead ECG",
    rationale: "Although all listed interventions are important for MI management (remember MONA: Morphine, Oxygen, Nitrates, Aspirin), obtaining a 12-lead ECG is the PRIORITY as it confirms the diagnosis, identifies the location of infarction, and guides immediate reperfusion therapy decisions."
  },
  {
    id: "B-MS-003", level: "Bachelor", subject: "Medical-Surgical",
    question: "A nurse is caring for a patient with COPD. Which oxygen delivery method is most appropriate?",
    options: [
      "Non-rebreather mask at 15 L/min",
      "Simple face mask at 10 L/min",
      "Venturi mask at controlled FiO₂ 24–28%",
      "Nasal cannula at 6 L/min"
    ],
    correct_answer: "Venturi mask at controlled FiO₂ 24–28%",
    rationale: "Patients with COPD may rely on hypoxic drive to breathe. The Venturi mask provides precise, controlled FiO₂ (24–28%), preventing over-oxygenation which can suppress respiratory drive in hypercapnic COPD patients."
  },
  {
    id: "B-MS-004", level: "Bachelor", subject: "Medical-Surgical",
    question: "A patient with chronic kidney disease has a serum potassium of 6.8 mEq/L. The nurse should immediately notify the physician and anticipate:",
    options: [
      "Administration of oral potassium supplements",
      "IV calcium gluconate to stabilize cardiac membrane",
      "Increasing dietary potassium intake",
      "Administering ACE inhibitors"
    ],
    correct_answer: "IV calcium gluconate to stabilize cardiac membrane",
    rationale: "Severe hyperkalemia (>6.5 mEq/L) is a cardiac emergency. IV calcium gluconate is the first-line treatment as it antagonizes the cardiac membrane effects of hyperkalemia within minutes. It stabilizes the myocardium against dysrhythmias without lowering potassium levels."
  },
  {
    id: "B-MS-005", level: "Bachelor", subject: "Medical-Surgical",
    question: "A patient post-thyroidectomy develops tingling around the mouth and muscle cramps. The nurse suspects hypocalcemia. The priority intervention is to:",
    options: [
      "Administer vitamin D supplements orally",
      "Prepare to administer IV calcium gluconate",
      "Encourage high-calcium foods",
      "Apply warm compresses to neck"
    ],
    correct_answer: "Prepare to administer IV calcium gluconate",
    rationale: "Hypocalcemia following thyroidectomy occurs due to accidental removal or damage to the parathyroid glands. Symptomatic hypocalcemia (tetany, laryngospasm) requires IV calcium gluconate as emergency treatment. This is a potentially life-threatening complication."
  },
  {
    id: "B-MS-006", level: "Bachelor", subject: "Medical-Surgical",
    question: "A patient is diagnosed with left-sided heart failure. The nurse expects to find which of the following assessments?",
    options: [
      "Peripheral edema and ascites",
      "Jugular vein distension",
      "Pulmonary crackles and dyspnea",
      "Hepatomegaly and weight gain"
    ],
    correct_answer: "Pulmonary crackles and dyspnea",
    rationale: "Left-sided heart failure causes fluid to back up into the pulmonary circulation, resulting in pulmonary edema manifested as crackles (rales), dyspnea, orthopnea, and paroxysmal nocturnal dyspnea. Right-sided heart failure causes systemic venous congestion (peripheral edema, JVD, hepatomegaly)."
  },
  {
    id: "B-MS-007", level: "Bachelor", subject: "Medical-Surgical",
    question: "Which of the following is the most important nursing intervention for a patient with increased intracranial pressure (ICP)?",
    options: [
      "Position patient flat to improve cerebral perfusion",
      "Elevate head of bed 30 degrees and maintain neutral neck position",
      "Encourage vigorous coughing to clear secretions",
      "Restrict all fluid intake to prevent cerebral edema"
    ],
    correct_answer: "Elevate head of bed 30 degrees and maintain neutral neck position",
    rationale: "Elevating the HOB 30–45° promotes venous drainage from the brain, reducing ICP. Neutral neck position prevents jugular vein compression. Flat positioning, vigorous coughing, or Valsalva maneuvers increase ICP and should be avoided."
  },
  {
    id: "B-MS-008", level: "Bachelor", subject: "Medical-Surgical",
    question: "A patient with liver cirrhosis develops confusion, asterixis (flapping tremor), and sleep disturbances. The nurse recognizes this as:",
    options: [
      "Hepatorenal syndrome",
      "Portal hypertension",
      "Hepatic encephalopathy",
      "Spontaneous bacterial peritonitis"
    ],
    correct_answer: "Hepatic encephalopathy",
    rationale: "Hepatic encephalopathy results from the accumulation of ammonia and other toxins in the blood when the failing liver cannot detoxify them. Symptoms progress from mild confusion and sleep disturbances to asterixis, coma. Treatment includes lactulose to reduce ammonia absorption."
  },
  {
    id: "B-MS-009", level: "Bachelor", subject: "Medical-Surgical",
    question: "A post-operative patient is 24 hours after abdominal surgery. Bowel sounds are absent. The nurse should:",
    options: [
      "Begin full liquid diet immediately",
      "Report this immediately as a serious complication",
      "Recognize this as expected post-operative paralytic ileus",
      "Insert a nasogastric tube immediately"
    ],
    correct_answer: "Recognize this as expected post-operative paralytic ileus",
    rationale: "Absent bowel sounds for 24–72 hours post-abdominal surgery is a normal finding (post-operative paralytic ileus). The GI tract temporarily ceases peristalsis due to anesthesia and bowel manipulation. Return of bowel sounds usually occurs within 3–4 days."
  },
  {
    id: "B-MS-010", level: "Bachelor", subject: "Medical-Surgical",
    question: "A patient with urolithiasis is experiencing severe flank pain radiating to the groin. The priority nursing intervention is:",
    options: [
      "Restrict fluid intake to prevent further stone formation",
      "Administer analgesics as ordered and encourage fluid intake",
      "Place the patient on strict bed rest",
      "Prepare patient for immediate surgery"
    ],
    correct_answer: "Administer analgesics as ordered and encourage fluid intake",
    rationale: "Pain management is the priority for renal colic. NSAIDs and opioids are used for pain control. High fluid intake (2–3 L/day) helps flush the stone through the urinary tract. Ambulation (not bed rest) may also facilitate stone passage."
  },

  // ============================================================
  // BACHELOR — MATERNITY
  // ============================================================
  {
    id: "B-MAT-001", level: "Bachelor", subject: "Maternity",
    question: "A pregnant woman at 28 weeks gestation reports decreased fetal movement. The nurse should instruct her to:",
    options: [
      "Wait 24 hours and recount movements",
      "Perform a kick count and report fewer than 10 movements in 2 hours",
      "Lie on her back to better feel movements",
      "Increase physical activity to stimulate fetal movement"
    ],
    correct_answer: "Perform a kick count and report fewer than 10 movements in 2 hours",
    rationale: "Fetal kick counts are a simple monitoring method. The patient should feel at least 10 movements within 2 hours. Fewer than 10 movements should be reported immediately for further evaluation. This is a non-stress test or biophysical profile may follow."
  },
  {
    id: "B-MAT-002", level: "Bachelor", subject: "Maternity",
    question: "The nurse is caring for a patient with severe preeclampsia on magnesium sulfate infusion. Which finding requires immediate intervention?",
    options: [
      "Blood pressure 155/100 mmHg",
      "Respiratory rate 10 breaths/min",
      "Urine output 30 mL/hour",
      "Deep tendon reflexes 2+"
    ],
    correct_answer: "Respiratory rate 10 breaths/min",
    rationale: "Respiratory rate <12 breaths/min is a sign of magnesium toxicity, which can progress to respiratory arrest. The antidote is calcium gluconate 1g IV. Other signs of toxicity include loss of DTRs (<1+), decreased urine output, and flushing."
  },
  {
    id: "B-MAT-003", level: "Bachelor", subject: "Maternity",
    question: "Naegele's rule for calculating estimated due date (EDD): LMP is July 10. What is the EDD?",
    options: ["April 17", "April 3", "March 17", "April 10"],
    correct_answer: "April 17",
    rationale: "Naegele's rule: Add 7 days to the first day of LMP, subtract 3 months, then add 1 year. July 10 + 7 = July 17; July → April (subtract 3 months) = April 17. EDD is April 17."
  },
  {
    id: "B-MAT-004", level: "Bachelor", subject: "Maternity",
    question: "A nurse assesses a newborn at 1 minute after birth. The baby has a heart rate of 90 bpm, grimaces, has blue extremities, and cries weakly. What is the APGAR score?",
    options: ["4", "5", "6", "7"],
    correct_answer: "5",
    rationale: "APGAR: Appearance (blue extremities) = 1; Pulse (90 bpm) = 1; Grimace = 1; Activity (weak cry) = 1; Respiration (weak cry) = 1. Total = 5. Score 4–6 indicates moderate distress requiring stimulation and supplemental oxygen."
  },
  {
    id: "B-MAT-005", level: "Bachelor", subject: "Maternity",
    question: "Post-partum hemorrhage is defined as blood loss exceeding:",
    options: ["300 mL after vaginal delivery", "500 mL after vaginal delivery", "750 mL after cesarean", "1000 mL after any delivery"],
    correct_answer: "500 mL after vaginal delivery",
    rationale: "PPH is defined as blood loss ≥500 mL after vaginal delivery or ≥1000 mL after cesarean section. The most common cause is uterine atony (80% of cases). Treatment: uterine massage, oxytocin, ergometrine, and surgical intervention if needed."
  },

  // ============================================================
  // BACHELOR — PEDIATRICS
  // ============================================================
  {
    id: "B-PED-001", level: "Bachelor", subject: "Pediatrics",
    question: "A 6-month-old infant has a respiratory rate of 48 breaths/min. The nurse should:",
    options: [
      "Report immediately as critically abnormal",
      "Document as normal finding for this age",
      "Administer supplemental oxygen",
      "Perform tracheal suctioning"
    ],
    correct_answer: "Document as normal finding for this age",
    rationale: "Normal respiratory rates in infants 0–12 months: 30–60 breaths/min. A rate of 48 breaths/min is within normal range for a 6-month-old. Normal parameters vary by age: toddlers (24–40), preschool (22–34), school-age (18–30), adolescents (12–16)."
  },
  {
    id: "B-PED-002", level: "Bachelor", subject: "Pediatrics",
    question: "A nurse is caring for a child with epiglottitis. The priority nursing intervention is:",
    options: [
      "Perform throat culture to identify causative organism",
      "Allow child to remain in position of comfort; avoid throat examination",
      "Place child in Trendelenburg position",
      "Administer oral fluids to prevent dehydration"
    ],
    correct_answer: "Allow child to remain in position of comfort; avoid throat examination",
    rationale: "Epiglottitis is a life-threatening emergency. Examining the throat can cause complete airway obstruction (vagal response). The child should be kept calm in the position of comfort (usually sitting forward). Equipment for emergency intubation must be at bedside."
  },
  {
    id: "B-PED-003", level: "Bachelor", subject: "Pediatrics",
    question: "A child with febrile seizures. The nurse's first priority action is:",
    options: [
      "Restrain the child to prevent injury",
      "Place a tongue blade between teeth",
      "Position child safely and protect from injury while maintaining airway",
      "Administer antipyretics immediately"
    ],
    correct_answer: "Position child safely and protect from injury while maintaining airway",
    rationale: "During a seizure, protect the child from injury, maintain a patent airway (lateral position to prevent aspiration), and do NOT restrain or insert objects in the mouth. Time the seizure. Antipyretics can be given after the seizure resolves."
  },
  {
    id: "B-PED-004", level: "Bachelor", subject: "Pediatrics",
    question: "Which immunization is given at birth in most standard schedules?",
    options: [
      "MMR vaccine",
      "Hepatitis B vaccine (first dose)",
      "DTaP vaccine",
      "IPV vaccine"
    ],
    correct_answer: "Hepatitis B vaccine (first dose)",
    rationale: "The Hepatitis B vaccine is given at birth (first dose), followed by doses at 1–2 months and 6–18 months. This early vaccination prevents perinatal transmission from HBsAg-positive mothers and establishes early immune protection."
  },
  {
    id: "B-PED-005", level: "Bachelor", subject: "Pediatrics",
    question: "A nurse is assessing a 2-year-old child. Which of the following developmental milestones would be a concern?",
    options: [
      "Uses 50+ words",
      "Walks up stairs with support",
      "Does not yet run",
      "Cannot speak in 2-word phrases"
    ],
    correct_answer: "Cannot speak in 2-word phrases",
    rationale: "By 24 months, children should use at least 2-word combinations (e.g., 'more milk'). Inability to use 2-word phrases is a developmental red flag that warrants further evaluation for speech/language delay or autism spectrum disorder."
  },

  // ============================================================
  // BACHELOR — COMMUNITY
  // ============================================================
  {
    id: "B-COM-001", level: "Bachelor", subject: "Community",
    question: "Primary prevention in community health nursing refers to:",
    options: [
      "Early detection and treatment of disease",
      "Rehabilitation and minimizing disability",
      "Preventing disease before it occurs through health promotion",
      "Managing chronic diseases"
    ],
    correct_answer: "Preventing disease before it occurs through health promotion",
    rationale: "Primary prevention aims to prevent disease onset. Examples: vaccinations, health education, safety programs. Secondary prevention = early detection (screenings). Tertiary prevention = rehabilitation and minimizing complications of existing disease."
  },
  {
    id: "B-COM-002", level: "Bachelor", subject: "Community",
    question: "The incubation period is defined as:",
    options: [
      "Time from disease to recovery",
      "Time from exposure to causative agent to appearance of first symptoms",
      "Duration of the infectious period",
      "Time between symptom onset and hospitalization"
    ],
    correct_answer: "Time from exposure to causative agent to appearance of first symptoms",
    rationale: "The incubation period is the time between pathogen exposure and the appearance of first clinical signs/symptoms. This is important for identifying exposure sources, quarantine periods, and contact tracing in epidemiology."
  },
  {
    id: "B-COM-003", level: "Bachelor", subject: "Community",
    question: "A community nurse is calculating the infant mortality rate. Which formula is correct?",
    options: [
      "Deaths under 1 year / Live births × 1000",
      "All deaths under 5 years / Total population × 1000",
      "Deaths under 28 days / Live births × 1000",
      "Deaths under 1 year / Total population × 1000"
    ],
    correct_answer: "Deaths under 1 year / Live births × 1000",
    rationale: "Infant Mortality Rate (IMR) = (Number of deaths under 1 year / Number of live births) × 1000. It's a key indicator of population health and healthcare quality. Neonatal mortality (under 28 days) and post-neonatal mortality are subcategories."
  },

  // ============================================================
  // BACHELOR — PSYCHOLOGY
  // ============================================================
  {
    id: "B-PSY-001", level: "Bachelor", subject: "Psychology",
    question: "A patient with schizophrenia believes that neighbors are sending him secret messages through the TV. This is an example of:",
    options: ["Hallucination", "Delusion of reference", "Illusion", "Thought broadcasting"],
    correct_answer: "Delusion of reference",
    rationale: "Delusions of reference involve the false belief that external events, objects, or people have special personal significance (e.g., TV messages directed personally at the patient). This is a positive symptom of schizophrenia."
  },
  {
    id: "B-PSY-002", level: "Bachelor", subject: "Psychology",
    question: "The nurse is assessing suicide risk. Which is the highest risk factor?",
    options: [
      "Having a specific plan with access to lethal means",
      "Expressing passive death wish",
      "History of depression",
      "Social isolation"
    ],
    correct_answer: "Having a specific plan with access to lethal means",
    rationale: "Having a specific suicide plan with access to means (e.g., firearms, medications) significantly increases suicide risk. The SAD PERSONS scale and Columbia Protocol consider plan + means + intent as highest lethality indicators requiring immediate intervention."
  },
  {
    id: "B-PSY-003", level: "Bachelor", subject: "Psychology",
    question: "Therapeutic communication technique: A nurse responds to a patient saying 'I feel worthless' with 'Tell me more about feeling worthless.' This is an example of:",
    options: ["Giving advice", "Exploring/broad opening", "Reassurance", "Reflection"],
    correct_answer: "Exploring/broad opening",
    rationale: "Encouraging exploration ('Tell me more...') is a therapeutic communication technique that invites the patient to elaborate on their experience. It demonstrates active listening and shows that the nurse is interested in understanding the patient's perspective."
  },

  // ============================================================
  // BACHELOR — MANAGEMENT
  // ============================================================
  {
    id: "B-MAN-001", level: "Bachelor", subject: "Management",
    question: "A charge nurse is making assignments. Which patient should be assigned to the most experienced nurse?",
    options: [
      "Patient with type 2 diabetes requiring teaching",
      "Patient 2 days post-hip replacement progressing well",
      "Patient with sepsis on vasoactive drip requiring frequent titration",
      "Patient with chronic heart failure awaiting discharge"
    ],
    correct_answer: "Patient with sepsis on vasoactive drip requiring frequent titration",
    rationale: "Patient acuity and complexity guide nursing assignments. A patient with sepsis on vasoactive medications requires complex assessment and frequent titration, demanding advanced clinical judgment. This patient should be assigned to the most experienced nurse."
  },
  {
    id: "B-MAN-002", level: "Bachelor", subject: "Management",
    question: "When delegating tasks to unlicensed assistive personnel (UAP), the nurse must ensure all of the following EXCEPT:",
    options: [
      "The task is within the UAP's scope of practice",
      "The patient is stable",
      "The nurse assumes full responsibility for UAP's actions",
      "The UAP independently documents assessment findings"
    ],
    correct_answer: "The UAP independently documents assessment findings",
    rationale: "Nursing assessment and its documentation cannot be delegated to UAP. UAPs can perform basic care tasks, measure vital signs, and document objective observations—but not nursing assessments, care planning, teaching, or evaluation of patient responses."
  },

  // ============================================================
  // DIPLOMA — FUNDAMENTALS
  // ============================================================
  {
    id: "D-F-001", level: "Diploma", subject: "Fundamentals",
    question: "A nurse is preparing to insert a urinary catheter in a female patient. The catheter should be inserted:",
    options: [
      "5–7 cm until urine flows",
      "2–3 cm into the urethra",
      "Until resistance is felt",
      "10–15 cm until resistance"
    ],
    correct_answer: "5–7 cm until urine flows",
    rationale: "In females, the urinary catheter is inserted 5–7 cm (2–3 inches) until urine flows. The female urethra is approximately 3–4 cm long. Inserting too far increases infection risk; too short may not reach the bladder."
  },
  {
    id: "D-F-002", level: "Diploma", subject: "Fundamentals",
    question: "The correct method to check the temperature of a sitz bath water is:",
    options: [
      "Ask the patient if it feels comfortable",
      "Use a thermometer; water should be 37–40°C (98–104°F)",
      "Test with elbow; it should feel very hot",
      "Measure after 10 minutes in the water"
    ],
    correct_answer: "Use a thermometer; water should be 37–40°C (98–104°F)",
    rationale: "A sitz bath should be maintained at 37–40°C (warm, not hot) to promote healing, reduce inflammation, and provide comfort. Always use a thermometer rather than patient sensation or skin testing to prevent burns."
  },
  {
    id: "D-F-003", level: "Diploma", subject: "Fundamentals",
    question: "A nurse is performing wound irrigation. The recommended PSI (pressure per square inch) for wound irrigation is:",
    options: [
      "1–4 PSI (too low to cleanse)",
      "4–15 PSI (effective cleansing without trauma)",
      "20–30 PSI (aggressive irrigation)",
      "Over 30 PSI (maximum cleansing)"
    ],
    correct_answer: "4–15 PSI (effective cleansing without trauma)",
    rationale: "Evidence-based wound irrigation should deliver 4–15 PSI. This pressure is sufficient to remove debris and bacteria without causing trauma to wound tissue. A 35 mL syringe with 19-gauge needle generates approximately 8 PSI."
  },
  {
    id: "D-F-004", level: "Diploma", subject: "Fundamentals",
    question: "When administering a subcutaneous injection, the needle is inserted at:",
    options: ["15-degree angle", "30-degree angle", "45–90-degree angle depending on tissue amount", "90-degree angle only"],
    correct_answer: "45–90-degree angle depending on tissue amount",
    rationale: "Subcutaneous injections are given at 45° for thin patients (to avoid muscle) and 90° for patients with adequate subcutaneous tissue. The goal is to deposit medication into the subcutaneous tissue, not the muscle."
  },
  {
    id: "D-F-005", level: "Diploma", subject: "Fundamentals",
    question: "The nurse is performing oral care for an unconscious patient. The MOST important action to prevent aspiration is:",
    options: [
      "Use a large amount of water to rinse the mouth",
      "Position the patient with head turned to the side",
      "Brush teeth vigorously",
      "Perform oral care every 8 hours"
    ],
    correct_answer: "Position the patient with head turned to the side",
    rationale: "For unconscious patients, positioning with the head turned to the side (lateral) prevents aspiration of fluids during oral care. Use small amounts of solution and suction equipment should be at bedside."
  },

  // ============================================================
  // DIPLOMA — MEDICAL-SURGICAL
  // ============================================================
  {
    id: "D-MS-001", level: "Diploma", subject: "Medical-Surgical",
    question: "A patient with a nasogastric tube has residual volume of 350 mL. The nurse should:",
    options: [
      "Continue feeding at the prescribed rate",
      "Discard residual and replace with equal amount of formula",
      "Hold the feeding and notify the physician",
      "Increase the feeding rate to compensate"
    ],
    correct_answer: "Hold the feeding and notify the physician",
    rationale: "Gastric residual volumes >250–500 mL (per institutional policy) indicate delayed gastric emptying and aspiration risk. Standard practice is to hold feeding, return the aspirate (to maintain electrolytes), and notify the physician for further orders."
  },
  {
    id: "D-MS-002", level: "Diploma", subject: "Medical-Surgical",
    question: "A patient with hypertension is taking hydrochlorothiazide (thiazide diuretic). Which electrolyte imbalance should the nurse monitor for?",
    options: ["Hyperkalemia", "Hypokalemia", "Hypernatremia", "Hypercalcemia (elevated)"],
    correct_answer: "Hypokalemia",
    rationale: "Thiazide diuretics increase potassium excretion in the kidney (along with sodium and water), leading to hypokalemia. Signs include muscle weakness, fatigue, leg cramps, and cardiac arrhythmias. Patients should be encouraged to eat potassium-rich foods or take supplements."
  },
  {
    id: "D-MS-003", level: "Diploma", subject: "Medical-Surgical",
    question: "Signs and symptoms of hypoglycemia include:",
    options: [
      "Polyuria, polydipsia, fruity breath",
      "Diaphoresis, shakiness, confusion, tachycardia",
      "Hot dry skin, Kussmaul breathing, lethargy",
      "Bradycardia, hypertension, oliguria"
    ],
    correct_answer: "Diaphoresis, shakiness, confusion, tachycardia",
    rationale: "Hypoglycemia (BG <70 mg/dL) triggers sympathetic activation: diaphoresis, trembling, palpitations, anxiety (adrenergic symptoms), plus neuroglycopenic symptoms: confusion, headache, blurred vision. Treat with 15g fast-acting carbohydrates (rule of 15)."
  },

  // ============================================================
  // DIPLOMA — PEDIATRICS
  // ============================================================
  {
    id: "D-PED-001", level: "Diploma", subject: "Pediatrics",
    question: "The most common cause of diarrhea in children worldwide is:",
    options: ["Bacterial gastroenteritis", "Rotavirus", "Parasitic infection", "Food allergy"],
    correct_answer: "Rotavirus",
    rationale: "Rotavirus is the leading cause of severe diarrhea and dehydration in children under 5 years worldwide. The rotavirus vaccine has significantly reduced morbidity and mortality. ORS (oral rehydration solution) is the cornerstone of treatment."
  },
  {
    id: "D-PED-002", level: "Diploma", subject: "Pediatrics",
    question: "A child is assessed as mildly dehydrated. The nurse should anticipate:",
    options: [
      "IV fluid resuscitation with normal saline bolus",
      "Oral rehydration therapy (ORS) 50 mL/kg over 4 hours",
      "Nothing by mouth until IV access is established",
      "Hypotonic IV fluids"
    ],
    correct_answer: "Oral rehydration therapy (ORS) 50 mL/kg over 4 hours",
    rationale: "WHO recommends ORT for mild to moderate dehydration: 50 mL/kg ORS over 4 hours for mild dehydration (3–5% loss). ORT is as effective as IV therapy for mild-moderate dehydration and is preferred over IV to reduce hospitalization."
  },
  {
    id: "D-PED-003", level: "Diploma", subject: "Pediatrics",
    question: "A nurse is caring for a child with sickle cell crisis. The priority intervention is:",
    options: [
      "Restrict fluids to prevent blood dilution",
      "Administer IV fluids and analgesics as ordered",
      "Apply heat to affected areas only",
      "Encourage intense physical activity"
    ],
    correct_answer: "Administer IV fluids and analgesics as ordered",
    rationale: "Vaso-occlusive sickle cell crisis management: IV hydration (2–2.5× maintenance) to reduce blood viscosity and improve circulation, plus adequate analgesia (opioids as needed) for pain management. Cold should be avoided as it can cause vasoconstriction."
  },

  // ============================================================
  // DIPLOMA — COMMUNITY
  // ============================================================
  {
    id: "D-COM-001", level: "Diploma", subject: "Community",
    question: "In cold chain management of vaccines, the required storage temperature is:",
    options: ["0 to -8°C", "+2 to +8°C", "+10 to +15°C", "Room temperature"],
    correct_answer: "+2 to +8°C",
    rationale: "Most vaccines must be stored at +2°C to +8°C (35°F–46°F) to maintain potency. Vaccines that are frozen or exposed to heat become ineffective. Live vaccines like OPV can be stored frozen (-15 to -25°C) for long-term storage."
  },
  {
    id: "D-COM-002", level: "Diploma", subject: "Community",
    question: "The Expanded Programme on Immunization (EPI) protects children against how many diseases as a minimum in most national programs?",
    options: ["6", "8", "10", "12"],
    correct_answer: "6",
    rationale: "The original WHO EPI (1974) targeted 6 diseases: TB, polio, diphtheria, tetanus, whooping cough (pertussis), and measles. Many countries have expanded beyond this core set to include Hepatitis B, Hib, rotavirus, and pneumococcal vaccines."
  },

  // ============================================================
  // DIPLOMA — PSYCHOLOGY
  // ============================================================
  {
    id: "D-PSY-001", level: "Diploma", subject: "Psychology",
    question: "Maslow's hierarchy of needs: A patient is homeless, hungry, and has a recent cancer diagnosis. According to Maslow, the nurse should first address:",
    options: [
      "Self-esteem needs",
      "Cancer treatment education",
      "Physiological needs (food, shelter)",
      "Psychological safety"
    ],
    correct_answer: "Physiological needs (food, shelter)",
    rationale: "Maslow's hierarchy prioritizes needs from most basic to highest: Physiological → Safety → Love/Belonging → Esteem → Self-actualization. Physiological needs (food, water, shelter) must be addressed first as they are fundamental to survival."
  },
  {
    id: "D-PSY-002", level: "Diploma", subject: "Psychology",
    question: "A patient says: 'My doctor doesn't know what he's talking about. The nurse yesterday was much better.' This is an example of:",
    options: ["Transference", "Counter-transference", "Splitting", "Projection"],
    correct_answer: "Splitting",
    rationale: "Splitting is a defense mechanism common in borderline personality disorder characterized by seeing people as all good or all bad. The patient is dividing staff into 'all good' (yesterday's nurse) and 'all bad' (the doctor) categories."
  },

  // ============================================================
  // MIDWIFERY — MATERNITY
  // ============================================================
  {
    id: "M-MAT-001", level: "Midwifery", subject: "Maternity",
    question: "The 4 Ps of labor are:",
    options: [
      "Pain, Position, Pushing, Placenta",
      "Powers, Passage, Passenger, Psyche",
      "Pressure, Pulse, Position, Placenta",
      "Presentation, Position, Pain, Pushing"
    ],
    correct_answer: "Powers, Passage, Passenger, Psyche",
    rationale: "The 4 Ps of labor: Powers (uterine contractions), Passage (bony pelvis and soft tissues), Passenger (fetus, placenta), and Psyche (maternal emotional state). A problem with any component can result in dystocia (difficult labor)."
  },
  {
    id: "M-MAT-002", level: "Midwifery", subject: "Maternity",
    question: "During a vaginal examination, the nurse palpates a sagittal suture in the anterior-posterior diameter with the posterior fontanel anterior. This is which fetal position?",
    options: ["OA (Occiput Anterior)", "OP (Occiput Posterior)", "OT (Occiput Transverse)", "Face presentation"],
    correct_answer: "OP (Occiput Posterior)",
    rationale: "In occiput posterior (OP) position, the fetal occiput is toward the mother's sacrum. The sagittal suture runs AP, but the smaller posterior fontanel is anterior (toward pubic symphysis is reversed). OP is associated with prolonged labor and back pain ('back labor')."
  },
  {
    id: "M-MAT-003", level: "Midwifery", subject: "Maternity",
    question: "A woman is in active labor. Fetal heart rate monitoring shows decelerations that begin and end WITH contractions, mirroring the contraction pattern. This represents:",
    options: [
      "Early decelerations — head compression (normal)",
      "Late decelerations — uteroplacental insufficiency (non-reassuring)",
      "Variable decelerations — cord compression",
      "Accelerations — fetal well-being"
    ],
    correct_answer: "Early decelerations — head compression (normal)",
    rationale: "Early decelerations mirror contractions exactly (onset with contraction, nadir at peak, return at end). They result from vagal response to fetal head compression during contractions. They are benign and require no intervention."
  },

  // ============================================================
  // MIDWIFERY — PREGNANCY & RISK
  // ============================================================
  {
    id: "M-PR-001", level: "Midwifery", subject: "Pregnancy & Risk",
    question: "A woman at 36 weeks gestation has a fundal height of 42 cm. This is MOST likely associated with:",
    options: [
      "Oligohydramnios",
      "Intrauterine growth restriction",
      "Polyhydramnios or multiple gestation",
      "Normal pregnancy"
    ],
    correct_answer: "Polyhydramnios or multiple gestation",
    rationale: "Fundal height (cm) should approximately equal gestational weeks (±2 cm). At 36 weeks, 42 cm suggests polyhydramnios (excess amniotic fluid) or multiple gestation (twins/triplets). Small-for-dates suggests IUGR or oligohydramnios."
  },
  {
    id: "M-PR-002", level: "Midwifery", subject: "Pregnancy & Risk",
    question: "HELLP syndrome is associated with:",
    options: [
      "Hemolysis, Elevated Liver enzymes, Low Platelets",
      "High blood pressure, Elevated LDL, Low Potassium",
      "Hemorrhage, Edema, Lupus-like Presentation",
      "Hemoglobin drop, Elevated Liver damage, Low Protein"
    ],
    correct_answer: "Hemolysis, Elevated Liver enzymes, Low Platelets",
    rationale: "HELLP syndrome is a severe complication of preeclampsia: H = Hemolysis (microangiopathic hemolytic anemia), EL = Elevated Liver enzymes (hepatocellular damage), LP = Low Platelets (<100,000). It requires immediate delivery and is associated with significant maternal-fetal morbidity."
  },
  {
    id: "M-PR-003", level: "Midwifery", subject: "Pregnancy & Risk",
    question: "A pregnant woman at 32 weeks reports sudden onset painless bright red vaginal bleeding. The nurse suspects:",
    options: [
      "Placental abruption",
      "Placenta previa",
      "Show (bloody show of early labor)",
      "Cervical polyp"
    ],
    correct_answer: "Placenta previa",
    rationale: "Placenta previa presents with painless, bright red vaginal bleeding (sentinel bleed) in the second or third trimester. The low-lying placenta partially or completely covers the cervical os. AVOID vaginal examination — it can precipitate life-threatening hemorrhage."
  },

  // ============================================================
  // MIDWIFERY — NORMAL BIRTH
  // ============================================================
  {
    id: "M-NB-001", level: "Midwifery", subject: "Normal Birth",
    question: "During the second stage of labor, the nurse observes crowning. The MOST appropriate action is:",
    options: [
      "Apply firm fundal pressure to speed delivery",
      "Apply gentle counter-pressure to the fetal head to control delivery",
      "Tell the patient to push as hard as possible",
      "Prepare for immediate cesarean section"
    ],
    correct_answer: "Apply gentle counter-pressure to the fetal head to control delivery",
    rationale: "Gentle perineal support and counter-pressure to the fetal head during crowning (Ritgen's maneuver) controls the rate of head delivery, preventing rapid expulsion that can cause perineal lacerations and fetal intracranial injury."
  },
  {
    id: "M-NB-002", level: "Midwifery", subject: "Normal Birth",
    question: "Active management of the third stage of labor (AMTSL) includes all EXCEPT:",
    options: [
      "Prophylactic oxytocin within 1 minute of birth",
      "Controlled cord traction",
      "Uterine massage after placenta delivery",
      "Immediate artificial rupture of membranes"
    ],
    correct_answer: "Immediate artificial rupture of membranes",
    rationale: "AMTSL (WHO recommendation) includes: 1) Uterotonic (oxytocin 10 IU IM) within 1 minute of birth, 2) Controlled cord traction (Brandt-Andrews), 3) Uterine massage after placenta delivery. AMTSL reduces PPH by 60%. AROM is a labor intervention, not part of AMTSL."
  },
  {
    id: "M-NB-003", level: "Midwifery", subject: "Normal Birth",
    question: "Cardinal movements of labor in order are:",
    options: [
      "Engagement, Descent, Flexion, Internal rotation, Extension, External rotation, Expulsion",
      "Descent, Engagement, Flexion, Extension, Internal rotation, External rotation, Expulsion",
      "Flexion, Engagement, Descent, Internal rotation, External rotation, Extension, Expulsion",
      "Engagement, Flexion, Descent, Extension, Internal rotation, External rotation, Expulsion"
    ],
    correct_answer: "Engagement, Descent, Flexion, Internal rotation, Extension, External rotation, Expulsion",
    rationale: "The 7 cardinal movements allow the fetus to navigate the pelvis: 1)Engagement (head at ischial spines), 2)Descent, 3)Flexion (chin to chest), 4)Internal rotation (AP to AP of outlet), 5)Extension (head born), 6)External rotation (restitution), 7)Expulsion (shoulders/body delivered)."
  },

  // ============================================================
  // MIDWIFERY — MATERNAL HEALTH
  // ============================================================
  {
    id: "M-MH-001", level: "Midwifery", subject: "Maternal Health",
    question: "Lochia rubra is characterized by:",
    options: [
      "Pinkish discharge lasting days 4–10 postpartum",
      "Bright red discharge containing blood and decidual tissue, days 1–3",
      "Yellowish-white discharge, days 10–28",
      "Green discharge indicating infection"
    ],
    correct_answer: "Bright red discharge containing blood and decidual tissue, days 1–3",
    rationale: "Postpartum lochia progression: Lochia rubra (red, bloody, decidual tissue) days 1–3; Lochia serosa (pinkish-brown) days 4–10; Lochia alba (yellowish-white, mostly leukocytes) days 10–28. Heavy saturating pads or foul odor indicates abnormal findings."
  },
  {
    id: "M-MH-002", level: "Midwifery", subject: "Maternal Health",
    question: "The Edinburgh Postnatal Depression Scale (EPDS) is administered:",
    options: [
      "During the first trimester only",
      "At 6 weeks and 3–6 months postpartum",
      "During active labor",
      "Only when symptoms of depression are present"
    ],
    correct_answer: "At 6 weeks and 3–6 months postpartum",
    rationale: "EPDS is a 10-item validated screening tool for perinatal depression. It is recommended at 4–6 weeks and 3–6 months postpartum. A score of ≥13 suggests probable postnatal depression requiring further assessment and referral."
  },

  // ============================================================
  // MIDWIFERY — FUNDAMENTALS (shared)
  // ============================================================
  {
    id: "MW-F-001", level: "Midwifery", subject: "Fundamentals",
    question: "The rule of nines for burn assessment: The anterior trunk represents what percentage of total body surface area (TBSA)?",
    options: ["9%", "18%", "27%", "36%"],
    correct_answer: "18%",
    rationale: "Rule of Nines for adults: Head = 9%, each arm = 9%, anterior trunk = 18%, posterior trunk = 18%, each leg = 18%, genitalia = 1%. Total = 100%. For children, the Lund-Browder chart is more accurate due to different body proportions."
  },
  {
    id: "MW-F-002", level: "Midwifery", subject: "Fundamentals",
    question: "A nurse is caring for a patient receiving IV potassium replacement. Which action is MOST important?",
    options: [
      "Administer IV potassium as a rapid IV push",
      "Administer potassium through a peripheral IV at a maximum rate of 10–20 mEq/hour",
      "Mix 80 mEq of potassium in 50 mL of saline",
      "Administer undiluted potassium chloride"
    ],
    correct_answer: "Administer potassium through a peripheral IV at a maximum rate of 10–20 mEq/hour",
    rationale: "IV potassium must NEVER be given as IV push (cardiac arrest risk). Standard rate: maximum 10–20 mEq/hour peripherally, up to 40 mEq/hour centrally with continuous cardiac monitoring. Maximum concentration: 40 mEq/100 mL peripherally. Always dilute."
  },

  // ============================================================
  // MIDWIFERY — MEDICAL-SURGICAL (shared)
  // ============================================================
  {
    id: "MW-MS-001", level: "Midwifery", subject: "Medical-Surgical",
    question: "A patient receiving anticoagulation therapy with warfarin has an INR of 6.2 (therapeutic range 2–3). The nurse should anticipate administering:",
    options: [
      "Protamine sulfate IV",
      "Vitamin K (phytonadione)",
      "Fresh frozen plasma only",
      "Increase warfarin dose"
    ],
    correct_answer: "Vitamin K (phytonadione)",
    rationale: "Vitamin K (phytonadione) reverses warfarin anticoagulation. For INR >5 without bleeding, oral Vitamin K is given. For active bleeding with supratherapeutic INR, 4-factor PCC (prothrombin complex concentrate) or FFP plus IV Vitamin K is used. Protamine sulfate reverses heparin."
  },

  // ============================================================
  // MIDWIFERY — PEDIATRICS (shared)
  // ============================================================
  {
    id: "MW-PED-001", level: "Midwifery", subject: "Pediatrics",
    question: "The Moro reflex (startle reflex) in newborns typically disappears by:",
    options: ["2 weeks", "1 month", "3–4 months", "6 months"],
    correct_answer: "3–4 months",
    rationale: "The Moro reflex (symmetric abduction and extension of arms in response to sudden movement or sound) is present at birth and disappears by 3–4 months. Persistence beyond 6 months may indicate neurological abnormality. Asymmetric Moro may suggest Erb's palsy."
  },

  // ============================================================
  // MIDWIFERY — COMMUNITY (shared)
  // ============================================================
  {
    id: "MW-COM-001", level: "Midwifery", subject: "Community",
    question: "A nurse is conducting a community health assessment using the epidemiological triangle. The three components are:",
    options: [
      "Host, Agent, Environment",
      "Patient, Disease, Nurse",
      "Primary, Secondary, Tertiary prevention",
      "Individual, Family, Community"
    ],
    correct_answer: "Host, Agent, Environment",
    rationale: "The epidemiological (Gordian) triangle consists of: Host (susceptible person), Agent (causative pathogen or factor), and Environment (external factors facilitating transmission). Disease occurs when the balance between these three is disrupted. This model guides public health interventions."
  },

  // ============================================================
  // MIDWIFERY — PSYCHOLOGY (shared)
  // ============================================================
  {
    id: "MW-PSY-001", level: "Midwifery", subject: "Psychology",
    question: "Elisabeth Kübler-Ross described 5 stages of grief. The CORRECT sequence is:",
    options: [
      "Anger, Denial, Bargaining, Depression, Acceptance",
      "Denial, Anger, Bargaining, Depression, Acceptance",
      "Denial, Bargaining, Anger, Acceptance, Depression",
      "Depression, Denial, Anger, Bargaining, Acceptance"
    ],
    correct_answer: "Denial, Anger, Bargaining, Depression, Acceptance",
    rationale: "Kübler-Ross's 5 Stages of Grief (DABDA): 1)Denial ('This can't be true'), 2)Anger ('Why me?'), 3)Bargaining ('If only...'), 4)Depression (deep sadness, withdrawal), 5)Acceptance (coming to terms). These stages are not linear and individuals may experience them in different orders."
  }
];

// ============================================================
// HELPER FUNCTIONS
// ============================================================

/**
 * Get available levels
 */
function getLevels() {
  return [
    {
      id: "Bachelor",
      name: "Bachelor",
      nameAr: "بكالوريوس",
      icon: "🎓",
      color: "blue",
      desc: "Full nursing bachelor degree program"
    },
    {
      id: "Diploma",
      name: "Diploma",
      nameAr: "دبلوم",
      icon: "📋",
      color: "green",
      desc: "Nursing diploma program"
    },
    {
      id: "Midwifery",
      name: "Midwifery",
      nameAr: "قبالة",
      icon: "👶",
      color: "purple",
      desc: "Midwifery and obstetric nursing"
    }
  ];
}

/**
 * Get subjects for a given level
 */
function getSubjectsForLevel(level) {
  const subjectMap = {
    "Bachelor": [
      { id: "Fundamentals", name: "Fundamentals", icon: "🏥" },
      { id: "Medical-Surgical", name: "Medical-Surgical", icon: "🩺" },
      { id: "Maternity", name: "Maternity", icon: "🤱" },
      { id: "Pediatrics", name: "Pediatrics", icon: "👶" },
      { id: "Community", name: "Community", icon: "🌍" },
      { id: "Psychology", name: "Psychology", icon: "🧠" },
      { id: "Management", name: "Management", icon: "📊" }
    ],
    "Diploma": [
      { id: "Fundamentals", name: "Fundamentals", icon: "🏥" },
      { id: "Medical-Surgical", name: "Medical-Surgical", icon: "🩺" },
      { id: "Pediatrics", name: "Pediatrics", icon: "👶" },
      { id: "Community", name: "Community", icon: "🌍" },
      { id: "Psychology", name: "Psychology", icon: "🧠" }
    ],
    "Midwifery": [
      { id: "Maternity", name: "Maternity", icon: "🤱" },
      { id: "Pregnancy & Risk", name: "Pregnancy & Risk", icon: "⚠️" },
      { id: "Normal Birth", name: "Normal Birth", icon: "🍼" },
      { id: "Maternal Health", name: "Maternal Health", icon: "💊" },
      { id: "Fundamentals", name: "Fundamentals", icon: "🏥" },
      { id: "Medical-Surgical", name: "Medical-Surgical", icon: "🩺" },
      { id: "Pediatrics", name: "Pediatrics", icon: "👶" },
      { id: "Community", name: "Community", icon: "🌍" },
      { id: "Psychology", name: "Psychology", icon: "🧠" }
    ]
  };
  return subjectMap[level] || [];
}

/**
 * Get questions for a specific level and subject (with optional shuffle)
 */
function getQuestions(level, subject, shuffle = true) {
  let questions = QUESTION_BANK.filter(q => q.level === level && q.subject === subject);
  if (shuffle) {
    questions = shuffleArray([...questions]);
    questions = questions.map(q => ({
      ...q,
      shuffledOptions: shuffleArray([...q.options])
    }));
  } else {
    questions = questions.map(q => ({
      ...q,
      shuffledOptions: [...q.options]
    }));
  }
  return questions;
}

/**
 * Count questions for subject
 */
function getQuestionCount(level, subject) {
  return QUESTION_BANK.filter(q => q.level === level && q.subject === subject).length;
}

/**
 * Fisher-Yates shuffle
 */
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
