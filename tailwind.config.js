export default {
  content: ['./index.html','./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Fraunces"','serif'],
        body:    ['"DM Sans"','sans-serif'],
        mono:    ['"JetBrains Mono"','monospace'],
      },
      colors: {
        violet: { 50:'#F5F3FF',100:'#EDE9FE',200:'#DDD6FE',300:'#C4B5FD',400:'#A78BFA',500:'#8B5CF6',600:'#7C3AED',700:'#6D28D9',800:'#5B21B6',900:'#4C1D95' },
      },
      animation: {
        'spin-slow':'spin-slow 18s linear infinite',
        'spin-rev':'spin-rev 24s linear infinite',
      }
    },
  },
  plugins:[],
}
