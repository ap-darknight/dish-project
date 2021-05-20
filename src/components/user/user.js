import React, { useState } from 'react';
import DishDisplay from '../Dish/DishDisplay';
import user_back from '../../assets/img/user_back.jpg'
import store from '../../Redux/store';
import PutDish from '../Dish/PutDish';

const User = () => {
    const [data, setData] = useState('');
    const [display, setDisplay] = useState('d-none');
    var [VectorData,setVectorData] = useState([]);
    
    const handleData = (e) => {
        e.preventDefault();
        setData(e.target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        // const pattern = new RegExp(data, 'gi');
        const vec = store.getState().dishes.filter(dish => dish.name.toLowerCase().includes(data.toLowerCase()));
        
        setVectorData(vec); 
        setDisplay('d-block');
    }

    const handleDisplay = () => setDisplay('d-none')

    return (
        <div className="container-fluid p-0 min-vh-100"
            style={{
                backgroundImage: `url(${user_back})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
        >
            <div className="container-fluid p-3"
                style={{
                    backgroundColor: "#42f5b9"
                }}
            >
                <div className="container p-0 row mx-auto">
                    <h1 className="col-4 my-auto">DISH HANDLER</h1>
                    <div className="col-8 ms-auto">    
                        <form>
                            <div class="row">
                                <div class="col-6 ms-auto ">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text">@</div>
                                        </div>
                                        <input type="text" value={data} onChange={handleData} class="form-control" id="inlineFormInputGroup" placeholder="Search Dish" />
                                    </div>
                                </div>
                                <div class="col-auto p-0">
                                <button type="submit" onClick={handleSearch} class="btn btn-warning mb-2"><i class="fas fa-search m-auto"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <hr className="m-0" />
            <div className="container">
                <DishDisplay admin={false} />
            </div>
            <div className = {"container border rounded p-4 " + display}
                style={{backgroundColor: "#42f5b9"}}
            >   
                <div className="container-fluid mx-auto m-2 p-0 row">
                    <h1 className="col-8 my-auto">Search Results</h1>
                    <button className="btn col-2 ms-auto btn-primary" onClick={handleDisplay}> hide </button> 
                </div>
                <hr/>
                <table className="container my-3">
                    <tr className="row text-center">
                        <th className="col alert-info m-auto">Name</th>
                        <th className="col alert-warning d-none d-lg-block m-auto">Protein</th>
                        <th className="col alert-success d-none d-lg-block m-auto">Carb</th>
                        <th className="col alert-danger d-none d-lg-block m-auto">Fat</th>
                        <th className="col alert-secondary m-auto">Calorie</th>
                    </tr>
                    <hr className="m-0" />
                    {VectorData.map((obj, i) => {
                        return <PutDish obj={obj} index={i} admin={false} />
                    })}
                </table>
            </div>
        </div>
    )
}

export default User;