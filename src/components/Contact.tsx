import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionContainer } from './SectionContainer'
import { GradientText } from './GradientText'
import { GlassCard } from './GlassCard'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { toast } from 'sonner'
import { 
  Envelope, 
  Phone, 
  MapPin, 
  LinkedinLogo, 
  YoutubeLogo, 
  InstagramLogo,
  PaperPlaneRight 
} from '@phosphor-icons/react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1500))

    toast.success('Thank you! We\'ll contact you within 24 hours.', {
      description: 'Your inquiry has been successfully submitted.'
    })

    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      message: ''
    })

    setIsSubmitting(false)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <SectionContainer id="contact" className="relative">
      <div className="absolute inset-0 gradient-bg opacity-50" />
      
      <div className="relative z-10 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In <GradientText>Touch</GradientText>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to transform your career? Reach out for a free consultation and course guidance
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <GlassCard hover={false}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    className="h-12 bg-muted/50 border-border"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="h-12 bg-muted/50 border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      className="h-12 bg-muted/50 border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="course">Interested Course *</Label>
                  <Select value={formData.course} onValueChange={(value) => handleInputChange('course', value)} required>
                    <SelectTrigger id="course" className="h-12 bg-muted/50 border-border">
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent className="glass-card border-border">
                      <SelectItem value="data-engineering">Data Engineering</SelectItem>
                      <SelectItem value="azure-data">Azure Data Engineering</SelectItem>
                      <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
                      <SelectItem value="full-stack">Full Stack Development</SelectItem>
                      <SelectItem value="python">Python Developer</SelectItem>
                      <SelectItem value="cloud">Cloud Computing</SelectItem>
                      <SelectItem value="other">Other / Not Sure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your background and career goals..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="min-h-[120px] bg-muted/50 border-border resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-primary hover:bg-primary/90 group"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <PaperPlaneRight size={20} weight="bold" className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <GlassCard hover={false}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Visit Our Campus</h3>
                  <p className="text-muted-foreground">
                    Come experience our state-of-the-art training facility in the heart of Tirupati
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                      <MapPin size={24} weight="duotone" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Address</div>
                      <div className="text-sm text-muted-foreground">
                        Pooja Technologies<br />
                        Near Main Bus Stand<br />
                        Tirupati, Andhra Pradesh 517501<br />
                        India
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary flex-shrink-0">
                      <Phone size={24} weight="duotone" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Phone</div>
                      <div className="text-sm text-muted-foreground">
                        +91 98765 43210<br />
                        +91 98765 43211
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                      <Envelope size={24} weight="duotone" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <div className="text-sm text-muted-foreground">
                        info@poojatechnologies.in<br />
                        admissions@poojatechnologies.in
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard hover={false}>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Connect With Us</h3>
                <div className="flex gap-3">
                  <Button size="icon" variant="outline" className="w-12 h-12 border-primary/30 hover:bg-primary/10 hover:border-primary">
                    <LinkedinLogo size={24} weight="fill" />
                  </Button>
                  <Button size="icon" variant="outline" className="w-12 h-12 border-primary/30 hover:bg-primary/10 hover:border-primary">
                    <YoutubeLogo size={24} weight="fill" />
                  </Button>
                  <Button size="icon" variant="outline" className="w-12 h-12 border-primary/30 hover:bg-primary/10 hover:border-primary">
                    <InstagramLogo size={24} weight="fill" />
                  </Button>
                </div>
              </div>
            </GlassCard>

            <GlassCard hover={false} className="bg-gradient-to-br from-primary/10 to-accent/10">
              <div className="space-y-3">
                <h3 className="text-lg font-bold">Office Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-semibold">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  )
}
