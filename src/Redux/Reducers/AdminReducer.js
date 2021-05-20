
const AdminReducer = (state, action) => {
    switch(action.type){
        case 'DELETE_DISH':
            return {
                ...state,
                dishes: state.dishes.filter(dish => (dish.id !== action.payload))
            }

        case 'ADD_DISH': 
            return {
                ...state,
                dishes: [...state.dishes, action.payload]
            }

        case 'EDIT_DISH':
            return {
                ...state,
                dishes: state.dishes.map((dish) => 
                    (dish.id == action.payload.id) ? {...dish, 
                        name: action.payload.name, 
                        protein: action.payload.protein, 
                        carb: action.payload.carb, 
                        fat: action.payload.fat, 
                        calorie: action.payload.calorie
                    } : dish
                )
            }
            
        default: 
            return state
    }
}

export default AdminReducer;

// const addDish = (obj) => {
//     return {
//         type: 'ADD_DISH',
//         payload: { id: uuid(), ...obj}
//     }
// }