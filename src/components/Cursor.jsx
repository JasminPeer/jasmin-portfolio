import { useEffect, useRef } from 'react'
export default function Cursor() {
  const dot = useRef(null); const ring = useRef(null)
  useEffect(() => {
    let mx=0,my=0,rx=0,ry=0
    const move = e => { mx=e.clientX; my=e.clientY; dot.current.style.left=mx+'px'; dot.current.style.top=my+'px' }
    const tick = () => { rx+=(mx-rx)*0.13; ry+=(my-ry)*0.13; ring.current.style.left=rx+'px'; ring.current.style.top=ry+'px'; requestAnimationFrame(tick) }
    document.addEventListener('mousemove',move)
    const over = () => ring.current.classList.add('big')
    const out  = () => ring.current.classList.remove('big')
    document.querySelectorAll('a,button,[data-h]').forEach(el=>{ el.addEventListener('mouseenter',over); el.addEventListener('mouseleave',out) })
    tick()
    return () => document.removeEventListener('mousemove',move)
  },[])
  return (<><div ref={dot} className="cur-dot"/><div ref={ring} className="cur-ring"/></>)
}
