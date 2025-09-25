import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (
    <>
      <section className='section1'>
        <Sidebar/>
        <Navbar/>
        <Hero/>
      </section>
      <section>div2</section>
      <section id='Contact'>div3</section>
      <section>div4</section>
    </>
  )
}

export default App
