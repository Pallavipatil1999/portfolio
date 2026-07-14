import { useState } from "react";
import {
  Mail, Phone, Github, Linkedin, Download, Copy, Check,
  ExternalLink, MapPin, Award, Briefcase, GraduationCap,
  Menu, X, ChevronRight,
} from "lucide-react";
import { Toaster, toast } from "sonner";

const EMAIL = "pallavikpatil99@gmail.com";
const PHONE = "+91 7972877554";
const LINKEDIN = "https://www.linkedin.com/in/pallavi-patil-1b5786212";
const GITHUB = "https://github.com/Pallavipatil1999/pallavipatil1999";
const handleDownload = () => {
  window.open(
    "https://drive.google.com/uc?export=download&id=14BD2I6WStIKrlVGpqTlVssrij5_wHBw5",
    "_blank"
  );
};

const skills = [
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "GitLab", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
  { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
  { name: "Ansible", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" },
  { name: "Prometheus", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
  { name: "Grafana", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Bash", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
  { name: "SonarQube", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg" },
  { name: "Jira", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
];

const skillCategories = [
  { title: "Cloud Platform", items: ["Amazon Web Services (AWS)"] },
  { title: "AWS Services", items: ["EC2", "S3", "IAM", "VPC", "Route 53", "Auto Scaling", "ELB", "EBS", "EFS", "RDS", "CloudWatch", "SNS", "CloudTrail"] },
  { title: "DevOps & CI/CD", items: ["Git", "GitHub", "GitLab", "AWS CLI", "Jenkins", "Docker", "Kubernetes", "Terraform", "Ansible"] },
  { title: "Monitoring", items: ["Prometheus", "Grafana", "SonarQube", "CloudWatch", "Jira"] },
  { title: "Linux Admin", items: ["User Management", "SSH", "Cron Jobs", "Package Management", "System Monitoring", "Log Analysis"] },
  { title: "Networking", items: ["TCP/IP", "DNS", "HTTP/HTTPS", "Subnetting", "Security Groups", "NACL"] },
  { title: "Scripting", items: ["Shell Scripting (Bash)", "Python"] },
];

const projects = [
  {
    title: "Highly Available 3-Tier Web Architecture on AWS",
    description: "Designed and deployed a scalable 3-tier architecture on AWS using EC2, ALB, Auto Scaling Groups, and RDS across multiple Availability Zones. Implemented VPC with public/private subnets, NAT gateways, and security groups for zero-downtime deployment.",
    tech: ["AWS", "EC2", "VPC", "ALB", "RDS", "Auto Scaling", "CloudWatch"],
    github: GITHUB,
  },
  {
    title: "CI/CD Pipeline with Jenkins, Docker & Terraform",
    description: "Built an end-to-end CI/CD pipeline using Jenkins to automate build, test, and deployment of a containerized application. Provisioned AWS infrastructure with Terraform (IaC) and deployed Dockerized apps to EC2 with automated rollbacks.",
    tech: ["Jenkins", "Docker", "Terraform", "AWS", "GitHub", "Bash"],
    github: GITHUB,
  },
];

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        toast.success(`${label} copied!`);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="copy-btn"
      aria-label={`Copy ${label}`}
    >
      {copied ? <Check className="h-4 w-4" style={{ color: "var(--orange)" }} /> : <Copy className="h-4 w-4" />}
    </button>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const handleDownload = () => {
    toast.info("Resume download — add your PDF to /public/resume.pdf");
    window.open("/resume.pdf", "_blank");
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Toaster theme="dark" position="top-center" />

      {/* ────────── NAVBAR ────────── */}
      <header className="navbar">
        <div className="navbar-inner">
          <div className="min-w-0">
            <h1 className="navbar-name">Pallavi Patil</h1>
            <p className="navbar-subtitle">DevOps Engineer</p>
          </div>

          <nav className="nav-links">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
          </nav>

          <div className="nav-actions">
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="nav-icon-link">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href={GITHUB} target="_blank" rel="noreferrer" className="nav-icon-link">
              <Github className="h-4 w-4" />
            </a>
            <button onClick={handleDownload} className="btn-primary btn-sm">
              <Download className="h-4 w-4" />
              <span className="btn-label">Resume</span>
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="mobile-menu-btn"
              aria-label="Menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="mobile-nav">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="mobile-nav-link">
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main className="main-content">

        {/* ────────── HERO ────────── */}
        <section id="home" className="hero-section">
          <div className="hero-grid">
            <div className="hero-text">
              <p className="hero-tagline">
                Automate • Deploy • Monitor • Optimize
              </p>
              <h2 className="hero-heading">
                <span style={{ color: "var(--orange)" }}>DevOps</span>{" "}
                <span style={{ color: "var(--foreground)" }}>Engineer</span>
              </h2>
              <p className="hero-name">Pallavi Patil</p>
              <p className="hero-description">
                Cloud & DevOps Engineer with{" "}
                <strong style={{ color: "var(--foreground)" }}>2+ years of hands-on experience</strong>{" "}
                designing, deploying, and managing scalable infrastructure on{" "}
                <strong style={{ color: "var(--foreground)" }}>AWS</strong>.
                Skilled in automating deployments with{" "}
                <strong style={{ color: "var(--foreground)" }}>Jenkins, Docker, Kubernetes, and Terraform</strong>,
                provisioning infrastructure as code, and administering Linux systems in production.
              </p>

              <div className="hero-badges">
                <span className="info-badge"><Briefcase className="h-3.5 w-3.5" style={{ color: "var(--orange)" }} /> 2+ yrs experience</span>
                <span className="info-badge"><GraduationCap className="h-3.5 w-3.5" style={{ color: "var(--orange)" }} /> B.E. CSE • CGPA 8.1</span>
                <span className="info-badge"><MapPin className="h-3.5 w-3.5" style={{ color: "var(--orange)" }} /> India</span>
              </div>

              <div className="hero-actions">
                <a href="#contact" className="btn-primary">
                  <Mail className="h-4 w-4" /> Get in touch
                </a>
                <a href="#projects" className="btn-secondary">
                  <ChevronRight className="h-4 w-4" /> View projects
                </a>
              </div>
            </div>

            <div className="hero-avatar-wrap">
              <div className="hero-avatar-ring">
                <div className="hero-avatar-inner">
                  <img
                    src="/profile.png"
                    alt="Pallavi Patil"
                    className="hero-avatar-img"
                  />
                </div>
              </div>
              <div className="hero-avatar-badge">
                <Award className="h-3.5 w-3.5" /> AWS Certified
              </div>
            </div>
          </div>
        </section>

        {/* ────────── TOOLS & TECHNOLOGIES ────────── */}
        <section id="skills" className="section">
          <div className="section-header">
            <div className="section-line" />
            <h2 className="section-title">TOOLS & TECHNOLOGIES</h2>
          </div>

          <div className="skills-grid">
            {skills.map((s) => (
              <div key={s.name} className="skill-tile">
                <img src={s.logo} alt={s.name} loading="lazy" />
                <span>{s.name}</span>
              </div>
            ))}
          </div>

          {/* Skill Breakdown */}
          <div className="breakdown-header">
            <h3>Skill Breakdown</h3>
            <p>Detailed areas of expertise</p>
          </div>

          <div className="breakdown-card">
            {skillCategories.map((cat) => (
              <div key={cat.title} className="category-row">
                <div className="category-label">{cat.title}</div>
                <div className="category-tags">
                  {cat.items.map((item) => (
                    <span key={item} className="skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ────────── PROJECTS ────────── */}
        <section id="projects" className="section">
          <div className="section-header">
            <div className="section-line" />
            <h2 className="section-title">PROJECTS</h2>
          </div>

          <div className="projects-grid">
            {projects.map((p) => (
              <article key={p.title} className="project-card">
                <div className="project-banner">
                  <span>{p.title.split(" ").slice(0, 2).join(" ")}</span>
                </div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span key={t} className="skill-tag skill-tag-sm">{t}</span>
                  ))}
                </div>
                <a href={p.github} target="_blank" rel="noreferrer" className="btn-secondary btn-full">
                  <Github className="h-4 w-4" /> View on GitHub
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* ────────── CONTACT ────────── */}
        <section id="contact" className="section">
          <div className="section-header">
            <div className="section-line" />
            <h2 className="section-title">GET IN TOUCH</h2>
            <p className="section-subtitle">Open to Cloud Engineer / DevOps Engineer opportunities. Let's connect!</p>
          </div>

          <div className="contact-grid">
            {/* Email */}
            <div className="contact-card">
              <div className="contact-card-header">
                <div className="contact-icon bg-orange">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="contact-label">Email</p>
                  <p className="contact-value">{EMAIL}</p>
                </div>
              </div>
              <div className="contact-card-actions">
                <a href={`mailto:${EMAIL}`} className="btn-primary btn-sm btn-flex">
                  <Mail className="h-3.5 w-3.5" /> Mail me
                </a>
                <CopyButton value={EMAIL} label="Email" />
              </div>
            </div>

            {/* Phone */}
            <div className="contact-card">
              <div className="contact-card-header">
                <div className="contact-icon bg-orange">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="contact-label">Phone</p>
                  <p className="contact-value">{PHONE}</p>
                </div>
              </div>
              <div className="contact-card-actions">
                <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="btn-primary btn-sm btn-flex">
                  <Phone className="h-3.5 w-3.5" /> Call
                </a>
                <CopyButton value={PHONE} label="Phone" />
              </div>
            </div>

            {/* LinkedIn */}
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="contact-card contact-card-link">
              <div className="contact-icon" style={{ background: "var(--blue)" }}>
                <Linkedin className="h-5 w-5 text-white" />
              </div>
              <div className="contact-link-text">
                <p className="contact-label">LinkedIn</p>
                <p className="contact-value">pallavi-patil</p>
              </div>
              <ExternalLink className="h-4 w-4" style={{ color: "var(--muted-foreground)" }} />
            </a>

            {/* GitHub */}
            <a href={GITHUB} target="_blank" rel="noreferrer" className="contact-card contact-card-link">
              <div className="contact-icon" style={{ background: "var(--secondary)", border: "1px solid var(--border)" }}>
                <Github className="h-5 w-5" style={{ color: "var(--foreground)" }} />
              </div>
              <div className="contact-link-text">
                <p className="contact-label">GitHub</p>
                <p className="contact-value">Pallavipatil1999</p>
              </div>
              <ExternalLink className="h-4 w-4" style={{ color: "var(--muted-foreground)" }} />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Pallavi Patil • DevOps Engineer
      </footer>
    </div>
  );
}
