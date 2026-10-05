import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ChevronRight, Menu, Search, X } from 'lucide-react'
import { AppleButton, AppleLogo, LogoMark, SectionEyebrow } from './components/Brand'
import { InboxMockup } from './components/InboxMockup'
import { PricingSection } from './components/PricingSection'

const navLinks = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#stories' },
  { label: 'Documentation', href: '#inbox' },
  { label: 'Careers', href: '#join' },
]

const macMenuItems = ['File', 'Edit', 'View', 'Go', 'Window', 'Help']

const logos = ['Linear', 'Vercel', 'Figma', 'Stripe', 'Ramp', 'Notion', 'Loom', 'Arc']

const testimonials = [
  {
    quote: 'Aura gave our leadership team four hours of their week back. It reads like email from the future.',
    name: 'Parker Wilf',
    role: 'Group Product Manager',
    company: 'MERCURY',
  },
  {
    quote: "The command palette alone has changed how I process messages. I can't imagine going back to a traditional client.",
    name: 'Andrew von Rosenbach',
    role: 'Senior Engineering Program Manager',
    company: 'COHERE',
  },
  {
    quote: 'Triage that actually understands context. Our team stopped dreading Monday morning inboxes.',
    name: 'Mathies Christensen',
    role: 'Engineering Manager',
    company: 'LUNAR',
  },
]

const triageGroups = [
  { label: 'Priority', count: 4, color: '#ffffff', items: ['Sophia Chen — Q3 review', 'David Lim — contract signoff'] },
  { label: 'Follow-up', count: 7, color: '#e5e5e5', items: ['Marcus — design review', 'Figma — comment thread'] },
  { label: 'Updates', count: 18, color: '#a3a3a3', items: ['Vercel — deploy ready', 'GitHub — PR #482 merged'] },
  { label: 'Archived', count: 13, color: '#525252', items: ['Stripe payout · Newsletter · Receipts'] },
]

const gradientStyle = {
  backgroundImage: 'linear-gradient(to right, #091020 0%, #0B2551 12.5%, #A4F4FD 32.5%, #00d2ff 50%, #0B2551 67.5%, #091020 87.5%, #091020 100%)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
  filter: 'url(#c3-noise)',
} as const

function scrollToHash(hash: string) {
  document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [yearly, setYearly] = useState(false)
  const [notice, setNotice] = useState('')
  const shouldReduceMotion = useReducedMotion()

  const announce = (message: string) => {
    setNotice(message)
    window.setTimeout(() => setNotice(''), 4000)
  }

  const downloadAura = () => announce('Aura for macOS is coming soon.')

  const handleNav = (hash: string) => {
    setMobileMenuOpen(false)
    scrollToHash(hash)
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0c0c0c] font-sans text-white selection:bg-brand/30">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover pointer-events-none"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4"
        />
        <div className="absolute inset-0 bg-[#0c0c0c]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(8,43,83,0.34),transparent_38%),linear-gradient(to_bottom,rgba(12,12,12,0.25),rgba(12,12,12,0.86)_76%,#0c0c0c)]" />
      </div>
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-6 w-px bg-white/10 z-[5]" />
      <div className="hidden md:block pointer-events-none fixed inset-y-0 right-6 w-px bg-white/10 z-[5]" />
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <filter id="c3-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0" />
          <feComposite in2="SourceGraphic" operator="in" result="noise" />
          <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
        </filter>
      </svg>

      <div className="relative z-10">
        <motion.header
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: 'easeOut' }}
          className="relative flex w-full items-center justify-between px-6 py-6"
        >
          <a href="#top" aria-label="Aura home" className="text-white transition-opacity hover:opacity-75" onClick={(event) => { event.preventDefault(); scrollToHash('#top') }}>
            <LogoMark />
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: shouldReduceMotion ? 0 : 0.1 + index * 0.05, duration: shouldReduceMotion ? 0 : 0.45 }}
                onClick={(event) => { event.preventDefault(); handleNav(link.href) }}
                className="text-sm font-medium text-white/70 transition hover:text-white"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
          <div className="hidden md:block"><AppleButton onClick={downloadAura} /></div>
          <button type="button" aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen((open) => !open)} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden">
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
          {mobileMenuOpen ? (
            <div className="absolute left-6 right-6 top-[4.75rem] rounded-2xl border border-white/10 bg-[#111317]/95 p-2 shadow-2xl backdrop-blur-xl md:hidden">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} onClick={(event) => { event.preventDefault(); handleNav(link.href) }} className="block rounded-xl px-4 py-3 text-sm font-medium text-white/75 transition hover:bg-white/5 hover:text-white">{link.label}</a>
              ))}
              <div className="p-2"><AppleButton full onClick={downloadAura} /></div>
            </div>
          ) : null}
        </motion.header>

        <main id="top">
          <section className="flex flex-col items-center px-6 pb-20 pt-16 text-center md:pt-28" aria-labelledby="hero-heading">
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.3, duration: shouldReduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl font-semibold leading-[0.9] tracking-tight md:text-7xl"
            >
              <span className="block">Your email.</span>
              <span className="animate-shiny block" style={gradientStyle}>Revitalized</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: shouldReduceMotion ? 0 : 0.5, duration: shouldReduceMotion ? 0 : 0.6 }} className="mt-8 max-w-md text-base leading-[1.5] text-white/60">
              Aura is the premier inbox platform for the current era. It leverages powerful AI to organize, prioritize, and refine your messages into total clarity.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: shouldReduceMotion ? 0 : 0.7, duration: shouldReduceMotion ? 0 : 0.6 }} className="mt-8 flex flex-col items-center gap-3">
              <AppleButton onClick={downloadAura} />
              <span className="text-xs text-white/40">Download for Intel / Apple Silicon</span>
            </motion.div>
          </section>

          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: shouldReduceMotion ? 0 : 0.9, duration: shouldReduceMotion ? 0 : 0.55 }} className="h-10 border-y border-white/10 bg-black/40 backdrop-blur-md" aria-label="Aura desktop menu">
            <div className="flex h-full w-full items-center justify-between px-6 text-xs">
              <div className="flex items-center gap-4">
                <AppleLogo className="h-3.5 w-3.5" />
                <span className="font-bold">Aura</span>
                <div className="flex items-center gap-3 text-white/60">
                  {macMenuItems.map((item, index) => <span key={item} className={`${index > 2 ? 'hidden sm:inline' : ''} ${index > 3 ? 'md:inline' : ''}`}>{item}</span>)}
                </div>
              </div>
              <div className="flex items-center gap-2 text-white/60"><Search className="h-3.5 w-3.5" /> <span>Wed May 6 1:09 PM</span></div>
            </div>
          </motion.section>

          <section id="inbox" className="w-full px-6 py-16 md:py-24" aria-label="Aura inbox preview">
            <motion.div initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ delay: shouldReduceMotion ? 0 : 0.15, duration: shouldReduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }} className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0e1014]/90 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
              <InboxMockup />
            </motion.div>
          </section>

          <section id="solutions" className="grid w-full items-start gap-10 px-6 py-20 md:grid-cols-2 md:gap-16 md:py-28" aria-labelledby="triage-heading">
            <motion.div initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}>
              <SectionEyebrow label="Triage" tag="AI-native" />
              <h2 id="triage-heading" className="mt-5 text-3xl font-semibold leading-[1.02] tracking-tight md:text-5xl">Clear your inbox<br />in a single pass.</h2>
              <p className="mt-6 max-w-md text-base leading-[1.6] text-white/60">Aura reads every message, understands intent, and routes the noise away from the signal. Focus on what moves your day forward — the rest handles itself.</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {['Auto-categorize', 'Snooze for later', 'Silent newsletters', 'One-tap unsubscribe'].map((chip) => <span key={chip} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/70">{chip}</span>)}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: shouldReduceMotion ? 0 : 0.12, duration: shouldReduceMotion ? 0 : 0.7 }} className="liquid-glass rounded-2xl p-5">
              <p className="text-xs font-medium text-white/60">Today · 42 messages triaged</p>
              <div className="mt-5 space-y-3">
                {triageGroups.map((group) => (
                  <div key={group.label} className="liquid-glass rounded-lg p-3">
                    <div className="flex items-center gap-2 text-xs"><span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: group.color }} /><span className="font-medium text-white/85">{group.label}</span><span className="text-white/35">({group.count})</span></div>
                    <div className="mt-2 space-y-1 text-xs text-white/50">{group.items.map((item) => <p key={item}>{item}</p>)}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          <section className="w-full px-6 py-16 md:py-20" aria-label="Trusted by teams">
            <p className="text-center text-xs uppercase tracking-widest text-white/40">Trusted by the world's most thoughtful teams</p>
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
              {logos.map((logo, index) => <motion.div key={logo} initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: shouldReduceMotion ? 0 : index * 0.05, duration: shouldReduceMotion ? 0 : 0.45 }} className="text-center text-sm font-semibold tracking-tight text-white/50 transition hover:text-white">{logo}</motion.div>)}
            </div>
          </section>

          <section id="stories" className="w-full border-t border-white/10 px-6 py-20 md:py-28" aria-label="Customer testimonials">
            <div className="grid gap-4 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <figure key={testimonial.name} className="liquid-glass rounded-2xl p-6">
                  <blockquote className="text-sm leading-[1.6] text-white/80">“{testimonial.quote}”</blockquote>
                  <figcaption className="mt-6 border-t border-white/10 pt-5">
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                    <p className="mt-1 text-xs text-white/50">{testimonial.role}</p>
                    <p className="mt-3 text-xs font-semibold tracking-wide text-white">{testimonial.company}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <PricingSection yearly={yearly} onToggle={() => setYearly((current) => !current)} onChoosePlan={(plan) => announce(`${plan} plan selected — pricing is available soon.`)} />

          <section id="join" className="w-full px-6 py-20 md:py-32" aria-labelledby="cta-heading">
            <motion.div initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: shouldReduceMotion ? 0 : 0.7 }} className="liquid-glass relative overflow-hidden rounded-3xl px-8 py-16 text-center md:py-24">
              <div aria-hidden="true" className="absolute inset-0 opacity-30 [background:radial-gradient(600px_circle_at_50%_0%,rgba(255,255,255,0.15),transparent_70%)]" />
              <div className="relative">
                <h2 id="cta-heading" className="text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">Close the tabs.<br />Open your day.</h2>
                <p className="mx-auto mt-6 max-w-md text-sm leading-[1.6] text-white/60">Join thousands of builders, founders, and operators who treat email like a tool — not an obligation.</p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <AppleButton label="Download Aura" onClick={downloadAura} />
                  <a href="mailto:hello@aura.email?subject=Talk%20to%20Aura" className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5">
                    Talk to sales <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-px" />
                  </a>
                </div>
              </div>
            </motion.div>
          </section>
        </main>
      </div>
      <div aria-live="polite" aria-atomic="true" className={`fixed bottom-5 left-1/2 z-30 -translate-x-1/2 rounded-full border border-white/15 bg-[#15171c]/95 px-4 py-2 text-xs text-white shadow-xl backdrop-blur-md transition ${notice ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'}`}>{notice}</div>
    </div>
  )
}
