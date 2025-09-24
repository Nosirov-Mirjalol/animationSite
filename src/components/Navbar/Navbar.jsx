import "./Navbar.scss"
import SideBar from './SideBar'
import { motion } from "framer-motion"
import { dribbble, facebook, instagram, youtube } from "../../assets/images"

const Navbar = () => {
  return (
    <>
      <sideBar/>
      <motion.nav initial={{ opacity: 0, x: -100, y: -10 }} animate={{ opacity: 1, x: 0, y: 0 }} >
        <h2>AELROW DEV</h2>
        <ul>
          <li><img src={facebook} alt="" /></li>
          <li><img src={instagram} alt="" /></li>
          <li><img src={youtube} alt="" /></li>
          <li><img src={dribbble} alt="" /></li>
        </ul>
      </motion.nav>
    </>
  )
}

export default Navbar