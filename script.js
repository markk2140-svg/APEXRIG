(() => {
  "use strict";

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navAnchors = [...document.querySelectorAll(".nav-link")];

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });
    navAnchors.forEach((link) => link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    }));
  }

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  const sections = [...document.querySelectorAll("main section[id]")];
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navAnchors.forEach((link) => {
            const active = link.getAttribute("href") === `#${entry.target.id}`;
            link.classList.toggle("active", active);
          });
        }
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach((section) => sectionObserver.observe(section));
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Optional public GitHub integration. If the API is unavailable or rate-limited,
  // the profile link remains available and the page still works normally.
  const repoContainer = document.getElementById("github-repos");
  async function loadRepos() {
    if (!repoContainer) return;
    try {
      const response = await fetch("https://api.github.com/users/markk2140-svg/repos?sort=updated&per_page=3", {
        headers: { "Accept": "application/vnd.github+json" }
      });
      if (!response.ok) throw new Error("GitHub API unavailable");
      const repos = await response.json();
      if (!Array.isArray(repos) || repos.length === 0) {
        repoContainer.innerHTML = '<p class="muted">No public repositories found yet. Visit GitHub to see updates.</p>';
        return;
      }
      repoContainer.replaceChildren();
      repos.slice(0, 3).forEach((repo) => {
        const link = document.createElement("a");
        link.className = "repo-item";
        link.href = repo.html_url;
        link.target = "_blank";
        link.rel = "noreferrer";
        const name = document.createElement("strong");
        name.textContent = repo.name;
        const details = document.createElement("span");
        details.textContent = `${repo.language || "Project"} · ★ ${repo.stargazers_count} · View repo ↗`;
        link.append(name, details);
        repoContainer.append(link);
      });
    } catch (_) {
      repoContainer.innerHTML = '<p class="muted">Could not load live repositories right now. <a class="text-link" href="https://github.com/markk2140-svg" target="_blank" rel="noreferrer">Open GitHub ↗</a></p>';
    }
  }
  loadRepos();

})();
