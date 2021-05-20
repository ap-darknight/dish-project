import { motion } from 'framer-motion';
import React from 'react';
import {Link} from 'react-router-dom';

const variants = {
    open: {
        transition: {staggerChildren: 0.07, delayChildren: 0.02}
    },
    closed: {
        transition: {staggerChildren: 0.05, staggerDirection: -1}
    }
};

const variants_1 = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: {stiffness: 1000, velocity: -100}
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: {stiffness: 1000}
        }
    } 
};

export const Navigation = ({display}) => (
    <div
        className={(display?"":"d-none")}
    >
        <motion.ul 
            style={{minHeight: "90%"}}
            className={"container d-flex flex-column"} variants={variants}>
            <motion.li
                className=""
                variants={variants_1}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
            >
                <Link to="/user" className="nav-link  text-dark">User</Link>
            </motion.li>
            <motion.li
                className=" "
                variants={variants_1}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
            >
                <Link to="/admin" className="nav-link text-dark">Admin</Link>
            </motion.li>
            
        </motion.ul>
    </div>
    
);
