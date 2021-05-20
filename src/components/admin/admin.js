import React from 'react';
import {motion} from 'framer-motion';
import DishAdder from '../Dish/DishAdder';
import DishDisplay from '../Dish/DishDisplay';
import user_back from '../../assets/img/user_back.jpg'


const Admin = () => {
    return (
        <div className="container-fluid p-0 min-vh-100"
            style={{
                backgroundImage: `url(${user_back})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
        >
            <DishAdder />
            <DishDisplay admin={true}/>
        </div>
    )
}

export default Admin;