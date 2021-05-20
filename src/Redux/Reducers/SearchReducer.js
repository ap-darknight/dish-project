import FOOD from '../../assets/data/indian_food';
const initialState = FOOD;

const SearchReducer = (state = initialState , action) => {
    switch(action.type){
        case 'SEARCH_DISH':
            return{
                ...state,
                dishes: state.dishes.filter(dish => action.payload.test(dish.name))
            }
        
        default: 
            return state
    }
}

export default SearchReducer;
