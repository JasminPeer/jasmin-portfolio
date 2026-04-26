import { data } from '../data/portfolio'
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
            <span className="font-display font-bold text-white">J</span>
          </div>
          <div>
            <p className="font-display font-semibold text-sm">{data.name}</p>
            <p className="text-xs text-slate-400 font-mono">{data.title}</p>
          </div>
        </div>
        <div className="flex gap-6">
          {['About','Skills','Projects','Journey','Contact'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-xs text-slate-400 hover:text-white transition-colors">{l}</a>
          ))}
        </div>
        <p className="text-xs text-slate-500">© 2025 Jasmin Fathima P</p>
      </div>
    </footer>
  )
}
