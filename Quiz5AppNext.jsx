import React, { useEffect, useState, useRef } from "react";

// Quiz5-App-Next.jsx
// Single-file React component for a self-contained quiz app (Tailwind CSS assumed available)
// Shows one question at a time (no scrolling) with Next / Prev navigation.
// Default export a React component.

const QUESTIONS = [
  {
    id: "Q5.1",
    question: "What is one of the characteristics of Vertical Decentralization in organizational structure?",
    choices: [
      "Centralized decision-making.",
      "Top-down hierarchy.",
      "Delegation of authority.",
      "Limited employee autonomy.",
      "Strict adherence to rules and regulations."
    ],
    answerIndex: 2,
    explanation:
      "Vertical Decentralization involves the delegation of decision-making authority from top management to lower levels of the organization."
  },
  {
    id: "Q5.2",
    question: "Which activity is a key component of Vertical Decentralization?",
    choices: [
      "Maintaining a strict chain of command.",
      "Concentrating decision-making at the top.",
      "Empowering employees at all levels.",
      "Rigid adherence to standard procedures.",
      "Promoting a highly hierarchical structure."
    ],
    answerIndex: 2,
    explanation:
      "Vertical Decentralization empowers employees at various levels of the organization to make decisions, promoting greater autonomy and participation."
  },
  {
    id: "Q5.3",
    question: "What is the impact of Vertical Decentralization on an organization's adaptability?",
    choices: ["Decreases adaptability.", "Has no effect on adaptability.", "Increases adaptability.", "Decreases efficiency.", "Promotes centralization."],
    answerIndex: 2,
    explanation:
      "Vertical Decentralization allows organizations to respond more quickly to changing circumstances and market conditions, which enhances adaptability."
  },
  {
    id: "Q5.4",
    question: "Which statement is true regarding the definition of Horizontal Decentralization?",
    choices: [
      "It encourages centralized control and hierarchical structures.",
      "It promotes limited employee involvement in decision-making.",
      "It involves breaking down functional silos and promoting cross-functional collaboration.",
      "It leads to a reduction in organizational adaptability.",
      "It encourages isolated operations within an organization."
    ],
    answerIndex: 2,
    explanation:
      "Horizontal Decentralization focuses on breaking down functional silos and fostering collaboration across different parts of the organization."
  },
  {
    id: "Q5.5",
    question: "Which example best illustrates Vertical Decentralization?",
    choices: [
      "A government agency with all decisions made at the top.",
      "A corporation where all decisions are made by the CEO.",
      "A healthcare organization with department heads making local decisions.",
      "A military organization with strict top-down command.",
      "A university with a single, centralized decision-making body."
    ],
    answerIndex: 2,
    explanation:
      "Department heads having authority to make decisions at the local level is a clear example of Vertical Decentralization."
  },
  {
    id: "Q5.6",
    question: "Which statement is true regarding the definition of Vertical Decentralization?",
    choices: [
      "It emphasizes central control and hierarchical structures.",
      "It encourages limited employee involvement in decision-making.",
      "It promotes a strict top-down approach to management.",
      "It involves the dispersion of decision-making authority to lower levels.",
      "It leads to reduced adaptability in an organization."
    ],
    answerIndex: 3,
    explanation:
      "Vertical Decentralization involves dispersing decision-making authority to lower levels of the organization."
  },
  {
    id: "Q5.7",
    question: "Vertical decentralization is the process of:",
    choices: [
      "Delegating decision-making authority to lower levels of the organization.",
      "Increasing the number of levels in the organizational hierarchy.",
      "Centralizing decision-making authority at the top level of the organization.",
      "Reducing the span of control of managers.",
      "All of the above."
    ],
    answerIndex: 0,
    explanation:
      "Vertical decentralization is the delegation of decision-making authority to lower levels of the organization."
  },
  {
    id: "Q5.8",
    question: "One of the main components of vertical decentralization is:",
    choices: ["Delegation of authority.", "Empowerment of employees.", "Span of control.", "Unity of command.", "All of the above."],
    answerIndex: 0,
    explanation:
      "Delegation of authority is a key component of vertical decentralization, allowing lower-level managers to make decisions."
  },
  {
    id: "Q5.9",
    question: "One of the main characteristics of vertical decentralization is:",
    choices: [
      "Increased flexibility and responsiveness.",
      "Improved decision-making quality.",
      "Increased employee motivation and satisfaction.",
      "All of the above.",
      "None of the above."
    ],
    answerIndex: 3,
    explanation:
      "Vertical decentralization can lead to increased flexibility, improved decision quality, and greater employee motivation."
  },
  {
    id: "Q5.10",
    question: "One of the main activities of vertical decentralization is:",
    choices: [
      "Creating new levels of management in the organizational hierarchy.",
      "Expanding the span of control of managers.",
      "Reducing the number of layers in the organizational hierarchy.",
      "All of the above.",
      "None of the above."
    ],
    answerIndex: 2,
    explanation:
      "Reducing layers in the hierarchy can be part of vertical decentralization to streamline decision-making."
  },
  {
    id: "Q5.11",
    question: "Which statement accurately describes the definition of Vertical Decentralization?",
    choices: [
      "It relies exclusively on a single coordinating mechanism for all decision-making.",
      "It eliminates all hierarchy within the organization.",
      "It involves a hierarchical structure with decision-making distributed at various organizational levels.",
      "It leads to a decrease in organizational adaptability.",
      "It promotes isolation between different hierarchical levels."
    ],
    answerIndex: 2,
    explanation:
      "Vertical Decentralization is defined by a hierarchical structure with decision-making distributed at different organizational levels."
  },
  {
    id: "Q5.12",
    question: "What is one of the primary causes of Horizontal Decentralization in organizational structure?",
    choices: [
      "Centralized decision-making.",
      "Hierarchical control.",
      "Need for faster decision-making.",
      "Limited employee autonomy.",
      "Strict adherence to rules and regulations."
    ],
    answerIndex: 2,
    explanation:
      "A need to expedite decision-making by pushing authority closer to the point of action is a primary cause of Horizontal Decentralization."
  },
  {
    id: "Q5.13",
    question: "Which activity is a key component of Horizontal Decentralization?",
    choices: [
      "Centralized control by top management.",
      "Rigid adherence to a strict hierarchy.",
      "Promoting siloed decision-making.",
      "Encouraging cross-functional teams and collaboration.",
      "Limiting communication between organizational units."
    ],
    answerIndex: 3,
    explanation:
      "Horizontal Decentralization involves breaking down silos and promoting collaboration among functional units."
  },
  {
    id: "Q5.14",
    question: "What is the impact of Horizontal Decentralization on an organization's flexibility?",
    choices: ["Decreases flexibility.", "Has no effect on flexibility.", "Increases flexibility.", "Decreases efficiency.", "Promotes siloed decision-making."],
    answerIndex: 2,
    explanation:
      "Horizontal Decentralization enhances flexibility by allowing cross-functional teams to adapt quickly."
  },
  {
    id: "Q5.15",
    question: "Which example best illustrates Horizontal Decentralization?",
    choices: [
      "A highly hierarchical corporation with centralized control.",
      "A government agency with all decisions made by a single department.",
      "An innovative tech company that encourages employees to collaborate across functions.",
      "A military organization with strict top-down command.",
      "A university with separate and isolated academic departments."
    ],
    answerIndex: 2,
    explanation:
      "A tech company encouraging cross-functional collaboration is an example of Horizontal Decentralization."
  },
  {
    id: "Q5.16",
    question: "Which statement is true regarding the definition of Horizontal Decentralization?",
    choices: [
      "It promotes centralized control and hierarchical structures.",
      "It encourages limited employee involvement in decision-making.",
      "It involves breaking down functional silos and promoting cross-functional collaboration.",
      "It leads to a reduction in organizational flexibility.",
      "It encourages siloed decision-making within an organization."
    ],
    answerIndex: 2,
    explanation:
      "Horizontal Decentralization involves flattening the organization and promoting cross-functional collaboration."
  },
  {
    id: "Q5.17",
    question: "What is one of the key characteristics of Horizontal Decentralization in organizational structure?",
    choices: [
      "Centralized decision-making.",
      "Strict hierarchical control.",
      "Promoting cross-functional collaboration.",
      "Limited employee autonomy.",
      "Encouraging siloed operations."
    ],
    answerIndex: 2,
    explanation:
      "Promoting cross-functional collaboration is a core characteristic of Horizontal Decentralization."
  },
  {
    id: "Q5.18",
    question: "Which component is essential for Horizontal Decentralization to be effective?",
    choices: [
      "Maintaining rigid top-down control.",
      "Limiting communication between departments.",
      "Empowering employees at all levels.",
      "Encouraging a hierarchical chain of command.",
      "Strict adherence to standard procedures."
    ],
    answerIndex: 2,
    explanation:
      "Empowering employees at all levels is crucial for effective Horizontal Decentralization."
  },
  {
    id: "Q5.19",
    question: "What is one of the impacts of Horizontal Decentralization on an organization's adaptability?",
    choices: ["Decreases adaptability.", "Has no effect on adaptability.", "Increases adaptability.", "Decreases efficiency.", "Promotes siloed operations."],
    answerIndex: 2,
    explanation:
      "Horizontal Decentralization typically increases an organization's adaptability by fostering collaboration and quick decision-making."
  },
  {
    id: "Q5.20",
    question: "Which example best illustrates Horizontal Decentralization?",
    choices: [
      "A traditional manufacturing company with strict departmental boundaries.",
      "A government agency with all decisions made at the top.",
      "A tech startup where employees from various departments collaborate on projects.",
      "A military organization with a strict top-down command structure.",
      "A university with separate and isolated academic departments."
    ],
    answerIndex: 2,
    explanation:
      "A tech startup promoting cross-functional collaboration is an example of Horizontal Decentralization."
  },
  {
    id: "Q5.21",
    question: "What is a common cause of Selective Decentralization in organizational structure?",
    choices: [
      "A desire for complete centralization.",
      "A need to reduce organizational complexity.",
      "Encouraging siloed decision-making.",
      "A lack of strategic planning.",
      "Promoting a one-size-fits-all approach to decentralization."
    ],
    answerIndex: 1,
    explanation:
      "Selective Decentralization is often driven by a desire to reduce organizational complexity by decentralizing specific functions."
  },
  {
    id: "Q5.22",
    question: "Which component is a key element of Selective Decentralization in organizations?",
    choices: [
      "Decentralizing all functions without exception.",
      "Centralizing all decision-making functions for efficiency.",
      "Tailoring the decentralization approach to specific functions.",
      "Encouraging complete isolation between departments.",
      "Promoting a one-size-fits-all approach to decentralization."
    ],
    answerIndex: 2,
    explanation:
      "Selective Decentralization involves tailoring the decentralization approach to specific functions based on strategic importance."
  },
  {
    id: "Q5.23",
    question: "What is one of the potential impacts of Selective Decentralization on an organization's efficiency?",
    choices: [
      "Decreases efficiency.",
      "Has no effect on efficiency.",
      "Increases efficiency.",
      "Promotes complete centralization.",
      "Encourages isolated decision-making."
    ],
    answerIndex: 2,
    explanation:
      "Selective Decentralization aims to increase efficiency by decentralizing specific functions while maintaining centralized control where needed."
  },
  {
    id: "Q5.24",
    question: "Which example best illustrates Selective Decentralization?",
    choices: [
      "A tech startup that decentralizes all decision-making functions.",
      "A government agency with a strict top-down command structure.",
      "A multinational corporation that decentralizes marketing and product selection but keeps HR functions centralized.",
      "A military organization with complete centralization.",
      "A university with separate and isolated academic departments."
    ],
    answerIndex: 2,
    explanation:
      "Decentralizing certain functions (marketing, product) while centralizing others (HR) illustrates Selective Decentralization."
  },
  {
    id: "Q5.25",
    question: "What is one of the main characteristics of Parallel Decentralization in organizational structure?",
    choices: [
      "Complete centralization of all functions.",
      "Simultaneous existence of both centralized and decentralized structures.",
      "A focus on decentralized decision-making exclusively.",
      "Lack of adaptability in the organization.",
      "Promoting siloed decision-making."
    ],
    answerIndex: 1,
    explanation:
      "Parallel Decentralization features the coexistence of centralized and decentralized structures within an organization."
  },
  {
    id: "Q5.26",
    question: "Which activity is a key component of Parallel Decentralization in organizations?",
    choices: [
      "Centralizing all decision-making functions for uniformity.",
      "Decentralizing every aspect of the organization without distinction.",
      "Striking a balance between centralized and decentralized structures.",
      "Promoting a rigid top-down hierarchy.",
      "Encouraging complete isolation between departments."
    ],
    answerIndex: 2,
    explanation:
      "A key component of Parallel Decentralization is striking a balance between centralized and decentralized structures."
  },
  {
    id: "Q5.27",
    question: "What is one of the impacts of Parallel Decentralization on an organization's adaptability?",
    choices: ["Decreases adaptability.", "Has no effect on adaptability.", "Increases adaptability.", "Decreases efficiency.", "Promotes rigid hierarchical structures."],
    answerIndex: 2,
    explanation:
      "Parallel Decentralization can increase adaptability by using appropriate decision structures for different functions."
  },
  {
    id: "Q5.28",
    question: "Which example best illustrates Parallel Decentralization?",
    choices: [
      "A government agency with a strict top-down command structure.",
      "A tech startup where all decisions are made collaboratively by employees.",
      "A large global corporation with centralized financial management and decentralized product development.",
      "A military organization with complete centralization.",
      "A university with separate and isolated academic departments."
    ],
    answerIndex: 2,
    explanation:
      "Centralized financial management combined with decentralized product development is an example of Parallel Decentralization."
  },
  {
    id: "Q5.29",
    question: "Which statement accurately describes the definition of Parallel Decentralization?",
    choices: [
      "It involves decentralizing all functions without exception.",
      "It promotes complete isolation between different units in an organization.",
      "It focuses on centralized decision-making exclusively.",
      "It allows for the simultaneous coexistence of centralized and decentralized structures.",
      "It leads to a decrease in organizational adaptability."
    ],
    answerIndex: 3,
    explanation:
      "Parallel Decentralization allows both centralized and decentralized decision-making structures to coexist."
  },
  {
    id: "Q5.30",
    question: "Which coordinating mechanism is often used in Selective Decentralization to manage relationships between centralized and decentralized units?",
    choices: ["Mutual adjustment.", "Direct supervision.", "Standardization.", "Isolation.", "Centralization."],
    answerIndex: 0,
    explanation:
      "Selective Decentralization often uses mutual adjustment where individuals or units collaborate and coordinate their activities."
  },
  {
    id: "Q5.31",
    question: "What is a key characteristic of Selective Decentralization in the context of coordinating mechanisms?",
    choices: [
      "It relies exclusively on direct supervision for coordination.",
      "It uses standardization for all decision-making processes.",
      "It promotes mutual adjustment between centralized and decentralized units.",
      "It isolates decentralized units from centralized control.",
      "It centralizes all decision-making processes."
    ],
    answerIndex: 2,
    explanation:
      "Selective Decentralization emphasizes mutual adjustment as a coordinating mechanism to facilitate collaboration."
  },
  {
    id: "Q5.32",
    question: "What is one of the causes of Selective Decentralization in organizational structure related to coordinating mechanisms?",
    choices: [
      "A need for complete centralization using standardization.",
      "A desire for direct supervision of all activities.",
      "The recognition of the need for flexibility in coordination.",
      "A lack of coordination mechanisms within the organization.",
      "A one-size-fits-all approach to coordination."
    ],
    answerIndex: 2,
    explanation:
      "Selective Decentralization is often caused by recognizing the need for flexibility in coordination across functions or units."
  },
  {
    id: "Q5.33",
    question: "Which activity is a key component of Selective Decentralization in the context of coordinating mechanisms?",
    choices: [
      "Implementing direct supervision for all organizational functions.",
      "Using a single standardized process for coordination.",
      "Carefully selecting and applying coordinating mechanisms based on function or unit needs.",
      "Isolating decentralized units from the rest of the organization.",
      "Centralizing all decision-making without exceptions."
    ],
    answerIndex: 2,
    explanation:
      "A key component is selecting coordinating mechanisms that fit each function or unit's needs."
  },
  {
    id: "Q5.34",
    question: "What is one of the potential impacts of Selective Decentralization on an organization's efficiency with respect to coordinating mechanisms?",
    choices: [
      "Decreases efficiency by relying on mutual adjustment.",
      "Has no effect on efficiency.",
      "Increases efficiency by tailoring coordinating mechanisms.",
      "Promotes isolation between centralized and decentralized units.",
      "Encourages standardization for all decision-making."
    ],
    answerIndex: 2,
    explanation:
      "Selective Decentralization can increase efficiency by tailoring coordinating mechanisms to specific needs."
  },
  {
    id: "Q5.35",
    question: "What is a key component of Parallel Decentralization in the context of coordinating mechanisms and organization parts?",
    choices: [
      "Eliminating all hierarchical structures.",
      "Relying solely on direct supervision for coordination.",
      "Simultaneously coexisting centralized and decentralized structures.",
      "Promoting isolation between organizational units.",
      "Centralizing all decision-making functions."
    ],
    answerIndex: 2,
    explanation:
      "A key component is the simultaneous coexistence of centralized and decentralized structures."
  },
  {
    id: "Q5.36",
    question: "Which coordinating mechanism is often employed in Parallel Decentralization to manage relationships between centralized and decentralized units?",
    choices: ["Mutual adjustment.", "Direct supervision.", "Standardization.", "Isolation.", "Centralization."],
    answerIndex: 0,
    explanation:
      "Mutual adjustment is often used in Parallel Decentralization to facilitate collaboration between units."
  },
  {
    id: "Q5.37",
    question: "What is one of the impacts of Parallel Decentralization on the organization's adaptability with respect to coordinating mechanisms and organization parts?",
    choices: [
      "Decreases adaptability due to conflicting structures.",
      "Has no effect on adaptability.",
      "Increases adaptability by allowing flexibility in coordinating mechanisms.",
      "Promotes isolation and rigid organizational parts.",
      "Encourages standardization for all decision-making."
    ],
    answerIndex: 2,
    explanation:
      "Parallel Decentralization increases adaptability by allowing flexibility in coordinating mechanisms across parts."
  },
  {
    id: "Q5.38",
    question: "Which example best illustrates Parallel Decentralization in the context of coordinating mechanisms and organization parts?",
    choices: [
      "A government agency with a strict top-down command structure.",
      "A tech startup with collaborative decision-making among all employees.",
      "A large corporation with centralized financial management and decentralized product development.",
      "A military organization with no hierarchy or coordination mechanisms.",
      "A university with separate and isolated academic departments."
    ],
    answerIndex: 2,
    explanation:
      "A large corporation with centralized finance and decentralized product development is an example of Parallel Decentralization."
  },
  {
    id: "Q5.39",
    question: "What is a significant difference between Parallel Decentralization and complete centralization in the context of coordinating mechanisms and organization parts?",
    choices: [
      "Parallel Decentralization relies on isolation.",
      "Parallel Decentralization uses a single coordinating mechanism.",
      "Parallel Decentralization allows for the coexistence of different structures.",
      "Complete centralization promotes mutual adjustment.",
      "Complete centralization encourages a top-down hierarchy."
    ],
    answerIndex: 2,
    explanation:
      "Parallel Decentralization allows the coexistence of different structures, unlike complete centralization."
  },
  {
    id: "Q5.40",
    question: "Which statement accurately describes the definition of Selective Decentralization?",
    choices: [
      "It involves decentralizing every function within an organization.",
      "It encourages complete isolation between departments.",
      "It promotes a lack of strategic planning in decentralization efforts.",
      "It involves a strategic approach to decentralize specific functions while keeping others centralized.",
      "It leads to a reduction in organizational complexity."
    ],
    answerIndex: 3,
    explanation:
      "Selective Decentralization is characterized by strategically decentralizing certain functions while keeping others centralized."
  }
];

export default function Quiz5AppNext() {
  const [numQuestions, setNumQuestions] = useState(40);
  const [timePerMinute, setTimePerMinute] = useState(15);
  const [shuffledQ, setShuffledQ] = useState([]);
  const [answers, setAnswers] = useState({});
  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const timerRef = useRef(null);
  const [showResults, setShowResults] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [dark, setDark] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoAdvance, setAutoAdvance] = useState(true);

  useEffect(() => {
    if (!started) return;
    setTimeLeft(timePerMinute * 60);
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          handleAutoSubmit();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started]);

  function startQuiz() {
    const copy = Array.isArray(QUESTIONS) ? [...QUESTIONS] : [];
    // shuffle
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    const selected = copy.slice(0, Math.min(numQuestions, copy.length));
    setShuffledQ(selected);
    setAnswers({});
    setShowResults(false);
    setStarted(true);
    setShowReview(false);
    setCurrentIndex(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleAnswer(qId, idx) {
    setAnswers((a) => ({ ...a, [qId]: idx }));
    if (autoAdvance) {
      // small delay so user sees selection briefly, but keep it instant for snappiness
      setTimeout(() => {
        setCurrentIndex((c) => Math.min(c + 1, shuffledQ.length - 1));
      }, 150);
    }
  }

  function allAnswered() {
    return shuffledQ.length > 0 && Object.keys(answers).length === shuffledQ.length;
  }

  function formatTime(sec) {
    const m = Math.floor(sec / 60)
      .toString()
      .padStart(2, "0");
    const s = (sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }

  function handleSubmit() {
    clearInterval(timerRef.current);
    setShowResults(true);
    setStarted(false);
  }

  function handleAutoSubmit() {
    setShowResults(true);
    setStarted(false);
  }

  function score() {
    if (!showResults) return 0;
    let sc = 0;
    shuffledQ.forEach((q) => {
      if (answers[q.id] === q.answerIndex) sc++;
    });
    return sc;
  }

  useEffect(() => {
    // persist settings locally
    localStorage.setItem("quiz5_settings", JSON.stringify({ numQuestions, timePerMinute }));
  }, [numQuestions, timePerMinute]);

  useEffect(() => {
    // hydrate
    try {
      const s = JSON.parse(localStorage.getItem("quiz5_settings"));
      if (s) {
        if (s.numQuestions) setNumQuestions(s.numQuestions);
        if (s.timePerMinute) setTimePerMinute(s.timePerMinute);
      }
    } catch (e) {}
  }, []);

  const currentQ = shuffledQ[currentIndex];

  return (
    <div className={dark ? "min-h-screen bg-gray-900 text-gray-100" : "min-h-screen bg-gray-50 text-gray-900"}>
      <div className="max-w-3xl mx-auto p-6">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Quiz — Decentralization (Quiz 5) — Single Question View</h1>
          <div className="flex items-center gap-3">
            <button onClick={() => setDark((d) => !d)} className="px-3 py-1 rounded-md border">{dark ? "Light" : "Dark"}</button>
            <button onClick={() => alert("Cara: pilih jumlah soal, pilih durasi (menit), klik Start. Gunakan Next/Prev untuk berpindah. Submit aktif jika semua dijawab.")}
              className="px-3 py-1 rounded-md border">?</button>
          </div>
        </header>

        {!started && !showResults && (
          <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold mb-3">Pengaturan Quiz</h2>
            <div className="grid grid-cols-2 gap-4">
              <label className="flex flex-col">
                Jumlah Soal (max 40)
                <input type="number" min={1} max={40} value={numQuestions}
                  onChange={(e) => setNumQuestions(Math.max(1, Math.min(40, Number(e.target.value || 1))))}
                  className="mt-1 p-2 border rounded" />
              </label>

              <label className="flex flex-col">
                Durasi (menit)
                <input type="number" min={1} max={180} value={timePerMinute}
                  onChange={(e) => setTimePerMinute(Math.max(1, Math.min(180, Number(e.target.value || 1))))}
                  className="mt-1 p-2 border rounded" />
              </label>
            </div>

            <div className="mt-4 flex gap-3">
              <button onClick={startQuiz} className="px-4 py-2 bg-blue-600 text-white rounded shadow">Start Quiz</button>

              <button onClick={() => {
                const preview = (Array.isArray(QUESTIONS) ? QUESTIONS : []).slice(0, Math.min(3, QUESTIONS.length)).map((q) => `- ${q.id}: ${q.question}`).join("\n");
                alert("Preview soal:\n" + preview);
              }} className="px-4 py-2 border rounded">Preview 3 Soal</button>

              <label className="flex items-center gap-2 ml-auto">
                <input type="checkbox" checked={autoAdvance} onChange={(e) => setAutoAdvance(e.target.checked)} />
                Auto-advance on answer
              </label>
            </div>
          </section>
        )}

        {started && currentQ && (
          <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold">Soal {currentIndex + 1} / {shuffledQ.length}</h3>
                <p className="text-sm text-gray-500">Dijawab: {Object.keys(answers).length}</p>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500">Waktu tersisa</div>
                <div className="font-mono text-lg">{formatTime(timeLeft)}</div>
              </div>
            </div>

            <div className="h-3 bg-gray-200 rounded overflow-hidden mb-4">
              <div className="h-full bg-gradient-to-r from-green-400 to-blue-500" style={{ width: `${(Object.keys(answers).length / shuffledQ.length) * 100}%` }} />
            </div>

            <div className="p-4 border rounded">
              <div className="font-semibold mb-4">{currentQ.question}</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentQ.choices.map((ch, idx) => {
                  const selected = answers[currentQ.id] === idx;
                  return (
                    <button key={idx} onClick={() => handleAnswer(currentQ.id, idx)}
                      className={`text-left p-3 rounded border ${selected ? "border-blue-600 bg-blue-50" : ""}`}>
                      <div className="font-semibold">{String.fromCharCode(65 + idx)}. {ch}</div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 flex items-center gap-3">
                <button onClick={() => setCurrentIndex((c) => Math.max(0, c - 1))} disabled={currentIndex === 0}
                  className={`px-4 py-2 rounded ${currentIndex === 0 ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "border"}`}>Prev</button>

                <button onClick={() => setCurrentIndex((c) => Math.min(shuffledQ.length - 1, c + 1))} disabled={currentIndex === shuffledQ.length - 1}
                  className={`px-4 py-2 rounded ${currentIndex === shuffledQ.length - 1 ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "border"}`}>Next</button>

                <div className="ml-auto flex items-center gap-2">
                  <button disabled={!allAnswered()} onClick={handleSubmit}
                    className={`px-4 py-2 rounded ${allAnswered() ? "bg-green-600 text-white" : "bg-gray-300 text-gray-600 cursor-not-allowed"}`}>Submit (muncul jika semua dijawab)</button>

                  <button onClick={() => { if (confirm("Batalkan quiz? Jawaban akan hilang.")) { clearInterval(timerRef.current); setStarted(false); setShuffledQ([]); } }} className="px-4 py-2 border rounded">Cancel</button>
                </div>
              </div>

              <div className="mt-3 text-sm text-gray-500">Tip: Anda bisa menggunakan Prev/Next. Jika Auto-advance aktif maka soal akan berpindah otomatis setelah memilih jawaban.</div>
            </div>
          </section>
        )}

        {showResults && (
          <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">Hasil Quiz</h2>
                <p className="text-sm text-gray-500">Skor: {score()} / {shuffledQ.length}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setShowReview((s) => !s)} className="px-3 py-1 border rounded">{showReview ? "Sembunyikan Review" : "Tampilkan Review"}</button>
                <button onClick={() => { setShowResults(false); setShuffledQ([]); setAnswers({}); }} className="px-3 py-1 border rounded">Mulai Lagi</button>
              </div>
            </div>

            {showReview && (
              <div className="mt-4 space-y-4">
                {shuffledQ.map((q, qi) => {
                  const selected = answers[q.id];
                  const correct = q.answerIndex;
                  const isCorrect = selected === correct;
                  return (
                    <div key={q.id} className="p-3 border rounded">
                      <div className="flex items-center justify-between">
                        <div className="font-semibold">{qi + 1}. {q.question}</div>
                        <div className={isCorrect ? "text-green-600 font-bold" : "text-red-600 font-bold"}>{isCorrect ? "Benar" : "Salah"}</div>
                      </div>
                      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {q.choices.map((ch, idx) => {
                          const correctBadge = idx === correct ? " (Kunci)" : "";
                          const your = idx === selected ? " <-- Pilihan Anda" : "";
                          return (
                            <div key={idx} className={`p-2 rounded ${idx === selected ? "border-2" : "border"}`}>
                              <div className="font-semibold">{String.fromCharCode(65 + idx)}. {ch}{correctBadge}{your}</div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="mt-2 text-sm text-gray-600">Penjelasan: {q.explanation}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        )}

        <footer className="text-center text-sm text-gray-500 mt-8">Built for Quiz 5 — single-question view. Features: Next/Prev navigation (no scrolling), selectable time, selectable number of questions, submit shows only when all answers chosen, review with explanations, progress bar, dark mode, persistent settings.</footer>
      </div>
    </div>
  );
}
