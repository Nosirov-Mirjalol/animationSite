import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Parallax from './components/Parallax/Parallax'
import Portfolio from './components/Portfolio/Portfolio'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (
    <>
      <section className='section1'>
        <Sidebar/>
        <Navbar/>
        <Hero/>
      </section>
      <section>
        <Parallax parallax={1}/>
      </section>
      <section id='Portfolio'>
        <Portfolio />
      </section>
      <section id='Contact'>
        <Parallax parallax={2} />
      </section>
      <section></section>
    </>
  )
}

export default App
