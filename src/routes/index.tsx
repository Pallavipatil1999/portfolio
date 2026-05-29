import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Mail, Phone, Github, Linkedin, Download, Copy, Check,
  ExternalLink, MapPin, Award, Briefcase, GraduationCap,
  Menu, X, ChevronRight,
} from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pallavi Patil — DevOps Engineer" },
      { name: "description", content: "Portfolio of Pallavi Patil, DevOps Engineer — Automate • Deploy • Monitor • Optimize" },
      { property: "og:title", content: "Pallavi Patil — DevOps Engineer" },
      { property: "og:description", content: "AWS • Docker • Terraform • Jenkins • Kubernetes" },
    ],
  }),
  component: Portfolio,
});

const EMAIL = "pallavikpatil99@gmail.com";
const PHONE = "+91 7972877554";
const LINKEDIN = "https://www.linkedin.com/in/pallavi-patil-1b5786212";
const GITHUB = "https://github.com/Pallavipatil1999/pallavipatil1999";

/* ── Tool logos matching the reference screenshot ── */
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

/* ── Skill categories (horizontal row layout) ── */
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
      className="inline-flex h-8 w-8 items-center justify-center rounded-md transition-colors"
      style={{ background: "var(--secondary)", color: "var(--muted-foreground)" }}
      aria-label={`Copy ${label}`}
    >
      {copied ? <Check className="h-4 w-4" style={{ color: "var(--orange)" }} /> : <Copy className="h-4 w-4" />}
    </button>
  );
}

function Portfolio() {
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

      {/* ────────── NAVBAR ────────── */}
      <header
        className="sticky top-0 z-50"
        style={{
          background: "rgba(10, 14, 26, 0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          {/* Left — Name */}
          <div className="min-w-0">
            <h1 className="text-lg font-bold" style={{ color: "var(--orange)" }}>
              Pallavi Patil
            </h1>
            <p className="hidden sm:block text-xs" style={{ color: "var(--muted-foreground)", letterSpacing: "2px", textTransform: "uppercase" }}>
              DevOps Engineer
            </p>
          </div>

          {/* Center — Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 text-sm font-medium rounded-md transition-colors"
                style={{ color: "var(--muted-foreground)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-foreground)")}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right — Actions */}
          <div className="flex items-center gap-2">
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="hidden sm:flex h-9 w-9 items-center justify-center rounded-md transition-colors" style={{ color: "var(--muted-foreground)" }}>
              <Linkedin className="h-4 w-4" />
            </a>
            <a href={GITHUB} target="_blank" rel="noreferrer" className="hidden sm:flex h-9 w-9 items-center justify-center rounded-md transition-colors" style={{ color: "var(--muted-foreground)" }}>
              <Github className="h-4 w-4" />
            </a>
            <button onClick={handleDownload} className="btn-primary" style={{ padding: "8px 16px", fontSize: "13px" }}>
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Resume</span>
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md"
              style={{ background: "var(--secondary)", color: "var(--foreground)" }}
              aria-label="Menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden flex flex-col px-5 py-3" style={{ borderTop: "1px solid var(--border)" }}>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="py-2 text-sm" style={{ color: "var(--muted-foreground)" }}>
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main className="mx-auto max-w-6xl px-5">

        {/* ────────── HERO ────────── */}
        <section id="home" className="py-16 md:py-24">
          <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
            <div className="flex-1 text-center md:text-left">
              <p className="text-sm font-semibold mb-2" style={{ color: "var(--blue)", letterSpacing: "3px", textTransform: "uppercase" }}>
                Automate • Deploy • Monitor • Optimize
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                <span style={{ color: "var(--orange)" }}>DevOps</span>{" "}
                <span style={{ color: "var(--foreground)" }}>Engineer</span>
              </h2>
              <p className="mt-2 text-lg md:text-xl font-medium" style={{ color: "var(--muted-foreground)" }}>
                Pallavi Patil
              </p>
              <p className="mt-5 text-sm sm:text-base leading-relaxed max-w-2xl" style={{ color: "var(--muted-foreground)" }}>
                Cloud & DevOps Engineer with{" "}
                <strong style={{ color: "var(--foreground)" }}>2+ years of hands-on experience</strong>{" "}
                designing, deploying, and managing scalable infrastructure on{" "}
                <strong style={{ color: "var(--foreground)" }}>AWS</strong>.
                Skilled in automating deployments with{" "}
                <strong style={{ color: "var(--foreground)" }}>Jenkins, Docker, Kubernetes, and Terraform</strong>,
                provisioning infrastructure as code, and administering Linux systems in production.
              </p>

              <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-2">
                <span className="info-badge"><Briefcase className="h-3.5 w-3.5" style={{ color: "var(--orange)" }} /> 2+ yrs experience</span>
                <span className="info-badge"><GraduationCap className="h-3.5 w-3.5" style={{ color: "var(--orange)" }} /> B.E. CSE • CGPA 8.1</span>
                <span className="info-badge"><MapPin className="h-3.5 w-3.5" style={{ color: "var(--orange)" }} /> India</span>
              </div>

              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
                <a href="#contact" className="btn-primary">
                  <Mail className="h-4 w-4" /> Get in touch
                </a>
                <a href="#projects" className="btn-secondary">
                  <ChevronRight className="h-4 w-4" /> View projects
                </a>
              </div>
            </div>

            {/* Profile avatar area */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div
                  className="h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 rounded-full overflow-hidden"
                  style={{ border: "3px solid var(--border)", padding: "4px" }}
                >
                  <div
                    className="h-full w-full rounded-full flex items-center justify-center overflow-hidden"
                    style={{ background: "var(--secondary)" }}
                  >
                    <img
                      src="/profile.png"
                      alt="Pallavi Patil"
                      className="h-full w-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div
                  className="absolute -bottom-2 -right-2 rounded-full px-3 py-1.5 text-xs font-bold flex items-center gap-1"
                  style={{ background: "var(--card)", border: "1px solid var(--border)", color: "var(--orange)" }}
                >
                  <Award className="h-3.5 w-3.5" /> AWS Certified
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ────────── TOOLS & TECHNOLOGIES (Logo Grid) ────────── */}
        <section id="skills" className="py-12 md:py-16">
          <div className="text-center mb-10">
            <div className="section-line mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: "var(--blue)" }}>
              TOOLS & TECHNOLOGIES
            </h2>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 gap-3 sm:gap-4 mb-16">
            {skills.map((s) => (
              <div key={s.name} className="skill-tile">
                <img src={s.logo} alt={s.name} loading="lazy" />
                <span>{s.name}</span>
              </div>
            ))}
          </div>

          {/* ────────── SKILL BREAKDOWN (Table/Row Layout) ────────── */}
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-1" style={{ color: "var(--foreground)" }}>
              Skill Breakdown
            </h3>
            <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>Detailed areas of expertise</p>
          </div>

          <div
            className="rounded-xl overflow-hidden"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}
          >
            <div className="px-5 py-2 sm:px-6">
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
          </div>
        </section>

        {/* ────────── PROJECTS ────────── */}
        <section id="projects" className="py-12 md:py-16">
          <div className="text-center mb-10">
            <div className="section-line mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: "var(--blue)" }}>
              PROJECTS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((p) => (
              <article key={p.title} className="project-card flex flex-col">
                {/* Project icon header */}
                <div
                  className="h-36 rounded-xl mb-5 flex items-center justify-center"
                  style={{ background: "var(--secondary)", border: "1px solid var(--border)" }}
                >
                  <span className="text-3xl font-black" style={{ color: "var(--orange)", opacity: 0.6 }}>
                    {p.title.split(" ").slice(0, 2).join(" ")}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "var(--foreground)" }}>{p.title}</h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted-foreground)" }}>{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="skill-tag" style={{ fontSize: "11px", padding: "3px 10px" }}>{t}</span>
                  ))}
                </div>
                <div className="mt-5">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary w-full justify-center"
                    style={{ padding: "9px 16px", fontSize: "13px" }}
                  >
                    <Github className="h-4 w-4" /> View on GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ────────── CONTACT ────────── */}
        <section id="contact" className="py-12 md:py-16">
          <div className="text-center mb-10">
            <div className="section-line mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: "var(--blue)" }}>
              GET IN TOUCH
            </h2>
            <p className="mt-3 text-sm" style={{ color: "var(--muted-foreground)" }}>
              Open to Cloud Engineer / DevOps Engineer opportunities. Let's connect!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {/* Email */}
            <div className="contact-card">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="h-10 w-10 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--orange)" }}
                >
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>Email</p>
                  <p className="text-sm font-semibold break-all">{EMAIL}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <a href={`mailto:${EMAIL}`} className="btn-primary flex-1 justify-center" style={{ padding: "8px 14px", fontSize: "12px" }}>
                  <Mail className="h-3.5 w-3.5" /> Mail me
                </a>
                <CopyButton value={EMAIL} label="Email" />
              </div>
            </div>

            {/* Phone */}
            <div className="contact-card">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="h-10 w-10 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--orange)" }}
                >
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>Phone</p>
                  <p className="text-sm font-semibold">{PHONE}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="btn-primary flex-1 justify-center" style={{ padding: "8px 14px", fontSize: "12px" }}>
                  <Phone className="h-3.5 w-3.5" /> Call
                </a>
                <CopyButton value={PHONE} label="Phone" />
              </div>
            </div>

            {/* LinkedIn */}
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="contact-card flex items-center gap-3"
              style={{ textDecoration: "none" }}
            >
              <div
                className="h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--blue)" }}
              >
                <Linkedin className="h-5 w-5 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>LinkedIn</p>
                <p className="text-sm font-semibold truncate">pallavi-patil</p>
              </div>
              <ExternalLink className="h-4 w-4 flex-shrink-0" style={{ color: "var(--muted-foreground)" }} />
            </a>

            {/* GitHub */}
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="contact-card flex items-center gap-3"
              style={{ textDecoration: "none" }}
            >
              <div
                className="h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--secondary)", border: "1px solid var(--border)" }}
              >
                <Github className="h-5 w-5" style={{ color: "var(--foreground)" }} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>GitHub</p>
                <p className="text-sm font-semibold truncate">Pallavipatil1999</p>
              </div>
              <ExternalLink className="h-4 w-4 flex-shrink-0" style={{ color: "var(--muted-foreground)" }} />
            </a>
          </div>
        </section>
      </main>

      <footer style={{ borderTop: "1px solid var(--border)", marginTop: "32px", padding: "24px 0" }}>
        <div className="mx-auto max-w-6xl px-5 text-center text-xs" style={{ color: "var(--muted-foreground)" }}>
          © {new Date().getFullYear()} Pallavi Patil • DevOps Engineer
        </div>
      </footer>
    </div>
  );
}
