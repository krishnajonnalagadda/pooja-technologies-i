import { Toaster } from 'sonner'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Courses } from './components/Courses'
import { WhyUs } from './components/WhyUs'
import { Methodology } from './components/Methodology'
import { Careers } from './components/Careers'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Courses />
        <WhyUs />
        <Methodology />
        <Careers />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-right" theme="dark" />
    </div>
  )
}

export default App