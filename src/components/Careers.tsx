import { motion } from 'framer-motion'
import { SectionContainer } from './SectionContainer'
import { GradientText } from './GradientText'
import { GlassCard } from './GlassCard'
import { Button } from './ui/button'
import { 
  FileText, 
  UsersFour, 
  Target, 
  CheckCircle,
  ArrowRight 
} from '@phosphor-icons/react'

const services = [
  {
    icon: <FileText size={32} weight="duotone" />,
    title: 'Resume Building',
    description: 'Professional resume crafting that highlights your skills and projects to stand out to recruiters.'
  },
  {
    icon: <UsersFour size={32} weight="duotone" />,
    title: 'Interview Preparation',
    description: 'Comprehensive interview coaching covering technical questions, behavioral rounds, and HR discussions.'
  },
  {
    icon: <Target size={32} weight="duotone" />,
    title: 'Mock Interviews',
    description: 'Realistic interview simulations with detailed feedback to build your confidence and skills.'
  },
  {
    icon: <CheckCircle size={32} weight="duotone" />,
    title: 'Job Referrals',
    description: 'Direct referrals to our network of 50+ hiring partners across multiple industries and locations.'
  }
]

export function Careers() {
  const handleContactClick = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <SectionContainer id="careers" className="relative">
      <div className="absolute inset-0 gradient-bg opacity-50" />
      
      <div className="relative z-10 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Career & <GradientText>Job Assistance</GradientText>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From training to placement—we're with you every step of your career journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <GlassCard key={service.title} delay={index * 0.1}>
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
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
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="glass-card p-8 rounded-2xl space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              Our <GradientText>Placement Process</GradientText>
            </h3>
            
            <div className="space-y-4">
              {[
                'Complete skill assessment and gap analysis',
                'Personalized resume creation and portfolio review',
                'Technical and HR interview preparation sessions',
                'Mock interviews with industry professionals',
                'Job matching with suitable hiring partners',
                'Interview scheduling and coordination',
                'Post-placement support and guidance'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle size={20} weight="fill" className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl space-y-6">
            <h3 className="text-2xl font-bold">Success Stories</h3>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text">500+</div>
                <p className="text-muted-foreground">Students successfully placed in top companies</p>
              </div>

              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text">₹4.5L</div>
                <p className="text-muted-foreground">Average package for our graduates</p>
              </div>

              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text">50+</div>
                <p className="text-muted-foreground">Hiring partners across India</p>
              </div>
            </div>

            <Button
              onClick={handleContactClick}
              className="w-full bg-primary hover:bg-primary/90 group h-12"
            >
              Start Your Career Journey
              <ArrowRight size={20} weight="bold" className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-2xl text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            <GradientText>100% Placement Assistance</GradientText> Guarantee
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We don't just train you—we ensure you land your dream job. Every student gets dedicated 
            placement support until they're successfully placed.
          </p>
        </motion.div>
      </div>
    </SectionContainer>
  )
}
