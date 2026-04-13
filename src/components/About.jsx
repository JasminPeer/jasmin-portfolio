import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { data } from '../data/portfolio'

const items = [
  { icon:'🏗️', title:'Full-Stack',    desc:'End-to-end MERN applications from schema to UI' },
  { icon:'🔐', title:'Security',      desc:'JWT auth, RBAC, and secure API patterns' },
  { icon:'🌐', title:'REST APIs',     desc:'Scalable, well-documented API architecture' },
  { icon:'✨', title:'Clean Code',    desc:'Maintainable, readable, and well-structured' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-80px' })
  return (
    <section id="about" className="section-pad bg-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-violet-50 blur-3xl opacity-60 pointer-events-none"/>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.7}} className="mb-16">
          <span className="section-label mb-5 inline-flex">About Me</span>
          <h2 className="display-heading mt-4">
            Passionate about crafting<br/>
            <span className="grad-text">meaningful software</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          <motion.div initial={{opacity:0,x:-30}} animate={inView?{opacity:1,x:0}:{}} transition={{delay:0.1,duration:0.7}}
            className="lg:col-span-3 space-y-6">
            <p className="text-lg text-slate-600 leading-[1.85] font-light">{data.about}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {['MERN Stack','REST APIs','JWT Auth','Role-Based Access','MongoDB','React.js','Node.js','Express.js'].map(t => (
                <span key={t} className="font-mono text-xs bg-slate-50 border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg">{t}</span>
              ))}
            </div>
            <div className="flex gap-3 pt-2">
              {[
                {href:data.github, label:'GitHub', icon:<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>},
                {href:data.linkedin, label:'LinkedIn', icon:<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>},
              ].map(({href,label,icon}) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" data-h className="btn-outline text-xs gap-2">{icon}{label}</a>
              ))}
            </div>
          </motion.div>
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {items.map(({icon,title,desc},i) => (
              <motion.div key={title} initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}}
                transition={{delay:0.1+i*0.08,duration:0.6}} className="card-base p-5 group" data-h>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-50 to-blue-50 flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-transform duration-300">{icon}</div>
                <p className="font-semibold text-sm text-slate-800 mb-1">{title}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
