import React from 'react'
import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <div className="services p-6">
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <p className="text-lg mb-4">
        We offer a variety of services to help you succeed.
      </p>
      <div className="mt-4">
        <Link to="/testimonials" className="btn-blue hover:underline">
          See what our clients say about us!
        </Link>
      </div>
    </div>
  )
}
