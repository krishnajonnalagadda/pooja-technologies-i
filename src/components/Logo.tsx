import { motion } from 'framer-motion'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
}

export function Logo({ size = 'md', showText = true }: LogoProps) {
  const sizes = {
    sm: 32,
    md: 40,
    lg: 56
  }

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl'
  }

  const dimension = sizes[size]

  return (
    <div className="flex items-center gap-3">
      <motion.svg
        width={dimension}
        height={dimension}
        viewBox="0 0 100 100"
        initial={{ rotate: 0 }}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.8 }}
      >
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.70 0.19 230)" />
            <stop offset="100%" stopColor="oklch(0.65 0.25 330)" />
          </linearGradient>
        </defs>
        
        <rect
          x="10"
          y="10"
          width="80"
          height="80"
          rx="16"
          fill="none"
          stroke="url(#logo-gradient)"
          strokeWidth="3"
        />
        
        <path
          d="M 30 35 L 30 65 L 45 65 Q 55 65 55 55 Q 55 45 45 45 L 30 45"
          fill="none"
          stroke="url(#logo-gradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        <path
          d="M 65 35 L 65 65 M 65 35 L 75 35"
          fill="none"
          stroke="url(#logo-gradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
      
      {showText && (
        <span className={`font-bold gradient-text ${textSizes[size]}`}>
          Pooja Technologies
        </span>
      )}
    </div>
  )
}
