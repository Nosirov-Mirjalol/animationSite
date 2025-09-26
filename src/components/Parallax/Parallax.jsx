import { motion, useScroll,useTransform } from 'framer-motion'
import './Parallax.scss'
import { useRef } from 'react'

const Parallax = ({
  parallax
}) => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target:ref,
    offset:["start start","end start"]
  })
  const yText=useTransform(scrollYProgress,[0,1],["0%","300%"])
  const yBg=useTransform(scrollYProgress,[0,1],["0%","90%"])
  return (
    <div ref={ref} id={parallax === 1 ? "Services" : "About"} className={parallax === 1 ? "parallax dark" : "parallax light"}>
      <motion.h1 style={{y:yText}}>{parallax === 1 ? "What We Do" : "What We Did"}</motion.h1>
      <motion.div className="mountain"></motion.div>
      <motion.div style={{y:yBg}} className={parallax===1?"planet moon":"planet sun"}></motion.div>
      <motion.div style={{x:yBg}} className="stars"></motion.div>
    </div>
  )
}

export default Parallax