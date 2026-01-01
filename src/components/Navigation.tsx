import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from './Logo'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { List, X, House, BookOpen, GraduationCap, Users, Briefcase, ChatCircle, Article } from '@phosphor-icons/react'

interface NavItem {
  label: string
  href: string
  icon: React.ReactNode
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home', icon: <House size={20} weight="duotone" /> },
  { label: 'About', href: '#about', icon: <Users size={20} weight="duotone" /> },
  { label: 'Courses', href: '#courses', icon: <BookOpen size={20} weight="duotone" /> },
  { label: 'Why Us', href: '#why-us', icon: <GraduationCap size={20} weight="duotone" /> },
  { label: 'Careers', href: '#careers', icon: <Briefcase size={20} weight="duotone" /> },
  { label: 'Blog', href: '#blog', icon: <Article size={20} weight="duotone" /> },
  { label: 'Contact', href: '#contact', icon: <ChatCircle size={20} weight="duotone" /> },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)

  useState(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = navItems.map(item => item.href.slice(1))
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const handleNavClick = (href: string) => {
    const element = document.getElementById(href.slice(1))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card border-b py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Logo size="md" />

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              onClick={() => handleNavClick(item.href)}
              className={`relative text-muted-foreground hover:text-primary transition-colors ${
                activeSection === item.href.slice(1) ? 'text-primary' : ''
              }`}
            >
              {item.label}
              {activeSection === item.href.slice(1) && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Button>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button onClick={() => handleNavClick('#contact')} className="bg-primary hover:bg-primary/90">
            Get Started
          </Button>
        </div>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <List size={24} weight="bold" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="glass-card border-l w-[300px] p-0">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-border">
                <Logo size="sm" showText={false} />
                <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)}>
                  <X size={24} />
                </Button>
              </div>

              <div className="flex flex-col gap-2 p-4 flex-1">
                {navItems.map((item) => (
                  <Button
                    key={item.href}
                    variant="ghost"
                    onClick={() => handleNavClick(item.href)}
                    className={`justify-start gap-3 h-12 ${
                      activeSection === item.href.slice(1) ? 'bg-primary/10 text-primary' : ''
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </Button>
                ))}
              </div>

              <div className="p-4 border-t border-border">
                <Button onClick={() => handleNavClick('#contact')} className="w-full bg-primary hover:bg-primary/90">
                  Get Started
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  )
}
