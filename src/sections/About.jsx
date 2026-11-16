import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function About() {
  const [activeEdu, setActiveEdu] = useState(0);

  const stories = [
    {
      number: "01",
      label: "MINDSET",
      title: "Problem Solver",
      text: "I enjoy understanding how things work, breaking complex challenges into smaller problems, and exploring effective solutions through coding, debugging and experimentation.",
    },
    {
      number: "02",
      label: "LEARNING",
      title: "Curious & Adaptable",
      text: "I believe in continuous learning. Exploring new technologies, experimenting with frameworks and building practical applications help me grow as a developer.",
    },
    {
      number: "03",
      label: "COLLABORATION",
      title: "Leader & Team Player",
      text: "From tutoring students to directing a 40-member theatre team, I enjoy sharing ideas, taking responsibility and working with people towards a common goal.",
    },
  ];

  const education = [
    {
      id: "uvce",
      period: "2023 — 2027",
      institution: "University Visvesvaraya College of Engineering",
      shortName: "UVCE",
      location: "Bengaluru, India",
      degree: "B.Tech in Computer Science Engineering",
      score: "CGPA: 8.57",
      status: "Currently Pursuing",
      active: true,
      highlights: [
        "Computer Science",
        "Software Development",
        "AI & Machine Learning",
      ],
    },
    {
      id: "pu",
      period: "2021 — 2023",
      institution: "M Krishna PU College",
      shortName: "PU",
      location: "Karnataka, India",
      degree: "Pre-University Education",
      score: "Percentage: 93.33%",
      status: "Completed",
      active: false,
      highlights: [
        "Academic Excellence",
        "Science Education",
      ],
    },
    {
      id: "school",
      period: "2020 — 2021",
      institution: "New Carmel Public High School",
      shortName: "School",
      location: "Karnataka, India",
      degree: "Secondary School Education",
      score: "Percentage: 91.04%",
      status: "Completed",
      active: false,
      highlights: [
        "Academic Foundation",
        "Mathematics & Science",
      ],
    },
  ];

  const interests = [
    {
      number: "01",
      title: "Software Development",
      description:
        "Building full-stack web applications, backend systems, REST APIs and practical digital solutions.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      symbol: "</>",
    },
    {
      number: "02",
      title: "Artificial Intelligence & ML",
      description:
        "Exploring intelligent systems, deep learning architectures, model fine-tuning and computer vision.",
      tags: ["DINOv3", "CNN", "LoRA", "Deep Learning"],
      symbol: "✦",
    },
    {
      number: "03",
      title: "Problem Solving",
      description:
        "Strengthening algorithmic thinking, analytical reasoning and efficient approaches to programming challenges.",
      tags: ["DSA", "C++", "Python", "OOP"],
      symbol: "◇",
    },
  ];

  const beyondTech = [
    "Acting & Theatre",
    "Scriptwriting",
    "Teaching & Mentoring",
    "Leadership",
    "Public Speaking",
    "Event Management",
    "Creative Thinking",
    "Karate",
  ];

  return (
    <section id="about" className="ab-section">

      {/* BACKGROUND */}
      <div className="ab-grid-bg" />
      <div className="ab-glow ab-glow-1" />
      <div className="ab-glow ab-glow-2" />

      <div className="ab-container">

        {/* HEADER */}
        <motion.div
          className="ab-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="ab-eyebrow">
              02 // ABOUT & BACKGROUND
            </span>

            <h2 className="ab-title">
              More Than Just <span>Code.</span>
            </h2>

            <p className="ab-subtitle">
              A little about my journey, mindset and what drives me.
            </p>
          </div>

          <div className="ab-status-pill">
            <span className="ab-dot" />
            <span>ALWAYS LEARNING</span>
          </div>
        </motion.div>

        {/* INTRODUCTION */}
        <motion.div
          className="ab-intro-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="ab-intro-label">
            <span>01</span>
            <span>THE PERSON BEHIND THE CODE</span>
          </div>

          <h3>
            Turning curiosity into
            <span> meaningful solutions.</span>
          </h3>

          <p>
            I'm a Computer Science Engineering student at UVCE with a
            passion for technology and building solutions that address
            real-world problems. My interests span software engineering,
            artificial intelligence and machine learning, with hands-on
            experience in developing full-stack web applications and
            implementing deep learning models.
          </p>

          <p>
            From building and deploying web platforms to exploring
            advanced computer vision architectures such as DINOv3,
            I enjoy turning ideas into functional solutions through
            continuous learning, experimentation and problem-solving.
          </p>

          <p>
            Beyond technology, I actively engage in leadership,
            theatre and collaborative initiatives, bringing together
            creativity, teamwork and technical thinking.
          </p>

          <div className="ab-intro-footer">
            <span>CURIOUS BY NATURE</span>
            <span>DRIVEN BY INNOVATION</span>
            <span>BUILT TO CREATE</span>
          </div>
        </motion.div>

        {/* CORE PHILOSOPHY */}
        <div className="ab-main-grid">

          <div className="ab-stories">
            <div className="ab-column-title">
              <span>02</span>
              <h3>What Defines Me</h3>
            </div>

            <div className="ab-story-list">
              {stories.map((story, index) => (
                <motion.div
                  key={story.number}
                  className="ab-story-card"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                >
                  <div className="ab-story-header">
                    <span className="ab-story-num">
                      {story.number}
                    </span>
                    <span className="ab-story-tag">
                      {story.label}
                    </span>
                  </div>

                  <h4>{story.title}</h4>
                  <p>{story.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* EDUCATION */}
          <div className="ab-education">
            <div className="ab-column-title">
              <span>03</span>
              <h3>Academic Journey</h3>
            </div>

            <div className="ab-edu-card">

              <div className="ab-edu-tabs">
                {education.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveEdu(idx)}
                    className={`ab-edu-tab ${
                      activeEdu === idx ? "active" : ""
                    }`}
                  >
                    {item.shortName}
                    {item.active && <b className="ab-tab-live" />}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeEdu}
                  className="ab-edu-content"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="ab-edu-top">
                    <span className="ab-edu-period">
                      {education[activeEdu].period}
                    </span>

                    <span
                      className={`ab-edu-status ${
                        education[activeEdu].active ? "active" : ""
                      }`}
                    >
                      {education[activeEdu].status}
                    </span>
                  </div>

                  <h4 className="ab-edu-inst">
                    {education[activeEdu].institution}
                  </h4>

                  <p className="ab-edu-degree">
                    {education[activeEdu].degree}
                  </p>

                  <div className="ab-edu-location">
                    <span>⌖</span>
                    {education[activeEdu].location}
                  </div>

                  <div className="ab-edu-score-box">
                    <span>ACADEMIC RECORD</span>
                    <strong>{education[activeEdu].score}</strong>
                  </div>

                  <div className="ab-edu-highlights">
                    {education[activeEdu].highlights.map((item, i) => (
                      <span key={i} className="ab-chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* TECHNICAL INTERESTS */}
        <div className="ab-interests-section">

          <div className="ab-column-title">
            <span>04</span>
            <h3>Areas That Excite Me</h3>
          </div>

          <div className="ab-interest-grid">
            {interests.map((item, index) => (
              <motion.div
                key={item.number}
                className="ab-interest-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <div className="ab-interest-top">
                  <span>{item.number}</span>
                  <strong>{item.symbol}</strong>
                </div>

                <h4>{item.title}</h4>
                <p>{item.description}</p>

                <div className="ab-interest-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BEYOND TECHNOLOGY */}
        <motion.div
          className="ab-beyond"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="ab-column-title">
            <span>05</span>
            <h3>Beyond Technology</h3>
          </div>

          <div className="ab-beyond-content">
            <div className="ab-beyond-text">
              <h3>
                Creativity is
                <span> another form of intelligence.</span>
              </h3>

              <p>
                Technology isn't my only playground. Theatre, storytelling,
                teaching and leadership have shaped how I communicate,
                collaborate and approach challenges.
              </p>

              <div className="ab-beyond-facts">
                <div>
                  <strong>40+</strong>
                  <span>THEATRE TEAM MEMBERS</span>
                </div>

                <div>
                  <strong>1.5</strong>
                  <span>YEARS OF TUTORING</span>
                </div>

                <div>
                  <strong>6</strong>
                  <span>THROWBALL TEAM MEMBERS</span>
                </div>
              </div>
            </div>

            <div className="ab-beyond-tags">
              {beyondTech.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                >
                  <i>✦</i> {item}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      {/* INTERNAL CSS */}
      <style>{`
        .ab-section {
          position: relative;
          width: 100%;
          padding: 100px 5%;
          overflow: hidden;
          box-sizing: border-box;
          background: #070606;
          color: #f5eeee;
          font-family: system-ui, sans-serif;
        }

        .ab-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 1px 1px,
            rgba(255,255,255,0.045) 1px, transparent 0);
          background-size: 32px 32px;
          pointer-events: none;
        }

        .ab-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(130px);
          pointer-events: none;
          opacity: 0.16;
        }

        .ab-glow-1 {
          width: 420px;
          height: 420px;
          top: 0;
          right: -100px;
          background: #e11d36;
        }

        .ab-glow-2 {
          width: 350px;
          height: 350px;
          bottom: 5%;
          left: -100px;
          background: #9f001b;
        }

        .ab-container {
          position: relative;
          z-index: 2;
          max-width: 1250px;
          margin: auto;
        }

        /* HEADER */

        .ab-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 38px;
          padding-bottom: 22px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .ab-eyebrow {
          display: block;
          margin-bottom: 10px;
          color: #ff5368;
          font-family: monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
        }

        .ab-title {
          margin: 0;
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.04em;
        }

        .ab-title span,
        .ab-intro-card h3 span,
        .ab-beyond-text h3 span {
          background: linear-gradient(135deg, #ff8b98, #ff243f);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ab-subtitle {
          margin: 12px 0 0;
          color: #99898c;
          font-size: clamp(12px, 1.5vw, 14px);
        }

        .ab-status-pill {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 9px 14px;
          border: 1px solid rgba(255,48,72,0.3);
          border-radius: 30px;
          color: #ff8a98;
          background: rgba(180,0,25,0.08);
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.1em;
          white-space: nowrap;
        }

        .ab-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ff3048;
          box-shadow: 0 0 10px #ff3048;
        }

        /* INTRODUCTION */

        .ab-intro-card {
          position: relative;
          padding: 32px;
          margin-bottom: 55px;
          border: 1px solid rgba(255,45,65,0.22);
          border-radius: 18px;
          background: linear-gradient(
            130deg,
            rgba(100,5,18,0.16),
            rgba(18,10,11,0.8)
          );
          backdrop-filter: blur(15px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.2);
        }

        .ab-intro-label {
          display: flex;
          gap: 12px;
          align-items: center;
          color: #ff6879;
          font-family: monospace;
          font-size: 10px;
          letter-spacing: 0.15em;
        }

        .ab-intro-label span:first-child {
          color: #ff3048;
        }

        .ab-intro-card h3 {
          max-width: 700px;
          margin: 23px 0 18px;
          font-size: clamp(22px, 3vw, 36px);
          line-height: 1.25;
          letter-spacing: -0.03em;
        }

        .ab-intro-card p {
          max-width: 950px;
          margin: 0 0 14px;
          color: #b5a5a8;
          font-size: clamp(13px, 1.2vw, 14px);
          line-height: 1.8;
        }

        .ab-intro-footer {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 25px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.07);
        }

        .ab-intro-footer span {
          padding: 8px 12px;
          border: 1px solid rgba(255,45,65,0.22);
          border-radius: 6px;
          color: #ff9aa5;
          background: rgba(180,0,25,0.07);
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.08em;
        }

        /* MAIN GRID */

        .ab-main-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: start;
          margin-bottom: 60px;
        }

        .ab-column-title {
          display: flex;
          align-items: center;
          gap: 11px;
          margin-bottom: 20px;
          font-family: monospace;
        }

        .ab-column-title span {
          color: #ff3048;
          font-size: 12px;
        }

        .ab-column-title h3 {
          margin: 0;
          color: #d9c9cc;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        /* STORY CARDS */

        .ab-story-list {
          display: flex;
          flex-direction: column;
          gap: 13px;
        }

        .ab-story-card {
          padding: 22px;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 13px;
          background: rgba(25,12,14,0.65);
          backdrop-filter: blur(10px);
          transition: 0.3s ease;
        }

        .ab-story-card:hover {
          transform: translateX(5px);
          border-color: rgba(255,48,72,0.4);
          box-shadow: 0 10px 30px rgba(180,0,25,0.08);
        }

        .ab-story-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .ab-story-num {
          color: #ff3048;
          font-family: monospace;
          font-size: 10px;
        }

        .ab-story-tag {
          color: #977b80;
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.12em;
        }

        .ab-story-card h4 {
          margin: 0 0 9px;
          color: #f5e8ea;
          font-size: 17px;
        }

        .ab-story-card p {
          margin: 0;
          color: #a99b9e;
          font-size: 12px;
          line-height: 1.8;
        }

        /* EDUCATION */

        .ab-edu-card {
          padding: 22px;
          border: 1px solid rgba(255,45,65,0.22);
          border-radius: 15px;
          background: rgba(25,12,14,0.65);
          backdrop-filter: blur(10px);
          min-height: auto;
        }

        .ab-edu-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 23px;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }

        .ab-edu-tab {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 9px 15px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 7px;
          color: #a99599;
          background: rgba(255,255,255,0.03);
          font-family: monospace;
          font-size: 10px;
          cursor: pointer;
          transition: 0.25s ease;
        }

        .ab-edu-tab:hover {
          color: #fff;
          border-color: rgba(255,48,72,0.4);
        }

        .ab-edu-tab.active {
          color: #fff;
          background: rgba(190,0,30,0.17);
          border-color: #d9213a;
        }

        .ab-tab-live {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ff5265;
          box-shadow: 0 0 8px #ff5265;
        }

        .ab-edu-content {
          display: flex;
          flex-direction: column;
        }

        .ab-edu-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
        }

        .ab-edu-period {
          color: #ff6978;
          font-family: monospace;
          font-size: 10px;
          letter-spacing: 0.08em;
        }

        .ab-edu-status {
          padding: 5px 8px;
          border-radius: 5px;
          color: #b3a0a4;
          background: rgba(255,255,255,0.05);
          font-family: monospace;
          font-size: 9px;
        }

        .ab-edu-status.active {
          color: #ff9aa5;
          background: rgba(220,20,45,0.12);
        }

        .ab-edu-inst {
          margin: 0 0 8px;
          color: #f5e8ea;
          font-size: 18px;
          line-height: 1.4;
        }

        .ab-edu-degree {
          margin: 0 0 12px;
          color: #b2a2a5;
          font-size: 12px;
        }

        .ab-edu-location {
          margin-bottom: 17px;
          color: #a58d92;
          font-size: 11px;
        }

        .ab-edu-location span {
          margin-right: 7px;
          color: #ff5265;
        }

        .ab-edu-score-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          padding: 13px;
          margin-bottom: 16px;
          border: 1px solid rgba(255,45,65,0.15);
          border-radius: 99px;
          background: rgba(0,0,0,0.3);
        }

        .ab-edu-score-box span {
          color: #a58b90;
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.1em;
        }

        .ab-edu-score-box strong {
          color: #ff6879;
          font-family: monospace;
          font-size: 13px;
        }

        .ab-edu-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .ab-chip {
          padding: 6px 9px;
          border: 1px solid rgba(255,45,65,0.17);
          border-radius: 6px;
          color: #d6b8bd;
          background: rgba(255,255,255,0.025);
          font-family: monospace;
          font-size: 9px;
        }

        /* INTERESTS */

        .ab-interests-section {
          margin-bottom: 60px;
        }

        .ab-interest-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 17px;
        }

        .ab-interest-card {
          padding: 23px;
          border: 1px solid rgba(255,45,65,0.2);
          border-radius: 14px;
          background: linear-gradient(145deg, rgba(55,8,14,0.5), rgba(15,10,11,0.8));
          transition: 0.3s ease;
        }

        .ab-interest-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255,48,72,0.55);
          box-shadow: 0 15px 35px rgba(180,0,25,0.1);
        }

        .ab-interest-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 22px;
        }

        .ab-interest-top span {
          color: #ff5265;
          font-family: monospace;
          font-size: 10px;
        }

        .ab-interest-top strong {
          color: #ff5265;
          font-size: 22px;
        }

        .ab-interest-card h4 {
          margin: 0 0 11px;
          color: #f5e8ea;
          font-size: 16px;
        }

        .ab-interest-card p {
          margin: 0 0 20px;
          color: #a99b9e;
          font-size: 12px;
          line-height: 1.8;
        }

        .ab-interest-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .ab-interest-tags span {
          padding: 6px 9px;
          border: 1px solid rgba(255,45,65,0.2);
          border-radius: 5px;
          color: #ff9aa5;
          font-family: monospace;
          font-size: 9px;
        }

        /* BEYOND TECHNOLOGY */

        .ab-beyond-content {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 30px;
          padding: 30px;
          border: 1px solid rgba(255,45,65,0.22);
          border-radius: 17px;
          background: linear-gradient(120deg, rgba(85,5,17,0.2), rgba(20,10,12,0.8));
        }

        .ab-beyond-text h3 {
          margin: 0 0 15px;
          font-size: clamp(20px, 3vw, 30px);
          line-height: 1.3;
        }

        .ab-beyond-text p {
          max-width: 550px;
          margin: 0;
          color: #b3a2a6;
          font-size: 13px;
          line-height: 1.9;
        }

        .ab-beyond-facts {
          display: flex;
          flex-wrap: wrap;
          gap: 25px;
          margin-top: 25px;
        }

        .ab-beyond-facts div {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .ab-beyond-facts strong {
          color: #ff5368;
          font-size: 27px;
        }

        .ab-beyond-facts span {
          color: #a58b90;
          font-family: monospace;
          font-size: 8px;
          letter-spacing: 0.06em;
        }

        .ab-beyond-tags {
          display: flex;
          align-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .ab-beyond-tags span {
          padding: 10px 13px;
          border: 1px solid rgba(255,45,65,0.24);
          border-radius: 8px;
          color: #e2c2c7;
          background: rgba(180,0,25,0.07);
          font-size: 11px;
          transition: 0.3s ease;
        }

        .ab-beyond-tags span:hover {
          transform: translateY(-3px);
          border-color: #ff3048;
          color: #fff;
        }

        .ab-beyond-tags i {
          margin-right: 5px;
          color: #ff5265;
          font-style: normal;
        }

        /* RESPONSIVE UPDATES */

        @media (max-width: 1000px) {
          .ab-main-grid {
            grid-template-columns: 1fr;
          }

          .ab-interest-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 700px) {
          .ab-section {
            padding: 60px 4%;
          }

          .ab-header {
            align-items: flex-start;
            flex-direction: column;
            gap: 15px;
          }

          .ab-intro-card {
            padding: 20px;
            margin-bottom: 40px;
          }

          .ab-intro-footer {
            gap: 8px;
          }

          .ab-interest-grid {
            grid-template-columns: 1fr;
          }

          .ab-beyond-content {
            grid-template-columns: 1fr;
            padding: 20px;
          }

          .ab-beyond-facts {
            gap: 18px;
          }

          .ab-edu-top {
            align-items: flex-start;
            flex-direction: column;
            gap: 6px;
          }
        }
      `}</style>
    </section>
  );
}

export default About;