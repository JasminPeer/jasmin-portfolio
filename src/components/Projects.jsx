import { useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { data } from '../data/portfolio'

function ProjectCard({ p, index, inView }) {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)
  const [modal, setModal] = useState(false)
  const mx = useMotionValue(0); const my = useMotionValue(0)
  const rx = useSpring(useTransform(my,[-80,80],[6,-6]),{stiffness:150,damping:30})
  const ry = useSpring(useTransform(mx,[-80,80],[-6,6]),{stiffness:150,damping:30})

  const onMove = e => {
    const r = ref.current?.getBoundingClientRect()
    if(!r) return
    mx.set(e.clientX-r.left-r.width/2)
    my.set(e.clientY-r.top-r.height/2)
  }
  const onLeave = () => { mx.set(0); my.set(0); setHovered(false) }

  return (
    <>
      <motion.div initial={{opacity:0,y:40}} animate={inView?{opacity:1,y:0}:{}}
        transition={{delay:index*0.12,duration:0.7,ease:[0.16,1,0.3,1]}} style={{perspective:1000}}>
        <motion.div ref={ref} style={{rotateX:rx,rotateY:ry,transformStyle:'preserve-3d'}}
          onMouseMove={onMove} onMouseEnter={()=>setHovered(true)} onMouseLeave={onLeave}
          onClick={()=>setModal(true)} className="card-base cursor-pointer overflow-hidden group" data-h>

          {/* Header visual */}
          <div className={`h-44 bg-gradient-to-br ${p.gradient} relative flex items-center justify-center overflow-hidden`}
            style={{transform:'translateZ(8px)'}}>
            <span className="text-6xl opacity-50 group-hover:scale-110 group-hover:opacity-70 transition-all duration-500">{p.icon}</span>
            {/* Hover overlay */}
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${hovered?'opacity-100':'opacity-0'}`}
              style={{background:'rgba(255,255,255,0.7)',backdropFilter:'blur(4px)'}}>
              <div className="flex flex-col items-center gap-2">
                {p.liveUrl && (
                  <span className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"/>Live Demo
                  </span>
                )}
                <span className="text-xs text-slate-500">Click for details</span>
              </div>
            </div>
            {/* Live badge */}
            {p.liveUrl && (
              <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-soft">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"/>
                <span className="text-[10px] font-mono font-semibold text-emerald-700">Live</span>
              </div>
            )}
          </div>

          <div className="p-6" style={{transform:'translateZ(12px)'}}>
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-display font-semibold text-xl text-slate-900">{p.name}</h3>
                <p className="text-xs text-slate-400 font-medium mt-0.5">{p.subtitle}</p>
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{background:`${p.color}18`}}>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke={p.color} strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">{p.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {p.tech.slice(0,4).map(t => (
                <span key={t} className="font-mono text-xs bg-slate-50 border border-slate-200 text-slate-600 px-2.5 py-1 rounded-lg">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{background:'rgba(15,23,42,0.5)',backdropFilter:'blur(8px)'}}
          onClick={()=>setModal(false)}>
          <motion.div initial={{opacity:0,scale:0.93,y:16}} animate={{opacity:1,scale:1,y:0}}
            transition={{duration:0.35,ease:[0.16,1,0.3,1]}}
            className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden"
            onClick={e=>e.stopPropagation()}>
            <div className={`h-36 bg-gradient-to-br ${p.gradient} flex items-center justify-center relative`}>
              <span className="text-7xl opacity-60">{p.icon}</span>
              {p.liveUrl && (
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"/>
                  <span className="text-xs font-mono font-semibold text-emerald-700">Live</span>
                </div>
              )}
              <button onClick={()=>setModal(false)} data-h
                className="absolute top-4 right-4 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-slate-600 text-sm hover:bg-white transition-colors">✕</button>
            </div>
            <div className="p-8">
              <h3 className="font-display font-bold text-2xl text-slate-900 mb-1">{p.name}</h3>
              <p className="text-sm text-slate-400 mb-5">{p.subtitle}</p>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">{p.description}</p>
              <p className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-widest mb-3">Key Highlights</p>
              <ul className="flex flex-col gap-2.5 mb-6">
                {p.highlights.map(h => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>{h}
                  </li>
                ))}
              </ul>
              <p className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-widest mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map(t => (
                  <span key={t} className="font-mono text-xs bg-violet-50 border border-violet-100 text-violet-700 px-2.5 py-1 rounded-lg">{t}</span>
                ))}
              </div>
              {p.liveUrl && (
                <a href={p.liveUrl} target="_blank" rel="noreferrer" data-h className="btn-dark w-full justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                  View Live Project
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-60px' })
  return (
    <section id="projects" className="section-pad bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"/>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.7}} className="mb-16">
          <span className="section-label mb-5 inline-flex">Projects</span>
          <h2 className="display-heading mt-4">Work that <span className="grad-text">speaks</span></h2>
          <p className="text-base text-slate-500 mt-3 font-light max-w-lg">Production-minded applications built with real-world architecture patterns.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.projects.map((p,i) => <ProjectCard key={p.name} p={p} index={i} inView={inView}/>)}
        </div>
      </div>
    </section>
  )
}
