import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Parallax from './components/Parallax/Parallax'
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
      <section id='Contact'>div3</section>
      <section>
        <Parallax parallax={2} />
      </section>
      <section></section>
    </>
  )
}

export default App
