
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MapPin,
  ArrowUpRight,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock3,
  MessageCircle,
  Code2,
  FileText,
  Sparkles,
  Copy,
  Check,
} from "lucide-react";

// Add your EmailJS credentials here after creating the template.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const EMAIL = "thirumalegowdabv19@gmail.com";

const SUBJECT_CHIPS = [
  "Project idea",
  "Collaboration",
  "Internship",
  "Just saying hi",
];

const socialLinks = [
  {
    label: "GitHub",
    short: "GH",
    href: "https://github.com/Thirumalegowdabv",
  },
  {
    label: "LinkedIn",
    short: "IN",
    href: "https://linkedin.com/in/thirumale-gowda-4122032b4",
  },
];

function Contact() {
  const formRef = useRef(null);

  const [subject, setSubject] = useState("");
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);

  const sendEmail = async (event) => {
    event.preventDefault();

    if (
      EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" ||
      EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
      EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY"
    ) {
      setStatus("config");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
          time: new Date().toLocaleString(),
        }
      );

      setStatus("success");
      setSubject("");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="tg-contact">
      <style>{`
        .tg-contact {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 125px 6vw 55px;
          background: #060505;
          color: #f7eeee;
          font-family: inherit;
        }

        .tg-contact *,
        .tg-contact *::before,
        .tg-contact *::after {
          box-sizing: border-box;
        }

        .tg-contact::before {
          content: "";
          position: absolute;
          z-index: -1;
          inset: 0;
          opacity: 0.16;
          background-image:
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
          background-size: 65px 65px;
          mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
          pointer-events: none;
        }

        .tg-contact-glow {
          position: absolute;
          z-index: -1;
          width: 550px;
          height: 550px;
          top: 15%;
          right: -230px;
          border-radius: 50%;
          background: rgba(190, 12, 36, 0.13);
          filter: blur(120px);
          pointer-events: none;
        }

        .tg-contact-glow-two {
          position: absolute;
          z-index: -1;
          width: 400px;
          height: 400px;
          bottom: 0;
          left: -220px;
          border-radius: 50%;
          background: rgba(130, 0, 18, 0.13);
          filter: blur(110px);
          pointer-events: none;
        }

        .tg-contact-container {
          width: 100%;
          max-width: 1250px;
          margin: 0 auto;
        }

        /* HEADER */

        .tg-contact-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
          color: #ff596d;
          font-family: monospace;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.23em;
        }

        .tg-contact-eyebrow::before {
          content: "";
          width: 30px;
          height: 1px;
          background: #ff3048;
          box-shadow: 0 0 10px #ff3048;
        }

        .tg-contact-heading {
          max-width: 950px;
          margin: 0;
          font-size: clamp(54px, 8.5vw, 112px);
          font-weight: 900;
          line-height: 0.91;
          letter-spacing: -0.075em;
        }

        .tg-heading-white {
          display: block;
          color: #f6eeee;
        }

        .tg-heading-red {
          display: block;
          color: #ff3048;
          text-shadow: 0 0 45px rgba(255, 35, 65, 0.17);
        }

        .tg-contact-intro {
          max-width: 540px;
          margin: 27px 0 0;
          color: #928588;
          font-size: 14px;
          line-height: 1.9;
        }

        .tg-contact-intro strong {
          color: #e9dfe1;
          font-weight: 600;
        }

        /* MAIN LAYOUT */

        .tg-contact-layout {
          display: grid;
          grid-template-columns: 0.82fr 1.18fr;
          gap: 55px;
          align-items: start;
          margin-top: 75px;
        }

        .tg-contact-info {
          display: flex;
          flex-direction: column;
          gap: 27px;
        }

        .tg-info-heading {
          margin: 0 0 5px;
          color: #f1e6e8;
          font-size: 18px;
          font-weight: 750;
          letter-spacing: -0.04em;
        }

        .tg-info-description {
          margin: 0;
          color: #837579;
          font-size: 12px;
          line-height: 1.8;
        }

        /* CONTACT DETAIL CARDS */

        .tg-info-card {
          display: flex;
          align-items: center;
          gap: 17px;
          padding: 18px;
          border: 1px solid rgba(255,255,255,0.075);
          border-radius: 13px;
          background: linear-gradient(130deg, rgba(255,255,255,0.045), rgba(255,255,255,0.012));
          transition: 0.25s ease;
        }

        .tg-info-card:hover {
          transform: translateX(5px);
          border-color: rgba(255,48,72,0.38);
          background: rgba(255,35,60,0.045);
        }

        .tg-info-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 45px;
          height: 45px;
          border: 1px solid rgba(255,48,72,0.24);
          border-radius: 11px;
          background: rgba(255,48,72,0.08);
          color: #ff566b;
        }

        .tg-info-copy {
          min-width: 0;
          flex: 1;
        }

        .tg-info-label {
          display: block;
          margin-bottom: 6px;
          color: #75676a;
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.15em;
        }

        .tg-info-value {
          display: block;
          color: #e9dfe1;
          font-size: 12px;
          line-height: 1.6;
          text-decoration: none;
          overflow-wrap: anywhere;
          transition: color 0.2s ease;
        }

        a.tg-info-value:hover {
          color: #ff6678;
        }

        .tg-copy-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          flex-shrink: 0;
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 8px;
          background: transparent;
          color: #a99b9e;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .tg-copy-button:hover {
          color: #ff6577;
          border-color: #ff3048;
        }

        /* AVAILABILITY */

        .tg-availability {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          padding: 17px;
          border: 1px solid rgba(255,48,72,0.18);
          border-radius: 12px;
          background: rgba(255,35,55,0.035);
        }

        .tg-availability-dot {
          width: 8px;
          height: 8px;
          flex-shrink: 0;
          margin-top: 5px;
          border-radius: 50%;
          background: #ff4058;
          box-shadow: 0 0 12px #ff3048;
          animation: tgPulse 1.8s infinite;
        }

        .tg-availability strong {
          display: block;
          margin-bottom: 5px;
          color: #e9dfe1;
          font-size: 11px;
        }

        .tg-availability span {
          color: #938588;
          font-size: 10px;
          line-height: 1.7;
        }

        /* SOCIAL LINKS */

        .tg-social-title {
          margin: 0 0 13px;
          color: #796c70;
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.17em;
        }

        .tg-socials {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tg-social-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 15px;
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 9px;
          background: rgba(255,255,255,0.025);
          color: #c9bfc1;
          font-size: 10px;
          text-decoration: none;
          transition: 0.25s ease;
        }

        .tg-social-link:hover {
          transform: translateY(-3px);
          border-color: rgba(255,48,72,0.55);
          color: #ff6678;
          background: rgba(255,48,72,0.06);
        }

        .tg-social-mark {
          color: #ff596d;
          font-family: monospace;
          font-weight: 900;
        }

        /* FORM PANEL */

        .tg-form-panel {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 19px;
          background:
            radial-gradient(circle at 100% 0%, rgba(180,10,35,0.12), transparent 38%),
            linear-gradient(145deg, #141011, #0b090a);
          box-shadow: 0 25px 80px rgba(0,0,0,0.3);
        }

        .tg-form-panel::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ff3048, #ff8795, transparent);
        }

        .tg-form-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          padding: 25px 28px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }

        .tg-form-top h3 {
          margin: 0;
          color: #f2e8e9;
          font-size: 16px;
          font-weight: 750;
          letter-spacing: -0.03em;
        }

        .tg-form-top p {
          margin: 6px 0 0;
          color: #827477;
          font-size: 10px;
        }

        .tg-form-number {
          color: #ff4d63;
          font-family: monospace;
          font-size: 10px;
          letter-spacing: 0.12em;
        }

        .tg-contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 28px;
        }

        .tg-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .tg-field {
          display: flex;
          flex-direction: column;
          gap: 9px;
          min-width: 0;
        }

        .tg-field label {
          color: #a99a9e;
          font-family: monospace;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.13em;
        }

        .tg-field input,
        .tg-field textarea {
          width: 100%;
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 9px;
          outline: none;
          background: rgba(255,255,255,0.025);
          color: #f4e9eb;
          font-family: inherit;
          font-size: 12px;
          transition: 0.2s ease;
        }

        .tg-field input {
          height: 49px;
          padding: 0 14px;
        }

        .tg-field textarea {
          min-height: 145px;
          padding: 15px;
          resize: vertical;
          line-height: 1.7;
        }

        .tg-field input::placeholder,
        .tg-field textarea::placeholder {
          color: #625558;
        }

        .tg-field input:focus,
        .tg-field textarea:focus {
          border-color: rgba(255,48,72,0.7);
          background: rgba(255,48,72,0.035);
          box-shadow: 0 0 0 3px rgba(255,48,72,0.08);
        }

        /* SUBJECT CHIPS */

        .tg-subject-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 2px;
        }

        .tg-chip {
          padding: 8px 12px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 30px;
          background: transparent;
          color: #a6979a;
          font-size: 9px;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .tg-chip:hover,
        .tg-chip.active {
          border-color: rgba(255,48,72,0.65);
          background: rgba(255,48,72,0.1);
          color: #ff7a89;
        }

        /* SUBMIT */

        .tg-submit-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 15px;
          margin-top: 3px;
        }

        .tg-submit-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-width: 175px;
          padding: 15px 21px;
          border: 1px solid #ff3048;
          border-radius: 9px;
          background: linear-gradient(110deg, #d51934, #9e0c22);
          color: white;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.1em;
          cursor: pointer;
          box-shadow: 0 8px 25px rgba(210,20,48,0.19);
          transition: 0.25s ease;
        }

        .tg-submit-button:hover:not(:disabled) {
          transform: translateY(-3px);
          background: linear-gradient(110deg, #fa304a, #b90e2a);
          box-shadow: 0 12px 32px rgba(255,30,60,0.28);
        }

        .tg-submit-button:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .tg-submit-note {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #776a6d;
          font-size: 9px;
        }

        /* STATUS */

        .tg-form-feedback {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 12px 14px;
          border-radius: 9px;
          font-size: 10px;
          line-height: 1.6;
        }

        .tg-feedback-success {
          border: 1px solid rgba(52,211,153,0.2);
          background: rgba(52,211,153,0.06);
          color: #78ddb5;
        }

        .tg-feedback-error,
        .tg-feedback-config {
          border: 1px solid rgba(255,70,90,0.2);
          background: rgba(255,48,72,0.06);
          color: #ff8795;
        }

        .tg-feedback-sending {
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.035);
          color: #c3b4b8;
        }

        /* FOOTER */

        .tg-contact-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-top: 95px;
          padding-top: 23px;
          border-top: 1px solid rgba(255,255,255,0.08);
          color: #726568;
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.13em;
        }

        .tg-footer-brand {
          color: #ff596d;
          font-weight: 800;
        }

        .tg-footer-top {
          color: #a7979b;
          text-decoration: none;
          transition: color 0.2s;
        }

        .tg-footer-top:hover {
          color: #ff596d;
        }

        @keyframes tgPulse {
          0%, 100% { opacity: 0.55; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.15); }
        }

        @media (max-width: 950px) {
          .tg-contact-layout {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .tg-contact-info {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: start;
          }

          .tg-info-intro,
          .tg-social-block {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 600px) {
          .tg-contact {
            padding: 95px 20px 35px;
          }

          .tg-contact-heading {
            font-size: clamp(48px, 13vw, 75px);
          }

          .tg-contact-layout {
            margin-top: 48px;
          }

          .tg-contact-info {
            display: flex;
          }

          .tg-form-row {
            grid-template-columns: 1fr;
          }

          .tg-form-top,
          .tg-contact-form {
            padding: 21px;
          }

          .tg-submit-row {
            align-items: stretch;
            flex-direction: column;
          }

          .tg-submit-button {
            width: 100%;
          }

          .tg-submit-note {
            justify-content: center;
          }

          .tg-contact-footer {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            margin-top: 60px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .tg-contact *,
          .tg-contact *::before,
          .tg-contact *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <div className="tg-contact-glow" />
      <div className="tg-contact-glow-two" />

      <div className="tg-contact-container">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="tg-contact-eyebrow">
            07 // LET'S CONNECT
          </div>

          <h2 className="tg-contact-heading">
            <span className="tg-heading-white">HAVE AN IDEA?</span>
            <span className="tg-heading-red">LET'S TALK.</span>
          </h2>

          <p className="tg-contact-intro">
            Every great project starts with a conversation.
            Whether it's a <strong>collaboration, opportunity, project</strong>,
            or simply a hello, I'd love to hear from you.
          </p>
        </motion.div>

        {/* CONTACT CONTENT */}

        <div className="tg-contact-layout">

          {/* LEFT SIDE */}

          <motion.div
            className="tg-contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <div className="tg-info-intro">
              <h3 className="tg-info-heading">Let's make something meaningful.</h3>
              <p className="tg-info-description">
                Have something in mind? Reach out through any of these channels.
                I'm always interested in good ideas and meaningful conversations.
              </p>
            </div>

            <div className="tg-info-card">
              <div className="tg-info-icon">
                <Mail size={19} />
              </div>
              <div className="tg-info-copy">
                <span className="tg-info-label">EMAIL ADDRESS</span>
                <a
                  className="tg-info-value"
                  href={`mailto:${EMAIL}`}
                >
                  {EMAIL}
                </a>
              </div>
              <button
                className="tg-copy-button"
                onClick={copyEmail}
                aria-label="Copy email address"
                title="Copy email"
                type="button"
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}
              </button>
            </div>

            <div className="tg-info-card">
              <div className="tg-info-icon">
                <MapPin size={19} />
              </div>
              <div className="tg-info-copy">
                <span className="tg-info-label">LOCATION</span>
                <span className="tg-info-value">Bengaluru, India</span>
              </div>
            </div>

            <div className="tg-info-card">
              <div className="tg-info-icon">
                <MessageCircle size={19} />
              </div>
              <div className="tg-info-copy">
                <span className="tg-info-label">OPEN TO</span>
                <span className="tg-info-value">
                  Projects, collaborations & opportunities
                </span>
              </div>
            </div>

            <div className="tg-availability">
              <span className="tg-availability-dot" />
              <div>
                <strong>Let's connect and build.</strong>
                <span>
                  Interested in software development, AI/ML and
                  technology-driven ideas.
                </span>
              </div>
            </div>

            <div className="tg-social-block">
              <p className="tg-social-title">FIND ME AROUND THE WEB</p>
              <div className="tg-socials">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    className="tg-social-link"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="tg-social-mark">{link.short}</span>
                    {link.label}
                    <ArrowUpRight size={13} />
                  </a>
                ))}

                <a
                  className="tg-social-link"
                  href="/Thirumale_Gowda_BV_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText size={14} />
                  Resume
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - MESSAGE FORM */}

          <motion.div
            className="tg-form-panel"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <div className="tg-form-top">
              <div>
                <h3>Send a message</h3>
                <p>Fill in the details and I'll get back to you.</p>
              </div>
              <span className="tg-form-number">MESSAGE / 001</span>
            </div>

            <form
              ref={formRef}
              className="tg-contact-form"
              onSubmit={sendEmail}
            >
              <div className="tg-form-row">
                <div className="tg-field">
                  <label htmlFor="contact-name">YOUR NAME *</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                    maxLength={100}
                  />
                </div>

                <div className="tg-field">
                  <label htmlFor="contact-email">EMAIL ADDRESS *</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    maxLength={150}
                  />
                </div>
              </div>

              <div className="tg-field">
                <label htmlFor="contact-subject">WHAT'S THIS ABOUT? *</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="title"
                  placeholder="Enter a subject"
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                  required
                  maxLength={150}
                />

                <div className="tg-subject-chips">
                  {SUBJECT_CHIPS.map((chip) => (
                    <button
                      key={chip}
                      type="button"
                      className={`tg-chip ${subject === chip ? "active" : ""}`}
                      onClick={() => setSubject(chip)}
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>

              <div className="tg-field">
                <label htmlFor="contact-message">YOUR MESSAGE *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me about your idea, project or opportunity..."
                  required
                  minLength={5}
                  maxLength={3000}
                />
              </div>

              <div className="tg-submit-row">
                <button
                  type="submit"
                  className="tg-submit-button"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <>
                      SENDING...
                      <Clock3 size={15} />
                    </>
                  ) : (
                    <>
                      SEND MESSAGE
                      <Send size={15} />
                    </>
                  )}
                </button>

                <span className="tg-submit-note">
                  <Sparkles size={13} />
                  Your message goes directly to my inbox.
                </span>
              </div>

              <AnimatePresence mode="wait">
                {status !== "idle" && (
                  <motion.div
                    key={status}
                    className={`tg-form-feedback ${
                      status === "success"
                        ? "tg-feedback-success"
                        : status === "sending"
                        ? "tg-feedback-sending"
                        : "tg-feedback-error"
                    }`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                  >
                    {status === "success" && (
                      <>
                        <CheckCircle2 size={17} />
                        Message sent successfully! Thanks for reaching out.
                      </>
                    )}

                    {status === "sending" && (
                      <>
                        <Clock3 size={17} />
                        Sending your message. Please wait...
                      </>
                    )}

                    {status === "error" && (
                      <>
                        <AlertCircle size={17} />
                        Something went wrong. Please try again or email directly.
                      </>
                    )}

                    {status === "config" && (
                      <>
                        <AlertCircle size={17} />
                        EmailJS is not configured yet. Add your Service ID,
                        Template ID and Public Key at the top of Contact.jsx.
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>

        {/* FOOTER */}

        <footer className="tg-contact-footer">
          <span className="tg-footer-brand">THIRUMALE.GOWDA</span>
          <span>DESIGNED WITH PURPOSE. BUILT WITH CODE.</span>
          <a className="tg-footer-top" href="#home">
            BACK TO TOP ↑
          </a>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
