
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    id: "01",
    key: "languages",
    label: "Programming Languages",
    tag: "LANG",
    title: "The languages I code in.",
    desc: "Programming languages that form the foundation of my development and problem-solving journey.",
    items: ["C", "C++", "Python", "HTML5", "CSS3"],
  },
  {
    id: "02",
    key: "frontend",
    label: "Frontend Development",
    tag: "FRONTEND",
    title: "Crafting web experiences.",
    desc: "Technologies used to create responsive and interactive web interfaces.",
    items: ["React.js", "HTML5", "CSS3"],
  },
  {
    id: "03",
    key: "backend",
    label: "Backend Development",
    tag: "BACKEND",
    title: "Building behind the scenes.",
    desc: "Backend technologies and API development for full-stack applications.",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    id: "04",
    key: "database",
    label: "Databases & Storage",
    tag: "DATA",
    title: "Working with data.",
    desc: "Database technologies used to store, manage and retrieve application data.",
    items: ["MongoDB", "MongoDB Atlas", "MySQL", "Mongoose"],
  },
  {
    id: "05",
    key: "ai",
    label: "AI & Machine Learning",
    tag: "AI / ML",
    title: "Exploring intelligent systems.",
    desc: "Deep learning architectures, computer vision and data science tools explored through practical projects.",
    items: [
      "DINOv3",
      "CNN",
      "ResNet",
      "EfficientNet",
      "LoRA",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
    ],
    focus: [
      "Computer Vision",
      "Deep Learning",
      "Model Fine-tuning",
    ],
  },
  {
    id: "06",
    key: "core",
    label: "Core Computer Science",
    tag: "CORE",
    title: "Strong technical foundations.",
    desc: "Fundamental computer science concepts that support efficient software development and analytical thinking.",
    items: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  {
    id: "07",
    key: "tools",
    label: "Developer Tools",
    tag: "TOOLS",
    title: "Tools of the trade.",
    desc: "Development environments, collaboration platforms and deployment tools used during project development.",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Vercel",
      "Render",
      "XAMPP",
    ],
  },
];

const totalSkills = categories.reduce(
  (total, category) => total + category.items.length,
  0
);

function Skills() {
  const [active, setActive] = useState(categories[0].key);

  const current = categories.find(
    (category) => category.key === active
  );

  return (
    <section id="skills" className="sk-section">

      {/* BACKGROUND */}
      <div className="sk-grid-bg" />
      <div className="sk-orb sk-orb-1" />
      <div className="sk-orb sk-orb-2" />

      {/* HEADER */}
      <motion.div
        className="sk-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <p className="sk-eyebrow">03 // TECHNICAL EXPERTISE</p>

          <h1>
            WHAT I <span>BUILD WITH.</span>
          </h1>

          <p className="sk-subtitle">
            Technologies, tools and concepts behind my work.
          </p>
        </div>

        <div className="sk-stats">

          <div className="sk-stat">
            <strong>
              {String(categories.length).padStart(2, "0")}
            </strong>
            <span>CATEGORIES</span>
          </div>

          <div className="sk-stat">
            <strong>
              {String(totalSkills).padStart(2, "0")}
            </strong>
            <span>SKILL ENTRIES</span>
          </div>

          <div className="sk-stat live">
            <strong>
              <i />
            </strong>
            <span>ALWAYS LEARNING</span>
          </div>

        </div>
      </motion.div>

      {/* MAIN LAYOUT */}
      <motion.div
        className="sk-layout"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >

        {/* CATEGORY INDEX */}
        <aside className="sk-index">

          <p className="sk-index-title">
            EXPLORE MY SKILLS
          </p>

          <div className="sk-index-list">

            {categories.map((category) => (
              <button
                key={category.key}
                className={`sk-index-item ${
                  active === category.key ? "active" : ""
                }`}
                onClick={() => setActive(category.key)}
              >
                <span className="sk-index-num">
                  {category.id}
                </span>

                <span className="sk-index-label">
                  {category.label}
                </span>

                <span className="sk-index-count">
                  {String(category.items.length).padStart(2, "0")}
                </span>

                {active === category.key && (
                  <motion.span
                    layoutId="sk-active-bar"
                    className="sk-index-bar"
                  />
                )}
              </button>
            ))}

          </div>

          <div className="sk-index-foot">
            <span>SELECT A CATEGORY</span>
            <i>↗</i>
          </div>

        </aside>

        {/* SKILL DETAILS */}
        <div className="sk-detail">

          <div className="sk-detail-glow" />

          <AnimatePresence mode="wait">

            <motion.div
              key={current.key}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="sk-detail-inner"
            >

              <div className="sk-detail-top">
                <span>{current.id}</span>
                <span>{current.label.toUpperCase()}</span>
                <span>{current.tag}_{current.id}</span>
              </div>

              <h2>{current.title}</h2>

              <p className="sk-detail-desc">
                {current.desc}
              </p>

              <div className="sk-divider">
                <span>TECHNOLOGIES & CONCEPTS</span>
                <i />
                <span>
                  {String(current.items.length).padStart(2, "0")}
                </span>
              </div>

              {/* SKILL CARDS */}
              <div className="sk-cards">

                {current.items.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="sk-card"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span className="sk-card-num">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="sk-card-name">
                      {skill}
                    </span>

                    <span className="sk-card-arrow">
                      →
                    </span>
                  </motion.div>
                ))}

              </div>

              {/* FOCUS AREAS */}
              {current.focus && (
                <div className="sk-focus">

                  <span className="sk-focus-label">
                    AREAS OF INTEREST
                  </span>

                  {current.focus.map((item) => (
                    <span
                      key={item}
                      className="sk-focus-item"
                    >
                      {item}
                    </span>
                  ))}

                </div>
              )}

            </motion.div>

          </AnimatePresence>

        </div>

      </motion.div>

      {/* FOOTER */}
      <motion.div
        className="sk-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span>LEARN</span>
        <i>→</i>
        <span>BUILD</span>
        <i>→</i>
        <span>EXPERIMENT</span>
        <i>→</i>
        <span className="active-word">EVOLVE</span>
      </motion.div>

      {/* INTERNAL CSS */}
      <style>{`

        .sk-section {
          position: relative;
          min-height: 100vh;
          padding: 130px 5vw 100px;
          overflow: hidden;
          box-sizing: border-box;
          background: #070606;
          color: #f5eeee;
          font-family: system-ui, sans-serif;
        }

        /* BACKGROUND */

        .sk-grid-bg {
          position: absolute;
          inset: 0;
          opacity: 0.16;
          background-image:
            linear-gradient(rgba(255,48,72,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,48,72,0.05) 1px, transparent 1px);
          background-size: 70px 70px;
          mask-image: radial-gradient(circle at center, black, transparent 80%);
          pointer-events: none;
        }

        .sk-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          opacity: 0.14;
        }

        .sk-orb-1 {
          width: 400px;
          height: 400px;
          top: 5%;
          left: -200px;
          background: #b90025;
        }

        .sk-orb-2 {
          width: 350px;
          height: 350px;
          bottom: 5%;
          right: -180px;
          background: #ff243f;
        }

        /* HEADER */

        .sk-header {
          position: relative;
          z-index: 2;
          max-width: 1300px;
          margin: 0 auto 60px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 40px;
          padding-bottom: 36px;
          border-bottom: 1px solid rgba(255,48,72,0.2);
        }

        .sk-eyebrow {
          margin: 0 0 22px;
          font-family: monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          color: #ff5368;
        }

        .sk-header h1 {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          font-size: clamp(40px, 6vw, 88px);
          line-height: 0.95;
          letter-spacing: -0.06em;
          font-weight: 800;
        }

        .sk-header h1 span {
          background: linear-gradient(
            90deg,
            #ff9aa5,
            #ff3048,
            #bd001f
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .sk-subtitle {
          margin: 18px 0 0;
          color: #a58e92;
          font-size: 13px;
          letter-spacing: 0.02em;
        }

        /* STATS */

        .sk-stats {
          display: flex;
          gap: 12px;
        }

        .sk-stat {
          min-width: 105px;
          padding: 15px;
          border: 1px solid rgba(255,48,72,0.22);
          border-radius: 13px;
          background: rgba(50,8,15,0.45);
          backdrop-filter: blur(12px);
        }

        .sk-stat strong {
          display: flex;
          align-items: center;
          height: 34px;
          color: #ffe5e9;
          font-size: 28px;
          letter-spacing: -0.04em;
        }

        .sk-stat span {
          display: block;
          margin-top: 8px;
          color: rgba(235,200,205,0.48);
          font-family: monospace;
          font-size: 8px;
          letter-spacing: 0.1em;
          white-space: nowrap;
        }

        .sk-stat.live span {
          color: #ff8493;
        }

        .sk-stat.live i {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #ff3048;
          box-shadow: 0 0 14px #ff3048;
          animation: skPulse 2s ease-in-out infinite;
        }

        @keyframes skPulse {
          0%, 100% { opacity: 0.45; }
          50% { opacity: 1; }
        }

        /* MAIN LAYOUT */

        .sk-layout {
          position: relative;
          z-index: 2;
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 310px 1fr;
          gap: 18px;
          align-items: start;
        }

        /* INDEX */

        .sk-index {
          position: sticky;
          top: 100px;
          padding: 24px;
          border: 1px solid rgba(255,48,72,0.25);
          border-radius: 20px;
          background: linear-gradient(
            145deg,
            rgba(48,12,17,0.9),
            rgba(15,8,10,0.95)
          );
          box-shadow:
            inset 0 1px rgba(255,255,255,0.03),
            0 25px 80px rgba(0,0,0,0.2);
          backdrop-filter: blur(20px);
        }

        .sk-index-title {
          margin: 0 0 18px;
          color: #ff5368;
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.18em;
        }

        .sk-index-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .sk-index-item {
          position: relative;
          display: grid;
          grid-template-columns: 30px 1fr auto;
          align-items: center;
          padding: 15px 12px;
          border: 1px solid transparent;
          border-radius: 10px;
          background: transparent;
          color: rgba(245,225,229,0.55);
          text-align: left;
          cursor: pointer;
          font-family: inherit;
          transition: color 0.3s, background 0.3s, border-color 0.3s;
        }

        .sk-index-item:hover {
          color: #fff;
          background: rgba(190,0,30,0.08);
        }

        .sk-index-item.active {
          color: #fff;
          background: rgba(190,0,30,0.16);
          border-color: rgba(255,48,72,0.3);
        }

        .sk-index-num {
          color: #ff5368;
          font-family: monospace;
          font-size: 10px;
        }

        .sk-index-label {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        .sk-index-count {
          color: rgba(235,200,205,0.45);
          font-family: monospace;
          font-size: 10px;
        }

        .sk-index-bar {
          position: absolute;
          left: 0;
          top: 18%;
          bottom: 18%;
          width: 3px;
          border-radius: 3px;
          background: linear-gradient(180deg, #ff9aa5, #ff3048);
          box-shadow: 0 0 10px rgba(255,48,72,0.5);
        }

        .sk-index-foot {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
          padding-top: 17px;
          border-top: 1px solid rgba(255,48,72,0.15);
          color: rgba(235,200,205,0.35);
          font-family: monospace;
          font-size: 8px;
          letter-spacing: 0.14em;
        }

        .sk-index-foot i {
          color: #ff5368;
          font-style: normal;
        }

        /* DETAIL PANEL */

        .sk-detail {
          position: relative;
          min-height: 550px;
          padding: 38px;
          overflow: hidden;
          border: 1px solid rgba(255,48,72,0.24);
          border-radius: 20px;
          background: linear-gradient(
            145deg,
            rgba(43,13,18,0.88),
            rgba(13,8,10,0.95)
          );
          box-shadow:
            inset 0 1px rgba(255,255,255,0.03),
            0 25px 80px rgba(0,0,0,0.2);
          backdrop-filter: blur(20px);
        }

        .sk-detail-glow {
          position: absolute;
          width: 320px;
          height: 320px;
          right: -120px;
          top: -120px;
          border-radius: 50%;
          background: #d00029;
          filter: blur(110px);
          opacity: 0.15;
          pointer-events: none;
        }

        .sk-detail-inner {
          position: relative;
        }

        .sk-detail-top {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          color: rgba(235,200,205,0.4);
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.14em;
        }

        .sk-detail-top span:first-child {
          color: #ff5368;
        }

        .sk-detail h2 {
          margin: 48px 0 14px;
          max-width: 700px;
          color: #fff0f2;
          font-size: clamp(32px, 4vw, 55px);
          line-height: 1;
          letter-spacing: -0.055em;
          font-weight: 750;
        }

        .sk-detail-desc {
          margin: 0;
          max-width: 500px;
          color: rgba(235,215,219,0.57);
          font-family: monospace;
          font-size: 12px;
          line-height: 1.8;
        }

        /* DIVIDER */

        .sk-divider {
          display: flex;
          align-items: center;
          gap: 14px;
          margin: 42px 0 22px;
          color: #ff6879;
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.14em;
        }

        .sk-divider i {
          flex: 1;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(255,48,72,0.5),
            transparent
          );
        }

        /* SKILL CARDS */

        .sk-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
          gap: 10px;
        }

        .sk-card {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 12px;
          padding: 17px;
          border: 1px solid rgba(255,48,72,0.2);
          border-radius: 10px;
          background: rgba(150,0,25,0.07);
          transition: transform 0.3s ease, background 0.3s ease, border-color 0.3s ease;
        }

        .sk-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,90,110,0.6);
          background: linear-gradient(
            135deg,
            rgba(190,0,30,0.18),
            rgba(100,0,20,0.12)
          );
          box-shadow: 0 10px 25px rgba(160,0,25,0.1);
        }

        .sk-card-num {
          color: #ff5368;
          font-family: monospace;
          font-size: 9px;
        }

        .sk-card-name {
          color: #f3e3e6;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        .sk-card-arrow {
          color: rgba(255,100,120,0.5);
          font-size: 13px;
          transition: transform 0.3s, color 0.3s;
        }

        .sk-card:hover .sk-card-arrow {
          transform: translateX(4px);
          color: #ff5368;
        }

        /* FOCUS AREAS */

        .sk-focus {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
          margin-top: 35px;
          padding-top: 22px;
          border-top: 1px solid rgba(255,48,72,0.17);
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.1em;
        }

        .sk-focus-label {
          color: rgba(235,200,205,0.4);
          margin-right: 6px;
        }

        .sk-focus-item {
          color: #ff9aa5;
        }

        .sk-focus-item::before {
          content: "◆";
          margin-right: 7px;
          color: #ff3048;
        }

        /* FOOTER */

        .sk-footer {
          position: relative;
          z-index: 2;
          max-width: 1300px;
          margin: 55px auto 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          color: rgba(235,215,219,0.4);
          font-family: monospace;
          font-size: 10px;
          letter-spacing: 0.15em;
        }

        .sk-footer i {
          color: #ff5368;
          font-style: normal;
        }

        .sk-footer .active-word {
          color: #ff6879;
        }

        /* TABLET */

        @media (max-width: 1000px) {
          .sk-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .sk-layout {
            grid-template-columns: 1fr;
          }

          .sk-index {
            position: static;
            padding: 18px;
          }

          .sk-index-list {
            flex-direction: row;
            overflow-x: auto;
            padding-bottom: 5px;
          }

          .sk-index-item {
            min-width: 190px;
          }

          .sk-index-bar {
            display: none;
          }

          .sk-index-foot {
            display: none;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .sk-section {
            padding: 100px 20px 80px;
          }

          .sk-stats {
            width: 100%;
            gap: 7px;
          }

          .sk-stat {
            flex: 1;
            min-width: 0;
            padding: 11px;
          }

          .sk-stat strong {
            font-size: 23px;
          }

          .sk-stat span {
            font-size: 7px;
            white-space: normal;
          }

          .sk-detail {
            padding: 23px;
            min-height: auto;
          }

          .sk-detail h2 {
            margin-top: 35px;
          }

          .sk-cards {
            grid-template-columns: 1fr 1fr;
          }

          .sk-card {
            gap: 8px;
            padding: 13px 10px;
          }

          .sk-card-name {
            font-size: 11px;
            overflow-wrap: anywhere;
          }

          .sk-footer {
            flex-wrap: wrap;
            gap: 12px;
            font-size: 8px;
          }
        }

      `}</style>
    </section>
  );
}

export default Skills;
