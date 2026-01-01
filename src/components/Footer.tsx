import { Logo } from './Logo'
import { Button } from './ui/button'
import { 
  LinkedinLogo, 
  YoutubeLogo, 
  InstagramLogo, 
  TwitterLogo,
  Envelope,
  Phone,
  MapPin,
  ArrowUp
} from '@phosphor-icons/react'

const footerLinks = {
  courses: [
    { label: 'Data Engineering', href: '#courses' },
    { label: 'AI & Machine Learning', href: '#courses' },
    { label: 'Cloud Computing', href: '#courses' },
    { label: 'Full Stack Development', href: '#courses' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Methodology', href: '#methodology' },
    { label: 'Testimonials', href: '#testimonials' },
  ],
  resources: [
    { label: 'Blog & Insights', href: '#blog' },
    { label: 'Career Guidance', href: '#careers' },
    { label: 'Success Stories', href: '#testimonials' },
    { label: 'FAQs', href: '#contact' },
  ]
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (href: string) => {
    const element = document.getElementById(href.slice(1))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative border-t border-border bg-muted/20">
      <div className="absolute inset-0 gradient-bg opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <Logo size="md" />
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Transforming aspiring professionals into industry-ready engineers through practical, 
              real-time training in cutting-edge technologies.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin size={18} weight="duotone" className="text-primary" />
                <span className="text-muted-foreground">Tirupati, Andhra Pradesh</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone size={18} weight="duotone" className="text-primary" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Envelope size={18} weight="duotone" className="text-primary" />
                <span className="text-muted-foreground">info@poojatechnologies.in</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Popular Courses</h4>
            <ul className="space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pooja Technologies. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <Button size="icon" variant="ghost" className="hover:text-primary hover:bg-primary/10">
              <LinkedinLogo size={20} weight="fill" />
            </Button>
            <Button size="icon" variant="ghost" className="hover:text-primary hover:bg-primary/10">
              <YoutubeLogo size={20} weight="fill" />
            </Button>
            <Button size="icon" variant="ghost" className="hover:text-primary hover:bg-primary/10">
              <InstagramLogo size={20} weight="fill" />
            </Button>
            <Button size="icon" variant="ghost" className="hover:text-primary hover:bg-primary/10">
              <TwitterLogo size={20} weight="fill" />
            </Button>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <button className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </button>
            <span className="text-muted-foreground">•</span>
            <button className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary hover:scale-110 transition-transform z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} weight="bold" />
      </button>
    </footer>
  )
}
