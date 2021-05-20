
const deleteDish = (obj) => {
    return {
        type:'DELETE_DISH',
        payload: obj
    }
}

export default deleteDish;