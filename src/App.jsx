import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import InteractiveMap from './components/InteractiveMap'

function App() {
  return (
    <div className="app-container">
      <Hero />
      <InteractiveMap />
      
      <footer style={{
        textAlign: 'center', 
        padding: '40px 24px', 
        color: 'var(--text-muted)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        marginTop: '60px'
      }}>
        <p>© 2026 Tesla Stream Trip. Tune in to vote on the next route!</p>
      </footer>
    </div>
  )
}

export default App
