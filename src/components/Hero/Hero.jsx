import "./Hero.scss"
import { hero, scroll } from '../../assets/images'
import { motion } from "framer-motion"

const Hero = () => {
  const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
      ease: "linear",
    },
  },
};

  return (
    <div className="sectionContainer">
      <motion.div className="container" initial={{ opacity: 0, x: -200 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 1.5 } }} >
        <h2>Mirjalol Nosirov</h2>
        <p>Front end developer</p>
        <button className="btn btn1">See the Latest Works</button>
        <button className="btn btn2">Contact Me</button>
        <motion.img initial={{ opacity: 1, y: 0 }} animate={{ opacity: 0, y: 20 }} transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }} className="scroll" src={scroll} alt="" />
      </motion.div>
      <motion.div variants={sliderVariants} initial={"initial"} animate={"animate"} className="slideText">
        Writer Content Creator Influencer
      </motion.div>
      <img src={hero} alt="person" />
    </div>
  )
}

export default Hero