import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { data } from '../data/portfolio'

function Typewriter({ roles }) {
  const [idx, setIdx] = useState(0)
  const [txt, setTxt] = useState('')
  const [del, setDel] = useState(false)
  useEffect(() => {
    const current = roles[idx]
    let timeout
    if (!del && txt.length < current.length) {
      timeout = setTimeout(() => setTxt(current.slice(0, txt.length+1)), 80)
    } else if (!del && txt.length === current.length) {
      timeout = setTimeout(() => setDel(true), 2200)
    } else if (del && txt.length > 0) {
      timeout = setTimeout(() => setTxt(current.slice(0, txt.length-1)), 45)
    } else if (del && txt.length === 0) {
      setDel(false); setIdx((idx+1) % roles.length)
    }
    return () => clearTimeout(timeout)
  }, [txt, del, idx, roles])
  return (
    <span className="inline-flex items-center gap-1">
      <span className="grad-text font-bold">{txt}</span>
      <span className="inline-block w-0.5 h-[1.1em] bg-violet-500 ml-0.5 align-middle" style={{animation:'blink 1s step-end infinite'}}/>
    </span>
  )
}

const floatIcons = [
  { icon:'⚛️', label:'React',    x:'7%',  y:'18%', cls:'fa', delay:'0s',   size:'text-xl' },
  { icon:'🍃', label:'MongoDB',  x:'88%', y:'14%', cls:'fb', delay:'1.5s', size:'text-xl' },
  { icon:'🟢', label:'Node.js',  x:'92%', y:'62%', cls:'fa', delay:'0.8s', size:'text-lg' },
  { icon:'☕', label:'Java',     x:'4%',  y:'72%', cls:'fb', delay:'2s',   size:'text-lg' },
]

export default function Hero() {
  const fade = { hidden:{opacity:0,y:30}, show:{opacity:1,y:0} }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden"
      style={{background:'radial-gradient(ellipse 80% 60% at 60% -5%, #EDE9FE 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 10% 100%, #DBEAFE 0%, transparent 50%), #FAFAFA'}}>

      {/* Background blobs */}
      <div className="hero-blob absolute w-[500px] h-[500px] bg-violet-100/40 -top-32 -right-32 pointer-events-none"/>
      <div className="hero-blob absolute w-[350px] h-[350px] bg-blue-100/30 bottom-0 left-1/4 pointer-events-none" style={{animationDelay:'-5s'}}/>

      {/* Soft grid */}
      <div className="absolute inset-0 opacity-[0.025]" style={{backgroundImage:'linear-gradient(#6D28D9 1px,transparent 1px),linear-gradient(90deg,#6D28D9 1px,transparent 1px)',backgroundSize:'52px 52px'}}/>

      {/* Floating icons — spaced corners */}
      {floatIcons.map(({icon,label,x,y,cls,delay,size}) => (
        <div key={label} className={`${cls} absolute hidden lg:flex items-center gap-1.5 glass rounded-2xl px-3.5 py-2 shadow-[0_2px_16px_rgba(109,40,217,0.08)] pointer-events-none`}
          style={{left:x,top:y,animationDelay:delay,opacity:0.75}}>
          <span className={size}>{icon}</span>
          <span className="text-xs font-mono font-medium text-slate-500">{label}</span>
        </div>
      ))}

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-16 py-36 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT — Text */}
        <motion.div variants={{show:{transition:{staggerChildren:0.11}}}} initial="hidden" animate="show" className="flex flex-col gap-7">
          <motion.div variants={fade} transition={{duration:0.7,ease:[0.16,1,0.3,1]}}>
            <span className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"/>
              Open to Opportunities
            </span>
          </motion.div>

          <motion.div variants={fade} transition={{duration:0.7,ease:[0.16,1,0.3,1]}}>
            <h1 className="display-heading mb-3">
              Hi, I'm <span className="grad-text">Jasmin</span><br/>
            </h1>
            <div className="font-display text-2xl md:text-3xl text-slate-600 font-light h-10 flex items-center">
              <Typewriter roles={data.roles}/>
            </div>
          </motion.div>

          <motion.p variants={fade} transition={{duration:0.7,ease:[0.16,1,0.3,1]}}
            className="text-base md:text-lg text-slate-500 leading-relaxed max-w-md font-light">
            {data.tagline}
          </motion.p>

          <motion.div variants={fade} transition={{duration:0.7,ease:[0.16,1,0.3,1]}} className="flex flex-wrap gap-3 pt-1">
            <a href="#projects" data-h className="btn-dark">
              View Projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
            <a href={data.resumeUrl} download data-h className="btn-outline">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 16l-4-4m4 4l4-4m-4 4V4M4 20h16"/></svg>
              Download CV
            </a>
            <a href="#contact" data-h className="btn-outline">Let's Connect</a>
          </motion.div>

          <motion.div variants={fade} transition={{duration:0.7,ease:[0.16,1,0.3,1]}} className="flex items-center gap-8 pt-2">
            {[{v:'3+',l:'Projects'},{v:'7.53',l:'CGPA'},{v:'MERN',l:'Stack'}].map(({v,l}) => (
              <div key={l}>
                <p className="font-display font-bold text-2xl text-slate-900">{v}</p>
                <p className="text-xs text-slate-400 font-medium mt-0.5">{l}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — Profile photo */}
        <motion.div initial={{opacity:0,scale:0.88}} animate={{opacity:1,scale:1}} transition={{delay:0.35,duration:1,ease:[0.16,1,0.3,1]}}
          className="flex items-center justify-center relative">

          {/* Decorative rings */}
          {[200,260,320].map((s,i) => (
            <div key={s} className="absolute rounded-full border border-violet-200/60"
              style={{width:s,height:s,top:'50%',left:'50%',transform:'translate(-50%,-50%)',
                animation:`pulseRing ${3+i*0.7}s ease-out infinite`,animationDelay:`${i*0.5}s`,opacity:0.5}}/>
          ))}

          {/* Rotating dashed ring */}
          <div className="absolute rounded-full border-2 border-dashed border-violet-300/40" style={{
            width:300,height:300,top:'50%',left:'50%',transform:'translate(-50%,-50%)',
            animation:'spin-slow 18s linear infinite'
          }}/>

          {/* Photo frame */}
          <div className="photo-float relative z-10" style={{filter:'drop-shadow(0 20px 60px rgba(109,40,217,0.18))'}}>
            <div className="w-60 h-60 md:w-72 md:h-72 rounded-3xl overflow-hidden relative"
              style={{animation:'glowPulse 4s ease-in-out infinite',border:'3px solid transparent',
                background:'linear-gradient(white,white) padding-box, linear-gradient(135deg,#7C3AED,#3B82F6,#06B6D4) border-box'}}>

              {/* Avatar placeholder — replace src with real photo */}
              <div className="w-full h-full bg-gradient-to-br from-violet-100 via-blue-50 to-cyan-100 flex flex-col items-center justify-center gap-3">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center shadow-[0_8px_32px_rgba(109,40,217,0.4)]">
                  <span className="font-display font-bold text-white text-5xl">J</span>
                </div>
                <div className="text-center px-4">
                  <p className="font-display font-semibold text-slate-700 text-sm">Jasmin Fathima P</p>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">MERN Developer</p>
                </div>
              </div>
            </div>

            {/* Mini floating badges */}
            <div className="absolute -bottom-3 -left-6 glass rounded-xl px-3 py-2 shadow-card fb">
              <p className="text-xs font-mono font-bold text-violet-700">7.53 CGPA</p>
              <p className="text-[10px] text-slate-400">Academic</p>
            </div>
            <div className="absolute -top-3 -right-6 glass rounded-xl px-3 py-2 shadow-card fa" style={{animationDelay:'1s'}}>
              <p className="text-xs font-mono font-bold text-blue-600">3 Projects</p>
              <p className="text-[10px] text-slate-400">Completed</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2}}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">Scroll</span>
        <motion.div className="w-px h-10 bg-gradient-to-b from-violet-400 to-transparent"
          animate={{scaleY:[1,0.3,1]}} transition={{duration:2,repeat:Infinity}}/>
      </motion.div>
    </section>
  )
}
