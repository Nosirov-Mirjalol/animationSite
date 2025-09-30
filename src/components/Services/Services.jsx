import './Services.scss'
import { people } from '../../assets/images'
import {motion} from 'framer-motion'

const cardData=[
    {
        title:"Branding",
        desc:"Lorem ipsum dolor sit lorem dollor adipisicing lorem adipisicing lorem adipisicing amet consectetur adipisicing elit. Ab, facere dollor?"
    },{
        title:"Branding",
        desc:"Lorem ipsum dolor sit lorem dollor adipisicing lorem adipisicing lorem adipisicing amet consectetur adipisicing elit. Ab, facere dollor?"
    },{
        title:"Branding",
        desc:"Lorem ipsum dolor sit lorem dollor adipisicing lorem adipisicing lorem adipisicing amet consectetur adipisicing elit. Ab, facere dollor?"
    },{
        title:"Branding",
        desc:"Lorem ipsum dolor sit lorem dollor adipisicing lorem adipisicing lorem adipisicing amet consectetur adipisicing elit. Ab, facere dollor?"
    },
]

const Portfolio = () => {
    return (
        <div>
            <div className='right'>
                <p>I focus on helping your brand grow <br /> and move forward</p>
                <hr />
            </div>
            <div className='bis'>
                <div>
                    <img src={people} alt="" />
                    <p><strong>Unique</strong> Ideas</p>
                </div>
                <div>
                    <p><strong>For Your</strong> Business.</p>
                    <button>WHAT WE DO?</button>
                </div>
            </div>
            <div className='card'>
                {cardData.map((item,inx)=>
                    <motion.div initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0,transition:{duration:1.5}}} key={inx}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>Go</button>
                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default Portfolio