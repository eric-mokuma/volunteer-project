import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Header from './components/Header'
import Footer from './components/Footer'
import ChatBox from './components/ChatBox'

const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* Navigation */}
        <Header />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>

        {/* Footer */}
        <Footer />

        {/* Chat Box */}
        <ChatBox />
      </div>
    </Router>
  )
}

export default App
