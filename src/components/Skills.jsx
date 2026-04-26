import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { data } from '../data/portfolio'

function CircleSkill({ name, level, icon, color, text, delay, inView }) {
  const r = 30
  const circ = 2 * Math.PI * r
  const offset = circ - (level / 100) * circ

  return (
    <motion.div initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}}
      transition={{delay,duration:0.6,ease:[0.16,1,0.3,1]}}
      className="card-base p-5 flex flex-col items-center gap-3 group" data-h>
      <div className="relative w-20 h-20">
        <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
          <defs>
            <linearGradient id={`sg-${name}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6D28D9"/>
              <stop offset="100%" stopColor="#3B82F6"/>
            </linearGradient>
          </defs>
          <circle cx="40" cy="40" r={r} fill="none" stroke="#EDE9FE" strokeWidth="6"/>
          <motion.circle cx="40" cy="40" r={r} fill="none"
            stroke={`url(#sg-${name})`} strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circ}
            initial={{strokeDashoffset: circ}}
            animate={inView ? {strokeDashoffset: offset} : {strokeDashoffset: circ}}
            transition={{delay: delay+0.3, duration:1.3, ease:[0.4,0,0.2,1]}}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          {text
            ? <span className="font-mono font-bold text-sm" style={{color}}>{icon}</span>
            : <span className="text-xl">{icon}</span>}
        </div>
      </div>
      <div className="text-center">
        <p className="font-semibold text-sm text-slate-800">{name}</p>
        <p className="text-xs text-slate-400 font-mono mt-0.5">{level}%</p>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-60px' })
  return (
    <section id="skills" className="section-pad relative overflow-hidden"
      style={{background:'linear-gradient(145deg,#F8F7FF 0%,#F0F7FF 50%,#F0FDFC 100%)'}}>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-violet-100/50 blur-3xl pointer-events-none"/>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.7}} className="mb-16">
          <span className="section-label mb-5 inline-flex">Skills</span>
          <h2 className="display-heading mt-4">My technical <span className="grad-text">toolkit</span></h2>
          <p className="text-base text-slate-500 mt-3 font-light max-w-lg">Technologies and tools I work with daily to build production-ready applications.</p>
        </motion.div>

        {/* Core Stack */}
        <div className="mb-12">
          <p className="text-xs font-mono font-semibold text-violet-500 tracking-[0.18em] uppercase mb-6">Core Stack</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {data.skills.core.map((s,i) => <CircleSkill key={s.name} {...s} delay={i*0.07} inView={inView}/>)}
          </div>
        </div>

        {/* Languages */}
        <div className="mb-12">
          <p className="text-xs font-mono font-semibold text-blue-500 tracking-[0.18em] uppercase mb-6">Languages</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {data.skills.languages.map((s,i) => <CircleSkill key={s.name} {...s} delay={i*0.07} inView={inView}/>)}
          </div>
        </div>

        {/* Tools */}
        <div>
          <p className="text-xs font-mono font-semibold text-slate-400 tracking-[0.18em] uppercase mb-6">Tools & Concepts</p>
          <div className="flex flex-wrap gap-3">
            {data.skills.tools.map((t,i) => (
              <motion.span key={t} initial={{opacity:0,scale:0.88}} animate={inView?{opacity:1,scale:1}:{}}
                transition={{delay:0.4+i*0.04,duration:0.4}}
                className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-600 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-violet-300 hover:text-violet-700 hover:shadow-[0_4px_20px_rgba(109,40,217,0.1)] transition-all duration-300 cursor-default" data-h>
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
