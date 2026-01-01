import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionContainer } from './SectionContainer'
import { GradientText } from './GradientText'
import { GlassCard } from './GlassCard'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { 
  Database, 
  CloudArrowUp, 
  Code, 
  Brain, 
  PaintBrush, 
  Briefcase, 
  MagnifyingGlass,
  ChartLine,
  Cpu
} from '@phosphor-icons/react'

interface Course {
  id: string
  title: string
  category: string
  description: string
  duration: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
}

const categories = [
  { id: 'all', label: 'All Courses', icon: <ChartLine size={20} weight="duotone" /> },
  { id: 'data', label: 'Data Engineering', icon: <Database size={20} weight="duotone" /> },
  { id: 'cloud', label: 'Cloud & DevOps', icon: <CloudArrowUp size={20} weight="duotone" /> },
  { id: 'ai', label: 'AI & ML', icon: <Brain size={20} weight="duotone" /> },
  { id: 'dev', label: 'Development', icon: <Code size={20} weight="duotone" /> },
  { id: 'creative', label: 'Creative & Digital', icon: <PaintBrush size={20} weight="duotone" /> },
  { id: 'career', label: 'Career Programs', icon: <Briefcase size={20} weight="duotone" /> },
]

const courses: Course[] = [
  {
    id: '1',
    title: 'Full Stack Data Engineering',
    category: 'data',
    description: 'Comprehensive program covering end-to-end data engineering pipeline, from data ingestion to analytics.',
    duration: '6 months',
    level: 'Advanced'
  },
  {
    id: '2',
    title: 'Data Engineering Fundamentals',
    category: 'data',
    description: 'Build strong foundations in data processing, ETL concepts, and data warehouse principles.',
    duration: '3 months',
    level: 'Beginner'
  },
  {
    id: '3',
    title: 'Advanced SQL',
    category: 'data',
    description: 'Master complex queries, optimization techniques, and database performance tuning.',
    duration: '6 weeks',
    level: 'Intermediate'
  },
  {
    id: '4',
    title: 'Python for Data Engineering',
    category: 'data',
    description: 'Learn Python programming specifically for data manipulation, processing, and automation.',
    duration: '8 weeks',
    level: 'Intermediate'
  },
  {
    id: '5',
    title: 'Azure Data Engineering',
    category: 'data',
    description: 'Complete Azure data platform training including ADF, Synapse, Databricks, and Data Lake.',
    duration: '4 months',
    level: 'Advanced'
  },
  {
    id: '6',
    title: 'Azure Data Factory',
    category: 'data',
    description: 'Build and orchestrate data pipelines using Microsoft Azure Data Factory.',
    duration: '6 weeks',
    level: 'Intermediate'
  },
  {
    id: '7',
    title: 'Azure Synapse Analytics',
    category: 'data',
    description: 'Master big data analytics and data warehousing with Azure Synapse.',
    duration: '8 weeks',
    level: 'Advanced'
  },
  {
    id: '8',
    title: 'Azure Data Lake',
    category: 'data',
    description: 'Learn scalable data storage and organization strategies using Azure Data Lake.',
    duration: '4 weeks',
    level: 'Intermediate'
  },
  {
    id: '9',
    title: 'Azure Databricks',
    category: 'data',
    description: 'Apache Spark-based analytics platform on Azure for big data processing.',
    duration: '8 weeks',
    level: 'Advanced'
  },
  {
    id: '10',
    title: 'Big Data & Apache Spark',
    category: 'data',
    description: 'Distributed computing and large-scale data processing with Spark ecosystem.',
    duration: '10 weeks',
    level: 'Advanced'
  },
  {
    id: '11',
    title: 'PySpark',
    category: 'data',
    description: 'Python API for Apache Spark - data processing at scale.',
    duration: '6 weeks',
    level: 'Intermediate'
  },
  {
    id: '12',
    title: 'Snowflake Data Warehouse',
    category: 'data',
    description: 'Cloud-based data warehousing with Snowflake platform.',
    duration: '6 weeks',
    level: 'Intermediate'
  },
  {
    id: '13',
    title: 'Cloud Computing Fundamentals',
    category: 'cloud',
    description: 'Understanding cloud concepts, service models, and deployment strategies.',
    duration: '4 weeks',
    level: 'Beginner'
  },
  {
    id: '14',
    title: 'Azure Cloud Fundamentals',
    category: 'cloud',
    description: 'Complete introduction to Microsoft Azure services and solutions.',
    duration: '6 weeks',
    level: 'Beginner'
  },
  {
    id: '15',
    title: 'CI/CD Basics',
    category: 'cloud',
    description: 'Continuous Integration and Deployment pipelines for modern software delivery.',
    duration: '4 weeks',
    level: 'Intermediate'
  },
  {
    id: '16',
    title: 'MLOps Fundamentals',
    category: 'cloud',
    description: 'Deploy and manage machine learning models in production environments.',
    duration: '6 weeks',
    level: 'Advanced'
  },
  {
    id: '17',
    title: 'Artificial Intelligence Engineer Track',
    category: 'ai',
    description: 'Comprehensive AI program covering ML, DL, NLP, Computer Vision, and deployment.',
    duration: '12 months',
    level: 'Advanced'
  },
  {
    id: '18',
    title: 'Machine Learning',
    category: 'ai',
    description: 'Supervised and unsupervised learning algorithms, model training and evaluation.',
    duration: '3 months',
    level: 'Intermediate'
  },
  {
    id: '19',
    title: 'Deep Learning',
    category: 'ai',
    description: 'Neural networks, CNNs, RNNs, and modern deep learning architectures.',
    duration: '3 months',
    level: 'Advanced'
  },
  {
    id: '20',
    title: 'Generative AI',
    category: 'ai',
    description: 'Build applications with GPT, DALL-E, and other generative models.',
    duration: '8 weeks',
    level: 'Advanced'
  },
  {
    id: '21',
    title: 'Prompt Engineering',
    category: 'ai',
    description: 'Master the art of crafting effective prompts for large language models.',
    duration: '4 weeks',
    level: 'Intermediate'
  },
  {
    id: '22',
    title: 'Large Language Models (LLMs)',
    category: 'ai',
    description: 'Understanding and fine-tuning LLMs like GPT, BERT, and custom models.',
    duration: '8 weeks',
    level: 'Advanced'
  },
  {
    id: '23',
    title: 'Computer Vision',
    category: 'ai',
    description: 'Image processing, object detection, and visual recognition systems.',
    duration: '10 weeks',
    level: 'Advanced'
  },
  {
    id: '24',
    title: 'Robotics & Automation',
    category: 'ai',
    description: 'Intelligent automation systems and robotic process automation.',
    duration: '12 weeks',
    level: 'Advanced'
  },
  {
    id: '25',
    title: 'Python Developer Program',
    category: 'dev',
    description: 'Complete Python development track from basics to advanced frameworks.',
    duration: '4 months',
    level: 'Beginner'
  },
  {
    id: '26',
    title: 'Frontend Development',
    category: 'dev',
    description: 'HTML, CSS, JavaScript, and modern frontend frameworks.',
    duration: '3 months',
    level: 'Beginner'
  },
  {
    id: '27',
    title: 'React.js',
    category: 'dev',
    description: 'Build modern, interactive web applications with React ecosystem.',
    duration: '8 weeks',
    level: 'Intermediate'
  },
  {
    id: '28',
    title: 'Full Stack Web Development',
    category: 'dev',
    description: 'End-to-end web development covering frontend, backend, and databases.',
    duration: '6 months',
    level: 'Intermediate'
  },
  {
    id: '29',
    title: 'API Development & Integration',
    category: 'dev',
    description: 'RESTful APIs, GraphQL, and third-party integrations.',
    duration: '6 weeks',
    level: 'Intermediate'
  },
  {
    id: '30',
    title: 'AI Content Creation',
    category: 'creative',
    description: 'Leverage AI tools for content generation, copywriting, and creative work.',
    duration: '6 weeks',
    level: 'Beginner'
  },
  {
    id: '31',
    title: 'Content Generation',
    category: 'creative',
    description: 'Master AI-driven content creation tools and strategies.',
    duration: '4 weeks',
    level: 'Beginner'
  },
  {
    id: '32',
    title: 'Digital Marketing Fundamentals',
    category: 'creative',
    description: 'SEO, social media marketing, and digital advertising strategies.',
    duration: '8 weeks',
    level: 'Beginner'
  },
  {
    id: '33',
    title: 'Video Editing',
    category: 'creative',
    description: 'Professional video editing with industry-standard tools.',
    duration: '6 weeks',
    level: 'Beginner'
  },
  {
    id: '34',
    title: 'Short-Form Content Creation',
    category: 'creative',
    description: 'Create engaging content for Instagram Reels, YouTube Shorts, and TikTok.',
    duration: '4 weeks',
    level: 'Beginner'
  },
  {
    id: '35',
    title: 'Camera Handling & Media Production',
    category: 'creative',
    description: 'Photography, videography, and media production fundamentals.',
    duration: '8 weeks',
    level: 'Beginner'
  },
  {
    id: '36',
    title: 'Medical Coding',
    category: 'career',
    description: 'Healthcare documentation and medical billing code certification.',
    duration: '3 months',
    level: 'Beginner'
  },
  {
    id: '37',
    title: 'Software Testing',
    category: 'career',
    description: 'Manual and automation testing methodologies and tools.',
    duration: '10 weeks',
    level: 'Beginner'
  },
  {
    id: '38',
    title: 'Automation Testing Basics',
    category: 'career',
    description: 'Selenium, API testing, and test automation frameworks.',
    duration: '8 weeks',
    level: 'Intermediate'
  },
  {
    id: '39',
    title: 'Industry Readiness Program',
    category: 'career',
    description: 'Complete job preparation including resume, interview skills, and real projects.',
    duration: '8 weeks',
    level: 'Beginner'
  },
  {
    id: '40',
    title: 'Job Assistance Program',
    category: 'career',
    description: 'Dedicated placement support with job referrals and career guidance.',
    duration: 'Ongoing',
    level: 'Beginner'
  },
]

const levelColors = {
  Beginner: 'bg-success/20 text-success border-success/30',
  Intermediate: 'bg-primary/20 text-primary border-primary/30',
  Advanced: 'bg-accent/20 text-accent border-accent/30'
}

export function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <SectionContainer id="courses" className="relative">
      <div className="absolute inset-0 gradient-bg opacity-30" />
      
      <div className="relative z-10 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <GradientText>Courses</GradientText>
          </h2>
          <p className="text-xl text-muted-foreground">
            40+ industry-aligned programs designed to make you job-ready in emerging technologies
          </p>
        </motion.div>

        <div className="glass-card p-6 rounded-2xl space-y-6">
          <div className="relative">
            <MagnifyingGlass size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 bg-muted/50 border-border"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className={`gap-2 ${
                  selectedCategory === category.id 
                    ? 'bg-primary hover:bg-primary/90' 
                    : 'hover:bg-primary/10'
                }`}
              >
                {category.icon}
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <GlassCard key={course.id} delay={index * 0.05}>
              <div className="space-y-4 h-full flex flex-col">
                <div className="flex items-start justify-between gap-2">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    course.category === 'data' ? 'bg-primary/20 text-primary' :
                    course.category === 'cloud' ? 'bg-secondary/20 text-secondary' :
                    course.category === 'ai' ? 'bg-accent/20 text-accent' :
                    course.category === 'dev' ? 'bg-success/20 text-success' :
                    course.category === 'creative' ? 'bg-[oklch(0.75_0.2_50)]/20 text-[oklch(0.75_0.2_50)]' :
                    'bg-[oklch(0.65_0.15_180)]/20 text-[oklch(0.65_0.15_180)]'
                  }`}>
                    <Cpu size={24} weight="duotone" />
                  </div>
                  <Badge variant="outline" className={levelColors[course.level]}>
                    {course.level}
                  </Badge>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">{course.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                <div className="flex items-center justify-between text-sm pt-4 border-t border-border">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-semibold text-primary">{course.duration}</span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12 glass-card rounded-2xl">
            <p className="text-xl text-muted-foreground">No courses found matching your criteria.</p>
          </div>
        )}
      </div>
    </SectionContainer>
  )
}
