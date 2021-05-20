import React, { useState } from 'react';
import PutDish from '../Dish/PutDish';
import store from '../../Redux/store';

const DishDisplay = ({admin}) => {
    const [data, setData] = useState(store.getState().dishes);
    store.subscribe(() => {
        setData(store.getState().dishes);
    });
    

    return (
        <div className="container p-2">
            <table className="container my-3">
                <tr className="row text-center">
                    <th className="col alert-info m-auto">Name</th>
                    <th className="col alert-warning d-none d-lg-block m-auto">Protein</th>
                    <th className="col alert-success d-none d-lg-block m-auto">Carb</th>
                    <th className="col alert-danger d-none d-lg-block m-auto">Fat</th>
                    <th className="col alert-secondary m-auto">Calorie</th>
                    {admin && 
                        <th className="col alert-warning m-auto">Actions</th>
                    }
                </tr>
                <hr className="m-0" />
                {data && data.map((obj, i) => {
                    return <PutDish obj={obj} key={i} admin={admin} />        
                })}
            </table>
        </div>
    )
}

export default DishDisplay;