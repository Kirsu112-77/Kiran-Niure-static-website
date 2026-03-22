class NavbarComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header class="navbar">
                <div class="nav-container">
                    <a href="index.html" class="logo">Kiran<span>Niure</span></a>
                    <button class="mobile-toggle" aria-label="Toggle navigation" aria-expanded="false">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </button>
                    <nav class="nav-links">
                        <ul role="list">
                            <li><a href="index.html" class="nav-item">Home</a></li>
                            <li><a href="about.html" class="nav-item">About & Skills</a></li>
                            <li><a href="contact.html" class="nav-item">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        `;

        // Active state logic
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const navItems = this.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            if (item.getAttribute('href') === currentPath) {
                item.classList.add('active');
                item.setAttribute('aria-current', 'page');
            }
        });

        // Mobile menu toggle
        const toggle = this.querySelector('.mobile-toggle');
        const nav = this.querySelector('.nav-links');
        
        toggle.addEventListener('click', () => {
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', !isExpanded);
            nav.classList.toggle('nav-links-open');
            toggle.classList.toggle('is-active');
        });
    }
}

class FooterComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer class="footer">
                <div class="footer-container">
                    <div class="footer-info">
                        <h3>Kiran Niure</h3>
                        <p>IT Student specializing in System Admin, Server Management & Linux</p>
                    </div>
                    <div class="footer-socials">
                        <a href="#" aria-label="LinkedIn" class="social-link">LinkedIn</a>
                        <a href="#" aria-label="GitHub" class="social-link">GitHub</a>
                        <a href="mailto:contact@example.com" aria-label="Email" class="social-link">Email</a>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; ${new Date().getFullYear()} Kiran Niure. All Rights Reserved.</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('site-navbar', NavbarComponent);
customElements.define('site-footer', FooterComponent);
