import './Sidebar.scss'
import BarButton from './BarButton'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Sidebar = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <BarButton setOpen={setOpen} />
            <motion.div className='bigBar' initial={{ opacity: 0 }} animate={open ? { opacity: 1 } : { opacity: 0 }}>
                <div>

                </div>
            </motion.div>
        </>
    )
}

export default Sidebar