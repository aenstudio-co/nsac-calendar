// Tailwind theme setup (must run before Tailwind CDN parses the page)
tailwind.config = {
  theme: {
    extend: {
      colors: {
        ink: '#14140F',
        cream: '#FAFAF6',
        amber: '#F6DFAE',
        mint: '#C9E4DC',
        lavender: '#E3DDF7',
        muted: '#78766C',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
};

// Fill the page from CONFIG once the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('greeting').textContent = `Hello, ${CONFIG.teamName}`;
  document.getElementById('projectName').textContent = CONFIG.projectName;
  document.getElementById('repoCard').href = CONFIG.repoUrl;
  document.getElementById('calFrame').src = CONFIG.calendarEmbed;

  const list = document.getElementById('docsList');
  CONFIG.docs.forEach(doc => {
    const a = document.createElement('a');
    a.href = doc.url;
    a.target = '_blank';
    a.rel = 'noopener';
    a.className = 'flex items-center justify-between px-6 py-4 hover:bg-lavender/40 transition group';
    a.innerHTML = `
      <div>
        <p class="font-medium">${doc.label}</p>
        <p class="text-sm text-muted">${doc.desc}</p>
      </div>
      <span class="text-sm text-ink/50 group-hover:text-ink transition">Navigate to</span>
    `;
    list.appendChild(a);
  });
});