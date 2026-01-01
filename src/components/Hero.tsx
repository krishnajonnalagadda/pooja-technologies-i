import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { ArrowRight, Lightning, ChartLine } from '@phosphor-icons/react'
import { GradientText } from './GradientText'

export function Hero() {
  const handleNavClick = (href: string) => {
    const element = document.getElementById(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm"
            >
              <Lightning size={20} weight="fill" className="text-primary" />
              <span>15+ Years of Industry Excellence</span>
            </motion.div>

            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Transform Into an{' '}
                <GradientText as="span">
                  Industry-Ready
                </GradientText>{' '}
                Tech Professional
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Master cutting-edge technologies in AI, Data Engineering, Cloud Computing, and Full Stack Development. 
                Join Tirupati's premier IT training institute and launch your dream career.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => handleNavClick('courses')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-8 text-lg group"
              >
                Explore Courses
                <ArrowRight size={20} weight="bold" className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => handleNavClick('contact')}
                className="border-primary/30 hover:bg-primary/10 h-14 px-8 text-lg"
              >
                Book Free Consultation
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex flex-col">
                <div className="text-3xl font-bold gradient-text">500+</div>
                <div className="text-sm text-muted-foreground">Students Trained</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="flex flex-col">
                <div className="text-3xl font-bold gradient-text">40+</div>
                <div className="text-sm text-muted-foreground">Courses Offered</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="flex flex-col">
                <div className="text-3xl font-bold gradient-text">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="glass-card p-8 rounded-2xl space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                    <ChartLine size={32} weight="duotone" className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Career Growth</div>
                    <div className="text-2xl font-bold">Real-Time Training</div>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { label: 'AI & Machine Learning', progress: 95 },
                    { label: 'Data Engineering', progress: 90 },
                    { label: 'Cloud Computing', progress: 88 },
                    { label: 'Full Stack Development', progress: 92 },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    >
                      <div className="flex justify-between text-sm mb-2">
                        <span>{item.label}</span>
                        <span className="text-primary font-semibold">{item.progress}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.progress}%` }}
                          transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/30 rounded-full blur-[60px]" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/30 rounded-full blur-[60px]" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </div>
    </section>
  )
}
