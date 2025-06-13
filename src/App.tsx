import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

interface Project {
  id: number
  title: string
  description: string
  category: 'frontend' | 'backend' | 'ba' | 'pm'
  technologies: string[]
  imageUrl: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modern E-commerce Platform",
    description: "A responsive e-commerce platform built with React and Node.js",
    category: "frontend",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    imageUrl: "https://via.placeholder.com/400x300"
  },
  {
    id: 2,
    title: "API Gateway Service",
    description: "Microservices architecture with API gateway",
    category: "backend",
    technologies: ["Node.js", "Express", "MongoDB"],
    imageUrl: "https://via.placeholder.com/400x300"
  },
  {
    id: 3,
    title: "Business Process Analysis",
    description: "Comprehensive business process analysis and optimization",
    category: "ba",
    technologies: ["BPMN", "UML", "Jira"],
    imageUrl: "https://via.placeholder.com/400x300"
  },
  {
    id: 4,
    title: "Agile Project Management",
    description: "Implementation of Agile methodologies in software development",
    category: "pm",
    technologies: ["Scrum", "Kanban", "Jira"],
    imageUrl: "https://via.placeholder.com/400x300"
  }
]

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const filteredProjects = selectedCategory
    ? projects.filter(project => project.category === selectedCategory)
    : projects

  const categoryIcons = {
    frontend: '🖼️',
    backend: '⚙️',
    ba: '🔍',
    pm: '📋'
  }

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-lg ${
              !selectedCategory
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100 dark:bg-gray-700'
            }`}
          >
            All Projects
          </button>
          {Object.entries(categoryIcons).map(([category, icon]) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700'
              }`}
            >
              <span>{icon}</span>
              <span className="capitalize">{category}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="project-card"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <span
                className={`category-badge ${
                  project.category === 'frontend'
                    ? 'frontend-badge'
                    : project.category === 'backend'
                    ? 'backend-badge'
                    : project.category === 'ba'
                    ? 'ba-badge'
                    : 'pm-badge'
                }`}
              >
                {categoryIcons[project.category]} {project.category.toUpperCase()}
              </span>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
