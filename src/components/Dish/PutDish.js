import React, { useState } from 'react';
import {motion} from 'framer-motion';
import {useDispatch} from 'react-redux';
import deleteDish from '../../Redux/Actions/deleteDish'
import addDish from '../../Redux/Actions/addDish'
import { Button, Modal, ModalBody} from 'reactstrap';

const PutDish = ({obj, index, admin}) => {
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteDish(obj.id));
    }

    const [modal,setModal] = useState(false);
    const toggle = () => setModal(!modal); 

    const [name, setName] = useState(obj.name);
    const [proteins, setProtein] = useState(obj.protein);
    const [carbs, setCarbs] = useState(obj.carb);
    const [fats, setFat] = useState(obj.fat);
    const [calories, setCalorie] = useState(obj.calorie);
    
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
        var OBJ = {
            id: obj.id,
            name: name,
            protein: proteins,
            carb: carbs,
            fat: fats,
            calorie: calories
        }
        dispatch(deleteDish(OBJ.id));
        dispatch(addDish(OBJ));
        toggle();
    }

    return (
        <motion.tr className="row text-center"
            whileHover={{scale: 1.02}}
        >
            {/* <td className="col">{(index + 1) + "."}</td> */}
            <td className="col alert-info m-auto">{obj.name}</td>
            <td className="col alert-warning d-none d-lg-block m-auto">{obj.protein}</td>
            <td className="col alert-success d-none d-lg-block m-auto">{obj.carb}</td>
            <td className="col alert-danger d-none d-lg-block m-auto">{obj.fat}</td>
            <td className="col alert-secondary m-auto">{obj.calorie}</td>
            {admin &&
            <td className="col alert-warning m-auto">
                <div className="btn-group">
                    <motion.button onClick={toggle} className="btn btn-sm btn-warning"
                        whileHover={{scale: 1.02}}
                        whileTap={{scale: 0.9}}  
                    >Edit</motion.button>
                    <motion.button onClick={handleDelete} className="btn btn-sm btn-danger"
                        whileHover={{scale: 1.02}}
                        whileTap={{scale: 0.9}}  
                    >delete</motion.button>
                <div>
                    
                </div>
                    <Modal isOpen={modal} toggle={toggle} className="container">
                        <ModalBody>
                            <h2 className="display-6">Update Dish</h2>
                            <hr/>
                            <form className="row">
                                <div className="row col-12 m-0 mb-3">
                                    <label for="dishName" className="form-label col-lg-4 col-12 m-auto">Dish Name</label>
                                    <div className="col-lg-8 col-12 p-0">
                                        <input type="text" 
                                            className="form-control" 
                                            id="dishName" 
                                            value = {name}
                                            onChange = {handleName}      
                                        />
                                    </div>
                                </div>
                                <div className="col-12 row m-0 mb-3">
                                    <label for="proteinInput" className="form-label col-lg-4 col-12 m-auto">Proteins</label>
                                    <div className="col-lg-8 col-12 p-0">
                                        <input type="text" 
                                            className="form-control" 
                                            id="proteinInput" 
                                            placeholder = "0"
                                            value={proteins}
                                            onChange={handleProtein}
                                            />
                                    </div>
                                </div>
                                <div className="col-12 row m-0 mb-3">
                                    <label for="carbInput" className="form-label col-lg-4 col-12 m-auto">Carbs</label>
                                    <div className="col-lg-8 col-12 p-0">
                                        <input type="text" 
                                            className="form-control" 
                                            id="carbInput" 
                                            placeholder = "0"
                                            value={carbs}
                                            onChange={handleCarbs}    
                                            />
                                    </div>
                                </div>
                                <div className="col-12 row m-0 mb-3">
                                    <label for="fatsInput" className="form-label col-lg-4 col-12 m-auto">Fats</label>
                                    <div className="col-lg-8 col-12 p-0">
                                        <input type="text" 
                                            className="form-control" 
                                            id="fatsInput" 
                                            placeholder = "0"
                                            value={fats}
                                            onChange={handleFats}    
                                            />
                                    </div>
                                </div>
                                <div className=" col-12 row m-0 mb-3">
                                    <label for="caloriecalc" className="form-label col-lg-4 col-12 m-auto">Calories</label>
                                    <div className="col-lg-8 col-12 p-0">
                                        <input type="text"
                                            className="form-control" 
                                            id="caloriecalc" 
                                            placeholder = "0"
                                            value={calories} 
                                            disabled
                                        />
                                    </div>
                                </div>
                            </form>
                            <Button color="success" onClick={handleSubmit}>Update</Button>{' '}
                            <Button color="secondary" onClick={toggle}>Cancel</Button>
                        </ModalBody>
                    </Modal>
                </div>
            </td>}
        </motion.tr>
    )
}

export default PutDish;