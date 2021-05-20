import React, { useState } from 'react';
import {motion} from 'framer-motion';
import { useDispatch} from 'react-redux';
import addDish from '../../Redux/Actions/addDish';
import {v4 as uuid} from 'uuid';


const DishAdder  = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [proteins, setProtein] = useState(0);
    const [carbs, setCarbs] = useState(0);
    const [fats, setFat] = useState(0);
    const [calories, setCalorie] = useState(0);
    
    const handleName = (e) => {
        setName(e.target.value)
        e.preventDefault();
    }
    const handleProtein = (e) => {
        let diff = e.target.value - proteins;
        setProtein(e.target.value)
        setCalorie(calories + 4*diff);
        e.preventDefault();
    }
    const handleCarbs = (e) => {
        let diff = e.target.value - carbs;
        setCarbs(e.target.value)
        setCalorie(calories + 4*diff);
        e.preventDefault();
    }
    const handleFats = (e) => {
        let diff = e.target.value - fats;
        setFat(e.target.value)
        setCalorie(calories + 9*diff);
        e.preventDefault();
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        var obj = {
            id: uuid(name),
            name: e.target.dishName.value,
            protein: e.target.proteinInput.value,
            carb: e.target.carbInput.value,
            fat: e.target.fatsInput.value,
            calorie: e.target.caloriecalc.value
        }
        // console.log(obj);
        dispatch(addDish(obj));
        setName('');
        setProtein(0);
        setCarbs(0);
        setFat(0);
        setCalorie(0);
    }

    return (
        <div className="container-fluid m-0 min-vh-60"
            style={{backgroundColor: "#42f5b9" }}
        >
            <div className="container ">
                <div className="card-body">
                    <div className="container d-flex flex-column text-center">
                        <h3 className="display-5">ADD A DISH</h3>
                        <h5 className="m-0">Fill in the details as asked!</h5>
                    </div>
                    <hr/>
                    <div className="container p-2">
                        <form className="row" onSubmit={handleSubmit}>
                            <motion.div className="row col-12 m-0 mb-3"
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                            >
                                <label for="dishName" className="form-label col-lg-2 col-12 m-auto">Dish Name</label>
                                <div className="col-lg-10 col-12 p-0">
                                    <input type="text" 
                                        className="form-control" 
                                        id="dishName" 
                                        value = {name}
                                        onChange = {handleName}    
                                        required  
                                    />
                                </div>
                            </motion.div>
                            <motion.div className="col-md-6 col-12 row m-0 mb-3"
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                            >
                                <label for="proteinInput" className="form-label col-lg-2 col-12 m-auto">Proteins</label>
                                <div className="col-lg-10 col-12 p-0">
                                    <input type="text" 
                                        className="form-control" 
                                        id="proteinInput" 
                                        placeholder = "0"
                                        value={proteins}
                                        onChange={handleProtein}
                                        />
                                </div>
                            </motion.div>
                            <motion.div className="col-md-6 col-12 row m-0 mb-3"
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                            >
                                <label for="carbInput" className="form-label col-lg-2 col-12 m-auto">Carbs</label>
                                <div className="col-lg-10 col-12 p-0">
                                    <input type="text" 
                                        className="form-control" 
                                        id="carbInput" 
                                        placeholder = "0"
                                        value={carbs}
                                        onChange={handleCarbs}    
                                        />
                                </div>
                            </motion.div>
                            <motion.div className="col-md-6 col-12 row m-0 mb-3"
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                            >
                                <label for="fatsInput" className="form-label col-lg-2 col-12 m-auto">Fats</label>
                                <div className="col-lg-10 col-12 p-0">
                                    <input type="text" 
                                        className="form-control" 
                                        id="fatsInput" 
                                        placeholder = "0"
                                        value={fats}
                                        onChange={handleFats}    
                                        />
                                </div>
                            </motion.div>
                            <motion.div className="col-md-6 col-12 row m-0 mb-3"
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                            >
                                <label for="caloriecalc" className="form-label col-lg-2 col-12 m-auto">Calories</label>
                                <div className="col-lg-10 col-12 p-0">
                                    <input type="text"
                                        className="form-control" 
                                        id="caloriecalc" 
                                        placeholder = "0"
                                        value={calories} 
                                        disabled
                                    />
                                </div>
                            </motion.div>
                            <motion.button
                                type='submit' 
                                className="col-3 mx-auto btn btn-primary"
                                whileHover={{scale: 1.3}}
                                whileTap={{scale: 0.9}}
                            >Submit</motion.button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DishAdder;