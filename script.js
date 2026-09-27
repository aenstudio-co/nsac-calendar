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
    const isAvailable = doc.available !== false;
    const el = document.createElement(isAvailable ? 'a' : 'div');
    if (isAvailable) {
      el.href = doc.url;
      el.target = '_blank';
      el.rel = 'noopener';
    }
    el.className = isAvailable
      ? 'flex items-center justify-between px-6 py-4 hover:bg-lavender/40 transition group'
      : 'flex items-center justify-between px-6 py-4 opacity-50 cursor-not-allowed';
    el.innerHTML = `
      <div>
        <p class="font-medium">${doc.label}</p>
        <p class="text-sm text-muted">${doc.desc}</p>
      </div>
      <span class="text-sm text-ink/50 ${isAvailable ? 'group-hover:text-ink transition' : ''}">${isAvailable ? 'Link' : 'Coming soon'}</span>
    `;
    list.appendChild(el);
  });
});