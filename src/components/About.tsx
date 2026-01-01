import { motion } from 'framer-motion'
import { SectionContainer } from './SectionContainer'
import { GradientText } from './GradientText'
import { GlassCard } from './GlassCard'
import { Trophy, Target, Eye, Lightning } from '@phosphor-icons/react'

const values = [
  {
    icon: <Trophy size={32} weight="duotone" />,
    title: 'Excellence',
    description: '15+ years of delivering industry-leading IT training with proven results and student success stories.'
  },
  {
    icon: <Target size={32} weight="duotone" />,
    title: 'Mission',
    description: 'Transform aspiring professionals into industry-ready engineers through practical, real-time training.'
  },
  {
    icon: <Eye size={32} weight="duotone" />,
    title: 'Vision',
    description: 'Be the most trusted IT training partner, bridging the gap between education and employment.'
  },
  {
    icon: <Lightning size={32} weight="duotone" />,
    title: 'Innovation',
    description: 'Stay ahead with cutting-edge curriculum covering AI, ML, Cloud, Data Engineering, and emerging tech.'
  }
]

export function About() {
  return (
    <SectionContainer id="about" className="relative">
      <div className="absolute inset-0 gradient-bg opacity-50" />
      
      <div className="relative z-10 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            About <GradientText>Pooja Technologies</GradientText>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Tirupati's premier IT training institute, empowering the next generation of tech professionals 
            with industry-relevant skills and real-world experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl space-y-4">
              <h3 className="text-2xl font-bold gradient-text">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                Founded by an industry veteran with over 15 years of hands-on experience across multiple 
                technology domains, Pooja Technologies emerged from a simple vision: to bridge the gap 
                between academic knowledge and industry requirements.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What started as a small initiative to help aspiring engineers has grown into Tirupati's 
                most trusted IT training institute, having successfully placed hundreds of students in 
                leading companies across various industries.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our founder's extensive experience in real-time projects, combined with a passion for 
                teaching, ensures that every student receives practical, industry-aligned training that 
                makes them job-ready from day one.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <GlassCard key={value.title} delay={index * 0.1}>
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-2xl"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold gradient-text">15+</div>
              <div className="text-muted-foreground">Years of Experience</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold gradient-text">500+</div>
              <div className="text-muted-foreground">Students Placed</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold gradient-text">100%</div>
              <div className="text-muted-foreground">Practical Training</div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  )
}
