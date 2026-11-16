import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Drama,
  Code2,
  Trophy,
  Medal,
  Award,
  Users,
  CalendarDays,
  GraduationCap,
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
  BriefcaseBusiness,
  Certificate,
} from "lucide-react";

const leadershipItems = [
  {
    id: "tatva",
    number: "01",
    title: "Tatva – Acting Club",
    subtitle: "UVCE",
    category: "CULTURAL LEADERSHIP",
    icon: Drama,
    description:
      "Directed and coordinated a 40-member acting team, managing rehearsals, team activities, and stage performances.",
    contributions: [
      "Directed and coordinated a 40-member acting team, managing rehearsals, team activities, and stage performances.",
      "Led a team in preparing and performing a skit, coordinating members and working towards a successful performance.",
      "Contributed to theatre initiatives through acting, scriptwriting, and team coordination.",
    ],
    photos: [
      "/images/tatva/tatva-1.jpeg",
      "/images/tatva/tatva-2.jpeg",
      "/images/tatva/tatva-3.jpeg",
      "/images/tatva/tatva-4.jpeg",
    ],
  },
  {
    id: "technical",
    number: "02",
    title: "Technical Project Leadership",
    subtitle: "College Project",
    category: "PROJECT LEADERSHIP",
    icon: Code2,
    description:
      "Led a college project team, coordinating tasks, dividing responsibilities, and ensuring the project was completed successfully.",
    contributions: [
      "Led the college project team.",
      "Coordinated tasks and divided responsibilities among team members.",
      "Worked towards successful project completion.",
    ],
  },
  {
    id: "sports",
    number: "03",
    title: "Sports Leadership",
    subtitle: "Throwball Team",
    category: "TEAM LEADERSHIP",
    icon: Trophy,
    description:
      "Captained a 6-member throwball team, encouraging teamwork and coordinating team members.",
    contributions: [
      "Captained a 6-member throwball team.",
      "Encouraged teamwork and coordinated team members.",
    ],
  },
  {
    id: "events",
    number: "04",
    title: "Event Organization & Volunteering",
    subtitle: "UVCE",
    category: "EVENT MANAGEMENT",
    icon: CalendarDays,
    description:
      "Actively involved in organizing and volunteering at UVCE college events, contributing to event coordination and execution.",
    contributions: [
      "Actively participated in organizing UVCE college events.",
      "Contributed to event coordination and execution.",
      "Volunteered and organized in college events like Impetus.",
    ],
  },
];

const achievements = [
  {
    number: "01",
    title: "Student of the Year",
    category: "RECOGNITION",
    icon: Award,
    description:
      "Recognized for overall performance and contributions.",
  },
  {
    number: "02",
    title: "Karate Tournament",
    category: "SPORTS",
    icon: Medal,
    description:
      "Bronze Medal in Kumite and Silver Medal in Kata.",
    awards: [
      "Bronze Medal – Kumite",
      "Silver Medal – Kata",
    ],
  },
  {
    number: "03",
    title: "Aventus 3.0 & CodeFury 8.0",
    category: "NATIONAL-LEVEL HACKATHON",
    icon: Code2,
    description:
      "Participated in Aventus 3.0 and CodeFury 8.0 National-Level Hackathons.",
  },
  {
    number: "04",
    title: "Bit N Build",
    category: "HACKATHON",
    icon: Code2,
    description: "Participated in the Bit N Build Hackathon.",
  },
  {
    number: "05",
    title: "Deloitte Data Analytics",
    category: "JOB SIMULATION",
    icon: BriefcaseBusiness,
    description:
      "Completed a job simulation focused on data analytics.",
  },
];

const certifications = [
  {
    number: "01",
    title: "Deloitte Data Analytics Job Simulation",
    type: "JOB SIMULATION",
    icon: Certificate,
  },
  {
    number: "02",
    title: "Karate – White Belt",
    type: "TRAINING",
    icon: Medal,
  },
];

function Achievements() {
  const [activeLeadership, setActiveLeadership] = useState(null);
  const [activePhoto, setActivePhoto] = useState(0);

  const openLeadership = (item) => {
    setActiveLeadership(item);
    setActivePhoto(0);
  };

  const closeLeadership = () => {
    setActiveLeadership(null);
    setActivePhoto(0);
  };

  const nextPhoto = () => {
    setActivePhoto((current) =>
      (current + 1) % activeLeadership.photos.length
    );
  };

  const previousPhoto = () => {
    setActivePhoto((current) =>
      (current - 1 + activeLeadership.photos.length) %
      activeLeadership.photos.length
    );
  };

  return (
    <section id="achievements" className="journey-section">
      <div className="journey-container">

        {/* MAIN HEADER */}
        <motion.div
          className="journey-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="journey-label">
              06 // BEYOND THE CLASSROOM
            </p>

            <h1>
              LEADERSHIP
              <br />
              <span>& RECOGNITION.</span>
            </h1>
          </div>

          <p className="journey-intro">
            Experiences that reflect leadership, teamwork,
            creativity, dedication, and achievements beyond
            academics.
          </p>
        </motion.div>

        {/* =================================
            LEADERSHIP & RESPONSIBILITIES
        ================================== */}

        <div className="journey-block">

          <div className="block-heading">
            <div>
              <span className="block-index">01 / RESPONSIBILITIES</span>
              <h2>Leadership & Responsibilities</h2>
            </div>

            <Users size={23} />
          </div>

          <div className="leadership-grid">
            {leadershipItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className={`leadership-card ${
                    item.id === "tatva" ? "tatva-card" : ""
                  }`}
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                >
                  <div className="leadership-card-top">
                    <div className="leadership-icon">
                      <Icon size={22} />
                    </div>

                    <span>{item.number}</span>
                  </div>

                  <p className="leadership-category">
                    {item.category}
                  </p>

                  <h3>{item.title}</h3>

                  <p className="leadership-subtitle">
                    {item.subtitle}
                  </p>

                  <p className="leadership-description">
                    {item.description}
                  </p>

                  {item.id === "tatva" && (
                    <div className="photo-indicator">
                      <Drama size={14} />
                      <span>4 PHOTOS IN GALLERY</span>
                    </div>
                  )}

                  <button
                    className="leadership-view"
                    onClick={() => openLeadership(item)}
                  >
                    EXPLORE DETAILS
                    <ExternalLink size={15} />
                  </button>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* =================================
            ACHIEVEMENTS & RECOGNITION
        ================================== */}

        <div className="journey-block recognition-block">

          <div className="block-heading">
            <div>
              <span className="block-index">02 / MILESTONES</span>
              <h2>Achievements & Recognition</h2>
            </div>

            <Trophy size={23} />
          </div>

          <div className="recognition-grid">
            {achievements.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className="recognition-card"
                  key={item.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                >
                  <div className="recognition-top">
                    <div className="recognition-icon">
                      <Icon size={21} />
                    </div>

                    <span>{item.number}</span>
                  </div>

                  <p className="recognition-category">
                    {item.category}
                  </p>

                  <h3>{item.title}</h3>

                  <p className="recognition-description">
                    {item.description}
                  </p>

                  {item.awards && (
                    <div className="medal-list">
                      {item.awards.map((award) => (
                        <span key={award}>{award}</span>
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =================================
            CERTIFICATIONS & TRAINING
        ================================== */}

        <div className="journey-block certification-block">

          <div className="block-heading">
            <div>
              <span className="block-index">03 / LEARNING</span>
              <h2>Certifications & Training</h2>
            </div>

            <GraduationCap size={24} />
          </div>

          <div className="certification-list">
            {certifications.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className="certification-item"
                  key={item.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                >
                  <div className="certification-icon">
                    <Icon size={21} />
                  </div>

                  <div className="certification-info">
                    <span>{item.type}</span>
                    <h3>{item.title}</h3>
                  </div>

                  <span className="certification-number">
                    {item.number}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* END NOTE */}
        <motion.div
          className="journey-footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="footer-line" />
          <p>
            Leadership is built through responsibility,
            collaboration, and experience.
          </p>
          <span className="footer-line" />
        </motion.div>

      </div>

      {/* =================================
          LEADERSHIP DETAIL MODAL
      ================================== */}

      <AnimatePresence>
        {activeLeadership && (
          <motion.div
            className="journey-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLeadership}
          >
            <motion.div
              className="journey-modal"
              initial={{ opacity: 0, y: 25, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="journey-modal-header">
                <div>
                  <p>{activeLeadership.category}</p>
                  <h2>{activeLeadership.title}</h2>
                  <span>{activeLeadership.subtitle}</span>
                </div>

                <button
                  className="modal-close"
                  onClick={closeLeadership}
                  aria-label="Close details"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="journey-modal-content">

                <p className="modal-section-title">
                  CONTRIBUTIONS & RESPONSIBILITIES
                </p>

                <div className="contribution-list">
                  {activeLeadership.contributions.map(
                    (detail, index) => (
                      <div className="contribution-row" key={index}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <p>{detail}</p>
                      </div>
                    )
                  )}
                </div>

                {/* TATVA PHOTO GALLERY */}
                {activeLeadership.photos && (
                  <div className="tatva-gallery">
                    <div className="gallery-heading">
                      <div>
                        <p className="modal-section-title">
                          PHOTO GALLERY
                        </p>
                        <h3>Moments at Tatva</h3>
                      </div>

                      <span>
                        {activePhoto + 1} /{" "}
                        {activeLeadership.photos.length}
                      </span>
                    </div>

                    <div className="gallery-main">
                      <button
                        className="gallery-arrow gallery-prev"
                        onClick={previousPhoto}
                        aria-label="Previous photo"
                      >
                        <ChevronLeft size={21} />
                      </button>

                      <img
                        src={activeLeadership.photos[activePhoto]}
                        alt={`Tatva acting club moment ${activePhoto + 1}`}
                      />

                      <button
                        className="gallery-arrow gallery-next"
                        onClick={nextPhoto}
                        aria-label="Next photo"
                      >
                        <ChevronRight size={21} />
                      </button>
                    </div>

                    <div className="gallery-thumbnails">
                      {activeLeadership.photos.map((photo, index) => (
                        <button
                          key={photo}
                          className={`gallery-thumbnail ${
                            activePhoto === index ? "active" : ""
                          }`}
                          onClick={() => setActivePhoto(index)}
                          aria-label={`View photo ${index + 1}`}
                        >
                          <img
                            src={photo}
                            alt={`Tatva thumbnail ${index + 1}`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="journey-modal-footer">
                <span>LEADERSHIP & RESPONSIBILITIES</span>

                <button onClick={closeLeadership}>
                  CLOSE DETAILS <X size={14} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* INTERNAL CSS */}
      <style>{`

        .journey-section {
          position: relative;
          width: 100%;
          padding: 100px 5vw 80px;
          box-sizing: border-box;
          background: #050505;
          color: #f5f0f1;
          overflow: hidden;
        }

        .journey-section::before {
          content: "";
          position: absolute;
          width: 550px;
          height: 550px;
          top: 5%;
          right: -300px;
          border-radius: 50%;
          background: rgba(255, 48, 72, 0.07);
          filter: blur(120px);
          pointer-events: none;
        }

        .journey-container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: auto;
        }

        /* HEADER */

        .journey-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 40px;
          margin-bottom: 70px;
        }

        .journey-label {
          margin: 0 0 16px;
          font-family: monospace;
          font-size: 10px;
          letter-spacing: 0.16em;
          color: #ff5369;
        }

        .journey-header h1 {
          margin: 0;
          font-size: clamp(38px, 6vw, 84px);
          line-height: 0.92;
          letter-spacing: -0.06em;
          font-weight: 800;
        }

        .journey-header h1 span {
          color: #ff3048;
        }

        .journey-intro {
          max-width: 340px;
          margin: 0 0 5px;
          font-family: monospace;
          font-size: clamp(10px, 1.2vw, 11px);
          line-height: 1.8;
          color: rgba(255, 235, 238, 0.48);
        }

        /* SECTION BLOCKS */

        .journey-block {
          margin-bottom: 75px;
        }

        .block-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-bottom: 26px;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.09);
        }

        .block-heading > svg {
          color: #ff5369;
        }

        .block-index {
          display: block;
          margin-bottom: 8px;
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.14em;
          color: #ff5369;
        }

        .block-heading h2 {
          margin: 0;
          font-size: clamp(21px, 2.8vw, 30px);
          letter-spacing: -0.04em;
        }

        /* LEADERSHIP CARDS */

        .leadership-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .leadership-card {
          position: relative;
          min-height: 260px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          background: linear-gradient(
            145deg,
            rgba(25, 15, 18, 0.92),
            rgba(10, 8, 9, 0.98)
          );
          transition: transform 0.3s ease,
                      border-color 0.3s ease,
                      background 0.3s ease;
        }

        .leadership-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 48, 72, 0.38);
          background: linear-gradient(
            145deg,
            rgba(37, 14, 19, 0.96),
            rgba(12, 8, 10, 0.98)
          );
        }

        .tatva-card {
          border-color: rgba(255, 48, 72, 0.3);
        }

        .leadership-card-top {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .leadership-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 48, 72, 0.3);
          border-radius: 12px;
          background: rgba(255, 48, 72, 0.07);
          color: #ff5369;
        }

        .leadership-card-top > span {
          font-family: monospace;
          font-size: 11px;
          color: rgba(255, 255, 255, 0.28);
        }

        .leadership-category {
          margin: 0 0 8px;
          font-family: monospace;
          font-size: 8px;
          letter-spacing: 0.13em;
          color: #ff6579;
        }

        .leadership-card h3 {
          margin: 0;
          font-size: clamp(19px, 2.2vw, 22px);
          letter-spacing: -0.04em;
        }

        .leadership-subtitle {
          margin: 6px 0 0;
          font-family: monospace;
          font-size: 10px;
          color: rgba(255, 255, 255, 0.4);
        }

        .leadership-description {
          margin: 15px 0 20px;
          font-family: monospace;
          font-size: 10px;
          line-height: 1.8;
          color: rgba(255, 235, 238, 0.55);
        }

        .photo-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: -4px 0 16px;
          color: #ff7183;
        }

        .photo-indicator span {
          font-family: monospace;
          font-size: 8px;
          letter-spacing: 0.1em;
        }

        .leadership-view {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
          padding: 14px 0 0;
          border: 0;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: transparent;
          color: #ff6579;
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .leadership-view:hover {
          color: #ffffff;
        }

        /* ACHIEVEMENTS */

        .recognition-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .recognition-card {
          min-height: auto;
          padding: 20px;
          border: 1px solid rgba(255, 255, 255, 0.075);
          border-radius: 13px;
          background: rgba(255, 255, 255, 0.018);
          transition: transform 0.25s ease,
                      border-color 0.25s ease;
        }

        .recognition-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 48, 72, 0.35);
        }

        .recognition-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .recognition-icon {
          width: 37px;
          height: 37px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          color: #ff6479;
          background: rgba(255, 48, 72, 0.09);
        }

        .recognition-top > span {
          font-family: monospace;
          font-size: 10px;
          color: rgba(255, 255, 255, 0.25);
        }

        .recognition-category {
          margin: 0 0 8px;
          font-family: monospace;
          font-size: 8px;
          letter-spacing: 0.1em;
          color: #ff6479;
        }

        .recognition-card h3 {
          margin: 0;
          font-size: 16px;
          line-height: 1.35;
          letter-spacing: -0.025em;
        }

        .recognition-description {
          margin: 10px 0 0;
          font-family: monospace;
          font-size: 9px;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.48);
        }

        .medal-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 12px;
        }

        .medal-list span {
          padding: 5px 7px;
          border: 1px solid rgba(255, 48, 72, 0.2);
          border-radius: 5px;
          font-family: monospace;
          font-size: 8px;
          color: #ff8b98;
        }

        /* CERTIFICATIONS */

        .certification-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .certification-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.02);
          transition: border-color 0.25s ease,
                      transform 0.25s ease;
        }

        .certification-item:hover {
          transform: translateX(4px);
          border-color: rgba(255, 48, 72, 0.35);
        }

        .certification-icon {
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 48, 72, 0.25);
          border-radius: 10px;
          color: #ff6479;
          background: rgba(255, 48, 72, 0.07);
        }

        .certification-info {
          flex: 1;
        }

        .certification-info span {
          font-family: monospace;
          font-size: 8px;
          letter-spacing: 0.12em;
          color: #ff6479;
        }

        .certification-info h3 {
          margin: 4px 0 0;
          font-size: 14px;
          font-weight: 500;
        }

        .certification-number {
          font-family: monospace;
          font-size: 10px;
          color: rgba(255, 255, 255, 0.25);
        }

        /* FOOTER */

        .journey-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
        }

        .journey-footer p {
          margin: 0;
          text-align: center;
          font-family: monospace;
          font-size: 10px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.4);
        }

        .footer-line {
          width: 55px;
          height: 1px;
          background: rgba(255, 48, 72, 0.35);
        }

        /* MODAL */

        .journey-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          box-sizing: border-box;
          background: rgba(0, 0, 0, 0.86);
          backdrop-filter: blur(14px);
        }

        .journey-modal {
          width: min(780px, 100%);
          max-height: 85vh;
          overflow-y: auto;
          border: 1px solid rgba(255, 48, 72, 0.25);
          border-radius: 19px;
          background: #10090b;
          box-shadow: 0 30px 100px rgba(0, 0, 0, 0.6);
        }

        .journey-modal::-webkit-scrollbar {
          width: 4px;
        }

        .journey-modal::-webkit-scrollbar-thumb {
          background: rgba(255, 48, 72, 0.4);
          border-radius: 10px;
        }

        .journey-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          padding: 22px 26px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }

        .journey-modal-header p {
          margin: 0 0 8px;
          font-family: monospace;
          font-size: 8px;
          letter-spacing: 0.13em;
          color: #ff6479;
        }

        .journey-modal-header h2 {
          margin: 0;
          font-size: clamp(22px, 3vw, 28px);
          letter-spacing: -0.04em;
        }

        .journey-modal-header span {
          display: block;
          margin-top: 6px;
          font-family: monospace;
          font-size: 10px;
          color: rgba(255, 255, 255, 0.4);
        }

        .modal-close {
          width: 36px;
          height: 36px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 50%;
          background: transparent;
          color: white;
          cursor: pointer;
          transition: background 0.2s ease,
                      border-color 0.2s ease;
        }

        .modal-close:hover {
          border-color: #ff5369;
          background: rgba(255, 48, 72, 0.12);
        }

        .journey-modal-content {
          padding: 24px 26px 28px;
        }

        .modal-section-title {
          margin: 0 0 15px;
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.13em;
          color: #ff6479;
        }

        .contribution-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .contribution-row {
          display: grid;
          grid-template-columns: 30px 1fr;
          gap: 12px;
          padding: 13px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .contribution-row > span {
          font-family: monospace;
          font-size: 9px;
          color: #ff6479;
        }

        .contribution-row p {
          margin: 0;
          font-size: 12px;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.65);
        }

        /* TATVA GALLERY */

        .tatva-gallery {
          margin-top: 28px;
          padding-top: 22px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .gallery-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          margin-bottom: 15px;
        }

        .gallery-heading .modal-section-title {
          margin-bottom: 6px;
        }

        .gallery-heading h3 {
          margin: 0;
          font-size: 19px;
        }

        .gallery-heading > span {
          font-family: monospace;
          font-size: 10px;
          color: #ff6479;
        }

        .gallery-main {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border-radius: 12px;
          border: 1px solid rgba(255, 48, 72, 0.2);
          background: #080607;
        }

        .gallery-main img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: contain;
        }

        .gallery-arrow {
          position: absolute;
          top: 50%;
          z-index: 2;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateY(-50%);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.65);
          color: white;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .gallery-arrow:hover {
          background: #d91f39;
        }

        .gallery-prev {
          left: 10px;
        }

        .gallery-next {
          right: 10px;
        }

        .gallery-thumbnails {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          margin-top: 12px;
        }

        .gallery-thumbnail {
          aspect-ratio: 16 / 10;
          padding: 0;
          overflow: hidden;
          border: 2px solid transparent;
          border-radius: 7px;
          background: #080607;
          opacity: 0.65;
          cursor: pointer;
          transition: opacity 0.2s ease,
                      border-color 0.2s ease;
        }

        .gallery-thumbnail.active {
          border-color: #ff5369;
          opacity: 1;
        }

        .gallery-thumbnail img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        /* MODAL FOOTER */

        .journey-modal-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          padding: 17px 26px;
          border-top: 1px solid rgba(255, 255, 255, 0.07);
        }

        .journey-modal-footer > span {
          font-family: monospace;
          font-size: 8px;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.3);
        }

        .journey-modal-footer button {
          display: flex;
          align-items: center;
          gap: 7px;
          border: 0;
          background: transparent;
          color: #ff6479;
          font-family: monospace;
          font-size: 9px;
          cursor: pointer;
        }

        /* RESPONSIVE */

        @media (max-width: 900px) {
          .recognition-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 700px) {
          .journey-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }

          .leadership-grid {
            grid-template-columns: 1fr;
          }

          .leadership-card {
            min-height: auto;
          }
        }

        @media (max-width: 600px) {
          .journey-section {
            padding: 70px 4% 60px;
          }

          .journey-block {
            margin-bottom: 55px;
          }

          .recognition-grid {
            grid-template-columns: 1fr;
          }

          .certification-item {
            padding: 15px 16px;
            gap: 12px;
          }

          .certification-info h3 {
            font-size: 13px;
            line-height: 1.4;
          }

          .journey-overlay {
            padding: 10px;
          }

          .journey-modal-header {
            padding: 18px 20px;
          }

          .journey-modal-content {
            padding: 18px 20px;
          }

          .gallery-main {
            aspect-ratio: 4 / 3;
          }

          .gallery-thumbnails {
            gap: 6px;
          }

          .gallery-arrow {
            width: 32px;
            height: 32px;
          }

          .journey-modal-footer {
            padding: 15px 20px;
          }

          .journey-footer {
            gap: 10px;
          }

          .journey-footer p {
            font-size: 9px;
          }

          .footer-line {
            width: 20px;
            flex-shrink: 0;
          }
        }

      `}</style>
    </section>
  );
}

export default Achievements;