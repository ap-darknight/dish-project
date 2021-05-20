import React, { useRef } from 'react';
import {motion, useCycle} from 'framer-motion';
import {useDimensions} from './useDimensions';
import { MenuToggle } from './MenuToggle';
import './styles.css'
import { Navigation } from './Navigation';

const sidebar = {
    open: (height=1000) => ({
        clipPath: `circle(${height*2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: `circle(30px at 40px 40px)`,
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const Sidebar = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);    
    const {height} = useDimensions(containerRef);

    return (
        <div>
            <motion.nav
                style={{zIndex: 2, fontSize: "2em"}}
                initial = {false}
                animate = {isOpen? "open":"closed"}
                custom = {height}
                ref={containerRef}    
            >
                <motion.div className="background" variants={sidebar} />
                <Navigation display={isOpen} />
                <MenuToggle toggle={()=>toggleOpen()} />
            </motion.nav>    
        </div>
    );
}

export default Sidebar;