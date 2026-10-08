import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Preloader from './components/Preloader'
import Layout from './components/Layout'
import Home from './pages/Home'
import Team from './pages/Team'
import Society from './pages/Society'
import Explore from './pages/Explore'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

const EASE = [0.22, 0.61, 0.36, 1]

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {/* Full-screen website preloader on initial visit */}
      <Preloader onLoadingComplete={() => setLoading(false)} />

      {/* Main Website Container — perfectly stable with zero layout shift */}
      <div className="min-h-screen">
        <Layout>
          <ScrollToTop />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<Team />} />
              <Route path="/about/team" element={<Team />} />
              <Route path="/about/society" element={<Society />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:postId" element={<BlogPost />} />
            </Routes>
          </AnimatePresence>
        </Layout>
      </div>
    </>
  )
}

export default App

