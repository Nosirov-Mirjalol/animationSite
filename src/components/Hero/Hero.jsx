import "./Hero.scss"
import {hero} from '../../assets/images'
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className="container">
        <motion.div initial={{opacity:0,x:-200}} whileInView={{opacity:1,x:0, transition:{duration:1}}} >
          <h2>Mirjalol Nosirov</h2>
          <p>Front end developer</p>
          <button></button>
          <button></button>
        </motion.div>
        <img src={hero} alt="person" />
    </div>
  )
}

export default Hero