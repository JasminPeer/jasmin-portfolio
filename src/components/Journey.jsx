import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { data } from '../data/portfolio'

const strengths = [
  { icon:'🏗️', title:'Full-Stack Architecture', desc:'Complete MERN apps from DB schema to React UI' },
  { icon:'🔐', title:'Security-First',          desc:'JWT, RBAC, and secure API design patterns' },
  { icon:'📊', title:'Domain Solutions',        desc:'Blood banking, LMS, and developer tools' },
  { icon:'🤝', title:'Collaboration Ready',     desc:'Git/GitHub, clean commits, team workflows' },
]

export default function Journey() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-60px' })
  return (
    <section id="journey" className="section-pad relative overflow-hidden"
      style={{background:'linear-gradient(160deg,#F8F7FF 0%,#F0F7FF 60%,#FAFAFA 100%)'}}>
      <div className="absolute -top-32 right-0 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-60 pointer-events-none"/>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.7}} className="mb-16">
          <span className="section-label mb-5 inline-flex">Journey</span>
          <h2 className="display-heading mt-4">Education & <span className="grad-text">experience</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <p className="text-xs font-mono font-semibold text-violet-500 uppercase tracking-widest mb-8">Education</p>
            <div className="relative pl-10 flex flex-col gap-8">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-violet-200 to-transparent"/>
              {data.education.map((e,i) => (
                <motion.div key={e.degree} initial={{opacity:0,x:-24}} animate={inView?{opacity:1,x:0}:{}}
                  transition={{delay:i*0.12,duration:0.7}} className="relative" data-h>
                  <div className={`absolute -left-[33px] top-4 w-5 h-5 rounded-full border-2 z-10 transition-all ${e.active?'border-violet-600 bg-violet-600 shadow-[0_0_14px_rgba(109,40,217,0.4)]':'border-slate-300 bg-white'}`}>
                    {e.active && <div className="absolute inset-1 rounded-full bg-white"/>}
                  </div>
                  <div className={`card-base p-5 ${e.active?'border-violet-100 shadow-[0_4px_24px_rgba(109,40,217,0.08)]':''}`}>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="font-semibold text-sm text-slate-800 leading-snug">{e.degree}</h4>
                      {e.active && <span className="flex-shrink-0 text-[10px] bg-violet-50 text-violet-600 border border-violet-100 px-2 py-0.5 rounded-full font-mono">Active</span>}
                    </div>
                    <p className="text-xs text-slate-500 mb-3">{e.institution}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-mono">{e.period}</span>
                      <span className="text-xs font-bold text-violet-600 font-mono">{e.score}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Strengths */}
          <div>
            <p className="text-xs font-mono font-semibold text-blue-500 uppercase tracking-widest mb-8">What I Bring</p>
            <div className="flex flex-col gap-4">
              {strengths.map(({icon,title,desc},i) => (
                <motion.div key={title} initial={{opacity:0,x:24}} animate={inView?{opacity:1,x:0}:{}}
                  transition={{delay:i*0.09,duration:0.7}} className="card-base p-5 flex gap-4 group" data-h>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-50 to-blue-50 flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">{icon}</div>
                  <div>
                    <p className="font-semibold text-sm text-slate-800 mb-1">{title}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
