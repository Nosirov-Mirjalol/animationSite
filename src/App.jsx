import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Parallax from './components/Parallax/Parallax'
import Sidebar from './components/Sidebar/Sidebar'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'

function App() {

  return (
    <>
      <section className='section1'>
        <Sidebar />
        <Navbar />
        <Hero />
      </section>
      <section>
        <Parallax parallax={1} />
      </section>
      <section id='Services'>
        <Services />
      </section>
      <section>
        <Parallax parallax={2} />
      </section>
      <Portfolio />
      <section id='Contact'>
        <Contact />
      </section>
    </>
  )
}

export default App
