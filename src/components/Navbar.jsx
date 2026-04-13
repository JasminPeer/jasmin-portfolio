import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { data } from '../data/portfolio'

const links = ['About','Skills','Projects','Journey','Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <motion.nav initial={{y:-70,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.8,ease:[0.16,1,0.3,1]}}
      className="fixed top-0 inset-x-0 z-50">
      <div className={`mx-4 md:mx-8 mt-3 transition-all duration-500 ${scrolled ? 'glass rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.07)]' : 'bg-transparent'}`}>
        <div className="flex items-center justify-between px-6 py-3.5">
          <a href="#" data-h className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center shadow-[0_4px_12px_rgba(109,40,217,0.35)] group-hover:scale-105 transition-transform">
              <span className="font-display font-bold text-white text-base leading-none">J</span>
            </div>
            <span className="font-display font-semibold text-slate-800 hidden sm:block">Jasmin Fathima</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} data-h
                className="text-sm font-body font-medium text-slate-500 hover:text-slate-900 transition-colors relative group">
                {l}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-violet-500 to-blue-500 group-hover:w-full transition-all duration-300"/>
              </a>
            ))}
          </div>
          <a href={data.resumeUrl} data-h download
            className="hidden md:flex btn-dark text-xs px-5 py-2.5 gap-2">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 16l-4-4m4 4l4-4m-4 4V4M4 20h16"/>
            </svg>
            Resume
          </a>
          <button className="md:hidden p-2 flex flex-col gap-1.5" onClick={() => setOpen(!open)} data-h>
            <span className={`block w-5 h-0.5 bg-slate-800 transition-all ${open?'rotate-45 translate-y-2':''}`}/>
            <span className={`block w-5 h-0.5 bg-slate-800 transition-all ${open?'opacity-0':''}`}/>
            <span className={`block w-5 h-0.5 bg-slate-800 transition-all ${open?'-rotate-45 -translate-y-2':''}`}/>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}}
            className="md:hidden glass mx-4 mt-1 rounded-2xl p-6 flex flex-col gap-4 shadow-card">
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={()=>setOpen(false)}
                className="text-sm font-semibold text-slate-700 hover:text-violet-600 transition-colors">{l}</a>
            ))}
            <a href={data.resumeUrl} download className="btn-dark text-xs w-fit">↓ Resume</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
