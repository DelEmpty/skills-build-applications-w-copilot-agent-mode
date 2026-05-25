import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Home() {
  return <div className="container mt-4"><h1>Octofit Tracker</h1><p>Benvenuto!</p></div>
}

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Octofit</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}
