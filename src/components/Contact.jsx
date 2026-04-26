import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { data } from '../data/portfolio'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-60px' })
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const [sent, setSent] = useState(false)
<<<<<<< HEAD
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_iq1rf99',
          template_id: 'template_9na3xwd',
          user_id: 'HzuKL2FNiYy6D-IGF',
          template_params: {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
            to_name: 'Jasmin',
          }
        })
      });

      if (response.ok) {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
=======
>>>>>>> cd9258085e96bc2f69d3a126ba76b779729af5a8

  const contacts = [
    { icon:'✉️', label:'Email', val:data.email, href:`mailto:${data.email}` },
    { icon:'📞', label:'Phone', val:data.phone, href:`tel:${data.phone}` },
    { icon:'📍', label:'Location', val:data.location, href:null },
  ]

  return (
    <section id="contact" className="section-pad bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"/>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-violet-50 blur-3xl opacity-50 pointer-events-none"/>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.7}} className="mb-16">
          <span className="section-label mb-5 inline-flex">Contact</span>
          <h2 className="display-heading mt-4">Let's build something <span className="grad-text">together</span></h2>
          <p className="text-base text-slate-500 mt-3 font-light max-w-md">I'm actively looking for entry-level software roles. Let's talk!</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 flex flex-col gap-4">
            {contacts.map(({icon,label,val,href},i) => (
              <motion.div key={label} initial={{opacity:0,x:-20}} animate={inView?{opacity:1,x:0}:{}} transition={{delay:i*0.08,duration:0.6}}>
                {href ? (
                  <a href={href} data-h className="card-base p-5 flex items-center gap-4 group hover:border-violet-200">
                    <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">{icon}</div>
                    <div><p className="text-xs text-slate-400 font-medium mb-0.5">{label}</p><p className="text-sm font-semibold text-slate-800 group-hover:text-violet-700 transition-colors break-all">{val}</p></div>
                  </a>
                ) : (
                  <div className="card-base p-5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-lg">{icon}</div>
                    <div><p className="text-xs text-slate-400 font-medium mb-0.5">{label}</p><p className="text-sm font-semibold text-slate-800">{val}</p></div>
                  </div>
                )}
              </motion.div>
            ))}
            <motion.div initial={{opacity:0,x:-20}} animate={inView?{opacity:1,x:0}:{}} transition={{delay:0.28,duration:0.6}} className="flex gap-3 pt-1">
              <a href={data.github} target="_blank" rel="noreferrer" data-h className="btn-outline text-xs">GitHub</a>
              <a href={data.linkedin} target="_blank" rel="noreferrer" data-h className="btn-outline text-xs">LinkedIn</a>
            </motion.div>
          </div>
          <motion.div initial={{opacity:0,x:24}} animate={inView?{opacity:1,x:0}:{}} transition={{delay:0.15,duration:0.7}} className="lg:col-span-3">
            {sent ? (
              <motion.div initial={{opacity:0,scale:0.96}} animate={{opacity:1,scale:1}} className="card-base p-10 flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-2xl">✅</div>
                <h3 className="font-display font-semibold text-xl">Message sent!</h3>
                <p className="text-sm text-slate-500">I'll reply within 24 hours.</p>
                <button onClick={()=>setSent(false)} className="btn-outline text-xs" data-h>Send another</button>
              </motion.div>
            ) : (
<<<<<<< HEAD
              <form onSubmit={handleSubmit} className="card-base p-8 flex flex-col gap-5">
=======
              <form onSubmit={e=>{e.preventDefault();setSent(true)}} className="card-base p-8 flex flex-col gap-5">
>>>>>>> cd9258085e96bc2f69d3a126ba76b779729af5a8
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Name</label>
                    <input type="text" required className="inp" placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email</label>
                    <input type="email" required className="inp" placeholder="you@email.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Message</label>
                  <textarea required rows={5} className="inp resize-none" placeholder="Tell me about the opportunity..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/>
                </div>
<<<<<<< HEAD
                <button type="submit" disabled={loading} data-h className="btn-dark self-start disabled:opacity-70 disabled:cursor-not-allowed">
                  {loading ? 'Sending...' : 'Send Message'}
                  {!loading && <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>}
=======
                <button type="submit" data-h className="btn-dark self-start">
                  Send Message
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
>>>>>>> cd9258085e96bc2f69d3a126ba76b779729af5a8
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
