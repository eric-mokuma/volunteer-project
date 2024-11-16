import React from 'react'
import '../style/index.css'

const projects = [
  { id: 1, title: 'Project One', description: 'Description of project one.' },
  { id: 2, title: 'Project Two', description: 'Description of project two.' },
  {
    id: 3,
    title: 'Project Three',
    description: 'Description of project three.',
  },
]

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
        <p className="text-lg mb-4">
          Welcome to my portfolio page. Here are some of my projects:
        </p>
      </header>
      <section className="projects grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project p-4 border rounded shadow mb-4"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Portfolio
