import { motion } from 'framer-motion'
import { SectionContainer } from './SectionContainer'
import { GradientText } from './GradientText'
import { GlassCard } from './GlassCard'
import { Button } from './ui/button'
import { Calendar, ArrowRight, TrendUp, Brain, CloudArrowUp } from '@phosphor-icons/react'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  icon: React.ReactNode
}

const posts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in 2024: Trends Every Engineer Should Know',
    excerpt: 'Explore the latest developments in artificial intelligence, from Generative AI to multimodal models, and understand how they\'re reshaping the tech industry.',
    category: 'Artificial Intelligence',
    date: 'Dec 15, 2024',
    readTime: '5 min read',
    icon: <Brain size={24} weight="duotone" />
  },
  {
    id: '2',
    title: 'Data Engineering vs Data Science: Which Career Path is Right for You?',
    excerpt: 'A comprehensive comparison of two high-demand careers in the data domain, including skills required, salary expectations, and job opportunities.',
    category: 'Career Guidance',
    date: 'Dec 10, 2024',
    readTime: '7 min read',
    icon: <TrendUp size={24} weight="duotone" />
  },
  {
    id: '3',
    title: 'Mastering Azure Data Factory: A Beginner\'s Guide',
    excerpt: 'Learn the fundamentals of Azure Data Factory, including pipeline creation, data transformation, and integration with other Azure services.',
    category: 'Cloud Computing',
    date: 'Dec 5, 2024',
    readTime: '10 min read',
    icon: <CloudArrowUp size={24} weight="duotone" />
  },
  {
    id: '4',
    title: 'Top 10 Python Libraries for Data Engineers in 2024',
    excerpt: 'Discover the must-know Python libraries that every data engineer should master, from pandas to Apache Airflow.',
    category: 'Data Engineering',
    date: 'Nov 28, 2024',
    readTime: '6 min read',
    icon: <Brain size={24} weight="duotone" />
  },
  {
    id: '5',
    title: 'How to Crack Your First Tech Interview: Tips from Industry Experts',
    excerpt: 'Practical advice on preparing for technical interviews, common questions, and strategies to stand out to recruiters.',
    category: 'Career Guidance',
    date: 'Nov 20, 2024',
    readTime: '8 min read',
    icon: <TrendUp size={24} weight="duotone" />
  },
  {
    id: '6',
    title: 'The Rise of Generative AI: Skills You Need to Stay Relevant',
    excerpt: 'As Generative AI transforms industries, learn which skills and knowledge areas you should focus on to remain competitive.',
    category: 'Artificial Intelligence',
    date: 'Nov 15, 2024',
    readTime: '6 min read',
    icon: <Brain size={24} weight="duotone" />
  }
]

export function Blog() {
  return (
    <SectionContainer id="blog" className="relative">
      <div className="absolute inset-0 gradient-bg opacity-50" />
      
      <div className="relative z-10 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Insights & <GradientText>Resources</GradientText>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Stay updated with the latest trends, career advice, and technical guides from industry experts
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <GlassCard key={post.id} delay={index * 0.1}>
              <div className="space-y-4 h-full flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                    {post.icon}
                  </div>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>

                <div className="flex-1 space-y-3">
                  <div className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold">
                    {post.category}
                  </div>
                  
                  <h3 className="text-xl font-bold line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 group">
                    Read More
                    <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
            View All Articles
            <ArrowRight size={20} weight="bold" className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </SectionContainer>
  )
}
