'use client'

import { ArrowDownRight, ArrowRight, Check, ChevronDown, Clock3, CloudSun, GitBranch, Layers3, Menu, Moon, Sparkles, Target, TrendingUp, X } from 'lucide-react'
import { useState } from 'react'

const DOWNLOAD_URL = '#download'
const GITHUB_URL = '#github'

const environments = [
  { name: 'Emerald Forest', tint: 'forest', detail: 'Quiet energy' },
  { name: 'Deep Ocean', tint: 'ocean', detail: 'Steady depth' },
  { name: 'Mountain Lake', tint: 'lake', detail: 'Clear perspective' },
  { name: 'Night Sky', tint: 'night', detail: 'Deep work' },
  { name: 'Sunset Horizon', tint: 'sunset', detail: 'A soft landing' },
]

function Mark({ small = false }: { small?: boolean }) {
  return <div className={small ? 'brand-mark brand-mark-small' : 'brand-mark'} aria-hidden="true"><span /><span /><span /></div>
}

function AppWindow({ variant = 'briefing' }: { variant?: 'briefing' | 'focus' | 'momentum' | 'analytics' }) {
  return (
    <div className={`app-window app-${variant}`}>
      <div className="app-topbar"><div className="window-dots"><i /><i /><i /></div><span>DAILYFLOW</span><div className="topbar-date">{variant === 'focus' ? 'FOCUS MODE' : 'MON, OCT 21'}</div></div>
      <div className="app-body">
        <aside className="app-sidebar"><Mark small /><div className="side-links"><b className="active"><Layers3 size={14} /> Today</b><b><Target size={14} /> Focus</b><b><TrendingUp size={14} /> Insights</b></div><div className="side-bottom"><Moon size={14} /> Themes</div></aside>
        <div className="app-content">
          {variant === 'briefing' && <><div className="app-heading"><div><small>GOOD MORNING, ALEX</small><h3>Your day, in flow.</h3></div><CloudSun size={25} /></div><div className="briefing-grid"><div className="focus-card"><small>PRIMARY FOCUS</small><strong>Ship the new onboarding</strong><div className="progress-line"><span /></div><em>2h 40m planned</em></div><div className="list-card"><small>TODAY <span>6 tasks</span></small>{['Review product notes', 'Design handoff', 'Team check-in'].map((x, i) => <div className="task" key={x}><span className={i === 0 ? 'checked' : ''}>{i === 0 && <Check size={10} />}</span>{x}<time>{i === 0 ? '09:00' : i === 1 ? '11:30' : '14:00'}</time></div>)}</div></div></>}
          {variant === 'focus' && <div className="focus-screen"><small>FOCUS SESSION</small><div className="timer">24<span>:</span>18</div><strong>Ship the new onboarding</strong><button><span className="pause-bars" /> Pause session</button><p>Session 03 / 04 &nbsp; • &nbsp; 18 min complete</p></div>}
          {variant === 'momentum' && <><div className="app-heading"><div><small>YOUR MOMENTUM</small><h3>Keep going, Alex.</h3></div><Sparkles size={22} /></div><div className="momentum-row"><div className="level-orb"><strong>07</strong><small>LEVEL</small></div><div><b>1,840 XP</b><div className="xp-line"><span /></div><small>160 XP to level 08</small></div></div><div className="streak"><span>12</span><div><b>day streak</b><small>Best: 18 days</small></div><ArrowDownRight size={18} /></div></>}
          {variant === 'analytics' && <><div className="app-heading"><div><small>LAST 7 DAYS</small><h3>Work, understood.</h3></div><TrendingUp size={22} /></div><div className="chart"><div className="bars">{[45, 70, 52, 88, 64, 78, 94].map((h, i) => <span key={i} style={{ height: `${h}%` }} className={i === 6 ? 'bar-hot' : ''} />)}</div><div className="chart-labels"><small>M</small><small>T</small><small>W</small><small>T</small><small>F</small><small>S</small><small>S</small></div></div><div className="metrics"><b><strong>18h 42m</strong> focus time</b><b><strong>82%</strong> completion</b></div></>}
        </div>
      </div>
    </div>
  )
}

function Nav() {
  const [open, setOpen] = useState(false)
  return <header className="site-nav"><a href="#top" className="wordmark"><Mark /><span>DAILYFLOW</span></a><nav className={open ? 'nav-links open' : 'nav-links'}><a href="#product">Product</a><a href="#features">Features</a><a href="#environments">Environments</a><a href={GITHUB_URL}>GitHub <ArrowUpRightIcon /></a><a className="nav-download" href={DOWNLOAD_URL}>Download <ArrowRight size={14} /></a></nav><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button></header>
}
function ArrowUpRightIcon() { return <ArrowDownRight size={13} style={{ transform: 'rotate(-135deg)' }} /> }

function Feature({ eyebrow, title, body, variant, flip = false }: { eyebrow: string; title: string; body: string; variant: 'briefing' | 'focus' | 'momentum' | 'analytics'; flip?: boolean }) {
  return <section className={`feature-section ${flip ? 'flip' : ''}`}><div className="feature-copy"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2><p>{body}</p><a href="#download" className="text-link">See it in action <ArrowRight size={16} /></a></div><div className="feature-visual"><AppWindow variant={variant} /></div></section>
}

export default function Page() {
  return <main id="top">
    <Nav />
    <section className="hero"><div className="hero-atmosphere" /><div className="hero-copy"><span className="hero-kicker"><span className="pulse-dot" /> Desktop workspace / 01</span><h1>Your day.<br /><em>In flow.</em></h1><p>DailyFlow is your personal desktop workspace for planning, focusing, and understanding your day.</p><div className="hero-actions"><a className="button button-primary" href={DOWNLOAD_URL}>Download for Windows <ArrowRight size={16} /></a><a className="button button-quiet" href="#product">Explore DailyFlow <ChevronDown size={16} /></a></div><small className="trust">Built for Windows <i /> Desktop-first <i /> Local-first</small></div><div className="hero-preview"><AppWindow /><div className="preview-caption"><span>01 / THE DAILY BRIEFING</span><span>Plan with intention</span></div></div><div className="scroll-cue"><span>Scroll to explore</span><ArrowDownRight size={15} /></div></section>
    <section id="product" className="story section-pad"><div className="story-label"><span className="eyebrow">A calmer operating system</span><span className="section-number">02 — 05</span></div><div className="story-content"><h2>Plan less.<br /><span>Flow more.</span></h2><p>Everything you need to move through a meaningful day, gathered in one calm workspace. No noise. No scattered tools. Just the next right thing.</p><div className="story-signature"><div className="signature-line" /><span>Designed for the way attention actually works.</span></div></div></section>
    <div id="features" className="features-wrap"><Feature eyebrow="01 / PLAN YOUR DAY" title="Know what matters today." body="Start with a clear briefing. Organize tasks, shape your schedule, and give one thing the weight it deserves." variant="briefing" /><Feature eyebrow="02 / ENTER FOCUS" title="Give your attention somewhere to go." body="A distraction-free timer that makes starting feel simple — and finishing feel satisfying." variant="focus" flip /><Feature eyebrow="03 / BUILD MOMENTUM" title="Make progress feel visible." body="Earn XP, build streaks, and celebrate the small wins that turn good intentions into a practice." variant="momentum" /><Feature eyebrow="04 / UNDERSTAND YOURSELF" title="See how you actually work." body="Quiet analytics reveal your patterns, your best hours, and the shape of your effort over time." variant="analytics" flip /></div>
    <section id="environments" className="environments section-pad"><div className="environment-heading"><span className="eyebrow">05 / YOUR ATMOSPHERE</span><h2>Your workspace<br /><em>should feel like yours.</em></h2><p>Five environments. One familiar place to return to. Let the atmosphere meet your mood.</p></div><div className="environment-grid">{environments.map((env, i) => <div className={`environment-panel ${env.tint}`} key={env.name}><span className="env-index">0{i + 1}</span><div><strong>{env.name}</strong><small>{env.detail}</small></div><div className="env-glow" /></div>)}</div></section>
    <section id="download" className="download section-pad"><div className="download-mark"><Mark /></div><span className="eyebrow">THE NEXT RIGHT THING</span><h2>Make today count.</h2><p>Bring your tasks, focus, momentum and progress into one workspace.</p><div className="hero-actions"><a className="button button-primary" href={DOWNLOAD_URL}>Download DailyFlow for Windows <ArrowRight size={16} /></a><a className="button button-quiet" href={GITHUB_URL}><GitBranch size={16} /> View on GitHub</a></div><small className="download-note">Windows 10 and later &nbsp; • &nbsp; Free to start</small></section>
    <footer><a href="#top" className="wordmark"><Mark small /><span>DAILYFLOW</span></a><span>FLOW. FOCUS. FINISH.</span><div className="footer-links"><a href="#product">Product</a><a href="#features">Features</a><a href="#download">Download</a><a href={GITHUB_URL}>GitHub</a></div><small>Built with focus.</small></footer>
  </main>
}
