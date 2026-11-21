import { useState } from "react";
import {
  Mail, Phone, Github, Linkedin, Download, Copy, Check,
  ExternalLink, MapPin, Award, Briefcase, GraduationCap,
  Menu, X, ChevronRight, Server, Cloud, Shield, Activity,
  FileText, CheckCircle2, TrendingDown, Clock, Layers, Database,
  Terminal, Sparkles
} from "lucide-react";
import { Toaster, toast } from "sonner";

const EMAIL = "pallavikpatil99@gmail.com";
const PHONE = "+91 7972877554";
const LOCATION = "Pune 411033, India";
const LINKEDIN = "https://www.linkedin.com/in/pallavi-patil-1b5786212";
const GITHUB = "https://github.com/Pallavipatil1999/pallavipatil1999";
const RESUME_FILENAME = "Pallavi_Patil_Cloud_Engineer_New.pdf";
const RESUME_URL = `/${RESUME_FILENAME}`;

const handleDownloadResume = (e?: React.MouseEvent) => {
  if (e) {
    // allow default link download behavior
  }
  toast.success("Downloading Pallavi Patil's Resume (PDF)...");
  const link = document.createElement("a");
  link.href = RESUME_URL;
  link.download = RESUME_FILENAME;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const skills = [
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
  { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  { name: "GitHub Actions", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Ansible", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" },
  { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Prometheus", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
  { name: "Grafana", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Bash", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
  { name: "SonarQube", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Helm", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg" },
];

const skillCategories = [
  {
    title: "Cloud Platforms",
    icon: Cloud,
    items: [
      "AWS (Amazon Web Services)", "EC2", "S3", "RDS", "VPC", "IAM",
      "CloudWatch", "CloudTrail", "Auto Scaling", "ELB (ALB, NLB)",
      "EFS", "Route 53", "CloudFront", "ECR", "EKS", "Secrets Manager", "Kinesis"
    ],
  },
  {
    title: "Infrastructure as Code",
    icon: Layers,
    items: ["Terraform (Remote S3 State)", "AWS CloudFormation"],
  },
  {
    title: "CI/CD & Release",
    icon: Activity,
    items: ["Jenkins (Master-Slave)", "GitHub Actions", "Maven", "SonarQube", "Blue-Green Deployments", "Rolling Updates"],
  },
  {
    title: "Containers & Orchestration",
    icon: Server,
    items: ["Docker", "Kubernetes", "EKS", "ECR", "Horizontal Pod Autoscaler (HPA)", "Helm Charts"],
  },
  {
    title: "Monitoring & Observability",
    icon: Activity,
    items: ["Amazon CloudWatch", "Prometheus", "Grafana Dashboards", "CloudTrail", "Incident Root Cause Analysis (RCA)"],
  },
  {
    title: "Configuration Management",
    icon: Terminal,
    items: ["Ansible Playbooks & Roles"],
  },
  {
    title: "Version Control",
    icon: Github,
    items: ["Git", "GitHub Branching Strategies"],
  },
  {
    title: "Scripting & Automation",
    icon: Terminal,
    items: ["Python", "Boto3 (AWS SDK)", "Shell Scripting (Bash)", "Cron Automation"],
  },
  {
    title: "Networking & Security",
    icon: Shield,
    items: ["VPC", "Subnets (Public/Private)", "Route Tables", "Security Groups", "Internet Gateway", "NAT Gateway", "Route 53", "CloudFront", "Reverse Proxy", "Least Privilege IAM"],
  },
  {
    title: "Databases & Storage",
    icon: Database,
    items: ["Amazon RDS", "DynamoDB", "MySQL", "Elasticsearch", "Amazon S3", "Amazon EFS"],
  },
];

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    code: "Associate",
    badge: "AWS Certified",
    isAws: true,
  },
  {
    title: "Aviatrix Multicloud Network Associate",
    issuer: "Aviatrix Systems",
    code: "MCNA",
    badge: "Multicloud Networking",
    isAws: false,
  },
  {
    title: "Oracle Agentic AI Certified",
    issuer: "Oracle University",
    code: "Agentic AI",
    badge: "Artificial Intelligence",
    isAws: false,
  },
  {
    title: "SQL (Advanced) Certificate",
    issuer: "HackerRank / Verified",
    code: "Advanced SQL",
    badge: "Database & Queries",
    isAws: false,
  },
  {
    title: "REST API (Intermediate) Certificate",
    issuer: "HackerRank / Verified",
    code: "REST APIs",
    badge: "API Architecture",
    isAws: false,
  },
];

const projects = [
  {
    tag: "AWS & High Availability",
    title: "Highly Available 3-Tier Web Architecture on AWS",
    description:
      "Architected and deployed an enterprise-grade 3-tier architecture on AWS utilizing EC2 instances, Application Load Balancers (ALB), Auto Scaling Groups, and Multi-AZ RDS across isolated Availability Zones. Built custom VPC network topology with public/private subnets, NAT Gateways, and security groups to guarantee 99.99% uptime and zero-downtime rolling updates.",
    tech: ["AWS", "VPC", "EC2", "ALB", "Auto Scaling", "Multi-AZ RDS", "CloudWatch"],
    github: GITHUB,
  },
  {
    tag: "DevOps & Automation",
    title: "End-to-End Automated CI/CD Pipeline",
    description:
      "Engineered automated CI/CD pipeline using Jenkins master-slave distributed architecture and GitHub Actions. Integrated Maven builds, SonarQube automated code quality analysis, Docker image containerization published to AWS ECR, and automated infrastructure provisioning via Terraform with state locked in S3/DynamoDB.",
    tech: ["Jenkins", "Terraform", "Docker", "Kubernetes", "SonarQube", "AWS ECR", "GitHub"],
    github: GITHUB,
  },
  {
    tag: "Observability & SRE",
    title: "Cloud Infrastructure Observability Stack",
    description:
      "Designed proactive monitoring ecosystem implementing Prometheus server, node exporters, and custom Grafana dashboards coupled with CloudWatch Alarms. Configured automated alerting and automated remediation runbooks with Python Boto3 scripts to drastically minimize Mean Time To Resolution (MTTR).",
    tech: ["Prometheus", "Grafana", "CloudWatch", "Python", "Boto3", "Bash", "Linux"],
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
      title={`Copy ${label}`}
    >
      {copied ? <Check className="h-4 w-4" style={{ color: "var(--orange)" }} /> : <Copy className="h-4 w-4" />}
    </button>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#certifications", label: "Certifications" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="bg-ambient" />
      <Toaster theme="dark" position="top-center" richColors />

      {/* ────────── NAVBAR ────────── */}
      <header className="navbar">
        <div className="navbar-inner">
          <a href="#home" className="navbar-brand">
            <img src="/profile.png" alt="Pallavi Patil" className="brand-avatar" />
            <div className="min-w-0">
              <h1 className="navbar-name">Pallavi Patil</h1>
              <p className="navbar-subtitle">AWS Cloud • DevOps Engineer</p>
            </div>
          </a>

          <nav className="nav-links">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="nav-icon-link"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="nav-icon-link"
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>

            {/* Direct Resume Download Link */}
            <a
              href={RESUME_URL}
              download={RESUME_FILENAME}
              onClick={() => toast.success("Downloading Pallavi Patil's Resume (PDF)...")}
              className="btn-primary btn-sm"
              title="Download PDF Resume"
              id="nav-download-resume"
            >
              <Download className="h-4 w-4" />
              <span>Resume</span>
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="mobile-menu-btn"
              aria-label="Open menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="mobile-nav">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="mobile-nav-link"
              >
                {l.label}
              </a>
            ))}
            <div style={{ paddingTop: "12px" }}>
              <a
                href={RESUME_URL}
                download={RESUME_FILENAME}
                onClick={() => {
                  setMenuOpen(false);
                  toast.success("Downloading Pallavi Patil's Resume (PDF)...");
                }}
                className="btn-primary btn-sm btn-full"
              >
                <Download className="h-4 w-4" /> Download Resume (PDF)
              </a>
            </div>
          </nav>
        )}
      </header>

      <main className="main-content">
        {/* ────────── HERO SECTION ────────── */}
        <section id="home" className="hero-section">
          <div className="hero-grid">
            <div className="hero-text">
              <div className="hero-badge-pill">
                <span className="pulse-dot" />
                Available for Cloud & DevOps Roles
              </div>

              <h2 className="hero-heading">
                <span>AWS Cloud</span>{" "}
                <span style={{ color: "var(--orange-light)" }}>& DevOps</span>{" "}
                <span style={{ color: "var(--blue)" }}>Engineer</span>
              </h2>

              <p className="hero-name-label">Pallavi Patil • Pune, India</p>

              <p className="hero-description">
                AWS Cloud Engineer / DevOps Engineer with{" "}
                <strong style={{ color: "#fff" }}>2+ years of hands-on experience</strong> in cloud
                infrastructure, CI/CD automation, Infrastructure as Code, containerization,
                Kubernetes, monitoring, and Linux administration. Proven track record of designing
                automated AWS environments with{" "}
                <strong style={{ color: "#fff" }}>Terraform & CloudFormation</strong>, scaling
                deployments on <strong style={{ color: "#fff" }}>Docker & Kubernetes</strong>, and
                reducing AWS costs by <strong style={{ color: "var(--orange-light)" }}>20%</strong>.
              </p>

              <div className="hero-badges">
                <span className="info-badge">
                  <Briefcase className="h-3.5 w-3.5 text-orange" /> 3+ Years Experience
                </span>
                <span className="info-badge">
                  <GraduationCap className="h-3.5 w-3.5 text-orange" /> B.E. CSE • CGPA 8.18
                </span>
                <span className="info-badge">
                  <MapPin className="h-3.5 w-3.5 text-orange" /> Pune 411033, India
                </span>
                <span className="info-badge">
                  <Award className="h-3.5 w-3.5 text-blue" /> 5 Certifications
                </span>
              </div>

              <div className="hero-actions">
                <a
                  href={RESUME_URL}
                  download={RESUME_FILENAME}
                  onClick={() => toast.success("Downloading Pallavi Patil's Resume (PDF)...")}
                  className="btn-primary btn-lg"
                  id="hero-download-resume-btn"
                >
                  <Download className="h-5 w-5" />
                  <span>Download Resume (PDF)</span>
                </a>
                <a href="#experience" className="btn-secondary btn-lg">
                  <Briefcase className="h-4 w-4" /> View Experience
                </a>
                <a href="#contact" className="btn-secondary btn-lg">
                  <Mail className="h-4 w-4" /> Get In Touch
                </a>
              </div>
            </div>

            <div className="hero-avatar-wrap">
              <div className="hero-avatar-ring">
                <div className="hero-avatar-inner">
                  <img
                    src="/profile.png"
                    alt="Pallavi Patil - AWS Cloud & DevOps Engineer"
                    className="hero-avatar-img"
                  />
                </div>
              </div>
              <div className="hero-avatar-badge">
                <Award className="h-4 w-4" /> AWS Certified
              </div>
            </div>
          </div>

          {/* ────────── METRICS ROW ────────── */}
          <div className="metrics-row">
            <div className="metric-item">
              <div className="metric-val">3+ Yrs</div>
              <div className="metric-label">Hands-on Experience</div>
              <div className="metric-sub">Cloud & DevOps Engineering</div>
            </div>
            <div className="metric-item">
              <div className="metric-val">30%</div>
              <div className="metric-label">Deployment Speedup</div>
              <div className="metric-sub">End-to-End CI/CD Automation</div>
            </div>
            <div className="metric-item">
              <div className="metric-val">20%</div>
              <div className="metric-label">AWS Cost Reduction</div>
              <div className="metric-sub">Right-Sizing & Auto Scaling</div>
            </div>
            <div className="metric-item">
              <div className="metric-val">5</div>
              <div className="metric-label">Industry Certifications</div>
              <div className="metric-sub">AWS, Aviatrix, Oracle & more</div>
            </div>
          </div>
        </section>

        {/* ────────── EXPERIENCE SECTION ────────── */}
        <section id="experience" className="section">
          <div className="section-header">
            <div className="section-line" />
            <h2 className="section-title">WORK EXPERIENCE</h2>
            <p className="section-subtitle">
              Professional journey in cloud engineering, CI/CD automation, container orchestration,
              and Linux systems.
            </p>
          </div>

          <div className="experience-timeline">
            {/* Role 1: Cloud Engineer */}
            <article className="exp-card">
              <div className="exp-header">
                <div>
                  <h3 className="exp-role-title">Cloud Engineer</h3>
                  <div className="exp-company">
                    <Briefcase className="h-4 w-4" />
                    Pearlstone Technology
                  </div>
                </div>
                <div className="exp-meta">
                  <span className="exp-badge-date">
                    <Clock className="h-3.5 w-3.5" /> Jul 2024 – Present
                  </span>
                  <span className="exp-badge-location">
                    <MapPin className="h-3.5 w-3.5" /> Pune, India
                  </span>
                </div>
              </div>

              <div className="exp-body">
                <div className="domain-grid">
                  {/* CI/CD & Release Engineering */}
                  <div className="domain-card">
                    <div className="domain-title-bar">
                      <div className="domain-icon-wrap">
                        <Activity className="h-4 w-4" />
                      </div>
                      <h4 className="domain-title">CI/CD & Release Engineering</h4>
                    </div>
                    <ul className="bullet-list">
                      <li className="bullet-item">
                        <span className="bullet-dot" />
                        <span>
                          Designed and implemented end-to-end CI/CD pipelines using{" "}
                          <strong>Jenkins and GitHub</strong>, automating build, test, and
                          deployment workflows and <strong>reducing deployment time by 30%</strong>.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <span className="bullet-dot" />
                        <span>
                          Configured and maintained a <strong>Jenkins master-slave architecture</strong>{" "}
                          to distribute workloads, improving pipeline performance and build execution time.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <span className="bullet-dot" />
                        <span>
                          Integrated <strong>SonarQube quality checks</strong> and <strong>Maven builds</strong> into pipelines to enforce strict code quality gates and improve release reliability.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <span className="bullet-dot" />
                        <span>
                          Managed Git repositories and branching strategies, enabling efficient version control and seamless team collaboration.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <span className="bullet-dot" />
                        <span>
                          Implemented <strong>blue-green and rolling deployment strategies</strong> to achieve near-zero-downtime releases.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Infrastructure as Code & Containers */}
                  <div className="domain-card">
                    <div className="domain-title-bar">
                      <div className="domain-icon-wrap">
                        <Layers className="h-4 w-4" />
                      </div>
                      <h4 className="domain-title">Infrastructure as Code & Containers</h4>
                    </div>
                    <ul className="bullet-list">
                      <li className="bullet-item">
                        <span className="bullet-dot" />
                        <span>
                          Automated infrastructure provisioning with <strong>Terraform</strong> (remote state on S3 backend with locking) and <strong>CloudFormation</strong>, delivering scalable, repeatable environments and eliminating manual effort.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <span className="bullet-dot" />
                        <span>
                          Containerized applications with <strong>Docker</strong> and deployed them on <strong>Kubernetes (ECR/EKS)</strong>, managing Deployments, Services, <strong>Helm charts</strong>, and <strong>Horizontal Pod Autoscaling (HPA)</strong>.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <span className="bullet-dot" />
                        <span>
                          Employed <strong>Ansible</strong> for configuration management and configuration drift prevention to keep server environments consistent across all environments.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* AWS Cloud Infrastructure & Security */}
                  <div className="domain-card">
                    <div className="domain-title-bar">
                      <div className="domain-icon-wrap">
                        <Shield className="h-4 w-4" />
                      </div>
                      <h4 className="domain-title">AWS Cloud Infrastructure & Security</h4>
                    </div>
                    <ul className="bullet-list">
                      <li className="bullet-item">
                        <span className="bullet-dot" />
                        <span>
                          <strong>Reduced AWS cloud costs by 20%</strong> through EC2 right-sizing, unused resource termination, and Auto Scaling optimization.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <span className="bullet-dot" />
                        <span>
                          Configured and managed <strong>VPC networking</strong>, including subnets, route tables, internet gateways, NAT gateways, and security groups to build isolated, high-security environments.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <span className="bullet-dot" />
                        <span>
                          Enforced <strong>IAM roles, policies, and permission boundaries</strong> following least-privilege principles to secure cross-service communication.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <span className="bullet-dot" />
                        <span>
                          Migrated application databases to <strong>Amazon RDS</strong>, enhancing database availability, automated failover, and reducing operational overhead.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <span className="bullet-dot" />
                        <span>
                          Deployed and delivered high-traffic applications using <strong>S3, CloudFront CDN, and Route 53</strong>, ensuring low latency and global distribution.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Monitoring, Automation & Operations */}
                  <div className="domain-card">
                    <div className="domain-title-bar">
                      <div className="domain-icon-wrap">
                        <Activity className="h-4 w-4" />
                      </div>
                      <h4 className="domain-title">Monitoring, Automation & Operations</h4>
                    </div>
                    <ul className="bullet-list">
                      <li className="bullet-item">
                        <span className="bullet-dot" />
                        <span>
                          Implemented comprehensive observability with <strong>Prometheus & Grafana dashboards</strong>, plus <strong>CloudWatch logs and alarms</strong>, cutting incident response times significantly.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <span className="bullet-dot" />
                        <span>
                          Participated in incident handling and <strong>Root Cause Analysis (RCA)</strong>, identifying critical bottlenecks and implementing permanent fixes to enhance system uptime.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <span className="bullet-dot" />
                        <span>
                          Automated routine operational tasks using <strong>Python (Boto3 SDK)</strong> and <strong>Shell scripting</strong>, improving operational efficiency.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <span className="bullet-dot" />
                        <span>
                          Created and maintained comprehensive <strong>deployment runbooks and technical architecture documentation</strong> for accelerated troubleshooting.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>

            {/* Role 2: Cloud/Linux Intern */}
            <article className="exp-card">
              <div className="exp-header">
                <div>
                  <h3 className="exp-role-title">Cloud / Linux Intern</h3>
                  <div className="exp-company">
                    <Briefcase className="h-4 w-4" />
                    Pearlstone Technology
                  </div>
                </div>
                <div className="exp-meta">
                  <span className="exp-badge-date">
                    <Clock className="h-3.5 w-3.5" /> Jan 2024 – Jul 2024
                  </span>
                  <span className="exp-badge-location">
                    <MapPin className="h-3.5 w-3.5" /> Pune, India
                  </span>
                </div>
              </div>

              <div className="exp-body">
                <div className="domain-card">
                  <div className="domain-title-bar">
                    <div className="domain-icon-wrap">
                      <Terminal className="h-4 w-4" />
                    </div>
                    <h4 className="domain-title">Systems & Server Administration Highlights</h4>
                  </div>
                  <ul className="bullet-list">
                    <li className="bullet-item">
                      <span className="bullet-dot" />
                      <span>
                        Performed <strong>Linux server administration</strong>, including kernel updates, security patching, and package management across production environments.
                      </span>
                    </li>
                    <li className="bullet-item">
                      <span className="bullet-dot" />
                      <span>
                        Managed SSH access, user permissions, credentials, and scheduled/maintained <strong>Cron jobs</strong> for routine automated tasks.
                      </span>
                    </li>
                    <li className="bullet-item">
                      <span className="bullet-dot" />
                      <span>
                        Analyzed Linux system logs (syslog, journalctl) to troubleshoot server and application issues quickly.
                      </span>
                    </li>
                    <li className="bullet-item">
                      <span className="bullet-dot" />
                      <span>
                        Automated server backup and recovery tasks using <strong>tar and rsync</strong> utilities.
                      </span>
                    </li>
                    <li className="bullet-item">
                      <span className="bullet-dot" />
                      <span>
                        Assisted senior engineers with network configuration, firewall rules, and Linux server hardening.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ────────── RESUME CTA BANNER ────────── */}
        <div className="resume-cta-banner">
          <div className="resume-cta-text">
            <h3>Download Complete Resume</h3>
            <p>
              Get the full, official PDF resume with verified project metrics, AWS architectural
              experience, and technical qualifications.
            </p>
          </div>
          <div className="resume-cta-actions">
            <a
              href={RESUME_URL}
              download={RESUME_FILENAME}
              onClick={() => toast.success("Downloading Pallavi Patil's Resume (PDF)...")}
              className="btn-primary btn-lg"
              id="cta-download-resume-btn"
            >
              <Download className="h-5 w-5" />
              <span>Download PDF Resume</span>
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary btn-lg"
              title="Open Resume in new tab"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Preview PDF</span>
            </a>
          </div>
        </div>

        {/* ────────── TECHNICAL SKILLS ────────── */}
        <section id="skills" className="section">
          <div className="section-header">
            <div className="section-line" />
            <h2 className="section-title">TECHNICAL SKILLS</h2>
            <p className="section-subtitle">
              Comprehensive toolkit spanning Cloud, DevOps, CI/CD, Containerization, IaC, and
              Observability.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((s) => (
              <div key={s.name} className="skill-tile">
                <img src={s.logo} alt={s.name} loading="lazy" />
                <span>{s.name}</span>
              </div>
            ))}
          </div>

          {/* Skill Breakdown by Category */}
          <div className="breakdown-card">
            {skillCategories.map((cat) => {
              const IconComp = cat.icon;
              return (
                <div key={cat.title} className="category-row">
                  <div className="category-label">
                    <IconComp className="h-4 w-4" />
                    <span>{cat.title}</span>
                  </div>
                  <div className="category-tags">
                    {cat.items.map((item) => (
                      <span key={item} className="skill-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ────────── CERTIFICATIONS ────────── */}
        <section id="certifications" className="section">
          <div className="section-header">
            <div className="section-line" />
            <h2 className="section-title">CERTIFICATIONS</h2>
            <p className="section-subtitle">
              Verified industry credentials in cloud architecture, networking, AI, and systems.
            </p>
          </div>

          <div className="certs-grid">
            {certifications.map((cert) => (
              <div key={cert.title} className="cert-card">
                <div>
                  <div className="cert-header">
                    <div className={`cert-icon ${cert.isAws ? "cert-aws" : ""}`}>
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="cert-title">{cert.title}</h3>
                      <p className="cert-issuer">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
                <div className="cert-footer">
                  <span className="info-badge" style={{ padding: "4px 10px", fontSize: "11.5px" }}>
                    {cert.badge}
                  </span>
                  <span className="cert-status-badge">
                    <CheckCircle2 className="h-4 w-4" /> Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ────────── PROJECTS ────────── */}
        <section id="projects" className="section">
          <div className="section-header">
            <div className="section-line" />
            <h2 className="section-title">FEATURED PROJECTS</h2>
            <p className="section-subtitle">
              Real-world implementations of cloud architectures, CI/CD automation, and monitoring stacks.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((p) => (
              <article key={p.title} className="project-card">
                <span className="project-badge-top">
                  <Sparkles className="h-3.5 w-3.5" /> {p.tag}
                </span>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span key={t} className="skill-tag skill-tag-sm">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary btn-full"
                >
                  <Github className="h-4 w-4" /> View Project Code on GitHub
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* ────────── EDUCATION ────────── */}
        <section id="education" className="section">
          <div className="section-header">
            <div className="section-line" />
            <h2 className="section-title">EDUCATION</h2>
          </div>

          <div className="edu-card">
            <div className="edu-left">
              <div className="edu-icon-wrap">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="edu-title">Bachelor of Engineering (B.E.)</h3>
                <p className="edu-details" style={{ color: "var(--foreground)", fontWeight: 500 }}>
                  Computer Science & Engineering
                </p>
                <p className="edu-details">
                  Core coursework: Cloud Computing, Distributed Systems, Computer Networks, Operating Systems, Database Management.
                </p>
              </div>
            </div>
            <div className="edu-right">
              <span className="info-badge" style={{ borderColor: "rgba(255, 119, 0, 0.4)", color: "var(--orange-light)" }}>
                CGPA: 8.18 / 10.0
              </span>
              <span className="info-badge">
                <Clock className="h-3.5 w-3.5" /> 2017 – 2021
              </span>
            </div>
          </div>
        </section>

        {/* ────────── CONTACT ────────── */}
        <section id="contact" className="section">
          <div className="section-header">
            <div className="section-line" />
            <h2 className="section-title">GET IN TOUCH</h2>
            <p className="section-subtitle">
              Currently open to AWS Cloud Engineer and DevOps Engineer opportunities. Let's discuss
              how I can contribute to your team.
            </p>
          </div>

          <div className="contact-grid">
            {/* Email */}
            <div className="contact-card">
              <div className="contact-card-header">
                <div className="contact-icon bg-orange">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="contact-label">Email Address</p>
                  <p className="contact-value">{EMAIL}</p>
                </div>
              </div>
              <div className="contact-card-actions">
                <a href={`mailto:${EMAIL}`} className="btn-primary btn-sm btn-flex">
                  <Mail className="h-3.5 w-3.5" /> Send Email
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
                  <p className="contact-label">Phone & WhatsApp</p>
                  <p className="contact-value">{PHONE}</p>
                </div>
              </div>
              <div className="contact-card-actions">
                <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="btn-primary btn-sm btn-flex">
                  <Phone className="h-3.5 w-3.5" /> Call Directly
                </a>
                <CopyButton value={PHONE} label="Phone number" />
              </div>
            </div>

            {/* LinkedIn */}
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="contact-card contact-card-link"
            >
              <div className="contact-icon" style={{ background: "#0a66c2" }}>
                <Linkedin className="h-5 w-5 text-white" />
              </div>
              <div className="contact-link-text">
                <p className="contact-label">LinkedIn Profile</p>
                <p className="contact-value">in/pallavi-patil-1b5786212</p>
              </div>
              <ExternalLink className="h-4 w-4" style={{ color: "var(--muted-foreground)" }} />
            </a>

            {/* GitHub */}
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="contact-card contact-card-link"
            >
              <div
                className="contact-icon"
                style={{ background: "var(--secondary)", border: "1px solid var(--border)" }}
              >
                <Github className="h-5 w-5" style={{ color: "var(--foreground)" }} />
              </div>
              <div className="contact-link-text">
                <p className="contact-label">GitHub Profile</p>
                <p className="contact-value">Pallavipatil1999</p>
              </div>
              <ExternalLink className="h-4 w-4" style={{ color: "var(--muted-foreground)" }} />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          © {new Date().getFullYear()} <strong>Pallavi Patil</strong> • AWS Cloud Engineer & DevOps Engineer • Pune, India
        </div>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <a
            href={RESUME_URL}
            download={RESUME_FILENAME}
            onClick={() => toast.success("Downloading Pallavi Patil's Resume (PDF)...")}
            style={{ color: "var(--orange-light)", textDecoration: "none", fontWeight: 600 }}
          >
            Download Resume (PDF)
          </a>
          <span>•</span>
          <a href="#home" style={{ color: "var(--muted-foreground)", textDecoration: "none" }}>
            Back to Top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
