import { motion } from 'framer-motion'
import { SectionContainer } from './SectionContainer'
import { GradientText } from './GradientText'
import { GlassCard } from './GlassCard'
import { Code, ChartBar, Users, Trophy } from '@phosphor-icons/react'

const methodology = [
  {
    step: '01',
    icon: <Code size={32} weight="duotone" />,
    title: 'Concept Learning',
    description: 'Start with solid theoretical foundations through interactive lectures and comprehensive study materials.',
    color: 'from-primary to-secondary'
  },
  {
    step: '02',
    icon: <ChartBar size={32} weight="duotone" />,
    title: 'Hands-On Practice',
    description: 'Apply concepts immediately with guided lab sessions, coding exercises, and real-world scenarios.',
    color: 'from-secondary to-accent'
  },
  {
    step: '03',
    icon: <Users size={32} weight="duotone" />,
    title: 'Live Projects',
    description: 'Work on industry-standard projects that simulate real company environments and challenges.',
    color: 'from-accent to-primary'
  },
  {
    step: '04',
    icon: <Trophy size={32} weight="duotone" />,
    title: 'Career Launch',
    description: 'Get interview-ready with mock interviews, resume workshops, and direct placement support.',
    color: 'from-primary to-accent'
  }
]

export function Methodology() {
  return (
    <SectionContainer id="methodology" className="relative bg-muted/20">
      <div className="absolute inset-0 gradient-bg opacity-30" />
      
      <div className="relative z-10 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Our Training <GradientText>Methodology</GradientText>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A proven 4-step approach that transforms beginners into industry-ready professionals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methodology.map((item, index) => (
            <GlassCard key={item.step} delay={index * 0.15}>
              <div className="space-y-4 relative">
                <div className={`absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} opacity-20 blur-xl`} />
                
                <div className="flex items-center gap-4">
                  <div className={`text-6xl font-bold gradient-text opacity-30`}>
                    {item.step}
                  </div>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white`}>
                    {item.icon}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-2xl space-y-6"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center">
            What Makes Our <GradientText>Training Different</GradientText>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 pt-4">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">Small Batch Sizes</h4>
                  <p className="text-sm text-muted-foreground">Maximum 15 students per batch for personalized attention</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">Lifetime Access</h4>
                  <p className="text-sm text-muted-foreground">Course materials and recordings available forever</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">Industry Tools</h4>
                  <p className="text-sm text-muted-foreground">Train with actual tools used in professional environments</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">Regular Assessments</h4>
                  <p className="text-sm text-muted-foreground">Weekly tests and project reviews to track progress</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">Doubt Clearing Sessions</h4>
                  <p className="text-sm text-muted-foreground">Dedicated time for questions and concept clarification</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">Post-Training Support</h4>
                  <p className="text-sm text-muted-foreground">Continued mentorship even after course completion</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  )
}
