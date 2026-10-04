import { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260806_133255_956f653f-5d80-4b06-abd5-0f46c98b60fa.mp4';
const POSTER_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260806_132328_5f9029c8-218f-4489-82b6-29ff2849920e.png';

const links = [
  { label: 'Story', href: '#story' },
  { label: 'Platforms', href: '#platforms' },
  { label: 'Identity', href: '#identity' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const menuRef = useRef(null);
  const menuWasOpen = useRef(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    if (menuRef.current) menuRef.current.inert = !menuOpen;
    if (menuOpen) {
      menuRef.current?.querySelector('a')?.focus();
    } else if (menuWasOpen.current) {
      if (window.innerWidth >= 901) document.querySelector('.nav-desktop a')?.focus();
      else menuButtonRef.current?.focus();
    }
    menuWasOpen.current = menuOpen;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    const closeOnDesktop = () => {
      if (window.innerWidth >= 901) setMenuOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    window.addEventListener('resize', closeOnDesktop);
    return () => {
      document.body.classList.remove('menu-open');
      document.removeEventListener('keydown', closeOnEscape);
      window.removeEventListener('resize', closeOnDesktop);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const handleSubmit = (event) => event.preventDefault();

  return (
    <main className="hero" id="top">
      <div
        className="hero__media"
        style={{ '--poster-url': `url("${POSTER_URL}")` }}
        aria-hidden="true"
      >
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={POSTER_URL}
          tabIndex={-1}
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
      </div>
      <div className="hero__scrim" aria-hidden="true" />

      <header className="nav-bar">
        <a className="wordmark" href="#top" aria-label="ECHOID home">
          ECHOID
        </a>

        <nav className="nav-desktop" aria-label="Main navigation">
          <div className="nav-desktop__links">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <a className="nav-join" href="#join">
            Join up
          </a>
        </nav>

        <button
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobileMenu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
          ref={menuButtonRef}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <section className="hero__body" aria-labelledby="hero-title">
        <div className="panel">
          <span className="voice-chip">[ Voice entry ]</span>
          <h1 id="hero-title">ECHOID</h1>
          <p className="tagline">Your voice ID to the E network.</p>

          <form className="entry-form" id="join" action="#" method="post" noValidate onSubmit={handleSubmit}>
            <label className="visually-hidden" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email"
            />
            <button className="entry-button entry-button--ghost" type="submit">
              Proceed using email
            </button>
            <button className="entry-button entry-button--solid" type="submit">
              Access
            </button>
          </form>

          <a className="invite-link" href="#invite">
            I've got an invite key
          </a>
        </div>
      </section>

      <footer className="legal-footer">
        <p>
          Opening an e.xyz account signals that you accept our{' '}
          <a href="#privacy-notice">Privacy Notice</a> and{' '}
          <a href="#service-contract">Service Contract</a>.
        </p>
      </footer>

      <div
        className={`mobile-menu${menuOpen ? ' is-open' : ''}`}
        id="mobileMenu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!menuOpen}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeMenu();
        }}
        ref={menuRef}
      >
        <nav className="mobile-menu__items" aria-label="Mobile navigation">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              style={{ '--i': index }}
              tabIndex={menuOpen ? 0 : -1}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a
            className="mobile-menu__join"
            href="#join"
            style={{ '--i': 4 }}
            tabIndex={menuOpen ? 0 : -1}
            onClick={closeMenu}
          >
            Join up
          </a>
        </nav>
      </div>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
