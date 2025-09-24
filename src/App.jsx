import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (
    <>
      <Sidebar/>
      <section className='section1'>
        <Navbar/>
        <Hero/>
      </section>
      <section>div2</section>
      <section>div3</section>
      <section>div4</section>
    </>
  )
}

export default App
