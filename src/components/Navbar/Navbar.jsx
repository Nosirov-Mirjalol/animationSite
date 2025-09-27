import "./Navbar.scss"
import { motion } from "framer-motion"
import { dribbble, facebook, instagram, youtube } from "../../assets/images"

const Navbar = () => {
  return (
    <>
      <motion.nav id="Homepage" initial={{ opacity: 0, scale:0.5 }} animate={{ opacity: 1, scale:1, transition:{duration:1}}} >
        <h2>AELROW DEV</h2>
        <ul>
          <li><img src={facebook} alt="" /></li>
          <li><img src={instagram} alt="" /></li>
          <a href="https://github.com/Nosirov-Mirjalol"><img src={dribbble} alt="" /></a>
          <li><img src={youtube} alt="" /></li>
        </ul>
      </motion.nav>
    </>
  )
}

export default Navbar