import { motion } from 'framer-motion'
import { SectionContainer } from './SectionContainer'
import { GradientText } from './GradientText'
import { GlassCard } from './GlassCard'
import { 
  Rocket, 
  Users, 
  ChartLineUp, 
  Certificate, 
  Briefcase, 
  Clock 
} from '@phosphor-icons/react'

const features = [
  {
    icon: <Rocket size={40} weight="duotone" />,
    title: 'Real-Time Project Training',
    description: 'Work on live industry projects to gain hands-on experience that employers value. Build a portfolio while you learn.'
  },
  {
    icon: <Users size={40} weight="duotone" />,
    title: 'Expert Mentorship',
    description: 'Learn from industry veterans with 15+ years of real-world experience across multiple technology domains.'
  },
  {
    icon: <ChartLineUp size={40} weight="duotone" />,
    title: 'Industry-Aligned Curriculum',
    description: 'Our courses are constantly updated to match current industry requirements and emerging technology trends.'
  },
  {
    icon: <Certificate size={40} weight="duotone" />,
    title: 'Certification Support',
    description: 'Get prepared for industry-recognized certifications in Azure, AWS, and other major technology platforms.'
  },
  {
    icon: <Briefcase size={40} weight="duotone" />,
    title: '100% Placement Assistance',
    description: 'Dedicated career support including resume building, interview prep, and direct job referrals to our hiring partners.'
  },
  {
    icon: <Clock size={40} weight="duotone" />,
    title: 'Flexible Learning Options',
    description: 'Choose from weekday, weekend, or fast-track batches that fit your schedule without compromising quality.'
  }
]

export function WhyUs() {
  return (
    <SectionContainer id="why-us" className="relative">
      <div className="absolute inset-0 gradient-bg opacity-50" />
      
      <div className="relative z-10 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose <GradientText>Pooja Technologies</GradientText>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We don't just teach technology—we transform careers with practical training and proven results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <GlassCard key={feature.title} delay={index * 0.1}>
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
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
          className="glass-card p-8 md:p-12 rounded-2xl"
        >
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-bold">
              Join <GradientText>500+ Successful</GradientText> Graduates
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our alumni work at top companies across India and globally. With our proven training methodology 
              and personalized career support, you'll be next.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="glass-card px-6 py-3 rounded-full">
                <span className="font-semibold text-primary">95%</span> Success Rate
              </div>
              <div className="glass-card px-6 py-3 rounded-full">
                <span className="font-semibold text-primary">1500+</span> Hours of Training
              </div>
              <div className="glass-card px-6 py-3 rounded-full">
                <span className="font-semibold text-primary">50+</span> Hiring Partners
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  )
}
