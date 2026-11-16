import { useEffect, useLayoutEffect, useRef, useState } from "react";

const SECTION_IDS = [
  "home",
  "about",
  "skills",
  "work",
  "experience",
  "achievements",
  "contact",
];

const GAP = 3400;

const getDims = () => {
  const w = window.innerWidth < 600 ? 190 : 250;
  return { w, h: Math.round((w * 110) / 330) };
};

// Default parking spot: bottom-right corner
const getHome = () => {
  const { w, h } = getDims();
  const marginX = window.innerWidth < 600 ? 12 : 24;
  const marginY = window.innerWidth < 600 ? 24 : 48;
  return {
    x: Math.max(10, window.innerWidth - w - marginX),
    y: Math.max(10, window.innerHeight - h - marginY),
  };
};

const getSide = (p) => {
  const { w } = getDims();
  return {
    right: p.x + w / 2 > window.innerWidth / 2,
    below: p.y < 180,
  };
};

const clamp = (value, min, max) => Math.max(min, Math.min(value, max));

const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) return "Good morning! Ready for a little portfolio tour? ☀️";
  if (hour < 17) return "Hey! Good afternoon. Let's explore something cool! 🚗";
  if (hour < 21) return "Good evening! Welcome aboard. 🌆";
  return "Late-night visitor detected! My engine is still running. 🌙";
};

const conversations = {
  home: [
    "Hey there! I'm THEJAS.AI. Welcome aboard! 🏎️",
    "I'll be your little guide through this portfolio.",
    "We're exploring the work and journey of Thirumale Gowda B V.",
    "Buckle up! Let's take a tour. 🔥",
  ],
  about: [
    "Entering the About section! 👀",
    "Thirumale is a Computer Science Engineering student at UVCE.",
    "He enjoys building practical solutions through software development and AI.",
    "Curiosity, experimentation and problem-solving keep him moving forward!",
  ],
  skills: [
    "Welcome to the skill garage! 🛠️",
    "You'll find programming, full-stack development and AI/ML here.",
    "From React and Node.js to computer vision and deep learning!",
    "A developer's toolbox is always growing. 😎",
  ],
  work: [
    "Vroom! We've reached the projects section! 🏎️",
    "There are some interesting builds waiting for you.",
    "JobGuard, SyncSpace, Wisdom School Portal and an ocular disease classification project!",
    "Explore each project to see the details and technologies behind it.",
  ],
  experience: [
    "Let's check out the experience track! 🏁",
    "Thirumale has worked on a full-stack school portal.",
    "He has also spent time teaching and tutoring students.",
    "Different experiences, different lessons. That's how we grow!",
  ],
  achievements: [
    "Achievement unlocked! 🏆",
    "This section has leadership, theatre, hackathons and recognition.",
    "He also directed a 40-member acting team!",
    "Quite a journey beyond the keyboard, isn't it?",
  ],
  contact: [
    "We've reached the final destination! 🏁",
    "Enjoyed the ride?",
    "If you'd like to connect, the contact section has the details.",
    "Thanks for visiting. Hope to see you again! ❤️",
  ],
};

const revisitConversations = {
  home: ["Back at the starting line? Let's go again! 🏎️", "I knew you wanted another ride!"],
  about: ["Back to know more about Thirumale? 👀", "There's always more to discover!"],
  skills: ["Checking the toolbox again?", "A developer's skills are always evolving! 🛠️"],
  work: ["Back to the projects garage!", "Which project caught your eye? 😎"],
  experience: ["Taking another lap through the experience section?", "Every experience adds a new skill!"],
  achievements: ["Back for another look at the achievements?", "Those milestones deserve attention! 🏆"],
  contact: ["You found your way back to the finish line!", "Thinking of saying hello? 👀"],
};

const reactions = {
  home: "wave",
  about: "curious",
  skills: "focused",
  work: "excited",
  experience: "focused",
  achievements: "celebrate",
  contact: "goodbye",
};

const personalityComments = [
  "Engine check! Everything is running smoothly. ⚙️",
  "Psst... don't forget to explore the projects!",
  "You're taking your time. I respect that! 😎",
  "Fun fact: I run on React and a little bit of CSS magic.",
  "Don't just scroll... explore the details!",
  "This portfolio has some interesting pit stops. 🏁",
  "Need directions? Just click on me!",
  "Cruising through a portfolio is better than rushing! 🚗",
];

const clickSurprises = [
  "Beep beep! Did I surprise you? 🚗",
  "Ready for another lap?",
  "You found my favourite button. 😂",
  "Careful! I might start revving my engine!",
  "The next project might be even more interesting. 👀",
  "Vroom vroom! Keep exploring!",
];

const pick = (items) => items[Math.floor(Math.random() * items.length)];

/* ------------------------------------------------------------------ */
/* Supercar (side view, nose points right; the wrapper mirrors it)    */
/* ------------------------------------------------------------------ */

function SuperCar() {
  return (
    <svg className="car-svg" viewBox="-30 0 330 110" aria-hidden="true">
      <defs>
        {/* Body is now black with a soft grey sheen on top */}
        <linearGradient id="tj-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4a4b54" />
          <stop offset="0.3" stopColor="#1d1e24" />
          <stop offset="0.7" stopColor="#09090c" />
          <stop offset="1" stopColor="#000000" />
        </linearGradient>
        <linearGradient id="tj-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8fa0aa" />
          <stop offset="0.45" stopColor="#141b20" />
          <stop offset="1" stopColor="#030405" />
        </linearGradient>
        <linearGradient id="tj-carbon" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2a2b31" />
          <stop offset="1" stopColor="#040405" />
        </linearGradient>
        <linearGradient id="tj-flame" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0" stopColor="#fff2c4" />
          <stop offset="0.35" stopColor="#ff9a3c" />
          <stop offset="1" stopColor="#ff1f3d" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="tj-nose-glow">
          <stop offset="0" stopColor="#fff1d0" stopOpacity="0.8" />
          <stop offset="0.4" stopColor="#ff3a4e" stopOpacity="0.35" />
          <stop offset="1" stopColor="#ff1f3d" stopOpacity="0" />
        </radialGradient>
        <filter id="tj-blur" x="-20%" y="-200%" width="140%" height="500%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>

      {/* ground shadow + subtle red underglow */}
      <ellipse cx="150" cy="97" rx="140" ry="6" fill="#000" opacity="0.75" filter="url(#tj-blur)" />
      <ellipse className="car-underglow" cx="152" cy="93" rx="110" ry="3.5" fill="#ff1f3d" filter="url(#tj-blur)" />

      {/* exhaust flames (only when revving) */}
      <g className="car-flame">
        <path d="M 12 66 Q -8 60 -28 68 Q -8 74 12 72 Z" fill="url(#tj-flame)" />
        <path d="M 12 69 Q 0 67 -12 69 Q 0 71 12 71 Z" fill="#fff6d8" opacity="0.9" />
      </g>

      {/* rear wing (black, thin red edge line) */}
      <path d="M 22 48 L 25 55 L 31 55 L 31 47 Z" fill="url(#tj-carbon)" />
      <path d="M 2 45 L 46 38 L 49 43 L 6 50 Z" fill="url(#tj-carbon)" stroke="#2e2f36" strokeWidth="0.8" />
      <path d="M 4 47.5 L 47 40.5" stroke="#ff2d45" strokeWidth="0.9" strokeLinecap="round" />

      {/* main body */}
      <path
        d="M 6 76 L 4 64 Q 5 54 22 52 L 58 47 L 104 41 Q 124 26 150 26 L 186 38 L 268 55 Q 288 59 290 68 L 290 80 L 268 85 L 20 85 Q 8 84 6 76 Z"
        fill="url(#tj-body)"
        stroke="#3b3c45"
        strokeWidth="0.8"
      />

      {/* highlights and body lines */}
      <path
        d="M 60 48 L 104 42 Q 124 28 150 28 L 186 40 L 266 56"
        fill="none"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path d="M 30 62 Q 140 52 262 64" fill="none" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="1" />
      {/* the one red pinstripe along the flank */}
      <path d="M 40 73 L 250 73" fill="none" stroke="#ff2d45" strokeOpacity="0.9" strokeWidth="1.2" />

      {/* carbon skirts, splitter and diffuser */}
      <path d="M 100 80 L 210 80 L 208 85 L 102 85 Z" fill="url(#tj-carbon)" />
      <path d="M 246 85 L 291 79 L 291 83 L 268 87 L 246 87 Z" fill="url(#tj-carbon)" />
      <path d="M 6 79 L 40 79 L 56 85 L 10 86 Z" fill="url(#tj-carbon)" />
      <path d="M 16 80 L 20 85 M 26 80 L 32 85 M 36 80 L 44 85" stroke="#4a4b55" strokeWidth="0.7" />

      {/* greenhouse */}
      <path d="M 112 44 Q 128 31 150 30 L 180 40 L 150 46 Z" fill="url(#tj-glass)" stroke="rgba(255,255,255,0.25)" strokeWidth="0.6" />
      <path d="M 152 30 L 152 46" stroke="rgba(0,0,0,0.6)" strokeWidth="1" />

      {/* side intake (red outline only), door line, mirror, hood vent */}
      <path d="M 112 56 L 156 54 L 160 60 L 154 70 L 116 68 Z" fill="#050507" stroke="#ff2d45" strokeWidth="0.8" />
      <path d="M 122 58 L 124 67 M 131 57 L 133 67 M 140 56 L 142 68 M 149 56 L 150 69" stroke="#3d3e47" strokeWidth="0.7" />
      <path d="M 168 46 L 172 69 L 206 66" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <path d="M 184 42 L 195 40 L 196 44 L 186 45 Z" fill="url(#tj-carbon)" />
      <path d="M 220 52 L 246 56 L 244 59 L 218 55 Z" fill="url(#tj-carbon)" />

      {/* lights */}
      <circle cx="288" cy="64" r="15" fill="url(#tj-nose-glow)" className="car-nose-glow" />
      <path className="car-headlight" d="M 252 57 L 283 63 L 284 67 L 256 62 Z" fill="#fff3d2" />
      <path className="car-taillight" d="M 6 62 L 24 57 L 25 61 L 7 67 Z" fill="#ff2640" />

      {/* wheel arches */}
      <path d="M 57 78 A 23 23 0 0 1 103 78 Z" fill="#030304" stroke="#2e2f36" strokeWidth="0.8" />
      <path d="M 207 78 A 23 23 0 0 1 253 78 Z" fill="#030304" stroke="#2e2f36" strokeWidth="0.8" />

      {/* wheels: black tyres, grey rims, red caliper + hub accent */}
      {[80, 230].map((cx) => (
        <g key={cx} transform={`translate(${cx} 78)`}>
          <circle r="17.5" fill="#050506" />
          <circle r="17.5" fill="none" stroke="#2c2d33" strokeWidth="1.2" />
          <path d="M -10 -9 A 13 13 0 0 1 10 -9 L 7 -5 A 9 9 0 0 0 -7 -5 Z" fill="#ff2a40" />
          <g className="car-wheel-spin">
            <circle r="12.5" fill="#0c0c10" stroke="#8d909a" strokeWidth="1.4" />
            {[0, 72, 144, 216, 288].map((angle) => (
              <rect
                key={angle}
                x="-1.1"
                y="-11"
                width="2.2"
                height="11"
                rx="1"
                fill="#a9acb6"
                transform={`rotate(${angle})`}
              />
            ))}
            <circle r="3.4" fill="#e31b33" stroke="#fff" strokeWidth="0.6" />
          </g>
        </g>
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Component                                                          */
/* ------------------------------------------------------------------ */

function ThejasAI() {
  const [activeSection, setActiveSection] = useState("home");
  const [messages, setMessages] = useState([getGreeting(), ...conversations.home]);
  const [messageIndex, setMessageIndex] = useState(0);
  const [showBubble, setShowBubble] = useState(true);
  const [isTyping, setIsTyping] = useState(true);
  const [reaction, setReaction] = useState("wave");
  const [isOpen, setIsOpen] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [isRevving, setIsRevving] = useState(false);
  const [dims, setDims] = useState(getDims);
  const [side, setSide] = useState({ right: true, below: false });

  const activeSectionRef = useRef("home");
  const seenSections = useRef(new Set(["home"]));
  const timers = useRef([]);
  const spontaneousTimer = useRef(null);
  const dragData = useRef(null);
  const draggedRef = useRef(false);
  const movedByUserRef = useRef(false);
  const revTimer = useRef(null);
  const containerRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });

  const schedule = (callback, delay) => {
    const timer = setTimeout(callback, delay);
    timers.current.push(timer);
    return timer;
  };

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];

    if (spontaneousTimer.current) {
      clearTimeout(spontaneousTimer.current);
      spontaneousTimer.current = null;
    }
  };

  const placeAt = (p) => {
    posRef.current = p;

    if (containerRef.current) {
      containerRef.current.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
    }

    const next = getSide(p);
    setSide((prev) =>
      prev.right === next.right && prev.below === next.below ? prev : next
    );
  };

  const playMessages = (list, firstDelay = 650, hide = true) => {
    setMessages(list);
    setMessageIndex(0);
    setShowBubble(true);
    setIsTyping(true);

    schedule(() => setIsTyping(false), firstDelay);

    for (let i = 1; i < list.length; i++) {
      const at = firstDelay + i * GAP;

      schedule(() => setIsTyping(true), at - 650);

      schedule(() => {
        setMessageIndex(i);
        setIsTyping(false);
      }, at);
    }

    if (hide) {
      schedule(
        () => setShowBubble(false),
        firstDelay + (list.length - 1) * GAP + 4500
      );
    }
  };

  const startPersonalityTimer = (section) => {
    if (spontaneousTimer.current) {
      clearTimeout(spontaneousTimer.current);
    }

    spontaneousTimer.current = setTimeout(() => {
      if (activeSectionRef.current === section) {
        playMessages([pick(personalityComments)], 550);
        startPersonalityTimer(section);
      }
    }, 22000);
  };

  const startConversation = (section) => {
    if (activeSectionRef.current === section) return;

    activeSectionRef.current = section;
    clearTimers();

    const isReturning = seenSections.current.has(section);
    const selectedMessages = isReturning
      ? revisitConversations[section]
      : conversations[section];

    seenSections.current.add(section);

    setActiveSection(section);
    setReaction(reactions[section] || "wave");

    playMessages(selectedMessages || conversations.home);
    startPersonalityTimer(section);
  };

  // Park the car before first paint
  useLayoutEffect(() => {
    placeAt(getHome());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Observe portfolio sections
  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length) {
          startConversation(visible[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: "-10% 0px -25% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    playMessages([getGreeting(), ...conversations.home]);
    startPersonalityTimer("home");

    return () => {
      observer.disconnect();
      clearTimers();
      if (revTimer.current) clearTimeout(revTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep the car inside the screen when the browser is resized
  useEffect(() => {
    const handleResize = () => {
      setDims(getDims());

      if (movedByUserRef.current) {
        const { w, h } = getDims();
        placeAt({
          x: clamp(posRef.current.x, 4, window.innerWidth - w - 4),
          y: clamp(posRef.current.y, 4, window.innerHeight - h - 24),
        });
      } else {
        placeAt(getHome());
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Drag handling
  const handleDragStart = (event) => {
    if (event.button !== 0 && event.pointerType === "mouse") return;

    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);

    dragData.current = {
      pointerId: event.pointerId,
      offsetX: event.clientX - posRef.current.x,
      offsetY: event.clientY - posRef.current.y,
      startX: event.clientX,
      startY: event.clientY,
    };

    draggedRef.current = false;
    setIsDragging(true);
  };

  const handleDragMove = (event) => {
    if (!dragData.current || dragData.current.pointerId !== event.pointerId) return;

    const { offsetX, offsetY, startX, startY } = dragData.current;

    if (
      Math.abs(event.clientX - startX) > 5 ||
      Math.abs(event.clientY - startY) > 5
    ) {
      draggedRef.current = true;
      movedByUserRef.current = true;
    }

    const { w, h } = getDims();

    placeAt({
      x: clamp(event.clientX - offsetX, 4, window.innerWidth - w - 4),
      y: clamp(event.clientY - offsetY, 4, window.innerHeight - h - 24),
    });
  };

  const handleDragEnd = (event) => {
    if (dragData.current?.pointerId !== event.pointerId) return;

    dragData.current = null;
    setIsDragging(false);
  };

  const rev = () => {
    setIsRevving(true);
    if (revTimer.current) clearTimeout(revTimer.current);
    revTimer.current = setTimeout(() => setIsRevving(false), 800);
  };

  const handleCarClick = () => {
    if (draggedRef.current) {
      draggedRef.current = false;
      return;
    }

    clearTimers();
    setShowBubble(true);
    rev();

    if (messages.length === 1 || messageIndex >= messages.length - 1) {
      playMessages([pick(clickSurprises)], 450);
    } else {
      setIsTyping(true);
      schedule(() => {
        setMessageIndex((previous) => previous + 1);
        setIsTyping(false);
      }, 350);

      schedule(() => setShowBubble(false), 8000);
    }

    startPersonalityTimer(activeSectionRef.current);
  };

  const handleToggle = () => {
    if (isOpen) {
      clearTimers();
      setShowBubble(false);
      setIsOpen(false);
    } else {
      setIsOpen(true);
      playMessages([pick(personalityComments)], 450);
      startPersonalityTimer(activeSectionRef.current);
    }
  };

  const bubbleClass = [
    "thejas-ai-bubble",
    side.below ? "bubble-below" : "bubble-above",
    side.right ? "bubble-right" : "bubble-left",
  ].join(" ");

  return (
    <>
      <div
        ref={containerRef}
        className={`thejas-ai-container ${isDragging ? "dragging" : ""}`}
        style={{ "--car-w": `${dims.w}px`, width: dims.w, height: dims.h }}
      >
        {isOpen && (
          <>
            {showBubble && (
              <div className={bubbleClass}>
                <div className="thejas-bubble-header">
                  <span className="thejas-status-dot" />
                  <span>THEJAS.AI</span>

                  <button
                    className="thejas-bubble-close"
                    onClick={handleToggle}
                    aria-label="Close Thejas AI"
                  >
                    ×
                  </button>
                </div>

                <div className="thejas-bubble-message" aria-live="polite">
                  {isTyping ? (
                    <div className="thejas-typing">
                      <span />
                      <span />
                      <span />
                    </div>
                  ) : (
                    messages[messageIndex]
                  )}
                </div>

                {!isTyping && (
                  <div className="thejas-bubble-hint">CLICK THE CAR TO CHAT</div>
                )}

                <div className="thejas-bubble-tail" />
              </div>
            )}

            <button
              className={`thejas-car reaction-${reaction} ${isRevving ? "revving" : ""} ${isDragging ? "car-dragging" : ""}`}
              onPointerDown={handleDragStart}
              onPointerMove={handleDragMove}
              onPointerUp={handleDragEnd}
              onPointerCancel={handleDragEnd}
              onClick={handleCarClick}
              aria-label="Drag or interact with Thejas AI car"
              title="Drag me anywhere or click to chat!"
            >
              {/* mirrored so the nose points toward the page content */}
              <span className="car-flip">
                <SuperCar />
              </span>
            </button>

            <div className="thejas-ai-caption">
              <span />
              DRAG ME AROUND
            </div>

            <button
              className="thejas-ai-toggle"
              onClick={handleToggle}
              aria-label="Hide Thejas AI"
              title="Hide Thejas AI"
            >
              ×
            </button>
          </>
        )}
      </div>

      {!isOpen && (
        <button
          className="thejas-ai-toggle toggle-closed"
          onClick={handleToggle}
          aria-label="Show Thejas AI"
          title="Show Thejas AI"
        >
          T
        </button>
      )}

      <style>{`
        .thejas-ai-container {
          position: fixed;
          left: 0;
          top: 0;
          z-index: 99999;
          font-family: Arial, sans-serif;
          pointer-events: none;
          user-select: none;
          will-change: transform;
        }

        .thejas-ai-container button,
        .thejas-ai-toggle {
          -webkit-tap-highlight-color: transparent;
        }

        .thejas-ai-container.dragging {
          z-index: 100000;
        }

        /* CAR */

        .thejas-car {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          padding: 0;
          border: 0;
          background: transparent;
          cursor: grab;
          pointer-events: auto;
          touch-action: none;
          outline: none;
          transition: filter 0.25s ease;
        }

        .thejas-car:focus-visible {
          outline: 2px solid #ff5369;
          outline-offset: 4px;
          border-radius: 12px;
        }

        .thejas-car:hover,
        .thejas-car:active,
        .thejas-car.car-dragging {
          filter: brightness(1.18);
        }

        .thejas-car:active,
        .thejas-car.car-dragging {
          cursor: grabbing;
        }

        .car-flip {
          display: block;
          width: 100%;
          height: 100%;
          transform: scaleX(-1);
        }

        .car-svg {
          display: block;
          width: 100%;
          height: 100%;
          overflow: visible;
          animation: carFloat 3.6s ease-in-out infinite;
        }

        .thejas-car:hover .car-svg,
        .thejas-car.car-dragging .car-svg {
          animation-play-state: paused;
        }

        .thejas-car.revving .car-svg {
          animation: carRev 0.07s linear infinite;
        }

        .car-underglow {
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }

        .thejas-car:hover .car-underglow {
          opacity: 0.8;
        }

        .car-headlight {
          filter: drop-shadow(0 0 4px #ff3b50);
        }

        .car-taillight {
          filter: drop-shadow(0 0 3px #ff1f3d);
        }

        .car-nose-glow {
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }

        .thejas-car.revving .car-nose-glow {
          opacity: 1;
        }

        /* wheels and flames only move while revving */

        .car-wheel-spin {
          transform-box: fill-box;
          transform-origin: center;
        }

        .thejas-car.revving .car-wheel-spin {
          animation: wheelSpin 0.11s linear infinite;
        }

        .car-flame {
          opacity: 0;
          transform-box: fill-box;
          transform-origin: right center;
          transition: opacity 0.2s ease;
        }

        .thejas-car.revving .car-flame {
          opacity: 1;
          animation: flameFlicker 0.12s ease-in-out infinite alternate;
        }

        /* section reactions */

        .reaction-excited .car-underglow {
          opacity: 1;
        }

        .reaction-celebrate .car-underglow {
          opacity: 1;
          animation: glowPulse 1.2s ease-in-out infinite;
        }

        .reaction-goodbye .car-headlight {
          animation: lightBlink 0.8s ease-in-out infinite;
        }

        /* SPEECH BUBBLE */

        .thejas-ai-bubble {
          position: absolute;
          width: min(255px, calc(100vw - 32px));
          min-height: 85px;
          box-sizing: border-box;
          padding: 12px 14px;
          border: 1px solid rgba(255, 55, 75, 0.48);
          border-radius: 15px;
          background: linear-gradient(145deg, #1b0b0e, #09090c);
          color: #f8eeee;
          box-shadow:
            0 15px 45px rgba(0, 0, 0, 0.55),
            0 0 25px rgba(255, 25, 50, 0.14);
          backdrop-filter: blur(16px);
          pointer-events: auto;
          animation: bubbleEnter 0.3s ease-out;
        }

        .bubble-above { bottom: calc(100% + 10px); }
        .bubble-below { top: calc(100% + 24px); }
        .bubble-left { left: 0; }
        .bubble-right { right: 0; }

        .thejas-bubble-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          color: #ff5369;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .thejas-status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ff344c;
          box-shadow: 0 0 8px #ff344c;
          animation: statusBlink 1.5s infinite;
        }

        .thejas-bubble-close {
          margin-left: auto;
          padding: 0 3px;
          border: 0;
          background: transparent;
          color: rgba(255, 255, 255, 0.65);
          font-size: 19px;
          cursor: pointer;
          pointer-events: auto;
        }

        .thejas-bubble-close:hover {
          color: #ff5369;
        }

        .thejas-bubble-message {
          min-height: 36px;
          font-size: 11px;
          line-height: 1.6;
          color: rgba(255, 245, 246, 0.9);
        }

        .thejas-bubble-hint {
          margin-top: 8px;
          color: rgba(255, 90, 110, 0.65);
          font-size: 7px;
          letter-spacing: 1.3px;
        }

        .thejas-bubble-tail {
          position: absolute;
          width: 12px;
          height: 12px;
          background: #0e090b;
          transform: rotate(45deg);
        }

        .bubble-above .thejas-bubble-tail {
          bottom: -6px;
          border-right: 1px solid rgba(255, 55, 75, 0.48);
          border-bottom: 1px solid rgba(255, 55, 75, 0.48);
        }

        .bubble-below .thejas-bubble-tail {
          top: -6px;
          border-left: 1px solid rgba(255, 55, 75, 0.48);
          border-top: 1px solid rgba(255, 55, 75, 0.48);
        }

        .bubble-left .thejas-bubble-tail { left: 45px; }
        .bubble-right .thejas-bubble-tail { right: 45px; }

        .thejas-typing {
          display: flex;
          align-items: center;
          gap: 5px;
          height: 28px;
        }

        .thejas-typing span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ff5369;
          animation: typing 1s infinite;
        }

        .thejas-typing span:nth-child(2) { animation-delay: 0.15s; }
        .thejas-typing span:nth-child(3) { animation-delay: 0.3s; }

        /* CAPTION */

        .thejas-ai-caption {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          margin-top: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          color: rgba(255, 120, 135, 0.75);
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 1.5px;
          white-space: nowrap;
          pointer-events: none;
        }

        .thejas-ai-caption span {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #ff344c;
          box-shadow: 0 0 7px #ff344c;
        }

        /* TOGGLE */

        .thejas-ai-toggle {
          position: absolute;
          z-index: 10;
          top: -10px;
          right: -4px;
          width: 26px;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          border: 1px solid rgba(255, 80, 100, 0.6);
          border-radius: 50%;
          background: #16090c;
          color: #ff6577;
          font-size: 16px;
          cursor: pointer;
          pointer-events: auto;
          box-shadow: 0 0 14px rgba(255, 35, 55, 0.25);
        }

        .thejas-ai-toggle:hover {
          background: #8e1023;
          color: white;
        }

        .thejas-ai-toggle:focus-visible {
          outline: 2px solid #ff5369;
          outline-offset: 2px;
        }

        .thejas-ai-toggle.toggle-closed {
          position: fixed;
          top: auto;
          right: 16px;
          bottom: 16px;
          z-index: 99999;
          width: 44px;
          height: 44px;
          border: 1px solid #ff5369;
          background: linear-gradient(145deg, #b70e27, #160609);
          color: white;
          font-size: 16px;
          font-weight: 900;
          box-shadow: 0 0 25px rgba(255, 30, 55, 0.45);
        }

        /* ANIMATIONS */

        @keyframes carFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        @keyframes carRev {
          0% { transform: translate(0, 0); }
          25% { transform: translate(-1px, 1px); }
          50% { transform: translate(1px, 0); }
          75% { transform: translate(-1px, -1px); }
          100% { transform: translate(0, 0); }
        }

        @keyframes wheelSpin {
          to { transform: rotate(360deg); }
        }

        @keyframes flameFlicker {
          from { transform: scaleX(0.65) scaleY(0.85); }
          to { transform: scaleX(1.15) scaleY(1.1); }
        }

        @keyframes glowPulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }

        @keyframes lightBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.25; }
        }

        @keyframes bubbleEnter {
          from { opacity: 0; transform: translateY(8px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes typing {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-4px); opacity: 1; }
        }

        @keyframes statusBlink {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        @media (max-width: 600px) {
          .thejas-ai-toggle.toggle-closed {
            right: 14px;
            bottom: 14px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .thejas-ai-container *,
          .thejas-ai-container {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}

export default ThejasAI;