import { useRef } from 'react'
import './Portfolio.scss'
import { useScroll, motion, useSpring, useTransform } from 'framer-motion'

const item = [
    {
        id: 1,
        title: "React.js commerce",
        img: "https://images.pexels.com/photos/265946/pexels-photo-265946.jpeg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut aliquid tempora molestiae quos? Doloremque deserunt consequatur repellat porro ea molestiae fugit, praesentium in? Veniam, quas recusandae! Rem vel veritatis dolores!"
    }, {
        id: 2,
        title: "Next.js commerce",
        img: "https://images.pexels.com/photos/1999463/pexels-photo-1999463.jpeg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut aliquid tempora molestiae quos? Doloremque deserunt consequatur repellat porro ea molestiae fugit, praesentium in? Veniam, quas recusandae! Rem vel veritatis dolores!"
    }, {
        id: 3,
        title: "Vanilla JS commerce",
        img: "https://images.pexels.com/photos/34046635/pexels-photo-34046635.jpeg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut aliquid tempora molestiae quos? Doloremque deserunt consequatur repellat porro ea molestiae fugit, praesentium in? Veniam, quas recusandae! Rem vel veritatis dolores!"
    }, {
        id: 4,
        title: "Music App",
        img: "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut aliquid tempora molestiae quos? Doloremque deserunt consequatur repellat porro ea molestiae fugit, praesentium in? Veniam, quas recusandae! Rem vel veritatis dolores!"
    },
]

const Single = ({ item }) => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
    })
    const y = useTransform(scrollYProgress, [0, 1], [-100, 100])
    return (
        <section>
            <div className="containe">
                <div className="wrapper">
                    <div className="imgContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className='textContainer' style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    })
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,

    })

    return (
        <div id='Portfolio' className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className='progressBar'></motion.div>
            </div>
            {item.map(item => <Single key={item.id} item={item} />)}

        </div>
    )
}

export default Portfolio