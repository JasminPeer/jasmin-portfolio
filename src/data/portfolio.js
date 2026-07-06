import resumePdf from '../assest/Jas_Resume.pdf';


export const data = {
  name: "Jasmin Fathima P",
  title: "MERN Stack Developer",
  roles: ["MERN Stack Developer", "Full-Stack Engineer", "React Developer", "Node.js Developer", "REST API Builder"],
  tagline: "Building scalable, secure, and elegant web applications — from REST APIs to real-time interfaces.",
  location: "Namakkal, Tamil Nadu",

  email: "jasminpeer006@gmail.com",
  phone: "9047072417",
  github: "https://github.com/JasminPeer",
  linkedin: "https://www.linkedin.com/in/jasmin-fathima-peer-964416300/",
  resumeUrl: resumePdf,

  


  about: "I'm an Information Science undergraduate at Bannari Amman Institute of Technology, passionate about crafting full-stack web applications that solve real problems. I specialize in the MERN stack — building secure authentication systems, RESTful APIs, and intuitive user interfaces. I believe in writing clean, maintainable code that scales gracefully.",

  education: [
    {
      degree: "B.E. Information Science and Engineering",
      institution: "Bannari Amman Institute of Technology",
      period: "2023 – Present",
      score: "CGPA: 7.53 / 10",
      active: true,
    },
    {
      degree: "Higher Secondary Education",
      institution: "Government Higher Secondary School",
      period: "2022 – 2023",
      score: "81.5%",
      active: false,
    },
  ],

  skills: {
    core: [
      { name: "MongoDB", level: 80, icon: "🍃", color: "#10B981" },
      { name: "React.js", level: 70, icon: "⚛️", color: "#3B82F6" },
      { name: "Express.js", level: 60, icon: "🚂", color: "#6D28D9" },
      { name: "Node.js", level: 60, icon: "🟢", color: "#22C55E" },
    ],
    languages: [
      { name: "JavaScript", level: 60, icon: "JS", color: "#F59E0B", text: true },
      { name: "Java", level: 30, icon: "☕", color: "#F97316", text: false },
      { name: "C", level: 40, icon: "⚙️", color: "#64748B", text: false },
      { name: "SQL", level: 50, icon: "🗄️", color: "#3B82F6", text: false },

      { name: "React.js", level: 70, icon: "⚛️", color: "#3B82F6" },
      { name: "Express.js", level: 60, icon: "🚂", color: "#6D28D9" },
      { name: "Node.js", level: 60, icon: "🟢", color: "#22C55E" },
    ],
    // languages: [
    //   { name: "JavaScript", level:60, icon: "JS", color: "#F59E0B", text: true },
    //   { name: "Java", level: 78, icon: "☕", color: "#EF4444" },
    //   { name: "C", level: 75, icon: "C", color: "#6366F1", text: true },
    //   { name: "SQL", level: 80, icon: "🗃️", color: "#0EA5E9" },

    // ],
    tools: ["Git & GitHub", "Figma", "VS Code", "Postman", "JWT Auth", "REST APIs", "CRUD", "RBAC", "MongoDB Atlas", "Bootstrap"],
  },

  projects: [
  {
    name: "LearniQ",
    subtitle: "Learning Progress Intelligence System",
    description: "A scalable MERN platform...",
    tech: ["MongoDB", "React.js", "Node.js", "Express.js", "CRUD"],
    color: "#3B82F6",
    gradient: "from-blue-50 via-indigo-50 to-violet-50",
    icon: "🎓",
    liveUrl: "https://smart-learning-frontend.onrender.com/",
    highlights: ["Admin & Student dashboards", "Certificate generation", "Structured assessments"],
  },

  {
    name: 'Sree Bhagavathy Clothing',
    subtitle: 'Fabric Store · E-Commerce',
    description: 'A full-featured fabric and clothing store...',
    icon: '🧵',
    gradient: 'from-rose-200 to-pink-300',
    color: '#F43F5E',
    liveUrl: 'https://sree-bhagavathy-clothing.vercel.app/',
    tech: ['React', 'Tailwind CSS', 'Vercel'],
    highlights: [
      'Product catalog with category filtering',
      'Responsive design for all screen sizes',
      'Smooth UI with intuitive navigation',
    ],
  },

  {
    name: 'Cosmora Space Explorer',
    subtitle: 'Space · Interactive Web',
    description: 'An immersive space exploration website...',
    icon: '🚀',
    gradient: 'from-indigo-900 to-violet-800',
    color: '#6D28D9',
    liveUrl: 'https://cosmora-space-explorer.vercel.app/',
    tech: ['React', 'CSS Animations', 'Vercel'],
    highlights: [
      'Cinematic space-themed visual design',
      'Interactive planetary exploration',
      'Smooth scroll animations and transitions',
    ],
  },

  {
    name: 'Sole Shoes',
    subtitle: 'Shoe Store · E-Commerce',
    description: 'A stylish shoe store...',
    icon: '👟',
    gradient: 'from-amber-200 to-orange-300',
    color: '#F97316',
    liveUrl: 'https://jasminpeer.github.io/sole_shoes/',
    tech: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
    highlights: [
      'Clean product showcase layout',
      'Mobile-responsive storefront',
      'Fast-loading static site',
    ],
  },

  {
    name: "ZADES T-Shirt Website",
    subtitle: "T-Shirt Store · Frontend Web",
    description: "A modern t-shirt e-commerce website...",
    icon: "👕",
    gradient: "from-gray-200 to-gray-300",
    color: "#111827",
    liveUrl: "https://jasminpeer.github.io/tshirt_website/",
    tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    highlights: [
      "Clean and modern UI design",
      "Responsive layout for all devices",
      "Product showcase with smooth navigation",
    ],
  },

  {
    name: "FitZone Gym Website",
    subtitle: "Fitness · Gym Landing Page",
    description: "A modern gym website...",
    icon: "🏋️",
    gradient: "from-green-200 to-emerald-300",
    color: "#059669",
    liveUrl: "https://jasminpeer.github.io/gym_website/",
    tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    highlights: [
      "Attractive fitness-themed UI design",
      "Responsive layout for mobile and desktop",
      "Sections for membership, trainers, and services",
    ],
  },

  {
    name: 'Thread Sphere',
    subtitle: '3D T-Shirt Customizer',
    description: 'An interactive 3D t-shirt customization tool...',
    icon: '👕',
    gradient: 'from-cyan-200 to-teal-300',
    color: '#0D9488',
    liveUrl: 'https://thread-sphere-3d-shop.lovable.app',
    tech: ['React', 'Three.js', 'Lovable'],
    highlights: [
      'Real-time 3D t-shirt preview',
      'Custom color and design picker',
      'Smooth 3D rendering with Three.js',
    ],
  },

  {
    name: "EduPath Learning App",
    subtitle: "UI/UX Case Study · Edu-Tech",
    description: "A Figma prototype for an education app focused on course learning and quiz design, exploring intuitive navigation and engaging interaction patterns for online learners.",
    tech: ["Figma", "UI/UX Design", "Prototyping", "Wireframing"],
    color: "#8B5CF6",
    gradient: "from-purple-50 via-violet-50 to-fuchsia-50",
    icon: "🎨",
    liveUrl: "https://www.figma.com/proto/NG2B2eVEiGmhUoCqF0mEHy/education-app?node-id=1-6&starting-point-node-id=1%3A6&t=Ht71hFgVFeqv0frj-1",
    highlights: ["Course learning flow design", "Interactive quiz UI", "Clean, learner-friendly navigation"],
  }
]
}
