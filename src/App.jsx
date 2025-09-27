import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Parallax from './components/Parallax/Parallax'
import Sidebar from './components/Sidebar/Sidebar'
import Services from './components/Services/Services'

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
        <Services/>
      </section>
      <section id='Contact'>
        <Parallax parallax={2} />
      </section>
      <section></section>
    </>
  )
}

export default App
