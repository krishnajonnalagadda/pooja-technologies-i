import { motion } from 'framer-motion'
import { SectionContainer } from './SectionContainer'
import { GradientText } from './GradientText'
import { GlassCard } from './GlassCard'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Star, Quotes } from '@phosphor-icons/react'

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  image?: string
  rating: number
  text: string
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    role: 'Data Engineer',
    company: 'Tech Corp India',
    rating: 5,
    text: 'The Azure Data Engineering course transformed my career. The practical training and real-time projects gave me the confidence to crack interviews at top companies. Now working as a Data Engineer with a great package!'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'ML Engineer',
    company: 'AI Solutions Ltd',
    rating: 5,
    text: 'Best decision I made was joining the AI Engineer track here. The instructors have deep industry knowledge and the hands-on approach made complex concepts easy to understand. Got placed within 2 weeks of completion!'
  },
  {
    id: '3',
    name: 'Srinivas Reddy',
    role: 'Full Stack Developer',
    company: 'Digital Innovations',
    rating: 5,
    text: 'Coming from a non-IT background, I was nervous about learning programming. But the step-by-step approach and mentor support made it smooth. Now I\'m a confident Full Stack Developer!'
  },
  {
    id: '4',
    name: 'Lakshmi Devi',
    role: 'Cloud Engineer',
    company: 'Cloud Services Inc',
    rating: 5,
    text: 'The Azure Cloud training was comprehensive and practical. Mock interviews and resume building sessions were extremely helpful. The placement team worked tirelessly to get me multiple interview calls.'
  },
  {
    id: '5',
    name: 'Venkat Rao',
    role: 'Python Developer',
    company: 'Software Solutions',
    rating: 5,
    text: 'Excellent training institute! The Python Developer program covered everything from basics to advanced frameworks. The real-time project experience was invaluable during interviews.'
  },
  {
    id: '6',
    name: 'Divya Reddy',
    role: 'Data Analyst',
    company: 'Analytics Pro',
    rating: 5,
    text: 'The SQL and Data Engineering fundamentals course helped me transition from manual testing to data analytics. The faculty is patient and explains concepts clearly with real-world examples.'
  }
]

export function Testimonials() {
  return (
    <SectionContainer id="testimonials" className="relative bg-muted/20">
      <div className="absolute inset-0 gradient-bg opacity-30" />
      
      <div className="relative z-10 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Student <GradientText>Success Stories</GradientText>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Hear from our alumni who transformed their careers with our training programs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <GlassCard key={testimonial.id} delay={index * 0.1}>
              <div className="space-y-4 h-full flex flex-col">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12 border-2 border-primary/30">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback className="bg-primary/20 text-primary font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  <Quotes size={32} weight="fill" className="text-primary/20" />
                </div>

                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} weight="fill" className="text-primary" />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {testimonial.text}
                </p>

                <div className="pt-4 border-t border-border">
                  <div className="text-xs text-muted-foreground">Currently at</div>
                  <div className="text-sm font-semibold text-primary">{testimonial.company}</div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-2xl text-center"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              Ready to Write Your <GradientText>Success Story?</GradientText>
            </h3>
            <p className="text-lg text-muted-foreground">
              Join hundreds of successful graduates who transformed their careers with Pooja Technologies. 
              Your journey to becoming an industry-ready professional starts here.
            </p>
            <div className="flex flex-wrap justify-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold gradient-text">4.9/5</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">500+</div>
                <div className="text-sm text-muted-foreground">Happy Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">95%</div>
                <div className="text-sm text-muted-foreground">Placement Rate</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  )
}
