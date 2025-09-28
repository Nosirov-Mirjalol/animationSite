import './Contact.scss'
import { motion } from 'framer-motion'

const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        Transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}

const Contact = () => {
    return (
        <motion.div variants={variants} initial="initial" whileInView="animate" className='contact'>
            <motion.div variants={variants} className="textContainer">
                <motion.h1 variants={variants}>Let's work <br /> together</motion.h1>
                <motion.div variants={variants} className="item">
                    <h2>Gmail</h2>
                    <span>hello@react.dev</span>
                </motion.div>
                <motion.div variants={variants} className="item">
                    <h2>Address</h2>
                    <span>Hello street New York</span>
                </motion.div>
                <motion.div variants={variants} className="item">
                    <h2>Phone</h2>
                    <span>+1 234 5678</span>
                </motion.div>
            </motion.div>
            <div className="formContainer">
                <form>
                    <input type="text" placeholder='Name' required />
                    <input type="email" placeholder='Email' required />
                    <textarea rows={8} placeholder='Massage' />
                    <button>Submit</button>
                </form>
            </div>
        </motion.div>
    )
}

export default Contact