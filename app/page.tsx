'use client'

import { ArrowDownRight, ArrowRight, Check, ChevronDown, Download, Menu, X } from 'lucide-react'
import { useState } from 'react'

const DOWNLOAD_URL = '#download'
const GITHUB_URL = 'https://github.com/tushar-cr7/DailyFlow'
const VERSION = 'v1.0.0'

const screenshots = {
  today: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-08-12%20083821-bufertsnw6lnmwRW2RGNqyQ9flMQ5h.png',
  task: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-08-12%20083952-Fw2NgtztzCEcvMaNWx9gaOGn5RyqK1.png',
  analytics: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-08-12%20083928-9eVIKgohug2yDLvjUfFLgY1E0hnAsG.png',
  upcoming: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-08-12%20083901-nZRNoyNEG85HuRuG83K4e9OrYRW7Bk.png',
  reflection: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-08-12%20084040-weSeO6qw8z5zdnUbIR9UHaMXSXzAq6.png',
}

const environments = [
  { name: 'Emerald Forest', detail: 'Quiet energy', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1800&q=85', accent: '#9bd4a1' },
  { name: 'Deep Ocean', detail: 'Steady depth', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1800&q=85', accent: '#83c6e8' },
  { name: 'Mountain Lake', detail: 'Clear perspective', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85', accent: '#b9d8c1' },
  { name: 'Night Sky', detail: 'Deep work', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1800&q=85', accent: '#aeb4ff' },
  { name: 'Sunset Horizon', detail: 'A soft landing', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-08-12%20083901-nZRNoyNEG85HuRuG83K4e9OrYRW7Bk.png', accent: '#f0b06f' },
]

function Logo({ small = false }: { small?: boolean }) {
  return <span className={small ? 'logo-lockup logo-lockup-small' : 'logo-lockup'}><span><b>Daily<span>Flow</span></b>{!small && <small>FLOW. FOCUS. FINISH.</small>}</span></span>
}

function ScreenshotFrame({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return <figure className={`screenshot-frame ${className}`}><div className="frame-chrome"><i /><i /><i /><span>DAILYFLOW</span></div><img src={src} alt={alt} /></figure>
}

function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return <header className="site-nav"><a href="#top" onClick={close}><Logo /></a><nav className={open ? 'nav-links open' : 'nav-links'}><a href="#product" onClick={close}>Product</a><a href="#flow" onClick={close}>The flow</a><a href="#environments" onClick={close}>Environments</a><a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a><a className="nav-download" href={DOWNLOAD_URL} onClick={close}><Download size={13} /> Download</a></nav><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open}>{open ? <X /> : <Menu />}</button></header>
}

function FlowStep({ number, title, body, items, image, flip = false }: { number: string; title: string; body: string; items: string[]; image: string; flip?: boolean }) {
  return <article className={`flow-step ${flip ? 'flip' : ''}`}><div className="flow-copy"><span className="eyebrow">{number} / {title}</span><h3>{body}</h3><ul>{items.map(item => <li key={item}><Check size={14} />{item}</li>)}</ul></div><ScreenshotFrame src={image} alt={`${title} view in the DailyFlow desktop app`} /></article>
}

function EnvironmentShowcase() {
  const [selected, setSelected] = useState(4)
  const environment = environments[selected]
  return <section id="environments" className="environment-showcase" style={{ '--environment-image': `url(${environment.image})`, '--environment-accent': environment.accent } as React.CSSProperties}><div className="environment-backdrop" /><div className="environment-content"><div className="environment-heading"><span className="eyebrow">05 / YOUR ATMOSPHERE</span><h2>Work somewhere<br /><em>you want to return to.</em></h2><p>Five environments shape the mood of your workspace without changing what matters.</p></div><div className="environment-selector">{environments.map((item, index) => <button className={selected === index ? 'selected' : ''} key={item.name} onClick={() => setSelected(index)} aria-pressed={selected === index}><span>0{index + 1}</span><strong>{item.name}</strong><small>{item.detail}</small></button>)}</div><div className="environment-status"><span className="status-dot" /> {environment.name} <i /> {environment.detail}</div></div></section>
}

export default function Page() {
  return <main id="top"><Nav /><section className="hero"><div className="hero-atmosphere" /><div className="hero-copy"><span className="hero-kicker"><span className="pulse-dot" /> Desktop workspace / 01</span><h1>Your day.<br /><em>In flow.</em></h1><p>DailyFlow is a focused desktop workspace for planning, focusing, finishing, and reflecting on your day.</p><div className="hero-actions"><a className="button button-primary" href={DOWNLOAD_URL}>Download for Windows <ArrowRight size={16} /></a><a className="button button-quiet" href="#product">Explore DailyFlow <ChevronDown size={16} /></a></div><small className="trust">Windows desktop <i /> Local-first <i /> FLOW. FOCUS. FINISH.</small></div><div className="hero-screenshots"><ScreenshotFrame src={screenshots.today} alt="DailyFlow Today dashboard showing daily briefing and progress" className="hero-shot-main" /><ScreenshotFrame src={screenshots.task} alt="DailyFlow create new task dialog" className="hero-shot-overlap" /></div><div className="scroll-cue">Scroll to explore <ArrowDownRight size={15} /></div></section><section id="product" className="story section-pad"><div className="story-label"><span className="eyebrow">A calmer desktop ritual</span><span className="section-number">02 — 05</span></div><div className="story-content"><h2>Plan less.<br /><span>Flow more.</span></h2><p>DailyFlow keeps the whole day in view: the task you choose, the focus you give it, the progress you earn, and the patterns you notice afterward.</p><div className="story-signature"><div className="signature-line" />Designed around the way attention actually works.</div></div></section><section id="flow" className="flow-section section-pad"><div className="flow-intro"><span className="eyebrow">THE DAILYFLOW METHOD</span><h2>Four movements.<br /><em>One complete day.</em></h2></div><div className="flow-steps"><FlowStep number="01" title="PLAN" body="Give the day a direction." items={['Daily Briefing', 'Tasks and scheduling', 'North Star Focus']} image={screenshots.today} /><FlowStep number="02" title="FOCUS" body="Stay with what matters." items={['Focus Mode', 'Focus timer', 'Focus sessions']} image={screenshots.upcoming} flip /><FlowStep number="03" title="FINISH" body="Make progress visible." items={['Task completion', 'XP and streaks', 'Achievements and celebration']} image={screenshots.analytics} /><FlowStep number="04" title="REFLECT" body="Notice what the day taught you." items={['Daily Summary', 'Reflection notes', 'Productivity insights']} image={screenshots.reflection} flip /></div></section><EnvironmentShowcase /><section className="final-gallery section-pad"><div><span className="eyebrow">06 / THE WHOLE PICTURE</span><h2>All your work,<br /><em>one quiet place.</em></h2></div><div className="gallery-grid"><ScreenshotFrame src={screenshots.analytics} alt="DailyFlow analytics and productivity insights" /><ScreenshotFrame src={screenshots.reflection} alt="DailyFlow daily summary and reflection screen" /></div></section><section id="download" className="download section-pad"><div className="download-mark"><Logo small /></div><span className="eyebrow">A better way to begin again</span><h2>Ready to get your day<br /><em>in flow?</em></h2><p>DailyFlow is a focused desktop workspace built to help you plan, focus, finish, and reflect.</p><div className="hero-actions"><a className="button button-primary" href={DOWNLOAD_URL}>Download for Windows <ArrowRight size={16} /></a><a className="button button-quiet" href={GITHUB_URL} target="_blank" rel="noreferrer">View on GitHub <ArrowRight size={16} /></a></div><small className="download-note">{VERSION} <i /> Windows desktop <i /> Local-first</small></section><footer><Logo small /><span>FLOW. FOCUS. FINISH.</span><nav className="footer-links"><a href="#product">Product</a><a href="#flow">Features</a><a href="#environments">Environments</a><a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a><a href={DOWNLOAD_URL}>Download</a></nav><small>Built for focused days.</small></footer></main>
}
