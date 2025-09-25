import './Sidebar.scss'
import BarButton from './BarButton'
import { motion } from 'framer-motion'
import { useState } from 'react'

const liItems=[
    "Homepage",
    "Services",
    "Portfolio",
    "Contact",
    "About"
]

const Sidebar = () => {
    const [open, setOpen] = useState(false)
    const variant = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 15,
                restDelta: 2
            }
        },
        close: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                type: "spring",
                delay: 0.5,
                stiffness: 40,
                damping: 30,
            }
        }
    }
    return (
        <>
            <motion.div className={open? "bigBar" : 'initialbar'} variants={variant}  initial={"close"} animate={open ? "open" : "close"}>
                <motion.div className={open?'links':"none"} variants={variant}>
                    <ul>
                        {liItems.map(item=>
                            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} key={item}>
                                <a href={`#${item}`}>{item}</a>
                            </motion.li>
                        )}
                    </ul>
                </motion.div>
            </motion.div>
            <BarButton open={open} setOpen={setOpen} />
        </>
    )
}

export default Sidebar