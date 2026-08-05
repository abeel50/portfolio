(() => {
  const experience = [
    { title: "Senior Software Engineer", company: "Tkxel, Lahore, Pakistan", dates: "Mar 2024 – Present", bullets: [
      "Spearheaded development of new features on a SaaS platform for enterprise risk and compliance management, streamlining workflows and improving functionality",
      "Applying AWS expertise to optimize cloud architecture and deploy scalable solutions; pursuing AWS certification",
      "Contributing to compliance-workflow and dashboard features for an enterprise cybersecurity risk and compliance platform"
    ]},
    { title: "Software Engineer", company: "Tkxel, Lahore, Pakistan", dates: "Apr 2023 – Feb 2024", bullets: [
      "Reduced application build size by 25% using Angular optimization techniques and resolved 30+ critical bugs, improving system stability",
      "Integrated AWS services (Amplify, S3, Lambda, CloudWatch, DynamoDB) to streamline deployment pipelines and improve system monitoring",
      "Leveraged Datadog to automate front-end test cases and transitioned backend processes to REST APIs, increasing development efficiency"
    ]},
    { title: "Software Engineer", company: "Metadots, Lahore, Pakistan", dates: "Sep 2021 – Mar 2023", bullets: [
      "Integrated third-party APIs (Google Maps, PayPal, Instagram, Facebook), increasing user engagement by 30%",
      "Implemented secure API authentication (OAuth, JWT), ensuring data security across applications",
      "Designed and launched 5 web applications, including e-commerce and social networking platforms, meeting client satisfaction goals"
    ]},
    { title: "Associate Software Engineer", company: "Metadots, Lahore, Pakistan", dates: "Sep 2020 – Aug 2021", bullets: [
      "Developed web applications using MongoDB, Express.js, Angular, and Node.js, reducing server response times by 15%",
      "Designed and implemented scalable server-side logic with seamless database integration",
      "Collaborated with cross-functional teams to resolve complex technical challenges and deliver high-quality software"
    ]}
  ];

  const projects = [
    { name: "Enterprise GRC Platform", tag: "Confidential — Tkxel client", desc: "AI-powered SaaS platform for enterprise cyber risk, compliance, and vendor risk management, supporting 180+ regulatory frameworks (NIST, ISO 27001, SOC 2, PCI DSS). Built automated compliance questionnaires, risk dashboards, and board-level executive reporting on a cloud-native AWS architecture.", stack: "Angular · TypeScript · Node.js · GraphQL · AWS", live: "", repo: "" },
    { name: "Filmpire", tag: "", desc: "Movie discovery application with search and genre-based categorization, built while learning React and Redux; deployed live on Vercel.", stack: "React · Redux · Material UI · REST API", live: "https://filmpire-abeel50.vercel.app", repo: "https://github.com/abeel50/filmpire_abeel50" },
    { name: "Eazy Oz", tag: "", desc: "Platform connecting students with verified migration and education agents for study and travel to Australia.", stack: "Angular · Node.js · Express · MongoDB", live: "", repo: "" },
    { name: "Smart Up", tag: "", desc: "Platform connecting startups with investors, including integrated payment gateway handling.", stack: "Angular · Node.js · Express · MongoDB", live: "", repo: "" }
  ];

  const skills = [
    { abbr: "ng", name: "Angular" }, { abbr: "TS", name: "TypeScript" }, { abbr: "JS", name: "JavaScript" },
    { abbr: "Nd", name: "Node.js" }, { abbr: "Re", name: "React" }, { abbr: "λ", name: "AWS Lambda" },
    { abbr: "S3", name: "AWS S3" }, { abbr: "Dy", name: "DynamoDB" }, { abbr: "Am", name: "Amplify" },
    { abbr: "CW", name: "CloudWatch" }, { abbr: "Mo", name: "MongoDB" }, { abbr: "Pg", name: "PostgreSQL" },
    { abbr: "GQ", name: "GraphQL" }, { abbr: "Ax", name: "REST APIs" }, { abbr: "Ex", name: "Express.js" }
  ];

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }

  function renderExperience() {
    const el = document.getElementById("experience-list");
    el.innerHTML = experience.map((job) => `
      <div class="job">
        <div class="job-head">
          <h3 class="job-title">${escapeHtml(job.title)}</h3>
          <span class="job-dates">${escapeHtml(job.dates)}</span>
        </div>
        <div class="job-company">${escapeHtml(job.company)}</div>
        <ul class="job-bullets">
          ${job.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
        </ul>
      </div>
    `).join("");
  }

  function renderProjects() {
    const el = document.getElementById("projects-list");
    el.innerHTML = projects.map((proj) => `
      <div class="project-card">
        <div>
          <div class="project-head">
            <h3>${escapeHtml(proj.name)}</h3>
            ${proj.tag ? `<span class="project-tag">${escapeHtml(proj.tag)}</span>` : ""}
          </div>
          <p class="project-desc">${escapeHtml(proj.desc)}</p>
          <div class="project-stack">${escapeHtml(proj.stack)}</div>
        </div>
        <div class="project-links">
          ${proj.live ? `<a href="${escapeHtml(proj.live)}" target="_blank" rel="noopener" class="project-link">Live &rarr;</a>` : ""}
          ${proj.repo ? `<a href="${escapeHtml(proj.repo)}" target="_blank" rel="noopener" class="project-link">Code &rarr;</a>` : ""}
        </div>
      </div>
    `).join("");
  }

  function renderSkills() {
    const el = document.getElementById("skills-grid");
    el.innerHTML = skills.map((skill) => `
      <div class="skill-card">
        <div class="skill-abbr">${escapeHtml(skill.abbr)}</div>
        <div class="skill-name">${escapeHtml(skill.name)}</div>
      </div>
    `).join("");
  }

  function setupTheme() {
    const root = document.documentElement;
    const toggle = document.getElementById("theme-toggle");
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    let isDark = stored ? stored === "dark" : prefersDark;

    function apply() {
      root.setAttribute("data-theme", isDark ? "dark" : "light");
      toggle.textContent = isDark ? "☀" : "☽";
    }

    toggle.addEventListener("click", () => {
      isDark = !isDark;
      localStorage.setItem("theme", isDark ? "dark" : "light");
      apply();
    });

    apply();
  }

  function animateTo(el, target, duration, format) {
    const start = performance.now();
    function tick(now) {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const value = Math.round(target * eased);
      el.textContent = format(value);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function setupStats() {
    const statsEl = document.getElementById("stats");
    let played = false;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !played) {
          played = true;
          statsEl.classList.add("visible");
          animateTo(document.getElementById("stat-years"), 5, 700, (v) => `${v}+`);
          animateTo(document.getElementById("stat-build"), 25, 900, (v) => `${v}%`);
          animateTo(document.getElementById("stat-engagement"), 30, 900, (v) => `${v}%+`);
          animateTo(document.getElementById("stat-apps"), 5, 700, (v) => `${v}`);
          io.disconnect();
        }
      });
    }, { threshold: 0.2 });
    io.observe(statsEl);
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupTheme();
    renderExperience();
    renderProjects();
    renderSkills();
    setupStats();
  });
})();
