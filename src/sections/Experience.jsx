import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  GraduationCap,
  Code2,
  ExternalLink,
  ArrowUpRight,
  FlaskConical,
  Users,
} from "lucide-react";

const experiences = [
  {
    id: "01",
    category: "FREELANCE",
    title: "Freelance Full-Stack Developer",
    organization: "Wisdom School of Excellence",
    duration: "Professional Experience",
    icon: Code2,
    description:
      "Developed and maintained the school's official website, building a full-stack portal with modules for notices, achievements, extracurricular activities, admissions, contact, and administrative management.",
    details: [
      "Worked on frontend and backend development.",
      "Integrated MongoDB Atlas for database management.",
      "Implemented authentication and REST API development.",
      "Worked on deployment and ongoing website improvements.",
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "JWT",
      "REST APIs",
      "Vercel",
      "Render",
    ],
    featured: true,
    link: "https://wiseinstitutions.com/",
  },
  {
    id: "02",
    category: "TEACHING",
    title: "Science Teacher",
    organization: "Wisdom School of Excellence",
    duration: "2 Months",
    icon: FlaskConical,
    description:
      "Worked as a Science Teacher for Classes 5–8 (ICSE), explaining scientific concepts through interactive teaching methods and practical examples.",
    details: [
      "Made lessons engaging through interactive teaching methods.",
      "Encouraged student participation and classroom interaction.",
      "Focused on building strong conceptual understanding.",
    ],
    technologies: [
      "Science Education",
      "Interactive Teaching",
      "Conceptual Learning",
      "Classroom Engagement",
    ],
    featured: false,
  },
  {
    id: "03",
    category: "TUTORING",
    title: "Science Tutor",
    organization: "Private Tutoring & Coaching Institute",
    duration: "2 Years 11 Months",
    icon: GraduationCap,
    description:
      "Worked as a Science Tutor through private home tutoring and at a coaching institute, helping students understand scientific concepts, clarify doubts, and improve their academic performance.",
    details: [
      "Adapted teaching methods to different learning needs.",
      "Focused on conceptual clarity and interactive learning.",
      "Helped students build confidence in their subjects.",
    ],
    technologies: [
      "Science Tutoring",
      "Conceptual Clarity",
      "Student Mentoring",
      "Academic Support",
    ],
    featured: false,
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">

        {/* HEADER */}
        <motion.div
          className="experience-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="experience-label">
              05 // PROFESSIONAL JOURNEY
            </p>

            <h1>
              EXPERIENCE
              <br />
              <span>& GROWTH.</span>
            </h1>
          </div>

          <p className="heading-description">
            From developing real-world web platforms to teaching
            young minds, every experience has shaped my technical
            skills, communication, and ability to work with people.
          </p>
        </motion.div>

        {/* EXPERIENCE TIMELINE */}
        <div className="experience-timeline">

          {experiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className={`experience-card ${
                  item.featured ? "featured-card" : ""
                }`}
                key={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
              >
                <div className="experience-card-top">

                  <div className="experience-icon">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>

                  <span className="experience-category">
                    {item.category}
                  </span>

                  <span className="experience-number">
                    {item.id}
                  </span>
                </div>

                <div className="experience-main">
                  <div className="experience-title-row">
                    <div>
                      <h2>{item.title}</h2>
                      <p className="experience-organization">
                        {item.organization}
                      </p>
                    </div>

                    <span className="experience-duration">
                      {item.duration}
                    </span>
                  </div>

                  <p className="experience-description">
                    {item.description}
                  </p>

                  <div className="experience-details">
                    {item.details.map((detail, i) => (
                      <div className="detail-row" key={i}>
                        <span className="detail-dot" />
                        <p>{detail}</p>
                      </div>
                    ))}
                  </div>

                  <div className="experience-tech">
                    <p className="tech-heading">
                      {item.featured
                        ? "TECHNOLOGIES & TOOLS"
                        : "AREAS OF EXPERIENCE"}
                    </p>

                    <div className="tech-list">
                      {item.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>

                  {item.featured && (
                    <div className="experience-footer">
                      <span className="website-status">
                        <span className="status-dot" />
                        LIVE WEBSITE
                      </span>

                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="website-link"
                      >
                        VISIT WEBSITE
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM NOTE */}
        <motion.div
          className="experience-note"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Users size={19} />

          <p>
            Building technology, sharing knowledge, and growing
            through every opportunity.
          </p>
        </motion.div>

      </div>

      {/* INTERNAL CSS */}
      <style>{`

        .experience-section {
          position: relative;
          width: 100%;
          padding: 100px 5vw 80px;
          box-sizing: border-box;
          background: #050505;
          color: #f5f0f1;
          overflow: hidden;
        }

        .experience-section::before {
          content: "";
          position: absolute;
          width: 480px;
          height: 480px;
          top: 8%;
          right: -250px;
          border-radius: 50%;
          background: rgba(255, 48, 72, 0.07);
          filter: blur(110px);
          pointer-events: none;
        }

        .experience-container {
          position: relative;
          z-index: 2;
          max-width: 1150px;
          margin: auto;
        }

        /* HEADER */

        .experience-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 40px;
          margin-bottom: 55px;
        }

        .experience-label {
          margin: 0 0 16px;
          font-family: monospace;
          font-size: 10px;
          letter-spacing: 0.16em;
          color: #ff5369;
        }

        .experience-heading h1 {
          margin: 0;
          font-size: clamp(38px, 6vw, 84px);
          line-height: 0.92;
          letter-spacing: -0.06em;
          font-weight: 800;
        }

        .experience-heading h1 span {
          color: #ff3048;
        }

        .heading-description {
          max-width: 350px;
          margin: 0 0 5px;
          font-family: monospace;
          font-size: clamp(10px, 1.2vw, 11px);
          line-height: 1.8;
          color: rgba(255, 235, 238, 0.48);
        }

        /* TIMELINE */

        .experience-timeline {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .experience-timeline::before {
          content: "";
          position: absolute;
          left: 31px;
          top: 45px;
          bottom: 45px;
          width: 1px;
          background: linear-gradient(
            to bottom,
            rgba(255, 48, 72, 0.55),
            rgba(255, 48, 72, 0.08)
          );
        }

        /* CARD */

        .experience-card {
          position: relative;
          display: grid;
          grid-template-columns: 64px 1fr;
          gap: 20px;
          padding: 26px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          background: linear-gradient(
            135deg,
            rgba(24, 15, 17, 0.95),
            rgba(10, 8, 9, 0.98)
          );
          box-shadow: 0 20px 55px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease,
                      border-color 0.3s ease,
                      box-shadow 0.3s ease;
        }

        .experience-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 48, 72, 0.35);
          box-shadow: 0 25px 65px rgba(120, 0, 20, 0.13);
        }

        .featured-card {
          border-color: rgba(255, 48, 72, 0.27);
          background: linear-gradient(
            135deg,
            rgba(39, 13, 18, 0.92),
            rgba(13, 9, 10, 0.98)
          );
        }

        .experience-card-top {
          position: relative;
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 13px;
        }

        .experience-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 48, 72, 0.3);
          border-radius: 12px;
          color: #ff5369;
          background: #190c0f;
          z-index: 1;
        }

        .experience-category {
          writing-mode: vertical-rl;
          font-family: monospace;
          font-size: 8px;
          letter-spacing: 0.12em;
          color: rgba(255, 120, 135, 0.65);
        }

        .experience-number {
          margin-top: auto;
          font-family: monospace;
          font-size: 10px;
          color: rgba(255, 255, 255, 0.22);
        }

        /* CONTENT */

        .experience-main {
          min-width: 0;
        }

        .experience-title-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }

        .experience-title-row h2 {
          margin: 0;
          font-size: clamp(20px, 2.8vw, 28px);
          letter-spacing: -0.04em;
        }

        .experience-organization {
          margin: 6px 0 0;
          font-family: monospace;
          font-size: 10px;
          color: #ff6679;
        }

        .experience-duration {
          flex-shrink: 0;
          padding: 7px 10px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          font-family: monospace;
          font-size: 9px;
          color: rgba(255, 255, 255, 0.48);
          background: rgba(255, 255, 255, 0.025);
        }

        .experience-description {
          max-width: 850px;
          margin: 18px 0;
          font-family: monospace;
          font-size: 11px;
          line-height: 1.85;
          color: rgba(245, 235, 237, 0.65);
        }

        /* DETAILS */

        .experience-details {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 22px;
        }

        .detail-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .detail-dot {
          width: 5px;
          height: 5px;
          flex-shrink: 0;
          margin-top: 6px;
          border-radius: 50%;
          background: #ff5369;
          box-shadow: 0 0 8px rgba(255, 48, 72, 0.5);
        }

        .detail-row p {
          margin: 0;
          font-family: monospace;
          font-size: 10px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.52);
        }

        /* TECHNOLOGIES */

        .experience-tech {
          padding-top: 18px;
          border-top: 1px solid rgba(255, 255, 255, 0.07);
        }

        .tech-heading {
          margin: 0 0 11px;
          font-family: monospace;
          font-size: 8px;
          letter-spacing: 0.13em;
          color: rgba(255, 115, 132, 0.8);
        }

        .tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .tech-list span {
          padding: 7px 10px;
          border: 1px solid rgba(255, 48, 72, 0.16);
          border-radius: 6px;
          background: rgba(255, 48, 72, 0.045);
          font-family: monospace;
          font-size: 9px;
          color: rgba(255, 225, 229, 0.65);
          transition: background 0.2s ease,
                      border-color 0.2s ease;
        }

        .tech-list span:hover {
          border-color: rgba(255, 48, 72, 0.5);
          background: rgba(255, 48, 72, 0.1);
        }

        /* FOOTER */

        .experience-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          margin-top: 22px;
          padding-top: 18px;
          border-top: 1px solid rgba(255, 255, 255, 0.07);
        }

        .website-status {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: monospace;
          font-size: 8px;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.42);
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #63d9a0;
          box-shadow: 0 0 9px rgba(99, 217, 160, 0.6);
        }

        .website-link {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border: 1px solid rgba(255, 48, 72, 0.35);
          border-radius: 7px;
          background: rgba(255, 48, 72, 0.07);
          color: #ff6579;
          text-decoration: none;
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.08em;
          transition: background 0.25s ease,
                      transform 0.25s ease;
        }

        .website-link:hover {
          background: rgba(255, 48, 72, 0.16);
          transform: translateY(-2px);
        }

        /* BOTTOM NOTE */

        .experience-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          margin-top: 40px;
          padding: 18px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          color: #ff5369;
          background: rgba(255, 255, 255, 0.015);
        }

        .experience-note p {
          margin: 0;
          font-family: monospace;
          font-size: 10px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.43);
        }

        /* RESPONSIVE */

        @media (max-width: 800px) {
          .experience-heading {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }

          .heading-description {
            max-width: 550px;
          }

          .experience-title-row {
            flex-direction: column;
            gap: 10px;
          }
        }

        @media (max-width: 600px) {
          .experience-section {
            padding: 70px 4% 60px;
          }

          .experience-timeline {
            gap: 16px;
          }

          .experience-timeline::before {
            left: 18px;
          }

          .experience-card {
            grid-template-columns: 36px 1fr;
            gap: 12px;
            padding: 18px 14px;
            border-radius: 14px;
          }

          .experience-icon {
            width: 36px;
            height: 36px;
          }

          .experience-icon svg {
            width: 16px;
            height: 16px;
          }

          .experience-category {
            font-size: 7px;
          }

          .experience-description {
            font-size: 10px;
          }

          .detail-row p {
            font-size: 9px;
          }

          .tech-list span {
            font-size: 8px;
            padding: 6px 8px;
          }

          .experience-footer {
            align-items: flex-start;
            flex-direction: column;
          }

          .website-link {
            width: 100%;
            justify-content: space-between;
            box-sizing: border-box;
          }

          .experience-note {
            align-items: flex-start;
            padding: 15px;
          }
        }

      `}</style>
    </section>
  );
}

export default Experience;