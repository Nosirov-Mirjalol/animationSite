import "./Navbar.scss"
import { dribbble, facebook, instagram, youtube } from "../../assets/images"

const Navbar = () => {
  return (
    <nav>
      <h2>AELROW DEV</h2>
      <ul>
        <li><img src={facebook} alt="" /></li>
        <li><img src={instagram} alt="" /></li>
        <li><img src={youtube} alt="" /></li>
        <li><img src={dribbble} alt="" /></li>
      </ul>
    </nav>
  )
}

export default Navbar