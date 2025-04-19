document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar-toc");
    if (!sidebar) return;
  
    const headers = document.querySelectorAll("h2, h3");
    headers.forEach(header => {
      if (!header.id) header.id = header.textContent.toLowerCase().replace(/\s+/g, "-");
  
      const link = document.createElement("a");
      link.textContent = header.textContent;
      link.href = `#${header.id}`;
      link.classList.add(header.tagName.toLowerCase()); // Add class for styling
      sidebar.appendChild(link);
    });
  
    // Highlight active section
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY + 100;
      headers.forEach(header => {
        const link = sidebar.querySelector(`a[href="#${header.id}"]`);
        if (header.offsetTop <= scrollPos) {
          sidebar.querySelectorAll("a").forEach(a => a.classList.remove("active"));
          link.classList.add("active");
        }
      });
    });
  });
  