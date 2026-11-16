import { motion } from "framer-motion";

/* ---------- DATA ---------- */
const LINES = [
  "Building meaningful solutions",
  "Exploring AI & Machine Learning",
  "Developing full-stack applications",
  "Always learning, always building",
];
const TAGS = [
  ["</>", "DEVELOPER"],
  ["✦", "AI / ML"],
  ["◆", "PROBLEM SOLVER"],
];
const FACTS = [
  ["◉", "LOCATION", "Bengaluru, India"],
  ["◈", "EDUCATION", "UVCE · Computer Science"],
  ["♡", "INTERESTS", "Software Engineering & AI"],
];
const STATS = [
  ["8.57", "CGPA"],
  ["2027", "GRADUATION"],
  ["CSE", "BRANCH"],
];
const EXPLORING = ["AI / ML", "DINOv3", "DEEP LEARNING", "FULL STACK", "REST APIs", "COMPUTER VISION"];

const CHAR_MS = 38;
let clock = 1;
const TYPED = LINES.map((text) => {
  const start = clock;
  clock += (text.length * CHAR_MS) / 1000 + 0.25;
  return { text, start };
});

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

function Hero() {
  return (
    <section id="home" className="hx">
      <div className="hx-wrap">
        {/* TOP: intro + portrait */}
        <div className="hx-top">
          <motion.div className="hx-intro" {...rise(0)}>
            <p className="hx-hello">HELLO, WORLD. I'M</p>

            <h1>
              THIRUMALE
              <br />
              <span>GOWDA B V</span>
            </h1>

            <p className="hx-desc">
              Computer Science Engineering Student
              <br />
              building technology-driven solutions
              <br />
              for real-world problems.
            </p>

            <ul className="hx-tags">
              {TAGS.map(([icon, label]) => (
                <li key={label}>
                  <i>{icon}</i> {label}
                </li>
              ))}
            </ul>

            <div className="hx-actions">
              <a href="/Thirumale_Gowda_BV_Resume.pdf" target="_blank" rel="noreferrer" className="hx-resume">
                VIEW RESUME <span>→</span>
              </a>
              <a href="https://github.com/Thirumalegowdabv" target="_blank" rel="noreferrer" aria-label="GitHub">
                GH
              </a>
              <a
                href="https://linkedin.com/in/thirumale-gowda-4122032b4"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                IN
              </a>
              <a href="mailto:thirumalegowdabv19@gmail.com" aria-label="Email">
                @
              </a>
            </div>
          </motion.div>

          <motion.div className="hx-portrait" {...rise(0.2)}>
            <div className="hx-frame">
              <img src="/images/Profile.jpeg" alt="Thirumale Gowda B V" />
            </div>
            <div className="hx-file">
              <span>01</span>
              <span>THIRUMALE.EXE</span>
            </div>
            <div className="hx-open">
              <s />
              OPEN TO LEARNING
            </div>
          </motion.div>
        </div>

        {/* BOTTOM: three even columns */}
        <motion.div className="hx-strip" {...rise(0.4)}>
          <section>
            <header>
              <span>PROFILE.EXE</span>
              <span>•••</span>
            </header>
            <dl>
              {FACTS.map(([icon, label, value]) => (
                <div key={label}>
                  <dt>
                    <span>{icon}</span>
                    {label}
                  </dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <p className="hx-motto">
              <s />
              Curious by nature.
              <br />
              Driven by innovation.
            </p>
          </section>

          <section>
            <header>
              <span>THIRUMALE@developer:~$</span>
              <span className="hx-dots">
                <b />
                <b />
                <b />
              </span>
            </header>
            <div className="hx-term">
              {TYPED.map(({ text, start }, i) => (
                <p key={text}>
                  <b>&gt;</b>
                  <span
                    style={{
                      "--n": text.length,
                      "--t": `${(text.length * CHAR_MS)}ms`,
                      "--d": `${start}s`,
                    }}
                  >
                    {text}
                  </span>
                  {i === TYPED.length - 1 && <em>_</em>}
                </p>
              ))}
            </div>
          </section>

          <section>
            <header>
              <span>MY UNIVERSE</span>
              <span>✦</span>
            </header>
            <ul className="hx-stats">
              {STATS.map(([value, label]) => (
                <li key={label}>
                  <strong>{value}</strong>
                  <small>{label}</small>
                </li>
              ))}
            </ul>

            <header className="hx-sub">
              <span>⌕ CURRENTLY EXPLORING</span>
              <span>→</span>
            </header>
            <ul className="hx-explore">
              {EXPLORING.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,700;12..96,800&display=swap');

        .hx {
          --red: #d3142f;
          --hot: #ff4a5c;
          --ink: #f4eaea;
          --dim: #a89a9d;
          --line: rgba(244, 234, 234, 0.14);
          min-height: 100vh;
          padding: 120px 0 72px;
          background: #000;
          color: var(--ink);
          font-family: "Bricolage Grotesque", system-ui, sans-serif;
        }
        .hx *, .hx *::before, .hx *::after { box-sizing: border-box; }
        .hx p, .hx ul, .hx dl, .hx dd, .hx h1 { margin: 0; padding: 0; }
        .hx ul { list-style: none; }
        .hx a:focus-visible { outline: 2px solid var(--hot); outline-offset: 3px; }
        .hx-wrap { width: min(1180px, 90%); margin: 0 auto; }

        /* TOP */
        .hx-top {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          align-items: center;
          gap: 64px;
        }
        .hx-hello { color: var(--hot); font-size: 15px; font-weight: 500; margin-bottom: 14px !important; }
        .hx-intro h1 {
          font-size: clamp(42px, 8.2vw, 116px);
          line-height: 0.92;
          font-weight: 800;
          letter-spacing: -0.035em;
        }
        .hx-intro h1 span { color: var(--red); }
        .hx-desc { margin: 28px 0 22px !important; max-width: 34ch; font-size: 19px; line-height: 1.5; color: var(--dim); }

        .hx-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .hx-tags li {
          display: flex;
          gap: 8px;
          padding: 8px 14px;
          border: 1px solid var(--red);
          border-radius: 999px;
          font-size: 13px;
          font-weight: 500;
        }
        .hx-tags i { font-style: normal; color: var(--hot); }

        .hx-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 30px; }
        .hx-actions a {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 46px;
          height: 46px;
          padding: 0 16px;
          border: 1px solid var(--line);
          border-radius: 999px;
          color: var(--ink);
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s;
        }
        .hx-actions a:hover { border-color: var(--hot); background: rgba(211, 20, 47, 0.14); }
        .hx-actions .hx-resume { gap: 12px; padding: 0 22px; background: var(--red); border-color: var(--red); }
        .hx-actions .hx-resume:hover { background: #ee1f3c; }

        /* PORTRAIT */
        .hx-portrait { position: relative; justify-self: center; width: min(100%, 400px); }
        .hx-frame {
          border-radius: 999px 999px 28px 28px;
          overflow: hidden;
          aspect-ratio: 4 / 5;
          box-shadow: 14px 14px 0 var(--red);
          background: #140507;
        }
        .hx-frame img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: center top; }
        .hx-file {
          position: absolute;
          top: 26px;
          right: -12px;
          display: flex;
          border-radius: 6px;
          overflow: hidden;
          font-size: 12px;
          font-weight: 700;
          z-index: 2;
        }
        .hx-file span { padding: 7px 11px; background: #000; border: 1px solid var(--red); }
        .hx-file span:first-child { background: var(--red); border-color: var(--red); }
        .hx-open {
          position: absolute;
          left: 14px;
          bottom: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.82);
          font-size: 12px;
          font-weight: 700;
          z-index: 2;
        }
        .hx s {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--hot);
          text-decoration: none;
        }

        /* BOTTOM STRIP */
        .hx-strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          align-items: start;
          margin-top: 80px;
          border-top: 1px solid var(--line);
        }
        .hx-strip > section { padding: 26px 32px 0; border-left: 1px solid var(--line); }
        .hx-strip > section:first-child { padding-left: 0; border-left: 0; }
        .hx-strip header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
          color: var(--hot);
          font-size: 13px;
          font-weight: 700;
        }
        .hx-strip .hx-sub { margin-top: 28px; }
        .hx-dots { display: flex; gap: 5px; }
        .hx-dots b { width: 7px; height: 7px; border-radius: 50%; background: var(--red); }
        .hx-dots b:nth-child(2) { background: #94162a; }
        .hx-dots b:nth-child(3) { background: #5a0a16; }

        .hx dl > div { padding: 11px 0; border-top: 1px solid var(--line); }
        .hx dt { display: flex; gap: 9px; margin-bottom: 3px; color: var(--dim); font-size: 12px; }
        .hx dt span { color: var(--hot); }
        .hx dd { font-size: 16px; font-weight: 500; }
        .hx-motto { margin-top: 14px !important; color: var(--dim); font-size: 14px; line-height: 1.6; }
        .hx-motto s { margin-right: 8px; }

        .hx-term {
          font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
          font-size: 13px;
          line-height: 2;
        }
        .hx-term p b { margin-right: 8px; color: var(--hot); font-weight: 400; }
        .hx-term p span {
          display: inline-block;
          vertical-align: bottom;
          overflow: hidden;
          white-space: nowrap;
          width: calc(var(--n) * 1ch);
          animation: hx-type var(--t) steps(var(--n)) var(--d) backwards;
        }
        .hx-term em { font-style: normal; color: var(--hot); animation: hx-blink 1s steps(1) infinite; }
        @keyframes hx-type { from { width: 0; } }
        @keyframes hx-blink { 50% { opacity: 0; } }

        .hx-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .hx-stats strong { display: block; font-size: clamp(24px, 3vw, 40px); font-weight: 800; line-height: 1; color: var(--ink); }
        .hx-stats small { display: block; margin-top: 6px; color: var(--dim); font-size: 12px; }
        .hx-explore { display: flex; flex-wrap: wrap; gap: 6px; }
        .hx-explore li { padding: 6px 11px; border: 1px solid var(--line); border-radius: 999px; font-size: 12px; font-weight: 500; }

        /* RESPONSIVE UPDATES */
        @media (max-width: 1000px) {
          .hx-top { grid-template-columns: 1fr; gap: 40px; }
          .hx-portrait { justify-self: center; width: min(100%, 320px); margin: 0 auto; }
          .hx-strip { grid-template-columns: 1fr; margin-top: 48px; }
          .hx-strip > section { padding: 24px 0; border-left: 0; border-bottom: 1px solid var(--line); }
        }
        @media (max-width: 560px) {
          .hx { padding-top: 80px; }
          .hx-wrap { width: 92%; }
          .hx-portrait { width: calc(100% - 24px); margin-right: 12px; }
          .hx-file { right: 0px; }
          .hx-frame { box-shadow: 10px 10px 0 var(--red); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hx-term p span, .hx-term em { animation: none; }
        }
      `}</style>
    </section>
  );
}

export default Hero;