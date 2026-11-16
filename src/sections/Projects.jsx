import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ShieldCheck,
  CalendarDays,
  School,
  BrainCircuit,
  ExternalLink,
  ArrowUpRight,
  X,
  ChevronRight,
  Layers3,
  Code2,
  Database,
  Sparkles
} from "lucide-react";

const projects = [
  {
    id: "01",
    name: "JobGuard",
    subtitle: "Evidence-Based Job Scam Detection",
    category: "WEB APPLICATION",
    type: "MVP",
    icon: ShieldCheck,
    accent: "red",
    short:
      "A platform that helps job seekers evaluate whether a job opportunity is genuine by identifying suspicious signals and presenting the evidence behind its risk assessment.",
    description:
      "JobGuard helps users assess potentially fraudulent job opportunities. Instead of presenting a black-box fake-or-real score, it explains the evidence and risk level behind its findings, allowing users to make their own informed decisions.",
    features: [
      {
        title: "Multiple Input Formats",
        text: "Users can submit a job URL, PDF, or text message for analysis.",
      },
      {
        title: "Canonical Job Record",
        text: "An extraction layer converts submitted information into a structured job record.",
      },
      {
        title: "Verification Pipeline",
        text: "Company, job listing, and recruiter information are checked against public information.",
      },
      {
        title: "Deterministic Risk Engine",
        text: "Rules identify warning signs such as payment requests, urgency, and personal email domains.",
      },
      {
        title: "RAG-Based Safety Guidance",
        text: "A retrieval component provides safety guidance explaining why identified warning signs matter.",
      },
      {
        title: "Evidence-Backed Report",
        text: "A synthesis layer organizes findings into a report with risk indicators and suggested next steps.",
      },
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "App Router",
      "Tailwind CSS",
      "shadcn/ui",
      "Prisma",
      "ESLint",
    ],
    planned: [
      "Vercel AI SDK",
      "Google Gemini",
      "Web Search Providers",
    ],
    status:
      "MVP – Extractor and verification components are currently mocked. PDF and URL inputs currently fall back to plain-text extraction.",
    github: "https://github.com/Thirumalegowdabv/JobGuard",
  },
  {
    id: "02",
    name: "SyncSpace",
    subtitle: "Interactive Calendar & Notes",
    category: "FRONTEND APPLICATION",
    type: "LIVE DEMO",
    icon: CalendarDays,
    accent: "purple",
    short:
      "An interactive wall-calendar application combining a monthly calendar, quick note-taking, search, and smooth navigation in a themed interface.",
    description:
      "SyncSpace brings scheduling and note-taking together in one interactive workspace. It features a responsive 42-cell monthly calendar, note management, real-time search, and a theme engine supporting both light and dark modes.",
    features: [
      {
        title: "Interactive Calendar",
        text: "A 42-cell calendar grid built using date-fns, handling month transitions and leap years.",
      },
      {
        title: "Animated Navigation",
        text: "Calendar navigation slides in the appropriate direction when moving between months.",
      },
      {
        title: "Notes Management",
        text: "Create, edit, and delete notes through a form that supports both create and edit modes.",
      },
      {
        title: "Real-Time Search",
        text: "Filter notes by note content, author names, and category tags.",
      },
      {
        title: "Local Persistence",
        text: "Notes are stored in browser localStorage and loaded during initialization.",
      },
      {
        title: "Theme Switching",
        text: "A React Context-based ThemeProvider switches between light and dark themes without prop drilling.",
      },
    ],
    technologies: [
      "React 18",
      "Vite",
      "Styled Components",
      "date-fns",
      "Framer Motion",
      "Lucide React",
      "React Context",
      "localStorage",
    ],
    status:
      "Frontend-only application. Notes are stored locally in the browser; no backend is currently used.",
    github: "https://github.com/Thirumalegowdabv/SyncSpace",
    live: "https://sync-space-orcin.vercel.app/",
  },
  {
    id: "03",
    name: "Wisdom School Portal",
    subtitle: "Full-Stack School Management Portal",
    category: "FULL-STACK DEVELOPMENT",
    type: "LIVE WEBSITE",
    icon: School,
    accent: "orange",
    short:
      "A full-stack school portal with dynamic content management, administrative functionality, secure authentication, and modules for school information and activities.",
    description:
      "Developed a full-stack website for Wisdom School of Excellence, integrating frontend modules, backend APIs, database management, authentication, and administrative functionality into one platform.",
    features: [
      {
        title: "School Information Modules",
        text: "Built modules for notices, achievements, activities, admissions, contact, and administrative management.",
      },
      {
        title: "Authentication & Authorization",
        text: "Implemented JWT authentication with HTTP-only cookies and role-based authorization for protected admin and parent APIs.",
      },
      {
        title: "Modular REST APIs",
        text: "Designed APIs using a routes, middleware, controllers, and models architecture.",
      },
      {
        title: "Dynamic Content Management",
        text: "Implemented reusable Notice model functionality for managing dynamic content.",
      },
      {
        title: "Secure Image Uploads",
        text: "Used Multer with file-size, MIME-type, and extension validation.",
      },
      {
        title: "Backend Security",
        text: "Implemented Helmet, CORS, rate limiting, bcrypt password hashing, and MongoDB sanitization.",
      },
      {
        title: "Deployment",
        text: "Deployed the application using Vercel, Render, and MongoDB Atlas.",
      },
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Mongoose",
      "JWT",
      "REST APIs",
      "Multer",
      "Helmet",
      "CORS",
      "Vercel",
      "Render",
    ],
    status: "Deployed full-stack school portal.",
    github: null,
    live: "https://wiseinstitutions.com/",
  },
  {
    id: "04",
    name: "Ocular Disease Classification",
    subtitle: "Retinal Image Analysis Using DINOv3",
    category: "AI / MACHINE LEARNING",
    type: "RESEARCH PROJECT",
    icon: BrainCircuit,
    accent: "blue",
    short:
      "A multi-label retinal disease classification pipeline using DINOv3 with LoRA, ODIR-10K data, and LAB-CLAHE preprocessing.",
    description:
      "Implemented a DINOv3 foundation-model pipeline with Low-Rank Adaptation (LoRA) for multi-label ocular disease classification using the ODIR-10K retinal imaging dataset. The project explored high-resolution retinal image processing and comparative model evaluation.",
    features: [
      {
        title: "ODIR-10K Dataset",
        text: "Worked with 10,449 retinal images and a 7-class multi-label ground-truth matrix.",
      },
      {
        title: "High-Resolution Processing",
        text: "Standardized retinal image inputs to a resolution of 896 × 896.",
      },
      {
        title: "LAB-CLAHE Preprocessing",
        text: "Applied CLAHE to the Lightness channel to improve pathological contrast while preserving retinal color information.",
      },
      {
        title: "DINOv3 with LoRA",
        text: "Implemented a foundation-model pipeline using Low-Rank Adaptation for multi-label classification.",
      },
      {
        title: "Comparative Evaluation",
        text: "Configured and evaluated DINOv3 and EfficientNet-B2 in a Kaggle T4 GPU environment.",
      },
    ],
    technologies: [
      "DINOv3",
      "LoRA",
      "EfficientNet-B2",
      "ODIR-10K",
      "LAB-CLAHE",
      "Python",
      "Kaggle",
    ],
    status:
      "Model pipeline and comparative evaluation conducted in a Kaggle T4 GPU environment.",
    github: null,
    live: null,
    kaggle:
      "https://www.kaggle.com/code/theirumalegowda/notebook278587edf0",
  },
  {
    id: "05",
    name: "FundFlow",
    subtitle: "Transparent Finance Tracker",
    category: "FINTECH / FULL-STACK APPLICATION",
    type: "HACKATHON MVP",
    icon: Database,
    accent: "red",
    short:
      "A transparent financial tracking platform that visualizes how institutional budgets flow through departments, projects, and vendors, with SHA-256 verification for transaction integrity.",
    description:
      "FundFlow is a full-stack platform designed to bring clarity and trust to institutional finances. It presents the flow of funds from high-level budgets down to departments, projects, and vendors. Its SHA-256 hashing workflow helps verify transaction integrity and identify changes to recorded transaction data.",
    features: [
      {
        title: "SHA-256 Transaction Verification",
        text: "Uses SHA-256 cryptographic hashing to verify transaction data integrity and help detect unauthorized changes to financial records.",
      },
      {
        title: "Interactive Financial Dashboard",
        text: "Displays total budgets, department allocations, and transaction flows through a responsive dashboard with interactive Recharts visualizations.",
      },
      {
        title: "Hierarchical Fund Tracking",
        text: "Organizes financial data across the hierarchy: Budgets → Departments → Projects → Vendors.",
      },
      {
        title: "Search & Filtering",
        text: "Allows users to quickly filter transaction records by department or vendor.",
      },
      {
        title: "Plain-English Financial Summaries",
        text: "Presents financial information in an accessible way so non-technical users and stakeholders can understand fund allocation and movement.",
      },
      {
        title: "Modular MVC Backend",
        text: "Structures backend functionality with dedicated routes and controllers for authentication, budgets, departments, projects, vendors, and transactions, alongside a hash utility.",
      },
      {
        title: "Context-Based Frontend Architecture",
        text: "Uses React Context API for state management, with modular dashboard, transaction list, verification button, and chart components.",
      },
    ],
    technologies: [
      "React.js",
      "Recharts",
      "Axios",
      "Crypto-js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "SHA-256",
      "MVC Architecture",
      "React Context API",
    ],
    status:
      "Hackathon MVP focused on transparent fund tracking, dashboard visualization, and cryptographic transaction-integrity verification.",
    github: "https://github.com/Thirumalegowdabv/B4-bnb",
    live: null,
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const closeModal = () => setSelectedProject(null);

  return (
    <section id="work" className="projects-section">
      <div className="projects-container">
        {/* HEADER */}
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="projects-label">04 // Projects</p>

            <h1>
              PROJECTS
              <br />
              <span>& BUILDS.</span>
            </h1>
          </div>

          <div className="projects-header-right">
            <p>
              A collection of applications and technical explorations
              built across full-stack development, AI, and machine
              learning.
            </p>

            <span className="project-count">
              05 PROJECTS <span>·</span> SELECTED WORK
            </span>
          </div>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="projects-grid">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.id}
                className={`project-card accent-${project.accent} ${
                  index === 0 ? "project-featured" : ""
                }`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
              >
                <div className="project-card-top">
                  <div className="project-symbol">
                    <Icon size={24} strokeWidth={1.6} />
                  </div>

                  <span className="project-number">{project.id}</span>
                </div>

                <div className="project-card-content">
                  <div className="project-meta">
                    <span>{project.category}</span>
                    <span className="project-type">{project.type}</span>
                  </div>

                  <h2>{project.name}</h2>

                  <p className="project-subtitle">{project.subtitle}</p>

                  <p className="project-description">{project.short}</p>

                  <div className="project-tech-preview">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}

                    {project.technologies.length > 5 && (
                      <span className="more-tech">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                <div className="project-card-footer">
                  <button
                    className="project-details-button"
                    onClick={() => setSelectedProject(project)}
                  >
                    EXPLORE PROJECT
                    <ChevronRight size={16} />
                  </button>

                  <div className="project-quick-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} GitHub`}
                        title="GitHub repository"
                      >
                        <Code2 size={16} />
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} live website`}
                        title="Live website"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}

                    {project.kaggle && (
                      <a
                        href={project.kaggle}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} Kaggle notebook`}
                        title="Kaggle notebook"
                      >
                        <BrainCircuit size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM STRIP */}
        <motion.div
          className="projects-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bottom-icon">
            <Layers3 size={20} />
          </div>

          <p>
            From ideas to implementation — building, experimenting,
            and continuously learning.
          </p>

          <Sparkles size={18} className="bottom-sparkle" />
        </motion.div>
      </div>

      {/* PROJECT DETAIL MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className={`project-modal accent-${selectedProject.accent}`}
              initial={{ opacity: 0, y: 25, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* MODAL HEADER */}
              <div className="project-modal-header">
                <div>
                  <p>{selectedProject.category}</p>
                  <h2>{selectedProject.name}</h2>
                  <span>{selectedProject.subtitle}</span>
                </div>

                <button
                  className="project-modal-close"
                  onClick={closeModal}
                  aria-label="Close project details"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="project-modal-content">
                {/* OVERVIEW */}
                <div className="project-modal-section">
                  <p className="modal-section-label">PROJECT OVERVIEW</p>

                  <p className="project-modal-description">
                    {selectedProject.description}
                  </p>
                </div>

                {/* FEATURES */}
                <div className="project-modal-section">
                  <p className="modal-section-label">
                    KEY FEATURES & IMPLEMENTATION
                  </p>

                  <div className="project-feature-list">
                    {selectedProject.features.map((feature, index) => (
                      <div className="project-feature" key={feature.title}>
                        <span>{String(index + 1).padStart(2, "0")}</span>

                        <div>
                          <h3>{feature.title}</h3>
                          <p>{feature.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TECH STACK */}
                <div className="project-modal-section">
                  <p className="modal-section-label">TECHNOLOGIES USED</p>

                  <div className="project-modal-tech">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>

                {/* PLANNED TECHNOLOGIES */}
                {selectedProject.planned && (
                  <div className="project-modal-section planned-section">
                    <p className="modal-section-label">
                      PLANNED INTEGRATIONS
                    </p>

                    <p className="planned-description">
                      These are planned integrations and are not
                      represented as completed features.
                    </p>

                    <div className="project-modal-tech">
                      {selectedProject.planned.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CURRENT STATUS */}
                <div className="project-status">
                  <span className="status-indicator" />

                  <div>
                    <p>PROJECT STATUS</p>
                    <span>{selectedProject.status}</span>
                  </div>
                </div>
              </div>

              {/* MODAL FOOTER */}
              <div className="project-modal-footer">
                <div className="project-modal-links">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Code2 size={16} />
                      GITHUB
                      <ArrowUpRight size={14} />
                    </a>
                  )}

                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      LIVE WEBSITE
                      <ArrowUpRight size={14} />
                    </a>
                  )}

                  {selectedProject.kaggle && (
                    <a
                      href={selectedProject.kaggle}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BrainCircuit size={16} />
                      KAGGLE NOTEBOOK
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>

                <button onClick={closeModal}>
                  CLOSE <X size={14} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* INTERNAL CSS */}
      <style>{`
       .projects-section {
  position: relative;
  width: 100%;
  padding: 50px 5vw 60px; /* CHANGED: Reduced top padding from 100px to 50px */
  box-sizing: border-box;
  background: #050505;
  color: #f5f0f1;
  overflow: hidden;
}

        .projects-section::before {
          content: "";
          position: absolute;
          width: 550px;
          height: 550px;
          left: -300px;
          top: 25%;
          border-radius: 50%;
          background: rgba(255, 48, 72, 0.06);
          filter: blur(120px);
          pointer-events: none;
        }

        .projects-container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: auto;
        }

        /* HEADER */

        .projects-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 40px;
          margin-bottom: 50px;
        }

        .projects-label {
          margin: 0 0 16px;
          font-family: monospace;
          font-size: 10px;
          letter-spacing: 0.16em;
          color: #ff5369;
        }

        .projects-header h1 {
          margin: 0;
          font-size: clamp(38px, 6vw, 84px);
          line-height: 0.92;
          letter-spacing: -0.06em;
          font-weight: 800;
        }

        .projects-header h1 span {
          color: #ff3048;
        }

        .projects-header-right {
          max-width: 340px;
        }

        .projects-header-right p {
          margin: 0 0 16px;
          font-family: monospace;
          font-size: clamp(10px, 1.2vw, 11px);
          line-height: 1.8;
          color: rgba(255, 235, 238, 0.5);
        }

        .project-count {
          font-family: monospace;
          font-size: 8px;
          letter-spacing: 0.12em;
          color: #ff6579;
        }

        .project-count span {
          padding: 0 5px;
          color: rgba(255, 255, 255, 0.3);
        }

        /* PROJECT GRID */

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .project-card {
          --project-accent: #ff5369;
          --project-soft: rgba(255, 48, 72, 0.09);
          position: relative;
          min-width: 0;
          min-height: auto;
          display: flex;
          flex-direction: column;
          padding: 24px;
          box-sizing: border-box;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 17px;
          background: linear-gradient(
            145deg,
            rgba(24, 15, 17, 0.94),
            rgba(9, 8, 9, 0.98)
          );
          transition: transform 0.3s ease,
                      border-color 0.3s ease,
                      box-shadow 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          border-color: color-mix(
            in srgb,
            var(--project-accent) 45%,
            transparent
          );
          box-shadow: 0 25px 65px rgba(0, 0, 0, 0.25);
        }

        .project-card::after {
          content: "";
          position: absolute;
          width: 180px;
          height: 180px;
          right: -90px;
          top: -90px;
          border-radius: 50%;
          background: var(--project-soft);
          filter: blur(40px);
          pointer-events: none;
        }

        .accent-red {
          --project-accent: #ff5369;
          --project-soft: rgba(255, 48, 72, 0.12);
        }

        .accent-purple {
          --project-accent: #b59aff;
          --project-soft: rgba(153, 110, 255, 0.12);
        }

        .accent-orange {
          --project-accent: #ffad72;
          --project-soft: rgba(255, 144, 80, 0.11);
        }

        .accent-blue {
          --project-accent: #7bb9ff;
          --project-soft: rgba(70, 145, 255, 0.11);
        }

        .project-featured {
          border-color: rgba(255, 48, 72, 0.3);
        }

        .project-card-top {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .project-symbol {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid color-mix(
            in srgb,
            var(--project-accent) 30%,
            transparent
          );
          border-radius: 12px;
          color: var(--project-accent);
          background: var(--project-soft);
        }

        .project-number {
          font-family: monospace;
          font-size: 11px;
          color: rgba(255, 255, 255, 0.25);
        }

        .project-card-content {
          position: relative;
          z-index: 1;
          flex: 1;
        }

        .project-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 9px;
          margin-bottom: 12px;
          font-family: monospace;
          font-size: 8px;
          letter-spacing: 0.1em;
          color: var(--project-accent);
        }

        .project-type {
          padding: 4px 7px;
          border: 1px solid color-mix(
            in srgb,
            var(--project-accent) 28%,
            transparent
          );
          border-radius: 4px;
          background: var(--project-soft);
        }

        .project-card h2 {
          margin: 0;
          font-size: clamp(22px, 2.5vw, 30px);
          line-height: 1.15;
          letter-spacing: -0.04em;
        }

        .project-subtitle {
          margin: 8px 0 0;
          font-family: monospace;
          font-size: 10px;
          color: rgba(255, 255, 255, 0.42);
        }

        .project-description {
          margin: 16px 0 20px;
          font-family: monospace;
          font-size: 10px;
          line-height: 1.85;
          color: rgba(255, 235, 238, 0.58);
        }

        /* TECH PREVIEW */

        .project-tech-preview {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 20px;
        }

        .project-tech-preview span {
          padding: 6px 8px;
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 5px;
          background: rgba(255, 255, 255, 0.025);
          font-family: monospace;
          font-size: 8px;
          color: rgba(255, 255, 255, 0.55);
        }

        .project-tech-preview .more-tech {
          color: var(--project-accent);
          border-color: color-mix(
            in srgb,
            var(--project-accent) 25%,
            transparent
          );
        }

        /* CARD FOOTER */

        .project-card-footer {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          padding-top: 15px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .project-details-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0;
          border: 0;
          background: transparent;
          color: var(--project-accent);
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: gap 0.2s ease;
        }

        .project-details-button:hover {
          gap: 14px;
        }

        .project-quick-links {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .project-quick-links a {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: rgba(255, 255, 255, 0.55);
          transition: color 0.2s ease,
                      border-color 0.2s ease;
        }

        .project-quick-links a:hover {
          color: var(--project-accent);
          border-color: var(--project-accent);
        }

        /* BOTTOM */

        .projects-bottom {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-top: 45px;
          padding: 20px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.015);
        }

        .bottom-icon {
          color: #ff5369;
        }

        .projects-bottom p {
          margin: 0;
          font-family: monospace;
          font-size: 10px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.43);
        }

        .bottom-sparkle {
          flex-shrink: 0;
          color: #ff6479;
        }

        /* MODAL */

        .project-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          box-sizing: border-box;
          background: rgba(0, 0, 0, 0.87);
          backdrop-filter: blur(14px);
        }

        .project-modal {
          --project-accent: #ff5369;
          width: min(850px, 100%);
          max-height: 85vh;
          overflow-y: auto;
          border: 1px solid color-mix(
            in srgb,
            var(--project-accent) 35%,
            transparent
          );
          border-radius: 18px;
          background: #10090b;
          box-shadow: 0 35px 110px rgba(0, 0, 0, 0.65);
        }

        .project-modal::-webkit-scrollbar {
          width: 4px;
        }

        .project-modal::-webkit-scrollbar-thumb {
          background: var(--project-accent);
          border-radius: 10px;
        }

        .project-modal-header {
          position: sticky;
          top: 0;
          z-index: 5;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          padding: 22px 26px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          background: rgba(16, 9, 11, 0.96);
          backdrop-filter: blur(12px);
        }

        .project-modal-header p {
          margin: 0 0 8px;
          font-family: monospace;
          font-size: 8px;
          letter-spacing: 0.13em;
          color: var(--project-accent);
        }

        .project-modal-header h2 {
          margin: 0;
          font-size: clamp(22px, 3.5vw, 34px);
          letter-spacing: -0.04em;
        }

        .project-modal-header span {
          display: block;
          margin-top: 6px;
          font-family: monospace;
          font-size: 10px;
          color: rgba(255, 255, 255, 0.42);
        }

        .project-modal-close {
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
          transition: border-color 0.2s ease,
                      background 0.2s ease;
        }

        .project-modal-close:hover {
          border-color: var(--project-accent);
          background: rgba(255, 255, 255, 0.04);
        }

        .project-modal-content {
          padding: 24px 26px 28px;
        }

        .project-modal-section {
          margin-bottom: 28px;
        }

        .modal-section-label {
          margin: 0 0 13px;
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.13em;
          color: var(--project-accent);
        }

        .project-modal-description {
          margin: 0;
          font-family: monospace;
          font-size: 11px;
          line-height: 1.85;
          color: rgba(255, 255, 255, 0.62);
        }

        /* FEATURES */

        .project-feature-list {
          display: flex;
          flex-direction: column;
        }

        .project-feature {
          display: grid;
          grid-template-columns: 30px 1fr;
          gap: 12px;
          padding: 14px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .project-feature:last-child {
          border-bottom: 0;
        }

        .project-feature > span {
          font-family: monospace;
          font-size: 9px;
          color: var(--project-accent);
        }

        .project-feature h3 {
          margin: 0 0 5px;
          font-size: 13px;
        }

        .project-feature p {
          margin: 0;
          font-family: monospace;
          font-size: 10px;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.47);
        }

        /* STACK */

        .project-modal-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .project-modal-tech span {
          padding: 7px 10px;
          border: 1px solid color-mix(
            in srgb,
            var(--project-accent) 22%,
            transparent
          );
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.025);
          font-family: monospace;
          font-size: 9px;
          color: rgba(255, 255, 255, 0.68);
        }

        .planned-section {
          padding: 16px;
          border: 1px dashed rgba(255, 255, 255, 0.16);
          border-radius: 10px;
        }

        .planned-description {
          margin: -4px 0 13px;
          font-family: monospace;
          font-size: 9px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.42);
        }

        /* STATUS */

        .project-status {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 15px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.025);
        }

        .status-indicator {
          width: 7px;
          height: 7px;
          flex-shrink: 0;
          margin-top: 4px;
          border-radius: 50%;
          background: var(--project-accent);
          box-shadow: 0 0 9px var(--project-accent);
        }

        .project-status p {
          margin: 0 0 5px;
          font-family: monospace;
          font-size: 8px;
          letter-spacing: 0.12em;
          color: var(--project-accent);
        }

        .project-status div > span {
          display: block;
          font-family: monospace;
          font-size: 10px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.55);
        }

        /* MODAL FOOTER */

        .project-modal-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          flex-wrap: wrap;
          padding: 18px 26px;
          border-top: 1px solid rgba(255, 255, 255, 0.07);
        }

        .project-modal-links {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .project-modal-links a {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 9px 11px;
          border: 1px solid color-mix(
            in srgb,
            var(--project-accent) 30%,
            transparent
          );
          border-radius: 7px;
          background: rgba(255, 255, 255, 0.025);
          color: var(--project-accent);
          text-decoration: none;
          font-family: monospace;
          font-size: 8px;
          letter-spacing: 0.06em;
          transition: background 0.2s ease;
        }

        .project-modal-links a:hover {
          background: rgba(255, 255, 255, 0.07);
        }

        .project-modal-footer > button {
          display: flex;
          align-items: center;
          gap: 6px;
          border: 0;
          background: transparent;
          color: rgba(255, 255, 255, 0.5);
          font-family: monospace;
          font-size: 9px;
          cursor: pointer;
        }

        .project-modal-footer > button:hover {
          color: white;
        }

        /* RESPONSIVE */

        @media (max-width: 850px) {
          .projects-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }

          .projects-header-right {
            max-width: 550px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .projects-section {
            padding: 70px 4% 60px;
          }

          .project-card {
            padding: 20px;
          }

          .project-card-footer {
            align-items: center;
          }

          .project-overlay {
            padding: 10px;
          }

          .project-modal-header {
            padding: 18px 20px;
          }

          .project-modal-content {
            padding: 18px 20px;
          }

          .project-modal-footer {
            padding: 16px 20px;
            flex-direction: column;
            align-items: flex-start;
          }

          .project-modal-links {
            width: 100%;
          }

          .project-modal-links a {
            flex: 1;
            justify-content: center;
          }

          .projects-bottom {
            align-items: flex-start;
            padding: 16px;
          }
        }
      `}</style>
    </section>
  );
}

export default Projects;