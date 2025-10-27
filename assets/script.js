(() => {
	const root = document.documentElement;
	const themeToggle = document.getElementById('themeToggle');
	const nav = document.getElementById('nav');
	const contactForm = document.getElementById('contactForm');
	const formMessage = document.getElementById('formMessage');

	// Init theme from localStorage or prefers-color-scheme
	const stored = localStorage.getItem('theme');
	if(stored) root.setAttribute('data-theme', stored);
	else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) root.setAttribute('data-theme','dark');

	themeToggle?.addEventListener('click', () => {
		const active = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
		root.setAttribute('data-theme', active === 'dark' ? 'dark' : 'light');
		localStorage.setItem('theme', active === 'dark' ? 'dark' : 'light');
	});

	contactForm?.addEventListener('submit', (e) => {
		e.preventDefault();
		formMessage.hidden = false;
		formMessage.textContent = 'Thanks — your message was received (form is static in this template).';
		contactForm.reset();
	});

	// current year
	const year = document.getElementById('year');
	if(year) year.textContent = new Date().getFullYear();
})();
