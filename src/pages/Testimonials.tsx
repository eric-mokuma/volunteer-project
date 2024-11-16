import React from 'react'
import '../styles/index.css'

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    feedback: 'This is an amazing service! Highly recommend.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    feedback: 'A wonderful experience from start to finish.',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    feedback: 'I loved working with this team. They are the best!',
  },
]

const Testimonials: React.FC = () => {
  return (
    <div className="testimonials p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Testimonials</h1>
        <p className="text-lg mb-4">What our clients say about us:</p>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="testimonial p-4 border rounded shadow mb-4"
          >
            <h2 className="text-xl font-semibold">{testimonial.name}</h2>
            <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Testimonials
